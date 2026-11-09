# Génère js/data-cm45.js : QCM de révision CM4 (BJT en statique) et CM5 (BJT dynamique),
# avec schémas SVG et valeurs numériques calculées ici (aucune valeur tapée à la main).
import json, math

import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'data-cm45.js')

# ---------------------------------------------------------------- formatage
def fr(x, d=3):
    """nombre -> chaîne française avec d chiffres significatifs, sans notation sci."""
    if x == 0:
        return '0'
    neg = x < 0
    x = abs(x)
    e = math.floor(math.log10(x))
    dec = max(0, d - 1 - e)
    s = ('%.' + str(dec) + 'f') % round(x, dec)
    if '.' in s:
        s = s.rstrip('0').rstrip('.')
    ent, _, fra = s.partition('.')
    if len(ent) > 3:
        g = ''
        while len(ent) > 3:
            g = '\\,' + ent[-3:] + g
            ent = ent[:-3]
        ent = ent + g
    s = ent + ('{,}' + fra if fra else '')
    return ('-' if neg else '') + s

def m(x, unit, d=3):
    return r'\(%s\ \mathrm{%s}\)' % (fr(x, d), unit)

# ---------------------------------------------------------------- SVG
class S:
    def __init__(self, w=470, h=300):
        self.w, self.h, self.p = w, h, []
    def wire(self, *pts):
        d = 'M%d %d ' % pts[0] + ' '.join('L%d %d' % p for p in pts[1:])
        self.p.append('<path class="w" d="%s"/>' % d)
    def text(self, x, y, s, cls='t', anchor='start'):
        self.p.append('<text class="%s" x="%d" y="%d" text-anchor="%s">%s</text>' % (cls, x, y, anchor, s))
    def dot(self, x, y):
        self.p.append('<circle class="dot" cx="%d" cy="%d" r="3.5"/>' % (x, y))
    def resv(self, x, y1, y2, lab, side='r'):
        mid = (y1 + y2) // 2
        self.wire((x, y1), (x, mid - 20)); self.wire((x, mid + 20), (x, y2))
        self.p.append('<rect class="res" x="%d" y="%d" width="14" height="40"/>' % (x - 7, mid - 20))
        if side == 'r':
            self.text(x + 13, mid + 5, lab)
        else:
            self.text(x - 13, mid + 5, lab, anchor='end')
    def resh(self, x1, x2, y, lab):
        mid = (x1 + x2) // 2
        self.wire((x1, y), (mid - 20, y)); self.wire((mid + 20, y), (x2, y))
        self.p.append('<rect class="res" x="%d" y="%d" width="40" height="14"/>' % (mid - 20, y - 7))
        self.text(mid, y - 13, lab, anchor='middle')
    def caph(self, x1, x2, y, lab):
        mid = (x1 + x2) // 2
        self.wire((x1, y), (mid - 4, y)); self.wire((mid + 4, y), (x2, y))
        self.wire((mid - 4, y - 11), (mid - 4, y + 11)); self.wire((mid + 4, y - 11), (mid + 4, y + 11))
        self.text(mid, y - 16, lab, anchor='middle')
    def capv(self, x, y1, y2, lab):
        mid = (y1 + y2) // 2
        self.wire((x, y1), (x, mid - 4)); self.wire((x, mid + 4), (x, y2))
        self.wire((x - 11, mid - 4), (x + 11, mid - 4)); self.wire((x - 11, mid + 4), (x + 11, mid + 4))
        self.text(x + 15, mid + 5, lab)
    def gnd(self, x, y):
        self.wire((x - 10, y), (x + 10, y)); self.wire((x - 6, y + 5), (x + 6, y + 5)); self.wire((x - 2, y + 10), (x + 2, y + 10))
    def vcc(self, x, y, lab):
        self.wire((x - 9, y), (x + 9, y))
        self.text(x, y - 7, lab, 'tn2', 'middle')
    def acsrc(self, x, y, lab):
        self.p.append('<circle class="src" cx="%d" cy="%d" r="15"/>' % (x, y))
        self.p.append('<path class="w" d="M%d %d q5 -9 10 0 t10 0"/>' % (x - 10, y))
        self.text(x - 20, y + 5, lab, anchor='end')
    def npn(self, x, y):
        # base (x-22,y) ; collecteur (x+18,y-32) ; émetteur (x+18,y+32)
        self.wire((x - 22, y), (x, y)); self.wire((x, y - 16), (x, y + 16))
        self.wire((x, y - 7), (x + 18, y - 20), (x + 18, y - 32))
        self.wire((x, y + 7), (x + 18, y + 20), (x + 18, y + 32))
        self.p.append('<path class="dot" d="M%d %d l-9 -1 l5 -7z"/>' % (x + 16, y + 19))
        self.p.append('<circle class="tr" cx="%d" cy="%d" r="24"/>' % (x + 6, y))
    def njfet(self, x, y):
        self.wire((x - 24, y), (x, y)); self.wire((x, y - 18), (x, y + 18))
        self.wire((x, y - 12), (x + 18, y - 12), (x + 18, y - 32))
        self.wire((x, y + 12), (x + 18, y + 12), (x + 18, y + 32))
        self.p.append('<path class="dot" d="M%d %d l-9 -5 v10z"/>' % (x - 1, y))
        self.p.append('<circle class="tr" cx="%d" cy="%d" r="24"/>' % (x + 6, y))
    def nmos(self, x, y):
        self.wire((x - 24, y + 12), (x - 7, y + 12)); self.wire((x - 7, y - 14), (x - 7, y + 14))
        for a, b in ((-18, -8), (-4, 4), (8, 18)):
            self.wire((x, y + a), (x, y + b))
        self.wire((x, y - 12), (x + 18, y - 12), (x + 18, y - 32))
        self.wire((x, y + 12), (x + 18, y + 12), (x + 18, y + 32))
        self.wire((x, y), (x + 18, y)); self.p.append('<path class="dot" d="M%d %d l9 -5 v10z"/>' % (x + 1, y))
        self.p.append('<circle class="tr" cx="%d" cy="%d" r="24"/>' % (x + 6, y))
    def svg(self, aria):
        return ('<figure class="s4-fig cm-fig"><svg viewBox="0 0 %d %d" role="img" aria-label="%s">' % (self.w, self.h, aria)
                + ''.join(self.p) + '</svg></figure>')

def L(sym, sub='', val=''):
    s = sym + ('<tspan class="sb" dy="4">%s</tspan><tspan dy="-4"> </tspan>' % sub if sub else ' ')
    return s + val

def fig_ec_pont(v, ce=True, rl=True):
    s = S(590, 310)
    s.vcc(170, 26, 'V<tspan class="sb" dy="4">CC</tspan><tspan dy="-4"> = ' + v['VCC'] + '</tspan>')
    s.wire((170, 26), (300, 26)); s.dot(250, 26)
    s.resv(170, 26, 150, L('R', '1', '= ' + v['R1']), 'l')
    s.resv(170, 150, 268, L('R', '2', '= ' + v['R2']), 'l'); s.gnd(170, 268)
    s.dot(170, 150)
    s.npn(238, 150); s.wire((170, 150), (216, 150))
    s.resv(256, 26, 118, L('R', 'C', '= ' + v['RC']))
    s.resv(256, 182, 268, L('R', 'E', '= ' + v['RE'])); s.gnd(256, 268)
    if ce:
        s.dot(256, 196); s.wire((256, 196), (370, 196)); s.capv(370, 196, 268, L('C', 'E')); s.gnd(370, 268)
    s.dot(256, 100); s.wire((256, 100), (420, 100)); s.caph(420, 470, 100, L('C', '2'))
    if rl:
        s.wire((470, 100), (500, 100)); s.resv(500, 100, 268, L('R', 'L', '= ' + v['RL'])); s.gnd(500, 268)
    else:
        s.wire((470, 100), (500, 100)); s.text(506, 105, 'v<tspan class="sb" dy="4">out</tspan>')
    s.caph(80, 140, 150, L('C', '1')); s.wire((140, 150), (170, 150))
    s.wire((50, 150), (80, 150)); s.wire((50, 150), (50, 196)); s.acsrc(50, 211, 'v<tspan class="sb" dy="4">in</tspan>'); s.wire((50, 226), (50, 268)); s.gnd(50, 268)
    return s.svg('Émetteur commun polarisé par pont diviseur')

def fig_ec_base(v):
    s = S(530, 300)
    s.vcc(170, 26, 'V<tspan class="sb" dy="4">CC</tspan><tspan dy="-4"> = ' + v['VCC'] + '</tspan>')
    s.wire((170, 26), (270, 26))
    s.resv(170, 26, 150, L('R', 'B', '= ' + v['RB']), 'l')
    s.npn(238, 150); s.wire((170, 150), (216, 150)); s.dot(170, 150)
    s.resv(256, 26, 118, L('R', 'C', '= ' + v['RC']))
    s.wire((256, 182), (256, 262)); s.gnd(256, 262)
    s.dot(256, 100); s.wire((256, 100), (330, 100)); s.caph(330, 390, 100, L('C', '2'))
    s.wire((390, 100), (420, 100)); s.resv(420, 100, 262, L('R', 'L', '= ' + v['RL'])); s.gnd(420, 262)
    s.caph(80, 140, 150, L('C', '1')); s.wire((140, 150), (170, 150))
    s.wire((50, 150), (80, 150)); s.wire((50, 150), (50, 190)); s.acsrc(50, 205, 'v<tspan class="sb" dy="4">in</tspan>'); s.wire((50, 220), (50, 262)); s.gnd(50, 262)
    return s.svg('Émetteur commun polarisé par la base')

def fig_jfet_auto(v, cs=False, rl=None, mos=False):
    s = S(600, 300)
    s.vcc(268, 26, 'V<tspan class="sb" dy="4">DD</tspan><tspan dy="-4"> = ' + v['VDD'] + '</tspan>')
    s.resv(268, 26, 118, L('R', 'D', '= ' + v['RD']))
    (s.nmos if mos else s.njfet)(250, 150)
    s.wire((180, 150 + (12 if mos else 0)), (226, 150 + (12 if mos else 0)))
    s.dot(180, 150 + (12 if mos else 0))
    s.resv(180, 150 + (12 if mos else 0), 268, L('R', 'G', '= ' + v['RG']), 'l'); s.gnd(180, 268)
    s.resv(268, 182, 268, L('R', 'S', '= ' + v['RS'])); s.gnd(268, 268)
    if cs:
        s.dot(268, 196); s.wire((268, 196), (390, 196)); s.capv(390, 196, 268, L('C', 'S')); s.gnd(390, 268)
    s.dot(268, 100); s.wire((268, 100), (430, 100)); s.caph(430, 480, 100, L('C', '2'))
    if rl:
        s.wire((480, 100), (510, 100)); s.resv(510, 100, 268, L('R', 'L', '= ' + rl)); s.gnd(510, 268)
    else:
        s.wire((480, 100), (500, 100)); s.text(506, 105, 'v<tspan class="sb" dy="4">out</tspan>')
    y = 150 + (12 if mos else 0)
    s.caph(90, 150, y, L('C', '1')); s.wire((150, y), (180, y))
    s.wire((55, y), (90, y)); s.wire((55, y), (55, 196)); s.acsrc(55, 211, 'v<tspan class="sb" dy="4">in</tspan>'); s.wire((55, 226), (55, 268)); s.gnd(55, 268)
    return s.svg('Transistor à effet de champ autopolarisé')

def fig_fet_pont(v, mos=False, cs=False):
    s = S(470, 310)
    s.vcc(170, 26, 'V<tspan class="sb" dy="4">DD</tspan><tspan dy="-4"> = ' + v['VDD'] + '</tspan>')
    s.wire((170, 26), (300, 26))
    y = 150 + (12 if mos else 0)
    s.resv(170, 26, y, L('R', '1', '= ' + v['R1']), 'l')
    s.resv(170, y, 270, L('R', '2', '= ' + v['R2']), 'l'); s.gnd(170, 270)
    s.dot(170, y)
    (s.nmos if mos else s.njfet)(240, 150); s.wire((170, y), (216, y))
    s.resv(258, 26, 118, L('R', 'D', '= ' + v['RD']))
    s.resv(258, 182, 270, L('R', 'S', '= ' + v['RS'])); s.gnd(258, 270)
    if cs:
        s.dot(258, 196); s.wire((258, 196), (380, 196)); s.capv(380, 196, 270, L('C', 'S')); s.gnd(380, 270)
    s.dot(258, 98); s.wire((258, 98), (370, 98)); s.text(376, 103, 'D')
    s.text(300, 140, 'I<tspan class="sb" dy="4">D</tspan>', 'ti')
    return s.svg('Transistor à effet de champ polarisé par pont diviseur')

def fig_drain_commun(v):
    s = S(470, 300)
    s.vcc(268, 26, 'V<tspan class="sb" dy="4">DD</tspan><tspan dy="-4"> = ' + v['VDD'] + '</tspan>')
    s.wire((268, 26), (268, 118))
    s.njfet(250, 150); s.wire((180, 150), (226, 150)); s.dot(180, 150)
    s.resv(180, 150, 268, L('R', 'G', '= ' + v['RG']), 'l'); s.gnd(180, 268)
    s.resv(268, 182, 268, L('R', 'S', '= ' + v['RS'])); s.gnd(268, 268)
    s.dot(268, 196); s.wire((268, 196), (350, 196)); s.caph(350, 410, 196, L('C', '2'))
    s.wire((410, 196), (430, 196)); s.text(436, 201, 'v<tspan class="sb" dy="4">out</tspan>')
    s.caph(90, 150, 150, L('C', '1')); s.wire((150, 150), (180, 150))
    s.wire((55, 150), (90, 150)); s.wire((55, 150), (55, 196)); s.acsrc(55, 211, 'v<tspan class="sb" dy="4">in</tspan>'); s.wire((55, 226), (55, 268)); s.gnd(55, 268)
    return s.svg('Montage drain commun (source suiveuse)')

def fig_switch(v):
    s = S(420, 280)
    s.vcc(238, 26, 'V<tspan class="sb" dy="4">DD</tspan><tspan dy="-4"> = ' + v['VDD'] + '</tspan>')
    s.resv(238, 26, 118, L('R', 'D', '= ' + v['RD']))
    s.njfet(220, 150); s.wire((238, 182), (238, 250)); s.gnd(238, 250)
    s.wire((120, 150), (196, 150)); s.text(112, 155, 'V<tspan class="sb" dy="4">in</tspan>', 't', 'end')
    s.dot(238, 100); s.wire((238, 100), (320, 100)); s.text(326, 105, 'V<tspan class="sb" dy="4">out</tspan>')
    return s.svg('JFET en commutation')

def fig_cascade(v):
    s = S(610, 200)
    s.acsrc(40, 110, 'v<tspan class="sb" dy="4">g</tspan>')
    s.wire((40, 95), (40, 60), (60, 60)); s.resh(60, 120, 60, L('R', 's', '= ' + v['Rs']))
    s.wire((40, 125), (40, 165), (500, 165))
    for i, x in enumerate((140, 320)):
        s.p.append('<rect class="res" x="%d" y="40" width="120" height="100" rx="8"/>' % x)
        s.text(x + 60, 70, 'Étage %d' % (i + 1), 'tn2', 'middle')
        k = str(i + 1)
        s.text(x + 60, 92, 'A<tspan class="sb" dy="4">v%s</tspan><tspan dy="-4"> = %s</tspan>' % (k, v['Av' + k]), 't', 'middle')
        s.text(x + 60, 112, 'Z<tspan class="sb" dy="4">i%s</tspan><tspan dy="-4"> = %s</tspan>' % (k, v['Zi' + k]), 't', 'middle')
        s.text(x + 60, 132, 'Z<tspan class="sb" dy="4">o%s</tspan><tspan dy="-4"> = %s</tspan>' % (k, v['Zo' + k]), 't', 'middle')
    s.wire((120, 60), (140, 60)); s.wire((260, 60), (320, 60))
    s.wire((440, 60), (500, 60)); s.resv(500, 60, 165, L('R', 'L', '= ' + v['RL']))
    return s.svg('Deux étages amplificateurs en cascade')

# ---------------------------------------------------------------- banque
Q = []
def add(th, src, q, opts, ans, e):
    Q.append({'id': 'q%02d' % (len(Q) + 1), 'th': th, 'src': src, 'q': q, 'o': opts, 'a': ans, 'e': e})

def num(th, src, q, good, bads, e):
    """question numérique à une bonne réponse (en 1re position)."""
    add(th, src, q, [good] + bads, [0], e)


# ---------------------------------------------------------------- schémas CM4 (continu)
def bat(s, x, y1, y2, lab):
    """source continue verticale, + en haut (grande plaque)."""
    mid = (y1 + y2) // 2
    s.wire((x, y1), (x, mid - 5)); s.wire((x, mid + 5), (x, y2))
    s.wire((x - 14, mid - 5), (x + 14, mid - 5)); s.wire((x - 7, mid + 5), (x + 7, mid + 5))
    s.text(x - 20, mid + 5, lab, anchor='end')

def fig_fond(v, labs=('V<tspan class="sb" dy="4">BB</tspan><tspan dy="-4"> = %s</tspan>', 'R<tspan class="sb" dy="4">B</tspan><tspan dy="-4"> = %s</tspan>', 'R<tspan class="sb" dy="4">C</tspan><tspan dy="-4"> = %s</tspan>')):
    s = S(500, 300)
    bat(s, 90, 150, 262, labs[0] % v['VBB']); s.gnd(90, 262)
    s.wire((90, 150), (110, 150)); s.resh(110, 200, 150, labs[1] % v['RB']); s.wire((200, 150), (216, 150))
    s.npn(238, 150)
    s.wire((256, 182), (256, 262)); s.gnd(256, 262)
    s.resv(256, 40, 118, labs[2] % v['RC'])
    s.wire((256, 40), (410, 40)); bat(s, 410, 40, 262, 'V<tspan class="sb" dy="4">CC</tspan><tspan dy="-4"> = %s</tspan>' % v['VCC']); s.gnd(410, 262)
    s.text(272, 214, 'E', 'tn2'); s.text(272, 112, 'C', 'tn2'); s.text(206, 140, 'B', 'tn2', 'end')
    return s.svg('Émetteur commun fondamental : deux sources continues')

def fig_emet(v):
    s = S(500, 300)
    bat(s, 110, 150, 262, 'V<tspan class="sb" dy="4">BB</tspan><tspan dy="-4"> = %s</tspan>' % v['VBB']); s.gnd(110, 262)
    s.wire((110, 150), (216, 150)); s.npn(238, 150)
    s.resv(256, 182, 262, L('R', 'E', '= ' + v['RE'])); s.gnd(256, 262)
    s.resv(256, 40, 118, L('R', 'C', '= ' + v['RC']))
    s.wire((256, 40), (410, 40)); bat(s, 410, 40, 262, 'V<tspan class="sb" dy="4">CC</tspan><tspan dy="-4"> = %s</tspan>' % v['VCC']); s.gnd(410, 262)
    return s.svg('Polarisation par l\'émetteur')

def fig_pdt(v):
    s = S(470, 310)
    s.vcc(170, 26, 'V<tspan class="sb" dy="4">CC</tspan><tspan dy="-4"> = ' + v['VCC'] + '</tspan>')
    s.wire((170, 26), (256, 26))
    s.resv(170, 26, 150, L('R', '1', '= ' + v['R1']), 'l')
    s.resv(170, 150, 268, L('R', '2', '= ' + v['R2']), 'l'); s.gnd(170, 268)
    s.dot(170, 150); s.npn(238, 150); s.wire((170, 150), (216, 150))
    s.resv(256, 26, 118, L('R', 'C', '= ' + v['RC']))
    s.resv(256, 182, 268, L('R', 'E', '= ' + v['RE'])); s.gnd(256, 268)
    return s.svg('Polarisation par pont diviseur de tension (continu)')

def fig_modes(vb, vc):
    s = S(460, 300)
    bat(s, 130, 150, 262, vb); s.gnd(130, 262)
    s.wire((130, 150), (216, 150)); s.npn(238, 150)
    s.wire((256, 182), (256, 262)); s.gnd(256, 262)
    s.wire((256, 118), (256, 60), (380, 60)); bat(s, 380, 60, 262, vc); s.gnd(380, 262)
    s.text(272, 214, 'E', 'tn2'); s.text(272, 112, 'C', 'tn2'); s.text(206, 140, 'B', 'tn2', 'end')
    s.text(256, 290, 'M (masse commune)', 't', 'middle')
    return s.svg('Transistor NPN alimenté par deux sources : déterminer le mode')

ARD = ('V<tspan class="sb" dy="4">cmd</tspan><tspan dy="-4"> = %s</tspan>', 'R<tspan class="sb" dy="4">B</tspan><tspan dy="-4"> = %s</tspan>', 'R<tspan class="sb" dy="4">C</tspan><tspan dy="-4"> (charge) = %s</tspan>')

# =================== CM4 · FORMULES ===================
add('f4', 'CM4', r'Relations entre les courants et les gains du BJT : lesquelles sont justes ?',
    [r'\(i_E=i_B+i_C\)', r'\(\beta=\dfrac{i_C}{i_B}\) et \(\alpha=\dfrac{i_C}{i_E}\approx1\)', r'\(\gamma=\dfrac{i_E}{i_B}=\beta+1=\dfrac{1}{1-\alpha}\)', r'\(i_C=i_B+i_E\)', r'\(\alpha=\beta+1\)'], [0, 1, 2],
    r'Loi des nœuds sur le transistor ; \(\beta\) (aussi noté \(h_{FE}\)) vaut typiquement 100 à 300.')
add('f4', 'CM4', r'Émetteur commun fondamental (\(V_{BB}\), \(R_B\), \(V_{CC}\), \(R_C\)) : équation de la <b>droite de charge statique</b> ?',
    [r'\(i_C=-\dfrac{1}{R_C}V_{CE}+\dfrac{V_{CC}}{R_C}\)', r'\(i_B=-\dfrac{1}{R_B}V_{BE}+\dfrac{V_{BB}}{R_B}\)', r'\(i_C=\dfrac{V_{CE}}{R_C}\)', r'\(i_C=\beta\dfrac{V_{CC}}{R_C}\)'], [0],
    r'Maille collecteur \(V_{CC}-R_Ci_C-V_{CE}=0\). La deuxième proposition est la droite d\'<b>attaque</b> statique (maille base).')
add('f4', 'CM4', r'Points remarquables de la droite de charge statique :',
    [r'\(i_{C,sat}=\dfrac{V_{CC}}{R_C}\) (obtenu pour \(V_{CE}=0\))', r'\(V_{CE,blocage}=V_{CC}\) (obtenu pour \(i_C=0\))', r'le point \(Q\) est l\'intersection de la droite de charge et de la caractéristique \(i_C=f(V_{CE})\)', r'\(i_{C,sat}=\beta\,i_B\) toujours', r'\(V_{CE,blocage}=0\)'], [0, 1, 2],
    r'La droite de charge contient tous les points de fonctionnement possibles, du blocage à la saturation.')
add('f4', 'CM4', r'Polarisation <b>par la base</b> : relations du montage ?',
    [r'\(i_B=\dfrac{V_{BB}-V_{BE}}{R_B}\), \(i_C=\beta i_B\), \(V_{CE}=V_{CC}-R_Ci_C\)', r'\(i_E=\dfrac{V_{BB}-V_{BE}}{R_E}\), \(V_{CE}=V_C-V_E\)', r'\(i_B=\dfrac{V_{BB}}{R_B}\), \(V_{CE}=V_{CC}\)', r'\(i_C=\dfrac{V_{CC}}{R_B}\)'], [0],
    r'\(i_C\) et \(V_{CE}\) dépendent de \(\beta\) : montage « \(\beta\)-dépendant ».')
add('f4', 'CM4', r'Polarisation <b>par l\'émetteur</b> : relations du montage ?',
    [r'\(V_E=V_{BB}-V_{BE}\) et \(i_E=\dfrac{V_E}{R_E}\)', r'\(i_C\approx i_E\) car \(\alpha\approx1\)', r'\(V_C=V_{CC}-R_Ci_C\) et \(V_{CE}=V_C-V_E\)', r'\(i_C=\beta\dfrac{V_{BB}-V_{BE}}{R_E}\)', r'\(V_{CE}=V_{CC}-V_{BB}\)'], [0, 1, 2],
    r'On n\'utilise jamais \(\beta\) : montage « \(\beta\)-indépendant ».')
add('f4', 'CM4', r'Pont diviseur (PDT) : équivalent de Thévenin vu de la base, et calcul complet de \(i_B\) ?',
    [r'\(V_{Th}=V_{CC}\dfrac{R_2}{R_1+R_2}\), \(R_{Th}=R_1\parallel R_2\), \(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}\)', r'\(V_{Th}=V_{CC}\dfrac{R_1}{R_1+R_2}\), \(R_{Th}=R_1+R_2\)', r'\(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}+R_E}\)', r'\(i_B=\dfrac{V_{CC}-V_{BE}}{R_1}\)'], [0],
    r'Maille base : \(V_{Th}-R_{Th}i_B-V_{BE}-R_E(\beta+1)i_B=0\), car \(i_E=(\beta+1)i_B\).')
add('f4', 'CM4', r'Condition pour considérer \(R_1\), \(R_2\), \(V_{CC}\) comme une source de tension constante (et calculer comme une polarisation par l\'émetteur) :',
    [r'\(R_1\parallel R_2<0{,}01\,(\beta+1)R_E\)', r'\(R_1\parallel R_2>100\,(\beta+1)R_E\)', r'\(R_1+R_2<0{,}01\,R_E\)', r'\(R_1\parallel R_2<0{,}01\,R_C\)'], [0],
    r'Résistance interne de la source (\(R_{Th}\), vue à gauche de la base) 100 fois plus petite que la charge vue à droite, \((\beta+1)R_E\).')
add('f4', 'CM4', r'Transistor en commutation commandé par une sortie numérique \(V_{cmd}\) : dimensionnement ?',
    [r'\(R_B=\dfrac{V_{cmd}-V_{BE,sat}}{i_{B,sat}}\)', r'\(R_C=\dfrac{V_{CC}-V_{CE,sat}}{i_{C,sat}}\)', r'condition de saturation : \(\beta i_B>i_{C,sat}\)', r'\(R_B=\dfrac{V_{CC}}{i_{C,sat}}\)', r'\(R_C=\dfrac{V_{cmd}}{i_{B,sat}}\)'], [0, 1, 2],
    r'On prend \(i_{B,sat}\) et \(V_{BE,sat}\) dans la datasheet ; le gain à saturation est faible (\(\beta=10\) dans l\'exemple du cours).')
add('f4', 'CM4', r'Temps de commutation :',
    [r'\(t_{ON}=t_d+t_r\) et \(t_{OFF}=t_s+t_f\)', r'\(t_{ON}=t_s+t_f\) et \(t_{OFF}=t_d+t_r\)', r'\(t_{ON}=t_d\cdot t_r\)', r'\(t_{ON}=t_{OFF}\) toujours'], [0],
    r'\(t_d\) : retard (jusqu\'à \(10\ \%\)), \(t_r\) : montée de \(10\) à \(90\ \%\), \(t_s\) : stockage, \(t_f\) : descente de \(90\) à \(10\ \%\).')
add('f4', 'CM4', r'En tenant compte du courant de fuite collecteur-base \(i_{CB0}\) :',
    [r'\(i_C=\beta\,i_B+(\beta+1)\,i_{CB0}\)', r'\(i_C=\beta\,(i_B+i_{CB0})\)', r'\(i_C=\beta\,i_B-i_{CB0}\)', r'\(i_C=(\beta+1)\,i_B\)'], [0],
    r'Quand \(T\) augmente, \(\beta\) et \(i_{CB0}\) augmentent : le point \(Q\) se déplace. \(i_{CB0}\) est négligeable dans les calculs usuels.')

# =================== CM4 · CONNAISSANCES ===================
add('k4', 'CM4', r'Modes de fonctionnement d\'un NPN selon la polarisation des jonctions :',
    [r'BE directe et BC inverse : amplification (mode actif)', r'BE directe et BC directe : saturation (« ON »)', r'BE inverse : bloqué (« OFF »)', r'BE inverse et BC directe : amplification', r'BE directe et BC inverse : saturation'], [0, 1, 2], r'')
add('k4', 'CM4', r'Conditions sur les tensions (silicium) : lesquelles sont justes ?',
    [r'bloqué si \(V_{BE}<0{,}7\ \mathrm V\)', r'actif si \(V_{BE}=0{,}7\ \mathrm V\) et \(V_{BC}<0\), donc \(V_{CE}>0{,}7\ \mathrm V\)', r'saturation maximale : \(V_{BC}=0{,}7\ \mathrm V\), donc \(V_{CE}=0\)', r'actif si \(V_{BC}>0{,}7\ \mathrm V\)', r'bloqué si \(V_{CE}<0{,}2\ \mathrm V\)'], [0, 1, 2],
    r'\(V_{CE}=V_{CB}+V_{BE}\). Début de saturation dès \(V_{BC}\ge0\) (\(V_{CE}\le0{,}7\) V) ; en pratique il sature vraiment pour \(V_{CE}<0{,}2\) V.')
add('k4', 'CM4', r'L\'effet transistor (NPN) :',
    [r'les électrons diffusent de l\'émetteur vers la base (jonction BE directe)', r'dans la base, minoritaires, ils sont entraînés vers le collecteur par le fort champ de la jonction BC inverse (dérive)', r'il est d\'autant plus efficace que l\'émetteur est très dopé et la base très fine', r'le collecteur émet les électrons', r'la base est la zone la plus épaisse'], [0, 1, 2],
    r'Une faible tension \(V_{BE}\) commande un fort courant \(i_C\). E émet, C collecte, B est une zone de transit.')
add('k4', 'CM4', r'Comparaison des polarisations par la base et par l\'émetteur :',
    [r'par la base : \(\beta\)-dépendante, le point \(Q\) bouge si \(\beta\) varie', r'par l\'émetteur : \(\beta\)-indépendante, \(Q\) très stable', r'par la base : utilisée pour la commutation (blocage / saturation)', r'par l\'émetteur : utilisée pour la commutation', r'par la base : \(Q\) ne dépend pas de \(\beta\)'], [0, 1, 2],
    r'Par l\'émetteur : mode actif, amplification.')
add('k4', 'CM4', r'Intérêt de la polarisation par pont diviseur par rapport à la polarisation par l\'émetteur :',
    [r'on règle \(V_{BB}=V_{Th}\) en changeant seulement \(R_1\) et \(R_2\), sans changer l\'alimentation', r'elle supprime le besoin de \(R_E\)', r'elle rend le montage \(\beta\)-dépendant', r'elle évite toute alimentation continue'], [0],
    r'Si \(R_1\parallel R_2<0{,}01(\beta+1)R_E\), on se ramène à une polarisation par l\'émetteur, \(\beta\)-indépendante.')
add('k4', 'CM4', r'Effet de la température :',
    [r'si \(T\) augmente, \(\beta\) augmente', r'si \(T\) augmente, le courant de fuite \(i_{CB0}\) augmente', r'la température déplace le point de fonctionnement en modifiant \(i_C\)', r'\(\beta\) ne dépend pas de la température', r'si \(T\) augmente, \(i_{CB0}\) diminue'], [0, 1, 2], r'')
add('k4', 'CM4', r'L\'effet Early :',
    [r'se voit par la légère pente des caractéristiques \(i_C(V_{CE})\) en zone active', r'les droites prolongées se coupent en \(-V_A\) (tension d\'Early) sur l\'axe des \(V_{CE}\)', r'se modélise par une résistance en parallèle entre collecteur et émetteur', r'rend \(i_C\) rigoureusement indépendant de \(V_{CE}\)', r'se produit uniquement au blocage'], [0, 1, 2], r'Il vient de la diminution de la largeur effective de la base.')
add('k4', 'CM4', r'Lecture d\'une datasheet (ex. 2N3904) : quelles affirmations viennent du cours ?',
    [r'utiliser les courbes données pour \(T_{amb}=25^{\circ}\mathrm C\)', r'vérifier pour quelle valeur de \(V_{CE}\) les courbes sont tracées (ici \(1\ \mathrm V\))', r'quand le transistor sature, le gain \(\beta=\frac{i_C}{i_B}\) chute', r'\(\beta\) est le même pour tous les courants', r'\(V_{BE}\) vaut toujours exactement \(0{,}7\ \mathrm V\)'], [0, 1, 2],
    r'Dans l\'exemple du cours on lit \(V_{BE}=0{,}73\ \mathrm V\) et \(V_{CE,sat}=95\ \mathrm{mV}\) pour \(i_C\approx10\) mA.')
add('k4', 'CM4', r'Modèle d\'Ebers-Moll (statique) du BJT :',
    [r'une diode B-E (\(V_{BE}=0{,}7\ \mathrm V\)) et une source de courant \(i_C=\beta i_B\) entre C et E', r'deux diodes tête-bêche sans source', r'une résistance \(r_e\) et une source \(\beta i_b\) (petits signaux)', r'une source de tension entre C et E'], [0],
    r'Plus juste que les deux diodes : la diode B-C est remplacée par le générateur de courant.')
add('k4', 'CM4', r'Les trois montages fondamentaux, d\'après l\'usage type indiqué dans le cours :',
    [r'émetteur commun : l\'émetteur est commun à l\'entrée et à la sortie', r'collecteur commun : amplification de puissance', r'base commune : amplification en tension', r'base commune : la base n\'est reliée à rien'], [0, 1, 2],
    r'Le cours étudie surtout l\'émetteur commun (usage type indiqué : amplification en courant).')
add('k4', 'CM4', r'Pourquoi le collecteur doit-il être porté à un potentiel positif (NPN) ?',
    [r'pour polariser la jonction collecteur-base en inverse et collecter les électrons venant de la base', r'pour polariser la jonction BE en inverse', r'pour bloquer le transistor', r'pour que \(i_B\) soit maximal'], [0],
    r'Maille collecteur : \(V_{CC}\) polarise BC en inverse à travers \(R_C\) ; sinon le transistor n\'amplifie pas.')
add('k4', 'CM4', r'Logique à BJT (pour info) :',
    [r'un transistor saturé/bloqué réalise une porte NOT (OUT = \(V_{CE,sat}\) quand IN = 1)', r'la technologie TTL (BJT) est plus rapide que la CMOS mais consomme davantage', r'en commutation, le transistor ne travaille jamais en zone active', r'la TTL consomme moins que la CMOS'], [0, 1, 2], r'')

# =================== CM4 · CALCULS SUR SCHÉMA ===================
VTH = 0.7
# Scénario M : modes de fonctionnement
srcM = 'Schéma M · mode de fonctionnement'
for vb, vc, mode, why in [
    (2, 6, 'actif (amplification)', 'V_{BC}=V_{BM}+V_{MC}=2-6=-4\\ \\mathrm V<0'),
    (0.4, 5, 'bloqué', 'V_{BE}=0{,}4\\ \\mathrm V<0{,}7\\ \\mathrm V'),
    (4, 2, 'saturé (au maximum)', 'V_{BC}=4-2=2\\ \\mathrm V>0{,}7\\ \\mathrm V')]:
    F = fig_modes('V<tspan class="sb" dy="4">BE</tspan><tspan dy="-4"> = %s V</tspan>' % fr(vb), '%s V' % fr(vc))
    opts = ['actif (amplification)', 'bloqué', 'saturé (au maximum)', 'détruit']
    i = opts.index(mode)
    add('c4', srcM, F + r'<b>Conditions :</b> NPN au silicium (seuil \(0{,}7\ \mathrm V\)) ; les résistances (nécessaires) ne sont pas dessinées. Le schéma donne directement \(V_{BE}=%s\ \mathrm V\) et le collecteur est à \(%s\ \mathrm V\) par rapport à M. Mode du transistor ?' % (fr(vb), fr(vc)),
        opts, [i], r'\(%s\) : transistor %s. (Méthode du cours : d\'abord \(V_{BE}\) pour savoir s\'il est passant, puis \(V_{BC}\) pour actif ou saturé.)' % (why, mode))

# Scénario F : émetteur commun fondamental (Ebers-Moll)
VBB, VCC, RB, RC, b = 5, 12, 100e3, 1e3, 150
IB = (VBB - VTH) / RB; IC = b * IB; VCE = VCC - RC * IC; ICsat = VCC / RC
vF = {'VBB': '5 V', 'RB': '100 kΩ', 'RC': '1 kΩ', 'VCC': '12 V'}
FF = fig_fond(vF)
condF = r'<b>Conditions :</b> NPN, \(\beta=150\), \(V_{BE}=0{,}7\ \mathrm V\) ; modèle d\'Ebers-Moll.'
srcF = 'Schéma F · émetteur commun fondamental'
num('c4', srcF, FF + condF + r' Courant de base \(i_B\) :',
    m(IB * 1e6, r'\mu A'), [m(VBB / RB * 1e6, r'\mu A'), m(IB * 1e6 * b / 10, r'\mu A'), m((VCC - VTH) / RB * 1e6, r'\mu A')],
    r'Maille base : \(i_B=\dfrac{V_{BB}-V_{BE}}{R_B}=\dfrac{5-0{,}7}{100\ \mathrm k}=%s\ \mu\mathrm A\).' % fr(IB * 1e6))
add('c4', srcF, FF + condF + r' Courant collecteur et tension \(V_{CE}\) : quelles valeurs sont justes ?',
    [r'\(i_C=%s\ \mathrm{mA}\)' % fr(IC * 1e3), r'\(V_{CE}=%s\ \mathrm V\)' % fr(VCE), r'le transistor est en mode actif', r'\(V_{CE}=%s\ \mathrm V\)' % fr(VCC - VTH), r'le transistor est saturé'], [0, 1, 2],
    r'\(i_C=\beta i_B=%s\) mA ; maille collecteur \(V_{CE}=V_{CC}-R_Ci_C=12-%s=%s\) V \(>0{,}7\) V : actif.' % (fr(IC * 1e3), fr(RC * IC), fr(VCE)))
add('c4', srcF, FF + r' Droite de charge statique de ce montage : quelles affirmations sont justes ?',
    [r'\(i_{C,sat}=%s\ \mathrm{mA}\)' % fr(ICsat * 1e3), r'\(V_{CE,blocage}=12\ \mathrm V\)', r'pente \(-\dfrac{1}{R_C}=-1\ \mathrm{mS}\)', r'\(i_{C,sat}=%s\ \mathrm{mA}\)' % fr(IC * 1e3), r'\(V_{CE,blocage}=5\ \mathrm V\)'], [0, 1, 2],
    r'\(i_C=-\dfrac{V_{CE}}{R_C}+\dfrac{V_{CC}}{R_C}\) : \(i_{C,sat}=\dfrac{12}{1\ \mathrm k}=12\) mA, \(V_{CE,bloc}=V_{CC}\).')
RB2 = 10e3; IB2 = (VBB - VTH) / RB2; ICa = b * IB2
add('c4', srcF, FF + condF + r' <b>Nouvelle condition : \(R_B=10\ \mathrm{k\Omega}\).</b> Que se passe-t-il ?',
    [r'\(\beta i_B=%s\ \mathrm{mA}>i_{C,sat}=12\ \mathrm{mA}\)' % fr(ICa * 1e3), r'le transistor sature : \(i_C\approx i_{C,sat}=12\ \mathrm{mA}\)', r'\(V_{CE}\approx0\) (approximation grossière)', r'\(i_C=%s\ \mathrm{mA}\)' % fr(ICa * 1e3), r'\(V_{CE}=%s\ \mathrm V\)' % fr(VCC - RC * ICa)], [0, 1, 2],
    r'\(i_B=\dfrac{4{,}3}{10\ \mathrm k}=%s\ \mu\mathrm A\), \(\beta i_B=%s\) mA : impossible, \(i_C\) ne peut pas dépasser \(i_{C,sat}\). Même raisonnement que l\'exercice du cours sur le 2N3904.' % (fr(IB2 * 1e6), fr(ICa * 1e3)))
# lecture datasheet en saturation
num('c4', 'CM4 · saturation et datasheet', r'<b>Conditions :</b> émetteur commun fondamental saturé, \(V_{CC}=10\ \mathrm V\), \(R_C=1\ \mathrm{k\Omega}\). Sur la datasheet on lit \(V_{CE,sat}=0{,}1\ \mathrm V\) pour \(i_C\approx10\ \mathrm{mA}\). Valeur affinée de \(i_C\) ?',
    m((10 - 0.1) / 1e3 * 1e3, 'mA'), [m(10, 'mA'), m(9.3, 'mA'), m(0.1, 'mA')],
    r'\(i_C=\dfrac{V_{CC}-V_{CE,sat}}{R_C}=\dfrac{10-0{,}1}{1\ \mathrm k}=%s\) mA (le cours trouve \(9{,}91\) mA avec \(95\) mV).' % fr(9.9))
# conception d'un point Q
VCC2, ICq, VCEq, bq = 12, 5e-3, 6, 200
IBq = ICq / bq; RBq = (VCC2 - VTH) / IBq; RCq = (VCC2 - VCEq) / ICq
vD = {'VBB': '12 V', 'RB': '?', 'RC': '?', 'VCC': '12 V'}
add('c4', 'Schéma F · choisir R_B et R_C', fig_fond(vD) + r'<b>Conditions :</b> \(V_{BB}=V_{CC}=12\ \mathrm V\), \(\beta=200\), \(V_{BE}=0{,}7\ \mathrm V\). On veut le point de fonctionnement \(i_C=5\ \mathrm{mA}\), \(V_{CE}=6\ \mathrm V\). Quelles valeurs sont justes ?',
    [r'\(i_B=%s\ \mu\mathrm A\)' % fr(IBq * 1e6), r'\(R_B=%s\ \mathrm{k\Omega}\)' % fr(RBq / 1e3), r'\(R_C=%s\ \mathrm{k\Omega}\)' % fr(RCq / 1e3), r'\(R_C=%s\ \mathrm{k\Omega}\)' % fr(VCC2 / ICq / 1e3), r'\(R_B=%s\ \mathrm{k\Omega}\)' % fr(VCC2 / IBq / 1e3 * 2)], [0, 1, 2],
    r'\(i_B=\dfrac{i_C}{\beta}=%s\ \mu\mathrm A\) ; maille base \(R_B=\dfrac{V_{BB}-V_{BE}}{i_B}=%s\ \mathrm{k\Omega}\) ; maille collecteur \(R_C=\dfrac{V_{CC}-V_{CE}}{i_C}=\dfrac{6}{5\ \mathrm m}=%s\ \mathrm{k\Omega}\).' % (fr(IBq * 1e6), fr(RBq / 1e3), fr(RCq / 1e3)))

# Scénario E : polarisation par l'émetteur
VBB, VCC, RC, RE = 3, 15, 2.2e3, 1e3
VE = VBB - VTH; IE = VE / RE; VC = VCC - RC * IE; VCE = VC - VE
vE = {'VBB': '3 V', 'VCC': '15 V', 'RC': '2,2 kΩ', 'RE': '1 kΩ'}
FE = fig_emet(vE)
condE = r'<b>Conditions :</b> NPN, \(\beta=100\), \(V_{BE}=0{,}7\ \mathrm V\), \(i_C\approx i_E\).'
srcE = 'Schéma E · polarisation par l\'émetteur'
num('c4', srcE, FE + condE + r' Courant d\'émetteur \(i_E\) :',
    m(IE * 1e3, 'mA'), [m(VBB / RE * 1e3, 'mA'), m(IE * 1e3 / 100, 'mA'), m((VCC - VTH) / (RC + RE) * 1e3, 'mA')],
    r'Maille base : \(V_E=V_{BB}-V_{BE}=%s\) V ; \(i_E=\dfrac{V_E}{R_E}=%s\) mA.' % (fr(VE), fr(IE * 1e3)))
add('c4', srcE, FE + condE + r' Potentiels et tension \(V_{CE}\) :',
    [r'\(V_C=%s\ \mathrm V\)' % fr(VC), r'\(V_{CE}=%s\ \mathrm V\)' % fr(VCE), r'le transistor est actif', r'\(V_{CE}=%s\ \mathrm V\)' % fr(VC), r'\(V_E=3\ \mathrm V\)'], [0, 1, 2],
    r'\(V_C=V_{CC}-R_Ci_C=15-2{,}2\ \mathrm k\times%s\ \mathrm{mA}=%s\) V ; \(V_{CE}=V_C-V_E=%s\) V \(>0{,}7\) V.' % (fr(IE * 1e3), fr(VC), fr(VCE)))
add('c4', srcE, FE + condE + r' <b>Nouvelle condition :</b> on remplace le transistor par un autre de \(\beta=300\). Quelles affirmations sont justes ?',
    [r'\(i_C\) reste \(\approx%s\ \mathrm{mA}\)' % fr(IE * 1e3), r'\(V_{CE}\) reste \(\approx%s\ \mathrm V\)' % fr(VCE), r'le montage est \(\beta\)-indépendant', r'\(i_C\) est multiplié par 3', r'le transistor sature'], [0, 1, 2],
    r'On n\'a jamais utilisé \(\beta\) : \(Q\) ne bouge pas (seul \(i_B=\frac{i_E}{\beta+1}\) change).')

# Scénario P : pont diviseur
VCC, R1, R2, RC, RE, b = 12, 8.2e3, 1.8e3, 2.7e3, 1e3, 200
Rth = R1 * R2 / (R1 + R2); Vth = VCC * R2 / (R1 + R2); lim = 0.01 * (b + 1) * RE
VE = Vth - VTH; IE = VE / RE; VC = VCC - RC * IE; VCEa = VC - VE
IBf = (Vth - VTH) / (Rth + (b + 1) * RE); ICf = b * IBf; VCEf = VCC - RE * (b + 1) * IBf - RC * ICf
vP = {'VCC': '12 V', 'R1': '8,2 kΩ', 'R2': '1,8 kΩ', 'RC': '2,7 kΩ', 'RE': '1 kΩ'}
FP = fig_pdt(vP)
condP = r'<b>Conditions :</b> NPN, \(\beta=200\), \(V_{BE}=0{,}7\ \mathrm V\).'
srcP = 'Schéma P · pont diviseur de tension'
add('c4', srcP, FP + condP + r' Peut-on considérer le pont comme une source de tension constante ?',
    [r'oui : \(R_1\parallel R_2=%s\ \Omega<0{,}01(\beta+1)R_E=%s\ \Omega\)' % (fr(Rth, 4), fr(lim, 4)), r'non : \(R_1\parallel R_2>0{,}01(\beta+1)R_E\)', r'oui, car \(R_1>R_2\)', r'on ne peut pas savoir sans \(R_C\)'], [0],
    r'\(R_1\parallel R_2=\dfrac{8{,}2\times1{,}8}{10}\ \mathrm{k\Omega}=%s\ \Omega\) et \(0{,}01\times201\times1\ \mathrm k=%s\ \Omega\) : condition vérifiée.' % (fr(Rth, 4), fr(lim, 4)))
add('c4', srcP, FP + condP + r' Avec l\'approximation (source de tension), point de fonctionnement :',
    [r'\(V_{BB}=V_{Th}=%s\ \mathrm V\)' % fr(Vth), r'\(i_C\approx i_E=%s\ \mathrm{mA}\)' % fr(IE * 1e3), r'\(V_{CE}\approx%s\ \mathrm V\)' % fr(VCEa), r'\(i_C=%s\ \mathrm{mA}\)' % fr(Vth / RE * 1e3), r'\(V_{CE}\approx%s\ \mathrm V\)' % fr(VCC - RC * IE)], [0, 1, 2],
    r'\(V_{Th}=12\times\dfrac{1{,}8}{10}=%s\) V, \(V_E=%s\) V, \(i_E=%s\) mA, \(V_C=12-2{,}7\ \mathrm k\times i_C=%s\) V, \(V_{CE}=V_C-V_E=%s\) V.' % (fr(Vth), fr(VE), fr(IE * 1e3), fr(VC), fr(VCEa)))
num('c4', srcP, FP + condP + r' Calcul <b>complet</b> (sans approximation) : courant collecteur \(i_C\) ?',
    m(ICf * 1e3, 'mA', 4), [m(IE * 1e3, 'mA', 4), m(b * (Vth - VTH) / (Rth + RE) * 1e3, 'mA', 4), m(Vth / RE * 1e3, 'mA', 4)],
    r'\(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}=\dfrac{%s}{%s+201\,000}=%s\ \mu\mathrm A\), \(i_C=\beta i_B=%s\) mA (approximation : %s mA), puis \(V_{CE}=V_{CC}-R_E(\beta+1)i_B-R_Ci_C=%s\) V.' % (fr(Vth - VTH), fr(Rth, 4), fr(IBf * 1e6), fr(ICf * 1e3, 4), fr(IE * 1e3), fr(VCEf)))
R1b, R2b, bb = 47e3, 10e3, 150
Rthb = R1b * R2b / (R1b + R2b); limb = 0.01 * (bb + 1) * 1e3
add('c4', 'CM4 · condition du pont', fig_pdt({'VCC': '12 V', 'R1': '47 kΩ', 'R2': '10 kΩ', 'RC': '2,2 kΩ', 'RE': '1 kΩ'}) + r'<b>Conditions :</b> \(\beta=150\). L\'approximation « source de tension » est-elle permise ?',
    [r'non : \(R_1\parallel R_2\approx%s\ \mathrm{k\Omega}>0{,}01(\beta+1)R_E=%s\ \mathrm{k\Omega}\), il faut le calcul complet par Thévenin' % (fr(Rthb / 1e3), fr(limb / 1e3)), r'oui, l\'écart est négligeable', r'oui, car \(R_E=1\ \mathrm{k\Omega}\)', r'non, car \(R_C>R_E\)'], [0],
    r'C\'est le montage du schéma A (CM5) : on y fait le calcul complet \(i_B=\dfrac{E_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}\).')

# Scénario S : commutation par microcontrôleur
Vcmd, VCC, ICs, IBs, VBEs = 5, 12, 100e-3, 10e-3, 1.0
RBs = (Vcmd - VBEs) / IBs; RCs = (VCC - 0) / ICs; bs = ICs / IBs
FS = fig_fond({'VBB': '5 V', 'RB': '?', 'RC': '?', 'VCC': '12 V'}, ARD)
condS = r'<b>Conditions :</b> une sortie de microcontrôleur (\(V_{cmd}=5\ \mathrm V\), \(40\ \mathrm{mA}\) maximum) doit commander une charge parcourue par \(i_C=100\ \mathrm{mA}\) sous \(12\ \mathrm V\). Datasheet : \(i_{C,max}=600\ \mathrm{mA}\), \(V_{CE,max}=40\ \mathrm V\) ; à saturation \(i_{B,sat}=10\ \mathrm{mA}\), \(V_{BE,sat}=1\ \mathrm V\), \(V_{CE,sat}\approx0\).'
srcS = 'Schéma S · transistor en commutation'
add('c4', srcS, FS + condS + r' Quelles affirmations sont justes ?',
    [r'le transistor convient : \(100\ \mathrm{mA}<600\ \mathrm{mA}\) et \(12\ \mathrm V<40\ \mathrm V\)', r'\(R_B=%s\ \Omega\)' % fr(RBs), r'\(R_C=%s\ \Omega\)' % fr(RCs), r'\(R_B=%s\ \Omega\)' % fr(Vcmd / IBs), r'\(R_C=%s\ \Omega\)' % fr(Vcmd / ICs)], [0, 1, 2],
    r'\(R_B=\dfrac{V_{cmd}-V_{BE,sat}}{i_{B,sat}}=\dfrac{5-1}{10\ \mathrm m}=%s\ \Omega\) ; \(R_C=\dfrac{V_{CC}-V_{CE,sat}}{i_{C,sat}}=\dfrac{12}{0{,}1}=%s\ \Omega\). On prend ensuite une valeur normalisée de \(R_B\) un peu <b>plus petite</b> pour bien saturer.' % (fr(RBs), fr(RCs)))
num('c4', srcS, FS + condS + r' Gain en courant à saturation \(\beta_{sat}=\dfrac{i_{C,sat}}{i_{B,sat}}\) :',
    r'\(\beta_{sat}=%s\)' % fr(bs), [r'\(\beta_{sat}=200\)', r'\(\beta_{sat}=%s\)' % fr(bs * 10), r'\(\beta_{sat}=1\)'],
    r'\(\dfrac{100}{10}=%s\) : faible, c\'est normal en saturation.' % fr(bs))
num('c4', 'CM4 · temps de commutation', r'<b>Conditions :</b> datasheet : \(t_d=35\ \mathrm{ns}\), \(t_r=35\ \mathrm{ns}\), \(t_s=200\ \mathrm{ns}\), \(t_f=50\ \mathrm{ns}\). Temps de blocage \(t_{OFF}\) ?',
    m(250, 'ns'), [m(70, 'ns'), m(320, 'ns'), m(235, 'ns')], r'\(t_{OFF}=t_s+t_f=200+50=250\) ns (et \(t_{ON}=t_d+t_r=70\) ns).')
IBl, bl, ICB0 = 20e-6, 100, 0.1e-6
ICl = bl * IBl + (bl + 1) * ICB0
num('c4', 'CM4 · courant de fuite', r'<b>Conditions :</b> \(\beta=100\), \(i_B=20\ \mu\mathrm A\), courant de fuite \(i_{CB0}=0{,}1\ \mu\mathrm A\) (température élevée). Courant collecteur ?',
    m(ICl * 1e3, 'mA', 4), [m(bl * IBl * 1e3 + 0.1e-3, 'mA', 4), m(bl * (IBl + ICB0) * 1e3 * 0.98, 'mA', 4), m((bl + 1) * IBl * 1e3, 'mA', 4)],
    r'\(i_C=\beta i_B+(\beta+1)i_{CB0}=2\ \mathrm{mA}+%s\ \mu\mathrm A=%s\) mA.' % (fr((bl + 1) * ICB0 * 1e6), fr(ICl * 1e3, 4)))


# =================== CM5 · FORMULES ===================
add('f5', 'CM5', r'Résistance dynamique d\'émetteur du modèle \(r_e\) :',
    [r'\(r_e=\dfrac{26\ \mathrm{mV}}{I_E}\)', r'\(r_e=26\ \mathrm{mV}\cdot I_E\)', r'\(r_e=\dfrac{I_E}{26\ \mathrm{mV}}\)', r'\(r_e=\dfrac{26\ \mathrm{mV}}{I_B}\)'], [0],
    r'\(I_E\) est le courant <b>continu</b> du point de repos (à \(300\) K).')
add('f5', 'CM5', r'Émetteur commun, \(C_E\) (découplage) présent, sans charge. Quelles expressions sont justes ?',
    [r'\(A_v\approx-\dfrac{R_C}{r_e}\)', r'\(Z_{in}=R_1\parallel R_2\parallel(\beta+1)r_e\)', r'\(Z_{out}=R_C\)', r'\(Z_{out}=(\beta+1)r_e\)', r'\(A_v\approx+\dfrac{R_C}{r_e}\)'], [0, 1, 2],
    r'Gain négatif (déphasage de \(\pi\)) ; vue de la base, \(r_e\) est multipliée par \(\beta+1\) ; en sortie la source \(\beta i_b\) est éteinte quand on calcule \(Z_{out}\), il reste \(R_C\) (erratum du cours, diapo 12).')
add('f5', 'CM5', r'Même montage sans condensateur de découplage \(C_E\) :',
    [r'\(A_v\approx-\dfrac{R_C}{R_E+r_e}\) et \(Z_{in}=R_1\parallel R_2\parallel(\beta+1)(r_e+R_E)\)', r'\(A_v\approx-\dfrac{R_C}{r_e}\) et \(Z_{in}=R_1\parallel R_2\)', r'\(A_v\approx-\dfrac{R_E}{R_C}\) et \(Z_{in}=(\beta+1)r_e\)', r'\(A_v=0\)'], [0],
    r'\(R_E\) n\'est plus court-circuitée en AC : elle s\'ajoute à \(r_e\), le gain s\'effondre mais \(Z_{in}\) augmente.')
add('f5', 'CM5', r'Sortie d\'un amplificateur (\(A_v\) à vide, \(Z_{out}\)) chargée par \(R_L\) :',
    [r'\(v_{out}=A_v\,v_{in}\,\dfrac{R_L}{Z_{out}+R_L}\)', r'\(v_{out}=A_v\,v_{in}\,\dfrac{Z_{out}}{Z_{out}+R_L}\)', r'\(v_{out}=A_v\,v_{in}\,(Z_{out}+R_L)\)', r'\(v_{out}=A_v\,v_{in}\)'], [0], r'Pont diviseur entre \(Z_{out}\) et \(R_L\).')
add('f5', 'CM5', r'Gains et décibels : quelles relations sont justes ?',
    [r'\(A_P=A_v\cdot A_i\)', r'\(A_{v,dB}=20\log|A_v|\)', r'\(A_{P,dB}=10\log A_P\)', r'\(A_{v,dB}=10\log|A_v|\)', r'\(A_P=A_v+A_i\)'], [0, 1, 2],
    r'\(20\log\) pour une tension ou un courant, \(10\log\) pour une puissance.')
add('f5', 'CM5', r'Modèle de Giacoletto (haute fréquence) :',
    [r'\(g_m=\dfrac{I_C}{V_T}\) et \(r_\pi=\dfrac{\beta}{g_m}\)', r'\(g_m=I_C\,V_T\) et \(r_\pi=\beta\,g_m\)', r'\(g_m=\dfrac{V_T}{I_C}\) et \(r_\pi=\dfrac{g_m}{\beta}\)', r'\(g_m=\beta\,I_C\) et \(r_\pi=r_e\)'], [0], r'\(V_T=26\) mV ; \(r_\pi\approx(\beta+1)r_e\).')
add('f5', 'CM5', r'Rendement maximal théorique des classes d\'amplification :',
    [r'A : \(\le50\ \%\) ; B : \(\le78{,}5\ \%\) ; D : très élevé', r'A : \(\le78{,}5\ \%\) ; B : \(\le50\ \%\)', r'A et B : \(100\ \%\)', r'A : \(25\ \%\) ; B : \(25\ \%\)'], [0], r'Classe B : \(\dfrac{\pi}{4}=78{,}5\ \%\).')
add('f5', 'CM5', r'Paire Darlington (gains \(\beta_1\), \(\beta_2\)) :',
    [r'\(\beta_D\approx\beta_1\,\beta_2\) et \(V_{BE,D}\approx1{,}4\ \mathrm V\)', r'\(\beta_D=\beta_1+\beta_2\) et \(V_{BE,D}=0{,}7\ \mathrm V\)', r'\(\beta_D=\dfrac{\beta_1}{\beta_2}\)', r'\(\beta_D\approx\beta_1\beta_2\) et \(V_{BE,D}=0{,}35\ \mathrm V\)'], [0], r'Deux jonctions base-émetteur en série.')
add('f5', 'CM5', r'Deux étages en cascade : gain total en tension (avec charge) :',
    [r'produit des gains <b>chargés</b> de chaque étage', r'somme des gains à vide', r'produit des gains à vide', r'gain du premier étage seulement'], [0],
    r'Chaque étage est chargé par l\'impédance d\'entrée du suivant (pont \(\dfrac{Z_{i,2}}{Z_{o,1}+Z_{i,2}}\)).')

# =================== CM5 · CONNAISSANCES ===================
add('k5', 'CM5', r'Rôle des condensateurs d\'un émetteur commun (\(C_1\), \(C_2\), \(C_E\)) :',
    [r'\(C_1\) et \(C_2\) (liaison) bloquent la composante continue', r'\(C_E\) court-circuite \(R_E\) en alternatif et augmente le gain', r'en continu les condensateurs sont des circuits ouverts', r'\(C_E\) déplace le point de repos', r'\(C_1\) amplifie le signal'], [0, 1, 2],
    r'Ils ne changent pas le point \(Q\) (circuits ouverts en DC) et sont des fils en AC.')
add('k5', 'CM5', r'Pour passer du schéma DC au schéma équivalent AC petits signaux :',
    [r'les condensateurs deviennent des fils', r'les sources continues (\(V_{CC}\)) sont reliées à la masse', r'le transistor est remplacé par \((\beta+1)r_e\) entre B et E et une source \(\beta i_b\)', r'les condensateurs deviennent des circuits ouverts', r'on garde \(V_{CC}\)'], [0, 1, 2], r'Majuscules = grandeurs DC, minuscules = AC.')
add('k5', 'CM5', r'Le signal de sortie d\'un émetteur commun est :',
    [r'en opposition de phase avec l\'entrée (déphasage de \(\pi\))', r'en phase', r'déphasé de \(\pi/2\)', r'toujours plus petit que l\'entrée'], [0], r'Le signe moins de \(A_v\).')
add('k5', 'CM5', r'Bande passante d\'un émetteur commun :',
    [r'limitée en basses fréquences par les condensateurs de liaison et de découplage', r'limitée en hautes fréquences par les capacités internes du transistor', r'il se comporte comme un passe-bande', r'il se comporte comme un réjecteur de bande'], [0, 1, 2], r'En HF on utilise le modèle de Giacoletto.')
add('k5', 'CM5', r'Le transfert maximal de <b>puissance</b> entre deux étages est obtenu quand :',
    [r'\(Z_{o,1}=Z_{i,2}\) (adaptation d\'impédance)', r'\(Z_{o,1}\gg Z_{i,2}\)', r'\(Z_{i,2}=0\)', r'\(Z_{o,1}=0\)'], [0], r'Pour transmettre le maximum de <em>tension</em> on veut plutôt \(Z_{i,2}\gg Z_{o,1}\).')
add('k5', 'CM5', r'La distorsion de croisement :',
    [r'apparaît en classe B (push-pull)', r'est réduite en classe AB en polarisant les bases avec des diodes', r'vient de la zone où aucun transistor ne conduit (\(|v|<0{,}7\ \mathrm V\))', r'apparaît en classe A', r'est due au condensateur de liaison'], [0, 1, 2], r'')
add('k5', 'CM5', r'Classe D :',
    [r'les transistors fonctionnent en commutation (PWM) et un filtre reconstitue le signal', r'le point de repos est au milieu de la droite de charge', r'le rendement est inférieur à \(25\ \%\)', r'un seul transistor conduit en permanence'], [0], r'Très haut rendement : les transistors sont bloqués ou saturés.')
add('k5', 'CM5', r'Quels montages à transistors du cours sont correctement décrits ?',
    [r'Miroir de courant : \(i_{out}\approx i_{in}\), peu sensible à \(\beta\)', r'Pont en H : inverse le sens d\'un moteur à courant continu', r'Paire différentielle : cœur (étage d\'entrée) de l\'AOP', r'Générateur de courant à Zener : \(i_L\approx\dfrac{V_Z-V_{BE}}{R_E}\)', r'Darlington : gain \(\beta_1+\beta_2\)'], [0, 1, 2, 3], r'Darlington : \(\beta_1\beta_2\).')
add('k5', 'CM5', r'Ordres de grandeur d\'un AOP réel donnés en cours :',
    [r'\(Z_{in}\approx2\ \mathrm{M\Omega}\), \(Z_{out}\approx50\ \Omega\), \(A_d\approx10^5\)', r'\(Z_{in}\approx50\ \Omega\), \(Z_{out}\approx2\ \mathrm{M\Omega}\)', r'\(A_d\approx10\)', r'\(Z_{in}=0\)'], [0], r'AOP = paire différentielle + étage à gain + push-pull de sortie.')
add('k5', 'CM5', r'Pourquoi \(Z_{out}=R_C\) pour l\'émetteur commun (erratum du cours) ?',
    [r'on éteint \(v_{in}\) (fil), donc \(i_b=0\), donc la source \(\beta i_b\) devient un circuit ouvert : il ne reste que \(R_C\)', r'parce que \(r_e\) est très grande', r'parce que \(C_2\) court-circuite \(R_C\)', r'parce que \(R_L=R_C\)'], [0], r'Définition : \(Z_{out}=\dfrac{v_{out}}{i_{out}}\) sources indépendantes éteintes.')

# =================== CM5 · CALCULS SUR SCHÉMA ===================
# Scénario A : émetteur commun polarisé par pont
VCC, R1, R2, RC, RE, RL, b, VBE = 12, 47e3, 10e3, 2.2e3, 1e3, 4.7e3, 150, 0.7
Eth = VCC * R2 / (R1 + R2); Rth = R1 * R2 / (R1 + R2)
IB = (Eth - VBE) / (Rth + (b + 1) * RE); IC = b * IB; IE = IB + IC
VCE = VCC - RC * IC - RE * IE
re = 0.026 / IE; Zb = (b + 1) * re; Zin = 1 / (1 / Rth + 1 / Zb)
Av0 = -RC / re; RCL = RC * RL / (RC + RL); AvL = -RCL / re; AvNoCE = -RCL / (RE + re)
ZinNoCE = 1 / (1 / Rth + 1 / ((b + 1) * (re + RE)))
vA = {'VCC': '12 V', 'R1': '47 kΩ', 'R2': '10 kΩ', 'RC': '2,2 kΩ', 'RE': '1 kΩ', 'RL': '4,7 kΩ'}
FA = fig_ec_pont(vA)
condA = r'<b>Conditions :</b> NPN au silicium en zone active, \(\beta=150\), \(V_{BE}=0{,}7\ \mathrm V\), \(r_e=\dfrac{26\ \mathrm{mV}}{I_E}\), condensateurs de valeur suffisante.'
srcA = 'Schéma A · émetteur commun'
num('c5', srcA, FA + condA + r' Que vaut le courant d\'émetteur \(I_E\) (sans négliger \(I_B\) dans le pont) ?',
    m(IE * 1e3, 'mA'), [m(((Eth - VBE) / RE) * 1e3, 'mA'), m(IE * 1e3 * 0.5, 'mA'), m((VCC - VBE) / RE * 1e3, 'mA')],
    r'Thévenin du pont : \(E_{Th}=12\times\dfrac{10}{57}=%s\) V, \(R_{Th}=47\parallel10=%s\ \mathrm{k\Omega}\). \(I_B=\dfrac{E_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}=%s\ \mu\mathrm A\), \(I_E=(\beta+1)I_B=%s\) mA. (Avec \(I_B\) négligé on trouverait \(\dfrac{E_{Th}-0{,}7}{R_E}=%s\) mA.)'
    % (fr(Eth), fr(Rth / 1e3), fr(IB * 1e6), fr(IE * 1e3), fr((Eth - VBE) / RE * 1e3)))
add('c5', srcA, FA + condA + r' Que vaut \(V_{CE}\) et dans quel mode est le transistor ?',
    [r'\(V_{CE}\approx%s\ \mathrm V\)' % fr(VCE), r'mode actif (BE directe, BC inverse)', r'\(V_{CE}\approx12\ \mathrm V\)', r'transistor saturé', r'\(V_{CE}\approx0{,}2\ \mathrm V\)'], [0, 1],
    r'\(V_{CE}=V_{CC}-R_CI_C-R_EI_E=12-%s-%s=%s\) V \(>0{,}2\) V et \(V_{BE}=0{,}7\) V : actif.' % (fr(RC * IC), fr(RE * IE), fr(VCE)))
num('c5', srcA, FA + condA + r' Résistance dynamique d\'émetteur \(r_e\) :',
    m(re, r'\Omega'), [m(re * (b + 1), r'\Omega'), m(re * 10, r'\Omega'), m(re / 10, r'\Omega')],
    r'\(r_e=\dfrac{26\ \mathrm{mV}}{I_E}=\dfrac{26}{%s}=%s\ \Omega\).' % (fr(IE * 1e3), fr(re)))
num('c5', srcA, FA + condA + r' Impédance d\'entrée \(Z_{in}\) (avec \(C_E\)) :',
    m(Zin / 1e3, r'k\Omega'), [m(Rth / 1e3, r'k\Omega'), m(Zb / 1e3, r'k\Omega'), m(ZinNoCE / 1e3, r'k\Omega')],
    r'\((\beta+1)r_e=%s\ \mathrm{k\Omega}\) ; \(Z_{in}=R_1\parallel R_2\parallel(\beta+1)r_e=%s\parallel%s=%s\ \mathrm{k\Omega}\).' % (fr(Zb / 1e3), fr(Rth / 1e3), fr(Zb / 1e3), fr(Zin / 1e3)))
num('c5', srcA, FA + condA + r' Gain en tension <b>à vide</b> (sans \(R_L\)), \(C_E\) présent :',
    r'\(A_v\approx%s\)' % fr(Av0), [r'\(A_v\approx%s\)' % fr(-Av0), r'\(A_v\approx%s\)' % fr(AvL), r'\(A_v\approx%s\)' % fr(-RC / (RE + re))],
    r'\(A_v=-\dfrac{R_C}{r_e}=-\dfrac{2\,200}{%s}=%s\).' % (fr(re), fr(Av0)))
num('c5', srcA, FA + condA + r' Gain en tension avec la charge \(R_L\) branchée, \(C_E\) présent :',
    r'\(A_v\approx%s\)' % fr(AvL), [r'\(A_v\approx%s\)' % fr(Av0), r'\(A_v\approx%s\)' % fr(-AvL), r'\(A_v\approx%s\)' % fr(AvNoCE)],
    r'\(R_C\parallel R_L=%s\ \mathrm{k\Omega}\), \(A_v=-\dfrac{R_C\parallel R_L}{r_e}=%s\) (ou \(A_{v,vide}\dfrac{R_L}{R_C+R_L}\)).' % (fr(RCL / 1e3), fr(AvL)))
add('c5', srcA, FA + condA + r' <b>Nouvelle condition : on retire \(C_E\).</b> Quelles affirmations sont justes (charge \(R_L\) branchée) ?',
    [r'\(A_v\approx%s\)' % fr(AvNoCE), r'\(Z_{in}\) augmente (\(\approx%s\ \mathrm{k\Omega}\))' % fr(ZinNoCE / 1e3), r'le point de repos \(Q\) ne change pas', r'\(A_v\approx%s\)' % fr(AvL), r'le transistor sature'], [0, 1, 2],
    r'\(A_v=-\dfrac{R_C\parallel R_L}{R_E+r_e}=%s\) ; \(Z_{in}=R_1\parallel R_2\parallel(\beta+1)(r_e+R_E)=%s\ \mathrm{k\Omega}\). En DC un condensateur est un circuit ouvert : \(Q\) inchangé.' % (fr(AvNoCE), fr(ZinNoCE / 1e3)))
num('c5', srcA, FA + condA + r' Impédance de sortie \(Z_{out}\) (\(r_o\) infinie) :',
    m(RC / 1e3, r'k\Omega'), [m(RCL / 1e3, r'k\Omega'), m(re, r'\Omega'), m(Zb / 1e3, r'k\Omega')],
    r'\(Z_{out}=R_C\) (la charge ne fait pas partie de l\'amplificateur).')

# Scénario B : polarisation par la base, condition sur beta
VCC, RB, RC, RL, b = 12, 390e3, 2.7e3, 10e3, 120
IB = (VCC - 0.7) / RB; IC = b * IB; IE = IB + IC; VCE = VCC - RC * IC
re = 0.026 / IE; Zin = 1 / (1 / RB + 1 / ((b + 1) * re)); Av0 = -RC / re; RCL = RC * RL / (RC + RL); AvL = -RCL / re
b2 = 200; IC2 = b2 * IB; ICsat = (VCC - 0.2) / RC
vB = {'VCC': '12 V', 'RB': '390 kΩ', 'RC': '2,7 kΩ', 'RL': '10 kΩ'}
FB = fig_ec_base(vB)
condB = r'<b>Conditions :</b> NPN au silicium, \(\beta=120\), \(V_{BE}=0{,}7\ \mathrm V\), \(V_{CE,sat}=0{,}2\ \mathrm V\).'
srcB = 'Schéma B · polarisation par la base'
add('c5', srcB, FB + condB + r' Point de repos : quelles valeurs sont justes ?',
    [r'\(I_C\approx%s\ \mathrm{mA}\)' % fr(IC * 1e3), r'\(V_{CE}\approx%s\ \mathrm V\)' % fr(VCE), r'\(I_B\approx%s\ \mu\mathrm A\)' % fr(IB * 1e6), r'\(I_C\approx%s\ \mathrm{mA}\)' % fr(ICsat * 1e3 * 2), r'\(V_{CE}\approx%s\ \mathrm V\)' % fr(VCC - 0.7)], [0, 1, 2],
    r'\(I_B=\dfrac{12-0{,}7}{390\ \mathrm k}=%s\ \mu\mathrm A\), \(I_C=\beta I_B=%s\) mA, \(V_{CE}=12-2{,}7\ \mathrm k\times I_C=%s\) V \(>0{,}2\) V : actif.' % (fr(IB * 1e6), fr(IC * 1e3), fr(VCE)))
num('c5', srcB, FB + condB + r' Impédance d\'entrée \(Z_{in}\) en petits signaux :',
    m(Zin, r'\Omega'), [m(RB / 1e3, r'k\Omega'), m(re, r'\Omega'), m(Zin * 2, r'\Omega')],
    r'\(r_e=\dfrac{26}{%s}=%s\ \Omega\), \((\beta+1)r_e=%s\ \Omega\), \(Z_{in}=R_B\parallel(\beta+1)r_e=%s\ \Omega\) (\(R_B\) très grande ne compte presque pas).' % (fr(IE * 1e3), fr(re), fr((b + 1) * re), fr(Zin)))
num('c5', srcB, FB + condB + r' Gain en tension chargé par \(R_L\) :',
    r'\(A_v\approx%s\)' % fr(AvL), [r'\(A_v\approx%s\)' % fr(Av0), r'\(A_v\approx%s\)' % fr(-AvL), r'\(A_v\approx%s\)' % fr(AvL / (b + 1))],
    r'\(A_v=-\dfrac{R_C\parallel R_L}{r_e}=-\dfrac{%s}{%s}=%s\) (à vide : \(%s\)).' % (fr(RCL), fr(re), fr(AvL), fr(Av0)))
add('c5', srcB, FB + r'<b>Nouvelle condition :</b> on remplace le transistor par un autre de \(\beta=200\) (même \(R_B\), même \(R_C\)). Que se passe-t-il ?',
    [r'le transistor sature', r'\(I_C\) est limité à \(I_{C,sat}\approx%s\ \mathrm{mA}\)' % fr(ICsat * 1e3), r'\(V_{CE}\approx0{,}2\ \mathrm V\)', r'\(I_C=\beta I_B\approx%s\ \mathrm{mA}\)' % fr(IC2 * 1e3), r'le montage amplifie toujours sans distorsion'], [0, 1, 2],
    r'\(\beta I_B=%s\) mA dépasse \(I_{C,sat}=\dfrac{12-0{,}2}{2{,}7\ \mathrm k}=%s\) mA : le calcul linéaire donnerait \(V_{CE}<0\), impossible. La polarisation par la base dépend de \(\beta\).' % (fr(IC2 * 1e3), fr(ICsat * 1e3)))

# Scénario C : cascade
Av1, Zi1, Zo1, Av2, Zi2, Zo2, RLc, Rs = -50, 2e3, 3e3, -20, 6e3, 1e3, 1e3, 500
k12 = Zi2 / (Zo1 + Zi2); kL = RLc / (Zo2 + RLc); ks = Zi1 / (Zi1 + Rs)
Atot = Av1 * k12 * Av2 * kL; Ag = Atot * ks
vC = {'Rs': '500 Ω', 'Av1': '−50', 'Zi1': '2 kΩ', 'Zo1': '3 kΩ', 'Av2': '−20', 'Zi2': '6 kΩ', 'Zo2': '1 kΩ', 'RL': '1 kΩ'}
FC = fig_cascade(vC)
srcC = 'Schéma C · cascade'
num('c5', srcC, FC + r'Gains \(A_{v1}\), \(A_{v2}\) <b>à vide</b>. Gain total \(\dfrac{v_{L}}{v_{in,1}}\) avec la charge \(R_L\) (sans tenir compte de \(R_s\)) :',
    r'\(%s\)' % fr(Atot), [r'\(%s\)' % fr(Av1 * Av2), r'\(%s\)' % fr(-Atot), r'\(%s\)' % fr(Av1 + Av2)],
    r'\(A_{tot}=A_{v1}\dfrac{Z_{i2}}{Z_{o1}+Z_{i2}}\,A_{v2}\dfrac{R_L}{Z_{o2}+R_L}=(-50)(%s)(-20)(%s)=%s\). Deux inversions : en phase.' % (fr(k12), fr(kL), fr(Atot)))
add('c5', srcC, FC + r'Avec la résistance de source \(R_s\), quelles affirmations sont justes ?',
    [r'\(\dfrac{v_L}{v_g}\approx%s\)' % fr(Ag), r'\(20\log\left|\dfrac{v_L}{v_{in,1}}\right|\approx%s\ \mathrm{dB}\)' % fr(20 * math.log10(abs(Atot))), r'le pont d\'entrée vaut \(\dfrac{Z_{i1}}{Z_{i1}+R_s}=%s\)' % fr(ks), r'\(\dfrac{v_L}{v_g}=%s\)' % fr(Av1 * Av2), r'\(R_s\) n\'a aucun effet'], [0, 1, 2],
    r'\(\dfrac{v_L}{v_g}=%s\times%s=%s\) ; \(20\log%s=%s\) dB.' % (fr(ks), fr(Atot), fr(Ag), fr(abs(Atot)), fr(20 * math.log10(abs(Atot)))))

# petits calculs CM5
IC = 2e-3; gm = IC / 0.026; b = 100
num('c5', 'CM5 · Giacoletto', r'<b>Conditions :</b> \(I_C=2\ \mathrm{mA}\), \(V_T=26\ \mathrm{mV}\), \(\beta=100\). Que valent \(g_m\) et \(r_\pi\) ?',
    r'\(g_m\approx%s\ \mathrm{mS}\), \(r_\pi\approx%s\ \mathrm{k\Omega}\)' % (fr(gm * 1e3), fr(b / gm / 1e3)), [r'\(g_m\approx%s\ \mathrm{mS}\), \(r_\pi\approx%s\ \Omega\)' % (fr(gm * 1e3 / 10), fr(b / gm / 10)), r'\(g_m=52\ \mathrm{mS}\), \(r_\pi=26\ \Omega\)', r'\(g_m\approx%s\ \mathrm{mS}\), \(r_\pi\approx%s\ \Omega\)' % (fr(gm * 1e3), fr(1 / gm))],
    r'\(g_m=\dfrac{I_C}{V_T}=\dfrac{2}{26}\ \mathrm S=%s\) mS, \(r_\pi=\dfrac{\beta}{g_m}=%s\ \mathrm{k\Omega}\approx(\beta+1)r_e\).' % (fr(gm * 1e3), fr(b / gm / 1e3)))
num('c5', 'CM5 · Darlington', r'<b>Conditions :</b> paire Darlington avec \(\beta_1=80\) et \(\beta_2=50\), courant de base \(I_B=10\ \mu\mathrm A\). Courant de sortie (collecteur) ?',
    m(80 * 50 * 10e-6 * 1e3, 'mA'), [m(130 * 10e-6 * 1e3, 'mA'), m(80 * 10e-6 * 1e3, 'mA'), m(4, 'A')],
    r'\(\beta_D\approx\beta_1\beta_2=4\,000\), \(I_C\approx4\,000\times10\ \mu\mathrm A=40\) mA.')
fc = 1 / (2 * math.pi * (1e3 + 2.17e3) * 10e-6)
num('c5', 'CM5 · bande passante', r'<b>Conditions :</b> le condensateur de liaison d\'entrée \(C_1=10\ \mu\mathrm F\) voit une résistance \(R_s+Z_{in}=1\ \mathrm{k\Omega}+2{,}17\ \mathrm{k\Omega}\). Fréquence de coupure basse ?',
    m(fc, 'Hz'), [m(fc * 2 * math.pi, 'Hz'), m(fc * 10, 'Hz'), m(fc / 2, 'Hz')],
    r'\(f_c=\dfrac{1}{2\pi RC}=\dfrac{1}{2\pi\times3\,170\times10^{-5}}=%s\) Hz.' % fr(fc))


# ---------------------------------------------------------------- sortie
THEMES = {'f4': 'CM4 · formules', 'k4': 'CM4 · connaissances', 'c4': 'CM4 · calculs sur schéma',
          'f5': 'CM5 · formules', 'k5': 'CM5 · connaissances', 'c5': 'CM5 · calculs sur schéma'}
js = ('/* Généré par gen_cm45.py : QCM CM4 (BJT en statique) et CM5 (BJT dynamique). Valeurs calculées, schémas SVG. */\n'
      'window.CM45_THEMES = ' + json.dumps(THEMES, ensure_ascii=False) + ';\n'
      'window.CM45 = ' + json.dumps(Q, ensure_ascii=False, indent=0) + ';\n')
open(OUT, 'w', encoding='utf-8').write(js)
from collections import Counter
print(len(Q), Counter(q['th'] for q in Q), sum(1 for q in Q if len(q['a']) > 1), 'multi')
