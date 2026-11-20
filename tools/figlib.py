# Bibliothèque commune aux générateurs de schémas SVG (gen_ch01_figs.py, gen_ch23_figs.py).
# Même esprit que gen_fet_figs.py : classe F (text/line/rect/dot/gnd/resv/resh/vcc/axes...) + quelques symboles en plus
# (diode, Zener, condensateur, source, ampli-op). Couleurs uniquement via les variables CSS du site (classes du bloc CSS).
import math, os, re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
CSS = os.path.join(ROOT, 'css', 'style.css')

TAILLE = {'t': 14, 'ti': 13.5, 'tiny': 11.5, 'tn2': 15, 'tm': 14}
LARG = {'t': 0.6, 'ti': 0.6, 'tiny': 0.6, 'tn2': 0.62, 'tm': 0.6}
ALERTES = []


def tx(s):
    """V[GS] -> indice ; e^{-t/τ} -> exposant."""
    out, ouverts, i = '', 0, 0
    for m in re.finditer(r'\[([^\]]*)\]|\^\{([^}]*)\}', s):
        out += s[i:m.start()]
        i = m.end()
        if m.group(1) is not None:
            out += '<tspan class="sb" dy="4">%s</tspan><tspan dy="-4">' % m.group(1)
        else:
            out += '<tspan class="sb" dy="-6">%s</tspan><tspan dy="6">' % m.group(2)
        ouverts += 1
    out += s[i:]
    return out + '</tspan>' * ouverts


def larg(s, cls):
    brut = re.sub(r'\[([^\]]*)\]', lambda m: m.group(1), s)
    brut = re.sub(r'\^\{([^}]*)\}', lambda m: m.group(1), brut)
    n = 0.0
    for c in brut:
        n += 0.5 if c in ' ' else 1.0
    # les indices sont plus petits : on retire un peu
    sub = sum(len(m) for m in re.findall(r'\[([^\]]*)\]', s)) + sum(len(m) for m in re.findall(r'\^\{([^}]*)\}', s))
    n -= 0.3 * sub
    return n * LARG.get(cls, 0.6) * TAILLE.get(cls, 14)


class F:
    def __init__(self, w, h, nom=''):
        self.w, self.h, self.p, self.nom = w, h, [], nom

    def add(self, s): self.p.append(s)

    def text(self, x, y, s, cls='t', anchor='start'):
        L = larg(s, cls)
        a, b = {'start': (x, x + L), 'end': (x - L, x), 'middle': (x - L / 2, x + L / 2)}[anchor]
        if a < 1 or b > self.w - 1:
            ALERTES.append('%s : texte hors cadre « %s » (%.0f..%.0f sur %d)' % (self.nom, s, a, b, self.w))
        s2 = re.sub(r'(?<= ) ', ' ', s)   # espaces multiples conservés
        self.add('<text class="%s" x="%s" y="%s" text-anchor="%s">%s</text>' % (cls, round(x, 1), round(y, 1), anchor, tx(s2)))

    def line(self, *pts, cls='w', dash=False, arrow=False, mk='fa'):
        d = 'M%s %s ' % pts[0] + ' '.join('L%s %s' % p for p in pts[1:])
        self.add('<path class="%s%s" d="%s"%s/>' % (cls, ' dsh' if dash else '', d, ' marker-end="url(#%s)"' % mk if arrow else ''))

    def cur(self, *pts):
        """flèche de courant (accent)"""
        self.line(*pts, cls='cu', arrow=True, mk='fc')

    def path(self, d, cls='cv'): self.add('<path class="%s" d="%s"/>' % (cls, d))

    def rect(self, x, y, w, h, cls='fr', extra=''):
        self.add('<rect class="%s" x="%s" y="%s" width="%s" height="%s" %s/>' % (cls, x, y, w, h, extra))

    def circ(self, x, y, r, cls='nd'): self.add('<circle class="%s" cx="%s" cy="%s" r="%s"/>' % (cls, round(x, 1), round(y, 1), r))

    def dot(self, x, y): self.add('<circle class="dot" cx="%s" cy="%s" r="3.5"/>' % (x, y))

    def gnd(self, x, y):
        self.line((x - 10, y), (x + 10, y)); self.line((x - 6, y + 5), (x + 6, y + 5)); self.line((x - 2, y + 10), (x + 2, y + 10))

    def resv(self, x, y1, y2, lab, side='r'):
        m = (y1 + y2) / 2
        self.line((x, y1), (x, m - 20)); self.line((x, m + 20), (x, y2))
        self.rect(x - 7, m - 20, 14, 40, 'res')
        if lab:
            if side == 'r': self.text(x + 14, m + 5, lab)
            else: self.text(x - 14, m + 5, lab, anchor='end')

    def resh(self, x1, x2, y, lab, below=False):
        m = (x1 + x2) / 2
        self.line((x1, y), (m - 20, y)); self.line((m + 20, y), (x2, y))
        self.rect(m - 20, y - 7, 40, 14, 'res')
        if lab: self.text(m, y + (28 if below else -12), lab, anchor='middle')

    def vcc(self, x, y, lab):
        self.line((x - 10, y), (x + 10, y)); self.text(x, y - 8, lab, 'tn2', 'middle')

    def src(self, x, y, lab='', r=20, up=False, lside='r'):
        """source de courant : cercle + flèche"""
        self.add('<circle class="src" cx="%s" cy="%s" r="%s"/>' % (x, y, r))
        a, b = (y + 12, y - 12) if up else (y - 12, y + 12)
        self.line((x, a), (x, b), arrow=True)
        if lab:
            if lside == 'r': self.text(x + r + 8, y + 5, lab)
            else: self.text(x - r - 8, y + 5, lab, anchor='end')

    def vsrc(self, x, y, lab='', r=20, lside='l'):
        """source de tension continue : cercle avec + en haut, − en bas"""
        self.add('<circle class="src" cx="%s" cy="%s" r="%s"/>' % (x, y, r))
        self.text(x, y - 5, '+', 't', 'middle'); self.text(x, y + 15, '−', 't', 'middle')
        if lab:
            if lside == 'r': self.text(x + r + 8, y + 5, lab)
            else: self.text(x - r - 8, y + 5, lab, anchor='end')

    def acsrc(self, x, y, lab='', r=20, lside='r'):
        self.add('<circle class="src" cx="%s" cy="%s" r="%s"/>' % (x, y, r))
        self.add('<path class="w" d="M%s %s C%s %s %s %s %s %s S%s %s %s %s"/>' % (x - 10, y, x - 6, y - 12, x - 3, y - 12, x, y, x + 6, y + 12, x + 10, y))
        if lab:
            if lside == 'r': self.text(x + r + 8, y + 5, lab)
            else: self.text(x - r - 8, y + 5, lab, anchor='end')

    def diode(self, x, y, rot=0, etat='', zener=False):
        """diode centrée en (x,y), anode à gauche (rot=0) ; rot en degrés (sens horaire). etat : '' | 'on' | 'off'"""
        c = {'': 'dio', 'on': 'dioh', 'off': 'dio dim'}[etat]
        g = '<g transform="translate(%s %s) rotate(%s)"%s>' % (round(x, 1), round(y, 1), rot, ' opacity=".4"' if etat == 'off' else '')
        g += '<path class="%s" d="M-10 -11 L-10 11 L10 0 Z"/>' % ('dioh' if etat == 'on' else 'dio')
        if zener: g += '<path class="%s" d="M15 -14 L10 -11 L10 11 L5 14"/>' % ('cu' if etat == 'on' else 'w')
        else: g += '<path class="%s" d="M10 -11 V11"/>' % ('cu' if etat == 'on' else 'w')
        self.add(g + '</g>')

    def cap(self, x, y, rot=0, hauteur=26):
        """condensateur centré en (x,y), courant horizontal (rot=0) ou vertical (rot=90) ; fils à ±4"""
        h = hauteur / 2
        self.add('<g transform="translate(%s %s) rotate(%s)"><path class="w" d="M-4 %s V%s M4 %s V%s"/></g>' % (x, y, rot, -h, h, -h, h))

    def batt(self, x, y, rot=0):
        """pile : grande plaque (+) à gauche, petite (−) à droite quand rot=0"""
        self.add('<g transform="translate(%s %s) rotate(%s)"><path class="w" d="M-4 -13 V13"/><path class="w" d="M4 -7 V7"/></g>' % (x, y, rot))

    def opamp(self, x, y, h=26, w=50, signes=True, inv_haut=True):
        """ampli-op : entrées à x ; sortie en (x+w, y). − en haut si inv_haut."""
        self.add('<path class="dio" d="M%s %s L%s %s L%s %s Z"/>' % (x, y - h, x, y + h, x + w, y))
        if signes:
            hi, lo = ('−', '+') if inv_haut else ('+', '−')
            self.text(x + 5, y - h / 2 + 5, hi, 't'); self.text(x + 5, y + h / 2 + 5, lo, 't')

    def axes(self, x0, y0, x1, y1, xl, yl):
        self.line((x0, y0), (x1, y0), cls='ax', arrow=True); self.line((x0, y0), (x0, y1), cls='ax', arrow=True)
        if xl: self.text(x1 + 4, y0 + 18, xl, anchor='end')
        if yl: self.text(x0 + 8, y1 + 6, yl)

    def svg(self, prefixe, nom, aria, caption):
        defs = ('<defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fa"/></marker>'
                '<marker id="fc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4.6" markerHeight="4.6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fc"/></marker></defs>')
        return ('<!-- %s-fig:%s -->' % (prefixe, nom) +
                '<figure class="s4-fig fet-fig"><svg viewBox="0 0 %d %d" style="max-width:%dpx" role="img" aria-label="%s">' % (self.w, self.h, self.w, aria) +
                defs + ''.join(self.p) + '</svg><figcaption>%s</figcaption></figure>' % re.sub(r'\^\{([^}]*)\}', r'<sup>\1</sup>', re.sub(r'\[([^\]]*)\]', r'<sub>\1</sub>', caption)))


# ------------------------------------------------------------ CSS
MARQ_DEB = '/* schémas des fiches Ch0-Ch3 */'
MARQ_FIN = '/* fin schémas des fiches Ch0-Ch3 */'
MARQ_FET = '/* schémas de la fiche FET */'

CSS_TXT = MARQ_DEB + '''
.fet-fig .cu{stroke:var(--accent);stroke-width:2.4;fill:none}
.fet-fig .fc{fill:var(--accent)}
.fet-fig .dio{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig .dioh{fill:var(--accent-soft);stroke:var(--accent);stroke-width:2.4}
.fet-fig .tm{fill:var(--muted);font-family:var(--f-mono);font-size:14px}
.fet-fig .tw{fill:var(--bad);font-family:var(--f-mono);font-size:13.5px;font-weight:600}
.fet-fig .bnv{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.6}
.fet-fig .bnc{fill:var(--surface2);stroke:var(--accent);stroke-width:1.6}
.fet-fig .bnh{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.6;opacity:.55}
.fet-fig .el{fill:var(--accent)}
.fet-fig .hole{fill:var(--surface);stroke:var(--accent2);stroke-width:2.2}
.fet-fig .atm{fill:var(--surface);stroke:var(--muted);stroke-width:1.8}
.fet-fig .atd{fill:var(--amber-soft);stroke:var(--accent2);stroke-width:2}
.fet-fig .bond{stroke:var(--muted);stroke-width:2.4;fill:none}
.fet-fig .mut{stroke:var(--muted);stroke-width:1.6;fill:none}
.fet-fig .cv2{stroke:var(--accent2);stroke-width:2.6;fill:none}
.fet-fig .cvm{stroke:var(--muted);stroke-width:1.8;fill:none}
.fet-fig .pz{fill:var(--amber-soft);stroke:var(--accent2);stroke-width:1.5}
.fet-fig .nz{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.5}
.fet-fig .hl{fill:var(--accent);opacity:.14;stroke:none}
.fet-fig .hl2{fill:var(--accent2);opacity:.16;stroke:none}
.fet-fig .bad{stroke:var(--bad);stroke-width:2.2;fill:none}
''' + MARQ_FIN + '\n'


def patch_css():
    css = open(CSS, encoding='utf-8').read()
    # on retire l'ancien bloc s'il existe
    if MARQ_DEB in css:
        i = css.index(MARQ_DEB)
        j = css.index(MARQ_FIN, i) + len(MARQ_FIN)
        css = css[:i].rstrip('\n') + '\n' + css[j:].lstrip('\n')
    # on insère avant le bloc FET (gen_fet_figs.py réécrit tout ce qui suit son marqueur)
    if '\n' + MARQ_FET in css:
        k = css.index('\n' + MARQ_FET)
        css = css[:k] + '\n' + CSS_TXT + css[k:]
    else:
        css = css.rstrip('\n') + '\n\n' + CSS_TXT
    open(CSS, 'w', encoding='utf-8').write(css)


# ------------------------------------------------------------ insertion dans une page
class Page:
    def __init__(self, nom, prefixe):
        self.chemin = os.path.join(ROOT, nom)
        self.prefixe = prefixe
        self.s = open(self.chemin, encoding='utf-8').read()
        self.s = re.sub(r'<!-- %s-fig:[A-Za-z0-9_]+ --><figure class="s4-fig fet-fig">.*?</figure>\n?' % prefixe, '', self.s, flags=re.S)
        self.s = re.sub(r'<div class="fet-fig-grid">\s*</div>\n?', '', self.s)

    def apres(self, ancre, html):
        assert self.s.count(ancre) >= 1, ancre
        i = self.s.index(ancre) + len(ancre)
        self.s = self.s[:i] + '\n' + html + self.s[i:]

    def avant(self, ancre, html):
        assert self.s.count(ancre) >= 1, ancre
        i = self.s.index(ancre)
        self.s = self.s[:i] + html + '\n' + self.s[i:]

    def ecrire(self):
        open(self.chemin, 'w', encoding='utf-8').write(self.s)
        n = len(re.findall(r'<!-- %s-fig:' % self.prefixe, self.s))
        print('ok :', n, 'figures dans', os.path.basename(self.chemin))
        for a in ALERTES: print('ALERTE', a)
