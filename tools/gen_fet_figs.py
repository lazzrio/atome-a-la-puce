# Génère les schémas SVG de la fiche FET (fiche-fet.html) et les insère à leur place.
# Usage : python tools/gen_fet_figs.py   (relançable : les figures sont repérées par des commentaires <!-- fet-fig:nom -->)
import math, os, re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PAGE = os.path.join(ROOT, 'fiche-fet.html')
CSS = os.path.join(ROOT, 'css', 'style.css')


# ------------------------------------------------------------ texte : V[GS] -> V avec indice GS
def tx(s):
    parts = re.split(r'\[([^\]]*)\]', s)
    out, ouverts = '', 0
    for i, p in enumerate(parts):
        if i % 2 == 0:
            out += p
        else:
            out += '<tspan class="sb" dy="4">%s</tspan><tspan dy="-4">' % p
            ouverts += 1
    return out + '</tspan>' * ouverts


class F:
    def __init__(self, w, h):
        self.w, self.h, self.p = w, h, []

    def add(self, s): self.p.append(s)

    def text(self, x, y, s, cls='t', anchor='start'):
        self.add('<text class="%s" x="%s" y="%s" text-anchor="%s">%s</text>' % (cls, x, y, anchor, tx(s)))

    def line(self, *pts, cls='w', dash=False, arrow=False):
        d = 'M%s %s ' % pts[0] + ' '.join('L%s %s' % p for p in pts[1:])
        self.add('<path class="%s%s" d="%s"%s/>' % (cls, ' dsh' if dash else '', d, ' marker-end="url(#fa)"' if arrow else ''))

    def rect(self, x, y, w, h, cls='fr', extra=''):
        self.add('<rect class="%s" x="%s" y="%s" width="%s" height="%s" %s/>' % (cls, x, y, w, h, extra))

    def dot(self, x, y): self.add('<circle class="dot" cx="%s" cy="%s" r="3.5"/>' % (x, y))

    def gnd(self, x, y):
        self.line((x - 10, y), (x + 10, y)); self.line((x - 6, y + 5), (x + 6, y + 5)); self.line((x - 2, y + 10), (x + 2, y + 10))

    def resv(self, x, y1, y2, lab, side='r'):
        m = (y1 + y2) / 2
        self.line((x, y1), (x, m - 20)); self.line((x, m + 20), (x, y2))
        self.rect(x - 7, m - 20, 14, 40, 'res')
        if side == 'r': self.text(x + 14, m + 5, lab)
        else: self.text(x - 14, m + 5, lab, anchor='end')

    def resh(self, x1, x2, y, lab):
        m = (x1 + x2) / 2
        self.line((x1, y), (m - 20, y)); self.line((m + 20, y), (x2, y))
        self.rect(m - 20, y - 7, 40, 14, 'res'); self.text(m, y - 12, lab, anchor='middle')

    def vcc(self, x, y, lab):
        self.line((x - 10, y), (x + 10, y)); self.text(x, y - 8, lab, 'tn2', 'middle')

    def jfet(self, x, y, canal='N'):
        """canal vertical en x ; grille à gauche ; drain en (x+22, y-50) ; source en (x+22, y+50)"""
        self.line((x, y - 30), (x, y + 30))
        self.line((x, y - 24), (x + 22, y - 24), (x + 22, y - 50)); self.line((x, y + 24), (x + 22, y + 24), (x + 22, y + 50))
        self.line((x - 40, y), (x, y))
        if canal == 'N': self.add('<path class="dot" d="M%s %s l-9 -5 v10z" transform="translate(-12 0)"/>' % (x, y))
        else: self.add('<path class="dot" d="M%s %s l9 -5 v10z" transform="translate(-20 0)"/>' % (x - 9, y))

    def mos(self, x, y, canal='N'):
        self.line((x - 8, y - 30), (x - 8, y + 30))
        for a, b in ((-30, -18), (-6, 6), (18, 30)): self.line((x, y + a), (x, y + b))
        self.line((x, y - 24), (x + 22, y - 24), (x + 22, y - 50)); self.line((x, y + 24), (x + 22, y + 24), (x + 22, y + 50))
        self.line((x, y), (x + 22, y)); self.line((x + 22, y), (x + 22, y + 24))
        self.line((x - 40, y), (x - 8, y))
        if canal == 'N': self.add('<path class="dot" d="M%s %s l9 -5 v10z" transform="translate(1 0)"/>' % (x, y))
        else: self.add('<path class="dot" d="M%s %s l-9 -5 v10z" transform="translate(11 0)"/>' % (x + 9, y))

    def src(self, x, y, lab, r=20, up=False):
        self.add('<circle class="src" cx="%s" cy="%s" r="%s"/>' % (x, y, r))
        a, b = (y + 12, y - 12) if up else (y - 12, y + 12)
        self.line((x, a), (x, b), arrow=True)
        self.text(x + r + 8, y + 5, lab)

    def axes(self, x0, y0, x1, y1, xl, yl):
        self.line((x0, y0), (x1, y0), cls='ax', arrow=True); self.line((x0, y0), (x0, y1), cls='ax', arrow=True)
        self.text(x1 + 4, y0 + 18, xl, anchor='end'); self.text(x0 + 8, y1 + 6, yl)

    def svg(self, aria, caption):
        defs = '<defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fa"/></marker></defs>'
        return ('<!-- fet-fig:%s -->' % aria.split('|')[0] +
                '<figure class="s4-fig fet-fig"><svg viewBox="0 0 %d %d" role="img" aria-label="%s">' % (self.w, self.h, aria.split('|')[1]) +
                defs + ''.join(self.p) + '</svg><figcaption>%s</figcaption></figure>' % re.sub(r'\[([^\]]*)\]', r'<sub>\1</sub>', caption))


FIG = {}

# ============================================================ 0. commande en courant ou en tension
f = F(600, 180)
f.rect(40, 50, 190, 90, 'fr'); f.text(135, 88, 'BJT', 'tn2', 'middle'); f.text(135, 114, 'commandé en courant', 't', 'middle')
f.line((0, 95), (40, 95), arrow=True); f.text(4, 80, 'I[B]'); f.line((230, 95), (290, 95), arrow=True); f.text(236, 80, 'I[C] = β I[B]')
f.rect(350, 50, 190, 90, 'fr'); f.text(445, 88, 'FET', 'tn2', 'middle'); f.text(445, 114, 'commandé en tension', 't', 'middle')
f.line((310, 95), (350, 95), arrow=True); f.text(312, 80, 'V[GS]'); f.line((540, 95), (598, 95), arrow=True); f.text(548, 80, 'I[D]')
f.text(445, 164, 'I[G] ≈ 0 : le courant de grille est nul', 'ti', 'middle')
FIG['commande'] = f.svg('commande|Commande en courant du BJT, commande en tension du FET', 'Le BJT est piloté par un courant de base, le FET par une tension grille-source (courant de grille nul).')

# ============================================================ 1. structure du canal (3 états)
f = F(640, 268)
for k, (x0, d, titre, sous) in enumerate([(0, 8, 'Canal ouvert', 'V[GS] = 0'), (210, 22, 'Canal rétréci', 'V[GS] < 0'), (420, 35, 'Canal fermé', 'V[GS] ≤ V[GS,off]')]):
    f.text(x0 + 105, 24, titre, 'tn2', 'middle'); f.text(x0 + 105, 44, sous, 't', 'middle')
    f.rect(x0 + 30, 85, 150, 70, 'ch')                       # canal N
    f.rect(x0 + 60, 55, 90, 30, 'gt'); f.rect(x0 + 60, 155, 90, 30, 'gt')   # grilles P
    f.text(x0 + 105, 75, 'P', 't', 'middle'); f.text(x0 + 105, 177, 'P', 't', 'middle')
    f.rect(x0 + 60, 85, 90, d, 'zdc'); f.rect(x0 + 60, 155 - d, 90, d, 'zdc')   # zones désertées
    f.line((x0 + 8, 120), (x0 + 30, 120)); f.line((x0 + 180, 120), (x0 + 202, 120))
    f.text(x0 + 4, 112, 'S'); f.text(x0 + 192, 112, 'D')
    f.text(x0 + 105, 205, ['I[D] maximal (I[DSS])', 'I[D] plus faible', 'I[D] = 0'][k], 't', 'middle')
f.text(320, 238, 'teinte bleue : canal N · teinte foncée : zone désertée de charge (ZDC)', 'ti', 'middle')
f.text(320, 258, 'plus |V[GS]| est grand, plus la ZDC est large', 'ti', 'middle')
FIG['structure'] = f.svg('structure|Le canal du JFET se rétrécit puis se ferme quand la tension grille-source devient plus négative', 'La grille P polarisée en inverse crée une zone désertée qui rétrécit le canal. Quand les deux zones se touchent, le canal est fermé.')

# ============================================================ 2. symboles
f = F(640, 250)
sym = [(70, 'JFET canal N', 'V[GS] < 0 · V[DS] > 0', 'I[D] > 0', 'jfetN'), (230, 'JFET canal P', 'V[GS] > 0 · V[DS] < 0', 'I[D] < 0', 'jfetP'),
       (390, 'N-MOSFET', 'V[GS] > V[T] · V[DS] > 0', 'canal d\'électrons', 'mosN'), (550, 'P-MOSFET', 'V[GS] < −V[T]', 'canal de trous', 'mosP')]
for x, nom, c1, c2, kind in sym:
    y = 95
    if kind.startswith('jfet'): f.jfet(x, y, kind[-1])
    else: f.mos(x, y, kind[-1])
    f.text(x - 44, y - 8, 'G', 't', 'end'); f.text(x + 30, y - 55, 'D'); f.text(x + 30, y + 62, 'S')
    f.text(x, 188, nom, 'tn2', 'middle'); f.text(x, 210, c1, 't', 'middle'); f.text(x, 230, c2, 't', 'middle')
f.text(320, 14, 'I[G] = 0 (JFET : jonction en inverse · MOSFET : isolant SiO[2])', 'ti', 'middle')
FIG['symboles'] = f.svg('symboles|Symboles du JFET et du MOSFET, canal N et canal P', 'Dans le JFET, la flèche de grille entre vers le canal pour un canal N (elle sort pour un canal P). Le MOSFET a une grille séparée du canal par un isolant.')

# ============================================================ 3. caractéristique de sortie
f = F(640, 330)
x0, y0, W, H = 70, 285, 440, 235
f.rect(x0, 50, 150, y0 - 50, 'zo')                              # région ohmique
f.axes(x0, y0, 560, 40, 'V[DS]', 'I[D]')
xp = x0 + 150
f.line((xp, y0), (xp, 50), dash=True); f.text(xp, y0 + 18, 'V[P]', 't', 'middle')
yi = y0 - H
f.line((x0, yi), (500, yi), dash=True); f.text(x0 - 6, yi + 5, 'I[DSS]', 't', 'end')
for lvl, pinch, lab in ((1.0, 1.0, 'V[GS] = 0'), (0.5, 0.62, 'V[GS1] < 0'), (0.18, 0.36, 'V[GS2] < V[GS1]')):
    pts = []
    for i in range(0, 31):
        t = i / 30
        pts.append((x0 + 150 * pinch * t, y0 - H * lvl * (1 - (1 - t) ** 2)))
    xe = x0 + 150 * pinch
    pts += [(500, y0 - H * lvl - 6 * lvl)]
    f.add('<path class="cv" d="M%s"/>' % ' L'.join('%.1f %.1f' % p for p in pts))
    f.text(505, y0 - H * lvl - 6 * lvl + 4, lab, 't')
f.text(x0 + 45, 72, 'ohmique', 'ti', 'middle'); f.text(x0 + 45, 92, 'V[DS] < V[P]', 't', 'middle')
f.text(xp + 130, 70, 'région active : V[DS] > V[P]', 'ti', 'middle'); f.text(xp + 130, 90, 'I[D] ≈ constant', 't', 'middle')
f.text(xp + 12, y0 - 12, 'R[DS] = V[P] / I[DSS] (pente à l\'origine)', 't')
FIG['sortie'] = f.svg('sortie|Caractéristique de sortie I D en fonction de V DS du JFET', 'Réseau de sortie I[D] = f(V[DS]) : à gauche de V[P] le JFET se comporte comme une résistance, à droite il est en zone active. Plus |V[GS]| est grand, plus le courant est faible.')

# ============================================================ 4. caractéristique de transfert
f = F(600, 330)
xa, xb, ya, yb = 90, 480, 285, 60                                  # VGS,off à gauche, VGS = 0 à droite
f.line((xa - 20, ya), (xb + 20, ya), cls='ax', arrow=True); f.line((xb, ya + 10), (xb, 40), cls='ax', arrow=True)
f.text(xb + 22, ya + 18, 'V[GS]', anchor='end'); f.text(xb - 8, 36, 'I[D]', anchor='end')
pts = []
for i in range(0, 41):
    u = 1 - i / 40
    pts.append((xb - u * (xb - xa), ya - (ya - yb) * (1 - u) ** 2))
f.add('<path class="cv" d="M%s"/>' % ' L'.join('%.1f %.1f' % p for p in pts))
f.dot(xa, ya); f.text(xa, ya + 20, 'V[GS,off]', 't', 'middle'); f.text(xa, ya - 12, 'I[D] = 0', 't', 'middle')
f.dot(xb, yb); f.text(xb - 8, yb + 4, 'I[DSS]  (V[GS] = 0)', 't', 'end')
u = 0.5; qx, qy = xb - u * (xb - xa), ya - (ya - yb) * (1 - u) ** 2
f.line((qx, ya), (qx, qy), dash=True); f.line((xb, qy), (qx, qy), dash=True); f.dot(qx, qy)
f.text(qx, ya + 20, 'V[GS]', 't', 'middle'); f.text(xb + 6, qy + 4, 'I[D]')
f.text(qx + 12, qy - 10, 'Q', 'tn2')
pente = -(2 * (ya - yb) * (1 - u)) / (xb - xa) * -1                  # dy/dx en pixels (y vers le bas)
dx = 80
f.line((qx - dx, qy + pente * dx), (qx + dx, qy - pente * dx), cls='w2')
f.text(qx + dx + 8, qy - pente * dx - 2, 'pente = g[m]', 'ti')
f.text(300, 120, 'I[D] = I[DSS] (1 − V[GS] / V[GS,off])²', 't', 'middle')
FIG['transfert'] = f.svg('transfert|Caractéristique de transfert I D en fonction de V GS du JFET', 'Courbe de transfert I[D] = f(V[GS]) : une parabole qui part de 0 à V[GS,off] et atteint I[DSS] pour V[GS] = 0. La transconductance g[m] est la pente de la tangente en Q.')

# ============================================================ 5. autopolarisation
f = F(520, 300)
f.vcc(260, 24, 'V[DD]'); f.line((260, 24), (260, 44))
f.resv(260, 44, 106, 'R[D]'); f.jfet(238, 150, 'N')
f.line((260, 106), (260, 100)); f.line((260, 200), (260, 214))
f.resv(260, 200, 262, 'R[S]'); f.gnd(260, 262)
f.line((198, 150), (110, 150)); f.line((110, 150), (110, 190)); f.resv(110, 190, 262, 'R[G]', 'l'); f.gnd(110, 262)
f.line((110, 150), (110, 190)); f.dot(110, 150)
f.line((236, 54), (236, 92), arrow=True); f.text(228, 78, 'I[D]', 't', 'end')
f.text(150, 134, 'I[G] ≈ 0', 't', 'middle')
f.text(330, 72, 'V[D] = V[DD] − R[D] I[D]'); f.text(330, 160, 'V[S] = R[S] I[S] = R[S] I[D]'); f.text(330, 188, 'V[G] = R[G] I[G] ≈ 0'); f.text(330, 216, 'V[GS] = V[G] − V[S] < 0', 'ti')
FIG['autopolarisation'] = f.svg('autopolarisation|JFET autopolarisé avec RG, RD et RS', 'Autopolarisation : comme I[G] ≈ 0, V[G] ≈ 0 et V[GS] = −R[S] I[D] est automatiquement négatif.')

# ============================================================ 6. pont diviseur
f = F(520, 300)
f.vcc(260, 24, 'V[DD]'); f.line((260, 24), (260, 44))
f.resv(260, 44, 106, 'R[D]'); f.jfet(238, 150, 'N')
f.line((260, 200), (260, 214)); f.resv(260, 200, 262, 'R[S]'); f.gnd(260, 262)
f.line((198, 150), (120, 150)); f.dot(120, 150)
f.line((120, 24), (260, 24)); f.dot(260, 24)
f.resv(120, 24, 150, 'R[1]', 'l'); f.resv(120, 150, 262, 'R[2]', 'l'); f.gnd(120, 262)
f.text(150, 134, 'I[G] ≈ 0', 't', 'middle')
f.text(330, 70, 'V[Th] = V[DD] R[2] / (R[1] + R[2])'); f.text(330, 98, 'R[Th] = R[1] // R[2]')
f.text(330, 160, 'V[GS] = V[Th] − R[S] I[D]', 'ti'); f.text(330, 190, 'V[DS] = V[DD] − (R[D] + R[S]) I[D]')
FIG['pont'] = f.svg('pont|JFET polarisé par pont diviseur de tension', 'Pont diviseur : comme I[G] ≈ 0, le pont n\'est pas chargé et V[G] = V[Th] (sans chute dans R[Th]).')

# ============================================================ 7. modèle petits signaux
f = F(600, 260)
f.text(300, 22, 'Le transistor est remplacé par une source de courant commandée', 'tn2', 'middle')
f.text(300, 44, 'Grille : entrée ouverte (Z[in] → ∞, I[G] = 0)', 'ti', 'middle')
f.add('<circle class="nd" cx="60" cy="100" r="5"/><circle class="nd" cx="60" cy="210" r="5"/><circle class="nd" cx="540" cy="80" r="5"/>')
f.text(46, 104, 'G', 'tn2', 'end'); f.text(46, 214, 'S', 'tn2', 'end'); f.text(554, 84, 'D', 'tn2')
f.line((30, 108), (30, 202), arrow=True); f.text(22, 160, 'v[GS]', 't', 'end')
f.line((60, 210), (540, 210)); f.line((540, 85), (540, 210)); f.line((540, 80), (250, 80), (250, 128))
f.add('<circle class="src" cx="250" cy="165" r="36"/>'); f.line((250, 188), (250, 142), arrow=True); f.line((250, 201), (250, 210))
f.text(298, 160, 'g[m] v[GS]'); f.text(298, 182, 'source de courant', 'ti')
f.line((460, 80), (460, 130)); f.rect(453, 130, 14, 44, 'res', 'stroke-dasharray="4 3"'); f.line((460, 174), (460, 210)); f.text(476, 148, 'r[o]', 'ti'); f.text(476, 166, '(omise)', 'ti')
f.text(300, 246, 'condensateurs → fils · V[DD] → masse · g[m] = dI[D] / dV[GS]', 'ti', 'middle')
FIG['modele'] = f.svg('modele|Modèle équivalent petits signaux du FET', 'Modèle équivalent basses fréquences : une source de courant g[m] v[GS] entre D et S (r[o] est omise sauf avis contraire). La grille n\'absorbe aucun courant.')

# ============================================================ 8. deux montages en alternatif
f = F(640, 290)
for x0, titre, up, rlab, regle, formule, f2 in ((0, 'Source commune', False, 'R[D]', 'S à la masse : v[GS] = v[in]', 'v[out] = − g[m] R[D] v[in]', 'A[v] = − g[m] R[D]'),
                                               (330, 'Drain commun', True, 'R[S]', 'D à la masse : v[GS] = v[in] − v[out]', 'v[out] = + g[m] R[S] v[GS]', 'A[v] = g[m] R[S] / (1 + g[m] R[S]) ≈ 1')):
    f.text(x0 + 150, 22, titre, 'tn2', 'middle'); f.text(x0 + 150, 44, regle, 'ti', 'middle')
    f.line((x0 + 40, 215), (x0 + 270, 215)); f.gnd(x0 + 150, 215)
    f.line((x0 + 90, 85), (x0 + 250, 85)); f.add('<circle class="nd" cx="%s" cy="85" r="4"/>' % (x0 + 250)); f.text(x0 + 258, 89, 'v[out]')
    f.line((x0 + 90, 85), (x0 + 90, 122)); f.add('<circle class="src" cx="%s" cy="150" r="26"/>' % (x0 + 90))
    f.line((x0 + 90, 163 if up else 137), (x0 + 90, 137 if up else 163), arrow=True); f.line((x0 + 90, 176), (x0 + 90, 215))
    f.text(x0 + 124, 146, 'g[m] v[GS]')
    f.line((x0 + 220, 85), (x0 + 220, 120)); f.rect(x0 + 213, 120, 14, 56, 'res'); f.line((x0 + 220, 176), (x0 + 220, 215)); f.text(x0 + 236, 152, rlab)
    f.text(x0 + 150, 250, formule, 'ti', 'middle'); f.text(x0 + 150, 274, f2, 't', 'middle')
FIG['montages'] = f.svg('montages|Schémas équivalents en alternatif de la source commune et du drain commun', 'La source commune inverse et amplifie ; le drain commun (source suiveuse) recopie le signal avec un gain proche de 1 et une faible impédance de sortie.')

# ============================================================ 9. commutation
f = F(640, 290)
f.vcc(120, 24, 'V[DD]'); f.line((120, 24), (120, 40)); f.resv(120, 40, 100, 'R[D]', 'r')
f.jfet(100, 150, 'N')
f.line((122, 100), (122, 100)); f.line((120, 100), (120, 106)); f.dot(120, 108); f.line((120, 108), (200, 108)); f.text(206, 112, 'v[out]')
f.line((122, 200), (122, 235)); f.gnd(122, 235)
f.line((60, 150), (14, 150)); f.text(8, 138, 'v[in] = V[GS]', 't')
f.text(120, 268, 'JFET = interrupteur', 'ti', 'middle')
# chronogrammes
xs = 290
f.line((xs, 110), (620, 110), cls='ax', arrow=True); f.line((xs, 215), (620, 215), cls='ax', arrow=True); f.text(620, 128, 't', anchor='end'); f.text(620, 233, 't', anchor='end')
f.text(xs, 24, 'v[in] = V[GS]', 'tn2')
f.line((xs, 50), (xs + 70, 50), (xs + 70, 95), (xs + 190, 95), (xs + 190, 50), (xs + 320, 50), cls='cv')
f.text(xs + 6, 44, '0'); f.text(xs + 130, 88, '< V[GS,off]', 't', 'middle')
f.text(xs, 142, 'v[out]', 'tn2')
f.line((xs, 195), (xs + 70, 195), (xs + 70, 160), (xs + 190, 160), (xs + 190, 195), (xs + 320, 195), cls='cv')
f.text(xs + 35, 186, '≈ 0', 't', 'middle'); f.text(xs + 130, 152, 'V[DD]', 't', 'middle')
f.rect(xs, 36, 70, 160, 'zo2'); f.rect(xs + 190, 36, 130, 160, 'zo2')
f.text(xs + 35, 262, 'fermé', 'ti', 'middle'); f.text(xs + 35, 278, '(R[DS])', 't', 'middle'); f.text(xs + 130, 262, 'ouvert', 'ti', 'middle'); f.text(xs + 255, 262, 'fermé', 'ti', 'middle')
FIG['commutation'] = f.svg('commutation|Commutation analogique avec un JFET', 'Commutation : v[in] ≥ 0 ferme l\'interrupteur (v[out] ≈ 0 car R[D] ≫ R[DS]), v[in] < V[GS,off] l\'ouvre (v[out] = V[DD]). La sortie est inversée.')

# ============================================================ 10. structure MOSFET
f = F(640, 280)
for k, x0 in enumerate((0, 320)):
    f.text(x0 + 150, 22, ['V[GS] < V[T] : bloqué', 'V[GS] > V[T] : canal d\'inversion'][k], 'tn2', 'middle')
    f.rect(x0 + 20, 120, 260, 110, 'sub'); f.text(x0 + 150, 215, 'substrat P', 't', 'middle')
    f.rect(x0 + 20, 120, 60, 55, 'np'); f.rect(x0 + 220, 120, 60, 55, 'np')
    f.text(x0 + 50, 150, 'N+', 't', 'middle'); f.text(x0 + 250, 150, 'N+', 't', 'middle')
    f.rect(x0 + 80, 110, 140, 10, 'ox'); f.rect(x0 + 80, 82, 140, 28, 'mt'); f.text(x0 + 150, 101, 'grille', 't', 'middle'); f.text(x0 + 150, 118, 'SiO[2]', 'tiny', 'middle')
    f.rect(x0 + 80, 120, 140, 14 if k == 0 else 22, 'zdc')
    f.line((x0 + 50, 120), (x0 + 50, 62), (x0 + 20, 62)); f.text(x0 + 4, 58, 'S')
    f.line((x0 + 250, 120), (x0 + 250, 62), (x0 + 282, 62)); f.text(x0 + 286, 58, 'D')
    f.line((x0 + 150, 82), (x0 + 150, 62), (x0 + 120, 62)); f.text(x0 + 98, 58, 'G')
    if k == 1:
        f.rect(x0 + 80, 120, 140, 5, 'inv')
        for i in range(8): f.text(x0 + 92 + i * 17, 133, '−', 'tiny')
        f.line((x0 + 100, 108), (x0 + 200, 108), cls='w2', arrow=True) if False else None
        f.text(x0 + 150, 252, 'électrons : source → drain', 'ti', 'middle'); f.text(x0 + 150, 268, 'courant I : drain → source', 'ti', 'middle')
    else:
        f.text(x0 + 150, 252, 'zone désertée seule', 'ti', 'middle'); f.text(x0 + 150, 268, 'pas de canal : I[D] = 0', 'ti', 'middle')
FIG['mos_struct'] = f.svg('mos_struct|Structure d\'un N-MOSFET sans et avec canal d\'inversion', 'Quand V[GS] dépasse V[T], les électrons des zones N+ viennent sous l\'oxyde et forment le canal d\'inversion (quelques nanomètres).')

# ============================================================ 11. caractéristiques MOSFET (transfert + sortie)
f = F(660, 345)
# transfert
a0, ay = 40, 270
f.axes(a0, ay, 300, 40, 'V[GS]', 'I[D]')
vt = 110
f.line((vt, ay), (vt, 50), dash=True); f.text(vt, ay + 18, 'V[T]', 't', 'middle')
f.line((a0, ay), (vt, ay), cls='cv')
f.add('<path class="cv" d="M%s"/>' % ' L'.join('%.1f %.1f' % (vt + 170 * i / 30, ay - 200 * (i / 30) ** 2) for i in range(31)))
f.text(a0 + 35, ay - 12, 'bloqué', 'ti', 'middle'); f.text(250, 60, 'I[D] = ½ K[n] (W/L)', 't', 'end'); f.text(250, 80, '× (V[GS] − V[T])²', 't', 'end')
f.text(150, 24, 'Transfert I[D] = f(V[GS])', 'tn2', 'middle')
# sortie
b0 = 360
f.axes(b0, ay, 630, 40, 'V[DS]', 'I[D]')
for lvl, xv in ((1.0, 150), (0.55, 105), (0.22, 62)):
    pts = [(b0 + xv * (i / 24), ay - 200 * lvl * (1 - (1 - i / 24) ** 2)) for i in range(25)] + [(b0 + 255, ay - 200 * lvl - 5 * lvl)]
    f.add('<path class="cv" d="M%s"/>' % ' L'.join('%.1f %.1f' % p for p in pts))
f.add('<path class="dsh w" d="M%s"/>' % ' L'.join('%.1f %.1f' % (b0 + 150 * s, ay - 200 * (1 - (1 - s) ** 2)) for s in [i / 25 for i in range(26)]))
f.text(b0 + 70, 62, 'ohmique', 'ti', 'middle'); f.text(b0 + 205, 62, 'active', 'ti', 'middle')
f.text(b0 + 258, ay - 206, 'V[GS3]', 'tiny'); f.text(b0 + 258, ay - 116, 'V[GS2]', 'tiny'); f.text(b0 + 258, ay - 48, 'V[GS1]', 'tiny')
f.text(b0 + 150, 24, 'Sortie I[D] = f(V[DS])', 'tn2', 'middle')
f.text(20, 312, 'ohmique : 0 < V[DS] < V[GS] − V[T]   ·   active : V[DS] > V[GS] − V[T]', 'tiny')
f.text(20, 330, 'pointillé : V[DS] = V[GS] − V[T]   ·   V[GS3] > V[GS2] > V[GS1] > V[T]', 'tiny')
FIG['mos_car'] = f.svg('mos_car|Caractéristiques de transfert et de sortie du N-MOSFET', 'À gauche : le MOSFET est bloqué sous V[T], puis I[D] suit une loi quadratique. À droite : la frontière entre région ohmique et région active est V[DS] = V[GS] − V[T].')

# ------------------------------------------------------------ CSS des figures
CSS_TXT = '''
/* schémas de la fiche FET */
.fet-fig svg{max-width:640px}
.fet-fig .t{font-size:14px}
.fet-fig .ti{fill:var(--accent);font-family:var(--f-mono);font-size:13.5px;font-weight:600}
.fet-fig .tiny{fill:var(--muted);font-family:var(--f-mono);font-size:11.5px}
.fet-fig .tn2{fill:var(--ink);font-family:var(--f-disp);font-size:15px;font-weight:700}
.fet-fig .sb{font-size:10px}
.fet-fig .ax{stroke:var(--ink);stroke-width:1.8;fill:none;marker-end:url(#fa)}
.fet-fig .fa{fill:var(--ink)}
.fet-fig .dsh{stroke-dasharray:5 4;opacity:.75}
.fet-fig .w2{stroke:var(--accent2);stroke-width:2;fill:none}
.fet-fig .cv{stroke:var(--accent);stroke-width:2.6;fill:none}
.fet-fig .fr{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig .ch{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.5}
.fet-fig .gt{fill:var(--amber-soft);stroke:var(--accent2);stroke-width:1.5}
.fet-fig .zdc{fill:var(--accent2);opacity:.38}
.fet-fig .zo,.fet-fig .zo2{fill:var(--accent-soft);opacity:.55;stroke:none}
.fet-fig .sub{fill:var(--amber-soft);stroke:var(--line);stroke-width:1.5}
.fet-fig .np{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.5}
.fet-fig .ox{fill:var(--muted);opacity:.55}
.fet-fig .mt{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig .inv{fill:var(--accent);opacity:.8}
.fet-fig .nd{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig .src{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig .res{fill:var(--surface);stroke:var(--ink);stroke-width:2}
.fet-fig-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;align-items:start}
.fet-fig-grid .fet-fig{margin:6px 0}
'''
css = open(CSS, encoding='utf-8').read()
if '/* schémas de la fiche FET */' in css:
    css = css[:css.index('\n/* schémas de la fiche FET */')] + CSS_TXT
else:
    css += CSS_TXT
open(CSS, 'w', encoding='utf-8').write(css)

# ------------------------------------------------------------ insertion dans la page
page = open(PAGE, encoding='utf-8').read()
# on retire d'abord d'éventuelles figures déjà insérées (relançable)
page = re.sub(r'<!-- fet-fig:[a-z_]+ --><figure class="s4-fig fet-fig">.*?</figure>', '', page, flags=re.S)
page = re.sub(r'<div class="fet-fig-grid">\s*</div>', '', page)


def apres(ancre, html):
    global page
    assert ancre in page, ancre
    i = page.index(ancre) + len(ancre)
    page = page[:i] + '\n' + html + '\n' + page[i:]


def avant(ancre, html):
    global page
    assert ancre in page, ancre
    i = page.index(ancre)
    page = page[:i] + html + '\n' + page[i:]


def grille(*noms): return '<div class="fet-fig-grid">' + ''.join(FIG[n] for n in noms) + '</div>'


# 1. principe : commande en tension
avant('<div class="s4-key"><span class="s4-lbl">Inconvénients d\'une impédance', FIG['commande'])
# 2. JFET : structure puis symboles avant "Caractéristiques"
avant('<h3>Caractéristiques</h3>', FIG['structure'] + '\n' + FIG['symboles'])
# 3. JFET : courbes après le tableau des caractéristiques (fin de la section jfet)
i = page.index('<section id="jfet">'); j = page.index('</section>', i)
page = page[:j] + grille('sortie', 'transfert') + '\n' + page[j:]
# 4. polarisation
i = page.index('<section id="polar">'); j = page.index('</section>', i)
page = page[:j] + grille('autopolarisation', 'pont') + '\n' + page[j:]
# 5. dynamique : modèle avant le tableau des montages, schémas des montages après
avant('<div class="tbl-wrap s4-stack"><table>\n<tr><th>Montage</th><th>\\(A_v\\)', FIG['modele'])
avant('<div class="s4-key"><span class="s4-lbl">Erratum diapo 19', FIG['montages'])
# 6. commutation
i = page.index('<section id="comm">'); j = page.index('</section>', i)
page = page[:j] + FIG['commutation'] + '\n' + page[j:]
# 7. MOSFET
avant('<div class="tbl-wrap s4-stack"><table>\n<tr><th>Région</th><th>Condition</th>', FIG['mos_struct'])
i = page.index('<section id="mos">'); j = page.index('</section>', i)
page = page[:j] + FIG['mos_car'] + '\n' + page[j:]
open(PAGE, 'w', encoding='utf-8').write(page)
print('ok', len(FIG), 'figures,', len(re.findall(r'fet-fig:', page)), 'insérées')
