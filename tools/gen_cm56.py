# Génère js/data-cm56.js : QCM de révision CM5 (BJT dynamique) et CM6 (FET),
# avec schémas SVG et valeurs numériques calculées ici (aucune valeur tapée à la main).
import json, math

import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'data-cm56.js')

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

# =================== CM6 · FORMULES ===================
add('f6', 'CM6 · erratum', r'Selon l\'erratum du cours, quelle relation faut-il connaître <b>par cœur</b> ?',
    [r'la définition \(g_m=\dfrac{\mathrm dI_D}{\mathrm dV_{GS}}\)', r'\(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\) (elle serait donnée si besoin)', r'\(g_m=\dfrac{2I_{DSS}}{|V_P|}\left(1-\dfrac{V_{GS}}{V_P}\right)\)', r'\(R_{DS}=V_P\,I_{DSS}\)'], [0],
    r'L\'erratum précise que la loi quadratique n\'est pas à apprendre (donnée en évaluation si besoin), mais que \(g_m=\dfrac{\mathrm dI_D}{\mathrm dV_{GS}}\) est à connaître par cœur. La formule avec \(V_P\) de la diapo 17 est fausse.')
add('f6', 'CM6 · erratum', r'Transconductance d\'un JFET à utiliser en évaluation (erratum) :',
    [r'\(g_m=-\dfrac{2I_{DSS}}{V_{GS,off}}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)\)', r'\(g_m=\dfrac{2I_{DSS}}{|V_P|}\left(1-\dfrac{V_{GS}}{V_P}\right)\) avec \(V_P>0\)', r'\(g_m=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\)', r'\(g_m=\dfrac{I_{DSS}}{V_{GS,off}}\)'], [0],
    r'On dérive \(I_D\) : \((u^2)\'=2u\'u\) avec \(u\'=-\dfrac{1}{V_{GS,off}}\). Comme \(V_{GS,off}<0\), \(g_m>0\). Utiliser \(V_{GS,off}\), pas \(V_P\).')
add('f6', 'CM6', r'JFET : quelles relations sont justes ?',
    [r'\(I_D=I_S\) et \(I_G\approx0\)', r'\(R_{DS}=\dfrac{V_P}{I_{DSS}}\) (zone ohmique, \(V_{GS}=0\))', r'\(|V_{GS,off}|=V_P\)', r'\(I_D=\beta\,I_G\)', r'\(I_D=I_{DSS}\) pour \(V_{GS}=V_{GS,off}\)'], [0, 1, 2],
    r'\(I_D=I_{DSS}\) pour \(V_{GS}=0\) ; \(I_D=0\) pour \(V_{GS}=V_{GS,off}\).')
add('f6', 'CM6', r'Droite de charge d\'un JFET (maille drain, \(R_D\) et \(R_S\)) :',
    [r'\(I_D=-\dfrac{V_{DS}}{R_D+R_S}+\dfrac{V_{DD}}{R_D+R_S}\)', r'\(I_D=\dfrac{V_{DS}}{R_D+R_S}\)', r'\(I_D=-\dfrac{V_{DS}}{R_D}+\dfrac{V_{DD}}{R_S}\)', r'\(I_D=\dfrac{V_{DD}-V_{GS}}{R_D}\)'], [0], r'\(V_{DD}=(R_D+R_S)I_D+V_{DS}\).')
add('f6', 'CM6', r'Ampli <b>source commune</b> (\(C_S\) présent) :',
    [r'\(A_v=-g_m\,R_D\)', r'\(Z_{in}=R_1\parallel R_2\) (ou \(R_G\))', r'\(Z_{out}=R_D\)', r'\(A_v\approx1\)', r'\(Z_{out}=\dfrac{1}{g_m}\)'], [0, 1, 2], r'Gain élevé, déphasage de \(\pi\).')
add('f6', 'CM6 · erratum', r'Ampli <b>drain commun</b> (source suiveuse) :',
    [r'\(A_v=\dfrac{g_mR_S}{1+g_mR_S}\approx1\)', r'\(Z_{in}=R_G\) (très grande)', r'\(Z_{out}=\left(\dfrac{1}{R_S}+g_m\right)^{-1}=R_S\parallel\dfrac{1}{g_m}\)', r'\(Z_{out}=R_S\) exactement', r'\(A_v=-g_mR_S\)'], [0, 1, 2],
    r'L\'erratum de la diapo 19 corrige \(Z_{out}\) : on éteint \(v_{in}\), \(v_{gs}=-e_{out}\), \(i_{out}=\dfrac{e_{out}}{R_S}+g_me_{out}\).')
add('f6', 'CM6', r'MOSFET à enrichissement (canal N), région active :',
    [r'\(I_D=\tfrac12K_n\dfrac WL(V_{GS}-V_T)^2\)', r'\(g_m=K_n\dfrac WL(V_{GS}-V_T)=\dfrac{2I_D}{V_{GS}-V_T}\)', r'condition : \(V_{GS}>V_T\) et \(V_{DS}>V_{GS}-V_T\)', r'\(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\)', r'condition : \(V_{DS}<V_{GS}-V_T\)'], [0, 1, 2],
    r'\(0<V_{DS}<V_{GS}-V_T\) : région ohmique (\(R_{DS}=\dfrac{V_{DS}}{I_D}\)). \(V_{GS}<V_T\) : bloqué.')
add('f6', 'CM6', r'Variation de courant de drain pour une petite variation de \(V_{GS}\) :',
    [r'\(\Delta I_D=g_m\,\Delta V_{GS}\)', r'\(\Delta I_D=\dfrac{\Delta V_{GS}}{g_m}\)', r'\(\Delta I_D=\beta\,\Delta V_{GS}\)', r'\(\Delta I_D=g_m^2\,\Delta V_{GS}\)'], [0], r'\(g_m\) est la pente de la caractéristique de transfert, en siemens.')

# =================== CM6 · CONNAISSANCES ===================
add('k6', 'CM6', r'Le transistor à effet de champ :',
    [r'est commandé en tension (\(V_{GS}\))', r'est unipolaire (un seul type de porteur)', r'a une impédance d\'entrée très élevée', r'est commandé par un courant de base', r'est bipolaire'], [0, 1, 2], r'Dans un JFET canal N, seuls les électrons circulent (de la source au drain).')
add('k6', 'CM6', r'JFET canal N en fonctionnement normal :',
    [r'\(V_{GS}<0\), \(V_{DS}>0\), \(I_D>0\)', r'\(V_{GS}>0\), \(V_{DS}<0\)', r'\(V_{GS}>V_T\)', r'\(V_{GS}=V_{DS}\)'], [0], r'La jonction grille-source est polarisée en inverse (\(I_G\approx0\)). Canal P : tous les signes s\'inversent.')
add('k6', 'CM6', r'Distinguer \(V_{GS,off}\) et \(V_P\) :',
    [r'\(V_{GS,off}\) est la tension grille-source qui ferme le canal (\(I_D=0\))', r'\(V_P\) est la tension \(V_{DS}\) de pincement à partir de laquelle \(I_D\) devient constant', r'numériquement \(|V_{GS,off}|=V_P\)', r'\(V_P\) est la tension qui bloque le transistor', r'les datasheets donnent toujours \(V_P\)'], [0, 1, 2], r'Les datasheets donnent \(V_{GS,off}\), jamais \(V_P\).')
add('k6', 'CM6', r'Inconvénients de l\'impédance d\'entrée très élevée du FET :',
    [r'sensibilité au bruit thermique (bruit Johnson)', r'sensibilité aux charges électrostatiques et aux champs parasites', r'consommation statique élevée', r'gain en courant trop faible'], [0, 1], r'Elle reste un avantage majeur pour les capteurs et les amplificateurs d\'instrumentation.')
add('k6', 'CM6', r'Comparatif BJT / JFET du cours : quelles affirmations sont justes ?',
    [r'le JFET a une meilleure stabilité thermique', r'le BJT a un gain d\'amplification plus élevé', r'le JFET consomme moins', r'le JFET a une impédance d\'entrée plus faible', r'le JFET est bipolaire'], [0, 1, 2], r'BJT : \(I_C=\beta I_B\), \(V_{BE}=0{,}7\) V ; JFET : \(I_D=I_S\), \(I_G=0\).')
add('k6', 'CM6', r'Comparatif JFET / MOSFET du cours :',
    [r'la grille du MOSFET est séparée du canal par un isolant (\(\mathrm{SiO_2}\))', r'le canal du MOSFET est créé par la polarisation (canal d\'inversion)', r'le MOSFET a une impédance d\'entrée encore plus forte (\(>10\,000\ \mathrm{M\Omega}\))', r'le MOSFET est plus difficile et plus coûteux à fabriquer', r'la grille du JFET est isolée du canal'], [0, 1, 2],
    r'Le JFET est plus difficile à fabriquer et plus coûteux ; sa grille est en contact avec le canal (jonction PN).')
add('k6', 'CM6', r'MOSFET canal N : formation du canal :',
    [r'au-delà de \(V_T\), des électrons s\'accumulent sous le \(\mathrm{SiO_2}\) et forment un canal d\'inversion', r'le canal existe déjà à \(V_{GS}=0\) et on le réduit', r'les trous forment le canal', r'le courant traverse l\'oxyde de grille'], [0], r'Pour \(V_{GS}<V_T\) le transistor est bloqué (cut-off).')
add('k6', 'CM6', r'JFET en commutation (hypothèse \(R_D\gg R_{DS}\)) :',
    [r'si \(V_{in}=V_{GS}<V_{GS,off}\) : interrupteur ouvert, \(V_{out}=V_{DD}\)', r'si \(V_{in}=V_{GS}=0\) : interrupteur fermé équivalent à \(R_{DS}\), \(V_{out}\approx0\)', r'si \(V_{GS}=0\) le transistor est bloqué', r'\(V_{out}=V_{DD}\) pour \(V_{in}=0\)'], [0, 1], r'C\'est un inverseur.')
add('k6', 'CM6', r'Pourquoi l\'ampli source commune est-il adapté à l\'amplification et le drain commun à l\'adaptation d\'impédance ?',
    [r'source commune : gain \(-g_mR_D\) élevé', r'drain commun : \(A_v\approx1\) et \(Z_{in}\) très élevée', r'drain commun : gain très élevé', r'source commune : \(Z_{out}\) nulle'], [0, 1], r'Le drain commun est aussi appelé « source suiveuse ».')
add('k6', 'CM6', r'Dans le modèle petits signaux du FET, la résistance \(r_o\) (ou \(r_{ds}\)) :',
    [r'est omise dans les calculs sauf avis contraire', r'est toujours très faible', r'remplace \(g_m\)', r'est en série avec la grille'], [0], r'Comme pour le BJT, sa valeur élevée n\'a qu\'un faible impact.')

# =================== CM6 · CALCULS SUR SCHÉMA ===================
# Scénario D : autopolarisation, I_D donné (comme l'exemple du cours)
VDD, RD, RS, RG, ID = 12, 2.2e3, 330, 1e6, 3e-3
VD = VDD - RD * ID; VS = RS * ID; VDS = VD - VS; VGS = -VS
vD = {'VDD': '12 V', 'RD': '2,2 kΩ', 'RS': '330 Ω', 'RG': '1 MΩ'}
FD = fig_jfet_auto(vD)
condD = r'<b>Conditions :</b> JFET canal N, courant de drain \(I_D=3\ \mathrm{mA}\) (mesuré), courant de grille négligeable.'
srcD = 'Schéma D · JFET autopolarisé'
add('c6', srcD, FD + condD + r' Quelles valeurs sont justes ?',
    [r'\(V_G\approx0\ \mathrm V\)', r'\(V_{GS}=%s\ \mathrm V\)' % fr(VGS), r'\(V_{DS}=%s\ \mathrm V\)' % fr(VDS), r'\(V_{GS}=+%s\ \mathrm V\)' % fr(VS), r'\(V_{DS}=%s\ \mathrm V\)' % fr(VD)], [0, 1, 2],
    r'\(I_G\approx0\) donc pas de chute dans \(R_G\) : \(V_G=0\). \(V_S=R_SI_D=%s\) V, \(V_{GS}=V_G-V_S=%s\) V (négatif, conforme). \(V_D=V_{DD}-R_DI_D=%s\) V, \(V_{DS}=V_D-V_S=%s\) V.' % (fr(VS), fr(VGS), fr(VD), fr(VDS)))
num('c6', srcD, FD + r'<b>Conditions :</b> on mesure \(I_G=1\ \mathrm{nA}\) quand on applique \(V_{GS}=-20\ \mathrm V\) (datasheet). Impédance d\'entrée vue par la grille du transistor ?',
    r'\(20\,000\ \mathrm{M\Omega}\)', [r'\(20\ \mathrm{M\Omega}\)', r'\(20\ \mathrm{k\Omega}\)', r'\(1\ \mathrm{M\Omega}\)'],
    r'Loi d\'Ohm : \(R_{in}=\dfrac{V_{GS}}{I_G}=\dfrac{20}{10^{-9}}=2\cdot10^{10}\ \Omega=20\,000\ \mathrm{M\Omega}\) (le montage, lui, a \(Z_{in}=R_G\)).')

# Scénario E : autopolarisation, loi quadratique
IDSS, Voff, RS, RD, VDD, RL = 10e-3, -5.0, 500, 1.5e3, 18, 10e3
a = IDSS / Voff ** 2; bq = -2 * IDSS / Voff * 1 + 1 / RS  # I_D = IDSS(1 - V/Voff)^2 with V = -RS*ID ; solve in V
# (−V)/RS = IDSS (1 − V/Voff)^2  ->  IDSS/Voff^2 V^2 + (−2 IDSS/Voff + 1/RS) V + IDSS = 0
A_, B_, C_ = IDSS / Voff ** 2, -2 * IDSS / Voff + 1 / RS, IDSS
dl = B_ * B_ - 4 * A_ * C_
V1 = (-B_ + math.sqrt(dl)) / (2 * A_); V2 = (-B_ - math.sqrt(dl)) / (2 * A_)
VGS = V1 if Voff < V1 <= 0 else V2; Vbad = V2 if VGS == V1 else V1
ID = -VGS / RS; VDS = VDD - (RD + RS) * ID
gm = -2 * IDSS / Voff * (1 - VGS / Voff)
Av = -gm * RD; AvL = -gm * (RD * RL / (RD + RL)); AvNoCS = -gm * RD / (1 + gm * RS)
vE = {'VDD': '18 V', 'RD': '1,5 kΩ', 'RS': '500 Ω', 'RG': '1 MΩ'}
FE = fig_jfet_auto(vE, cs=True, rl='10 kΩ')
condE = r'<b>Conditions :</b> JFET canal N, \(I_{DSS}=10\ \mathrm{mA}\), \(V_{GS,off}=-5\ \mathrm V\), loi donnée \(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\), \(C_1\), \(C_2\), \(C_S\) de valeur suffisante.'
srcE = 'Schéma E · JFET autopolarisé, source commune'
add('c6', srcE, FE + condE + r' Point de repos : quelles affirmations sont justes ?',
    [r'\(V_{GS}\approx%s\ \mathrm V\)' % fr(VGS), r'\(I_D\approx%s\ \mathrm{mA}\)' % fr(ID * 1e3), r'la racine \(V_{GS}\approx%s\ \mathrm V\) est rejetée car inférieure à \(V_{GS,off}\)' % fr(Vbad), r'\(I_D=I_{DSS}=10\ \mathrm{mA}\)', r'\(V_{GS}\approx+%s\ \mathrm V\)' % fr(-VGS)], [0, 1, 2],
    r'\(V_G=0\), \(V_{GS}=-R_SI_D\). On remplace dans la loi : équation du second degré, racines \(%s\) V et \(%s\) V. On garde \(V_{GS,off}<V_{GS}\le0\) : \(V_{GS}=%s\) V, \(I_D=\dfrac{-V_{GS}}{R_S}=%s\) mA.' % (fr(V1), fr(V2), fr(VGS), fr(ID * 1e3)))
add('c6', srcE, FE + condE + r' Tension \(V_{DS}\) et zone de fonctionnement :',
    [r'\(V_{DS}\approx%s\ \mathrm V\)' % fr(VDS), r'zone active (car \(V_{DS}>V_{GS}-V_{GS,off}=%s\ \mathrm V\))' % fr(VGS - Voff), r'zone ohmique', r'\(V_{DS}\approx%s\ \mathrm V\)' % fr(VDD - RD * ID)], [0, 1],
    r'\(V_{DS}=V_{DD}-(R_D+R_S)I_D=18-2\ \mathrm k\times%s\ \mathrm{mA}=%s\) V.' % (fr(ID * 1e3), fr(VDS)))
num('c6', srcE, FE + condE + r' Transconductance \(g_m\) au point de repos (formule de l\'erratum) :',
    m(gm * 1e3, 'mS'), [m(2 * IDSS / 5 * 1e3, 'mS'), m(gm * 1e3 / 2, 'mS'), m(ID / 0.026 * 1e3, 'mS')],
    r'\(g_m=-\dfrac{2I_{DSS}}{V_{GS,off}}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)=\dfrac{2\times10}{5}\left(1-\dfrac{%s}{-5}\right)=%s\) mS.' % (fr(VGS), fr(gm * 1e3)))
add('c6', srcE, FE + condE + r' Gain en tension et impédances (avec \(g_m\) du point de repos) :',
    [r'\(A_v\approx%s\) avec \(R_L\) branchée' % fr(AvL), r'\(A_v\approx%s\) à vide' % fr(Av), r'\(Z_{in}=R_G=1\ \mathrm{M\Omega}\) et \(Z_{out}=R_D\)', r'\(A_v\approx%s\) avec \(R_L\)' % fr(-AvL), r'\(Z_{in}=R_S\)'], [0, 1, 2],
    r'\(A_v=-g_mR_D=%s\) ; avec la charge, \(-g_m(R_D\parallel R_L)=%s\).' % (fr(Av), fr(AvL)))
num('c6', srcE, FE + condE + r' <b>Nouvelle condition : on retire \(C_S\)</b> (\(R_S\) non découplée), sans charge. Gain en tension :',
    r'\(A_v\approx%s\)' % fr(AvNoCS), [r'\(A_v\approx%s\)' % fr(Av), r'\(A_v\approx%s\)' % fr(-AvNoCS), r'\(A_v\approx1\)'],
    r'\(A_v=-\dfrac{g_mR_D}{1+g_mR_S}=-\dfrac{%s}{1+%s}=%s\). Le point de repos ne change pas.' % (fr(gm * RD), fr(gm * RS), fr(AvNoCS)))

# Scénario F : pont diviseur
IDSS, Voff, R1, R2, RD, RS, VDD = 12e-3, -6.0, 1e6, 200e3, 2e3, 2e3, 24
VTh = VDD * R2 / (R1 + R2); RTh = R1 * R2 / (R1 + R2)
# (VTh - V)/RS = IDSS (1 - V/Voff)^2
A_ = IDSS / Voff ** 2; B_ = -2 * IDSS / Voff + 1 / RS; C_ = IDSS - VTh / RS
dl = B_ * B_ - 4 * A_ * C_
V1 = (-B_ + math.sqrt(dl)) / (2 * A_); V2 = (-B_ - math.sqrt(dl)) / (2 * A_)
VGS = V1 if Voff < V1 <= 0 else V2; Vbad = V2 if VGS == V1 else V1
ID = (VTh - VGS) / RS; VDS = VDD - (RD + RS) * ID
vF = {'VDD': '24 V', 'R1': '1 MΩ', 'R2': '200 kΩ', 'RD': '2 kΩ', 'RS': '2 kΩ'}
FF = fig_fet_pont(vF)
condF = r'<b>Conditions :</b> JFET canal N, \(I_{DSS}=12\ \mathrm{mA}\), \(V_{GS,off}=-6\ \mathrm V\), \(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\), \(I_G=0\).'
srcF = 'Schéma F · JFET polarisé par pont'
num('c6', srcF, FF + condF + r' Générateur de Thévenin vu par la grille :',
    r'\(V_{Th}=%s\ \mathrm V\), \(R_{Th}\approx%s\ \mathrm{k\Omega}\)' % (fr(VTh), fr(RTh / 1e3)), [r'\(V_{Th}=%s\ \mathrm V\), \(R_{Th}=1{,}2\ \mathrm{M\Omega}\)' % fr(VDD * R1 / (R1 + R2)), r'\(V_{Th}=24\ \mathrm V\), \(R_{Th}=200\ \mathrm{k\Omega}\)', r'\(V_{Th}=%s\ \mathrm V\), \(R_{Th}=1{,}2\ \mathrm{M\Omega}\)' % fr(VTh)],
    r'\(V_{Th}=V_{DD}\dfrac{R_2}{R_1+R_2}=24\times\dfrac{0{,}2}{1{,}2}=%s\) V ; \(R_{Th}=R_1\parallel R_2=%s\ \mathrm{k\Omega}\). Comme \(I_G=0\), aucune chute dans \(R_{Th}\) : \(V_G=V_{Th}\).' % (fr(VTh), fr(RTh / 1e3)))
add('c6', srcF, FF + condF + r' Point de repos : quelles valeurs sont justes ?',
    [r'\(V_{GS}\approx%s\ \mathrm V\)' % fr(VGS), r'\(I_D\approx%s\ \mathrm{mA}\)' % fr(ID * 1e3), r'\(V_{DS}\approx%s\ \mathrm V\)' % fr(VDS), r'\(V_{GS}\approx%s\ \mathrm V\)' % fr(Vbad), r'\(I_D=\dfrac{V_{Th}}{R_S}=%s\ \mathrm{mA}\)' % fr(VTh / RS * 1e3)], [0, 1, 2],
    r'\(I_D=\dfrac{V_{Th}-V_{GS}}{R_S}\) et la loi quadratique donnent les racines \(%s\) V et \(%s\) V ; on garde \(V_{GS}>V_{GS,off}\). \(I_D=%s\) mA, \(V_{DS}=V_{DD}-(R_D+R_S)I_D=%s\) V \(>V_{GS}-V_{GS,off}=%s\) V : zone active.' % (fr(V1), fr(V2), fr(ID * 1e3), fr(VDS), fr(VGS - Voff)))

# Scénario G : drain commun
RS, gm, RG = 1e3, 4e-3, 1e6
Av = gm * RS / (1 + gm * RS); Zout = 1 / (1 / RS + gm)
vG = {'VDD': '15 V', 'RS': '1 kΩ', 'RG': '1 MΩ'}
FG = fig_drain_commun(vG)
condG = r'<b>Conditions :</b> au point de repos \(g_m=4\ \mathrm{mS}\) ; \(r_o\) négligée ; pas de charge.'
srcG = 'Schéma G · drain commun'
add('c6', srcG, FG + condG + r' Quelles valeurs sont justes ?',
    [r'\(A_v=%s\)' % fr(Av), r'\(Z_{in}=1\ \mathrm{M\Omega}\)', r'\(Z_{out}=%s\ \Omega\)' % fr(Zout), r'\(Z_{out}=1\ \mathrm{k\Omega}\)', r'\(A_v=-4\)'], [0, 1, 2],
    r'\(A_v=\dfrac{g_mR_S}{1+g_mR_S}=\dfrac{4}{5}=%s\) ; \(Z_{in}=R_G\) ; \(Z_{out}=\left(\dfrac{1}{R_S}+g_m\right)^{-1}=\dfrac{1}{10^{-3}+4\cdot10^{-3}}=%s\ \Omega\) (erratum : ce n\'est pas \(R_S\)).' % (fr(Av), fr(Zout)))

# Scénario H : MOSFET, condition sur la région
K, VT, VDD, R1, R2 = 2e-3, 2.0, 15, 200e3, 100e3
VG = VDD * R2 / (R1 + R2); VGS = VG; ID = 0.5 * K * (VGS - VT) ** 2
RD1, RD2 = 1e3, 1.5e3
VDS1 = VDD - RD1 * ID; VDS2 = VDD - RD2 * ID; gmM = K * (VGS - VT)
vH = {'VDD': '15 V', 'R1': '200 kΩ', 'R2': '100 kΩ', 'RD': '1 kΩ', 'RS': '0 Ω (fil)'}
FH = fig_fet_pont(vH, mos=True)
condH = r'<b>Conditions :</b> N-MOSFET, \(V_T=2\ \mathrm V\), \(K_n\dfrac WL=2\ \mathrm{mA/V^2}\), loi \(I_D=\tfrac12K_n\dfrac WL(V_{GS}-V_T)^2\) en région active, source à la masse (\(R_S=0\)).'
srcH = 'Schéma H · MOSFET'
add('c6', srcH, FH + condH + r' En supposant la région active, quelles valeurs sont justes ?',
    [r'\(V_{GS}=%s\ \mathrm V\)' % fr(VGS), r'\(I_D=%s\ \mathrm{mA}\)' % fr(ID * 1e3), r'\(V_{DS}=%s\ \mathrm V\), hypothèse vérifiée (\(V_{DS}>V_{GS}-V_T=%s\ \mathrm V\))' % (fr(VDS1), fr(VGS - VT)), r'\(I_D=%s\ \mathrm{mA}\)' % fr(K * (VGS - VT) ** 2 * 1e3), r'le transistor est bloqué'], [0, 1, 2],
    r'\(I_G=0\) : \(V_G=15\times\dfrac{100}{300}=%s\) V \(=V_{GS}\). \(I_D=\tfrac12\times2\times(%s-2)^2=%s\) mA. \(V_{DS}=15-1\ \mathrm k\times%s\ \mathrm{mA}=%s\) V.' % (fr(VG), fr(VGS), fr(ID * 1e3), fr(ID * 1e3), fr(VDS1)))
num('c6', srcH, FH + condH + r' Transconductance au point de repos (\(R_D=1\ \mathrm{k\Omega}\)) :',
    m(gmM * 1e3, 'mS'), [m(gmM * 1e3 / 2, 'mS'), m(gmM * 1e3 * 1.5, 'mS'), m(gmM * 1e3 * 3, 'mS')],
    r'\(g_m=K_n\dfrac WL(V_{GS}-V_T)=2\times%s=%s\) mS, ou \(\dfrac{2I_D}{V_{GS}-V_T}=\dfrac{2\times%s}{%s}\).' % (fr(VGS - VT), fr(gmM * 1e3), fr(ID * 1e3), fr(VGS - VT)))
add('c6', srcH, FH + condH + r' <b>Nouvelle condition : \(R_D=1{,}5\ \mathrm{k\Omega}\).</b> Que conclure ?',
    [r'avec la loi de la région active on trouverait \(V_{DS}=%s\ \mathrm V\)' % fr(VDS2), r'cette valeur est inférieure à \(V_{GS}-V_T=%s\ \mathrm V\) : l\'hypothèse « région active » est fausse' % fr(VGS - VT), r'le transistor est en région ohmique', r'le transistor est bloqué', r'\(I_D\) reste égal à \(%s\ \mathrm{mA}\)' % fr(ID * 1e3)], [0, 1, 2],
    r'\(V_{DS}=15-1{,}5\ \mathrm k\times%s\ \mathrm{mA}=%s\) V \(<%s\) V : le canal n\'est pas pincé, on est en région ohmique et la loi quadratique ne s\'applique plus.' % (fr(ID * 1e3), fr(VDS2), fr(VGS - VT)))

# Scénario I : commutation
IDSS, VP, VDD, RD = 18.5e-3, 1.4, 10, 4.7e3
RDS = VP / IDSS; Vout_on = VDD * RDS / (RDS + RD)
vI = {'VDD': '10 V', 'RD': '4,7 kΩ'}
FI = fig_switch(vI)
condI = r'<b>Conditions :</b> JFET avec \(I_{DSS}=18{,}5\ \mathrm{mA}\), \(V_P=1{,}4\ \mathrm V\) (\(V_{GS,off}=-1{,}4\ \mathrm V\)), \(R_{DS}=\dfrac{V_P}{I_{DSS}}\).'
srcI = 'Schéma I · JFET en commutation'
add('c6', srcI, FI + condI + r' Quelles affirmations sont justes ?',
    [r'\(R_{DS}\approx%s\ \Omega\)' % fr(RDS), r'pour \(V_{in}=0\) : \(V_{out}\approx%s\ \mathrm V\)' % fr(Vout_on), r'pour \(V_{in}=-5\ \mathrm V\) : \(V_{out}=10\ \mathrm V\)', r'pour \(V_{in}=0\) : \(V_{out}=10\ \mathrm V\)', r'pour \(V_{in}=-5\ \mathrm V\) : \(V_{out}\approx0\)'], [0, 1, 2],
    r'\(R_{DS}=\dfrac{1{,}4}{0{,}0185}=%s\ \Omega\). \(V_{in}=0\) : interrupteur fermé, \(V_{out}=V_{DD}\dfrac{R_{DS}}{R_{DS}+R_D}=%s\) V. \(V_{in}=-5\ \mathrm V<V_{GS,off}\) : bloqué, \(V_{out}=V_{DD}\).' % (fr(RDS), fr(Vout_on)))
num('c6', 'CM6 · transconductance', r'<b>Conditions :</b> un JFET a une transconductance \(g_m=5\ \mathrm{mS}\) (\(5\,000\ \mu\mathrm S\)). On fait varier \(V_{GS}\) de \(1\ \mathrm V\). Variation du courant de drain ?',
    m(5, 'mA'), [m(0.2, 'mA'), m(5, r'\mu A'), m(50, 'mA')], r'\(\Delta I_D=g_m\Delta V_{GS}=5\cdot10^{-3}\times1=5\) mA (exemple du cours).')

# ---------------------------------------------------------------- sortie
THEMES = {'f5': 'CM5 · formules', 'k5': 'CM5 · connaissances', 'c5': 'CM5 · calculs sur schéma',
          'f6': 'CM6 · formules', 'k6': 'CM6 · connaissances', 'c6': 'CM6 · calculs sur schéma'}
js = ('/* Généré par gen_cm56.py : QCM CM5 (BJT dynamique) et CM6 (FET). Valeurs calculées, schémas SVG. */\n'
      'window.CM56_THEMES = ' + json.dumps(THEMES, ensure_ascii=False) + ';\n'
      'window.CM56 = ' + json.dumps(Q, ensure_ascii=False, indent=0) + ';\n')
open(OUT, 'w', encoding='utf-8').write(js)
from collections import Counter
print(len(Q), Counter(q['th'] for q in Q), sum(1 for q in Q if len(q['a']) > 1), 'multi')
