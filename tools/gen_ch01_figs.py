# Génère les schémas SVG de la fiche Ch0-Ch1 (fiche-ch0-ch1.html) et les insère à leur place.
# Usage : python tools/gen_ch01_figs.py   (relançable : les figures sont repérées par <!-- c01-fig:nom -->)
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import F, Page, patch_css

PRE = 'c01'
FIG = {}

# ============================================================ 1. diviseurs de tension et de courant
f = F(480, 232, 'diviseurs')
f.text(115, 16, 'Diviseur de tension', 'tn2', 'middle'); f.text(365, 16, 'Diviseur de courant', 'tn2', 'middle')
f.vcc(80, 44, 'V[s]'); f.line((80, 44), (80, 56)); f.resv(80, 56, 112, 'R[1]')
f.dot(80, 112); f.line((80, 112), (150, 112)); f.circ(150, 112, 4); f.text(162, 117, 'V[2]')
f.resv(80, 112, 176, 'R[2]'); f.gnd(80, 176)
f.text(115, 210, 'V[2] = R[2] / (R[1]+R[2]) · V[s]', 'ti', 'middle'); f.text(115, 228, 'résistances en série', 'tm', 'middle')
f.cur((365, 26), (365, 52)); f.text(374, 44, 'i[0]')
f.line((305, 56), (425, 56)); f.dot(365, 56)
f.resv(305, 56, 168, 'R[1]', 'l'); f.resv(425, 56, 168, 'R[2]')
f.cur((305, 62), (305, 86)); f.text(313, 80, 'i[1]'); f.cur((425, 62), (425, 86)); f.text(417, 80, 'i[2]', anchor='end')
f.line((305, 168), (425, 168)); f.dot(365, 168); f.gnd(365, 168)
f.text(365, 210, 'i[2] = R[1] / (R[1]+R[2]) · i[0]', 'ti', 'middle'); f.text(365, 228, 'résistances en parallèle', 'tm', 'middle')
FIG['diviseurs'] = f.svg(PRE, 'diviseurs', 'Diviseur de tension et diviseur de courant', 'Diviseur de tension : la sortie est prise entre R[2] et la masse, sans courant de sortie. Diviseur de courant : le courant dans R[2] a R[1] au numérateur (l\'autre résistance).')

# ============================================================ 2. le diviseur chargé et le suiveur
f = F(480, 250, 'suiveur')
f.text(120, 14, 'Sans suiveur', 'tn2', 'middle'); f.text(360, 14, 'Avec suiveur', 'tn2', 'middle')


def div(x, side):
    f.vcc(x, 40, '5 V'); f.line((x, 40), (x, 52)); f.resv(x, 52, 108, '10 kΩ', side); f.dot(x, 108)
    f.resv(x, 108, 178, '10 kΩ', side); f.gnd(x, 178)


div(40, 'r')
f.line((40, 108), (150, 108)); f.resv(150, 108, 178, '1 kΩ'); f.line((40, 178), (150, 178)); f.dot(150, 108)
f.text(120, 212, 'V = 0,42 V', 'ti', 'middle'); f.text(120, 232, '(à vide : 2,5 V)', 'tm', 'middle')
div(290, 'l')
f.line((290, 108), (308, 108), (308, 88), (330, 88))
f.opamp(330, 100, 24, 50, inv_haut=False)
f.line((380, 100), (396, 100)); f.dot(396, 100)
f.line((396, 100), (396, 140), (316, 140), (316, 112), (330, 112))
f.line((396, 100), (420, 100)); f.resv(420, 100, 178, '1 kΩ'); f.line((290, 178), (420, 178))
f.text(360, 212, 'V = 2,5 V', 'ti', 'middle'); f.text(360, 232, '(quelle que soit la charge)', 'tm', 'middle')
FIG['suiveur'] = f.svg(PRE, 'suiveur', 'Diviseur de tension chargé par 1 kilo-ohm, avec et sans suiveur',
                       'Sans suiveur, la charge de 1 kΩ se met en parallèle avec R[2] et écrase la tension (0,42 V). Avec un suiveur, aucun courant n\'est prélevé sur le diviseur : 2,5 V.')

# ============================================================ 3. neutraliser les sources
f = F(480, 170, 'neutraliser')
f.text(120, 20, 'Source de tension', 'tn2', 'middle'); f.text(365, 20, 'Source de courant', 'tn2', 'middle')
f.line((20, 70), (56, 70)); f.batt(60, 70); f.line((64, 70), (100, 70)); f.text(60, 48, 'E', 't', 'middle')
f.text(122, 76, '⇒', 'tn2', 'middle'); f.line((140, 70), (220, 70)); f.text(180, 96, 'un fil', 't', 'middle')
f.text(120, 128, 'éteinte = court-circuit', 'tm', 'middle')
f.line((270, 70), (280, 70)); f.add('<circle class="src" cx="298" cy="70" r="18"/>'); f.line((288, 70), (308, 70), arrow=True); f.line((316, 70), (330, 70))
f.text(298, 44, 'I', 't', 'middle')
f.text(368, 76, '⇒', 'tn2', 'middle'); f.line((395, 70), (416, 70)); f.circ(420, 70, 4); f.circ(444, 70, 4); f.line((448, 70), (468, 70))
f.text(432, 98, 'trou', 't', 'middle'); f.text(365, 128, 'éteinte = circuit ouvert', 'tm', 'middle')
f.text(240, 160, 'seulement les sources indépendantes', 'tm', 'middle')
FIG['neutraliser'] = f.svg(PRE, 'neutraliser', 'Neutraliser une source de tension (un fil) ou une source de courant (un trou)',
                           'Pour superposition et Thévenin : on remplace une source de tension par un fil, une source de courant par un circuit ouvert.')

# ============================================================ 4. Thévenin <-> Norton
f = F(480, 262, 'thevenin')
f.text(130, 16, 'Thévenin', 'tn2', 'middle'); f.text(365, 16, 'Norton', 'tn2', 'middle')
f.line((70, 40), (70, 85)); f.vsrc(70, 105, 'V[Th]'); f.line((70, 125), (70, 170))
f.resh(70, 160, 40, 'R[Th]', below=True); f.line((160, 40), (196, 40)); f.line((70, 170), (196, 170))
f.circ(196, 40, 5); f.circ(196, 170, 5); f.text(208, 45, 'A', 'tn2'); f.text(208, 175, 'B', 'tn2')
f.text(250, 112, '⇔', 'tn2', 'middle')
f.line((300, 40), (300, 85)); f.src(300, 105, 'i[N]', up=True); f.line((300, 125), (300, 170))
f.line((300, 40), (440, 40)); f.line((300, 170), (440, 170)); f.resv(380, 40, 170, 'R[N]'); f.dot(380, 40); f.dot(380, 170)
f.circ(440, 40, 5); f.circ(440, 170, 5); f.text(452, 45, 'A', 'tn2'); f.text(452, 175, 'B', 'tn2')
f.text(240, 208, 'V[Th] = R[N] · i[N]      R[Th] = R[N]', 'ti', 'middle'); f.text(240, 230, 'i[N] = V[Th] / R[Th]', 'ti', 'middle')
f.text(240, 252, 'la flèche de i[N] pointe vers la borne +', 'tm', 'middle')
FIG['thevenin'] = f.svg(PRE, 'thevenin', 'Équivalence entre le générateur de Thévenin et le générateur de Norton',
                        'Un dipôle linéaire vu de A et B : V[Th] en série avec R[Th], ou i[N] en parallèle avec R[N] = R[Th]. La flèche du courant de Norton pointe vers la borne + du générateur de Thévenin.')

# ============================================================ 5. AO : inverseur et non-inverseur
f = F(480, 262, 'ao')
f.text(120, 14, 'Inverseur', 'tn2', 'middle'); f.text(365, 14, 'Non-inverseur', 'tn2', 'middle')
# inverseur
f.circ(12, 81, 4); f.text(4, 108, 'V[in]'); f.resh(12, 90, 81, 'R[1]'); f.dot(90, 81); f.line((90, 81), (116, 81))
f.opamp(116, 94, 26, 50)
f.line((90, 81), (90, 48)); f.resh(90, 200, 48, 'R[f]'); f.line((200, 48), (200, 94)); f.dot(200, 94)
f.line((166, 94), (226, 94)); f.circ(226, 94, 4); f.text(232, 82, 'V[out]', anchor='middle')
f.line((116, 107), (90, 107), (90, 140)); f.gnd(90, 140)
f.text(120, 228, 'V[out] = − R[f]/R[1] · V[in]', 'ti', 'middle'); f.text(120, 250, 'masse virtuelle V[−] = 0', 'tm', 'middle')
# non-inverseur
f.circ(262, 81, 4); f.text(258, 66, 'V[in]'); f.line((262, 81), (366, 81))
f.opamp(366, 94, 26, 50, inv_haut=False)
f.line((416, 94), (470, 94)); f.circ(470, 94, 4); f.dot(440, 94); f.text(470, 82, 'V[out]', anchor='end')
f.line((440, 94), (440, 150)); f.resh(320, 440, 150, 'R[f]'); f.line((320, 150), (320, 107), (366, 107)); f.dot(320, 107)
f.line((320, 107), (300, 107)); f.resv(300, 107, 190, 'R[1]', 'l'); f.gnd(300, 190)
f.text(365, 228, 'V[out] = (1 + R[f]/R[1]) · V[in]', 'ti', 'middle'); f.text(365, 250, 'gain ≥ 1, pas d\'inversion', 'tm', 'middle')
FIG['ao'] = f.svg(PRE, 'ao', 'Montages inverseur et non-inverseur à amplificateur opérationnel',
                  'Inverseur : l\'entrée − est une masse virtuelle. Non-inverseur : R[1] et R[f] forment un diviseur sur V[out]. Rapport toujours R de contre-réaction sur R vers la masse.')

# ============================================================ 6. conduction : champ, électrons, courant
f = F(480, 232, 'conduction')
f.text(240, 18, 'u = V[A] − V[B] > 0', 'ti', 'middle')
f.cur((130, 56), (350, 56)); f.text(240, 44, 'courant conventionnel i et champ E', 'tm', 'middle')
f.rect(100, 70, 280, 60, 'ch'); f.line((60, 100), (100, 100)); f.line((380, 100), (420, 100))
f.text(52, 106, 'A (+)', 't', 'end'); f.text(428, 106, 'B (−)')
for x in (150, 270, 350):
    f.add('<circle class="src" cx="%s" cy="100" r="8"/>' % x); f.text(x, 105, '−', 't', 'middle')
    f.line((x - 12, 100), (x - 48, 100), cls='w2', arrow=True)
f.line((205, 70), (205, 130), dash=True); f.text(212, 86, 'S', 't')
f.line((100, 130), (100, 158), dash=True); f.line((380, 130), (380, 158), dash=True)
f.line((240, 152), (102, 152), arrow=True); f.line((240, 152), (378, 152), arrow=True); f.text(240, 176, 'ℓ', 't', 'middle')
f.text(240, 202, 'E = u / ℓ   ·   j = i / S   ·   R = ρ ℓ / S', 'tm', 'middle')
f.text(240, 224, 'électrons : sens opposé à E  (v = −μ E)', 'tm', 'middle')
FIG['conduction'] = f.svg(PRE, 'conduction', 'Conducteur soumis à une tension : champ, courant et électrons',
                          'Le champ E va du potentiel haut au potentiel bas, comme le courant conventionnel. Les électrons (charge −e) dérivent en sens opposé, à vitesse v = −μE.')

# ============================================================ 7. capacité plane
f = F(480, 228, 'capa')
f.rect(60, 40, 8, 120, 'pz'); f.rect(150, 40, 8, 120, 'pz'); f.rect(68, 50, 82, 100, 'nz')
f.text(64, 30, '+Q', 't', 'middle'); f.text(154, 30, '−Q', 't', 'middle')
for y in (84, 104, 124): f.line((76, y), (142, y), cls='w2', arrow=True)
f.text(109, 72, 'E', 't', 'middle'); f.text(109, 144, 'ε[r]', 't', 'middle')
f.line((109, 180), (70, 180), arrow=True); f.line((109, 180), (148, 180), arrow=True)
f.line((64, 160), (64, 188), dash=True); f.line((154, 160), (154, 188), dash=True); f.text(109, 204, 'd', 't', 'middle')
f.line((38, 100), (38, 42), arrow=True); f.line((38, 100), (38, 158), arrow=True); f.text(22, 104, 'S', 't', 'middle')
f.text(232, 56, 'C = ε[0] ε[r] S / d', 'ti'); f.text(232, 92, 'S × 2   →   C × 2', 't'); f.text(232, 114, 'd × 2   →   C ÷ 2', 't')
f.text(232, 136, 'diélectrique : C × ε[r]', 't'); f.text(232, 170, 'à Q fixée : U = Q / C', 't')
f.text(232, 192, 'diélectrique : U ÷ ε[r]', 't'); f.text(232, 218, 'W = ½ C U²', 'ti')
FIG['capa'] = f.svg(PRE, 'capa', 'Condensateur plan : surface, distance et diélectrique',
                    'C augmente avec la surface S et la permittivité ε[r], diminue avec la distance d. À charge Q fixée, un diélectrique divise la tension par ε[r].')

# ============================================================ 8. RC : charge du condensateur
f = F(480, 432, 'rc')
f.line((110, 40), (110, 80)); f.vsrc(110, 100, 'E'); f.line((110, 120), (110, 160))
f.resh(110, 260, 40, 'R'); f.line((260, 40), (300, 40), (300, 96)); f.cap(300, 100, 90); f.line((300, 104), (300, 160)); f.line((110, 160), (300, 160))
f.cur((222, 28), (262, 28)); f.text(242, 20, 'i', 't', 'middle')
f.line((340, 160), (340, 42), cls='w2', arrow=True); f.line((300, 160), (340, 160), cls='mut', dash=True); f.line((300, 40), (340, 40), cls='mut', dash=True)
f.text(352, 106, 'u[C]'); f.text(372, 62, 'τ = R C', 'ti')
x0, y0, ha, tau = 70, 350, 120, 60
f.axes(x0, y0, 452, 204, 't', 'u[C]')
f.line((x0, y0 - ha), (440, y0 - ha), cls='mut', dash=True); f.text(x0 - 8, y0 - ha + 5, 'E', 't', 'end')
pts = ['%.1f %.1f' % (x, y0 - ha * (1 - math.exp(-(x - x0) / tau))) for x in range(x0, 441, 4)]
f.path('M' + ' L'.join(pts))
yt = y0 - ha * (1 - math.exp(-1)); y5 = y0 - ha * (1 - math.exp(-5))
f.line((x0 + tau, y0), (x0 + tau, yt), cls='mut', dash=True); f.line((x0, yt), (x0 + tau, yt), cls='mut', dash=True); f.dot(x0 + tau, round(yt, 1))
f.line((x0 + 5 * tau, y0), (x0 + 5 * tau, y5), cls='mut', dash=True); f.dot(x0 + 5 * tau, round(y5, 1))
for k in (1, 3, 5): f.text(x0 + k * tau, y0 + 18, '%sτ' % ('' if k == 1 else k), 't', 'middle')
f.text(x0 + tau + 8, 306, 'à t = τ : 63 % de E', 't'); f.text(x0 + 5 * tau + 6, 270, '99 %', 't')
f.text(240, 398, 'charge : u[C](t) = E (1 − e^{−t/τ})', 'ti', 'middle'); f.text(240, 420, 'décharge : u[C](t) = E e^{−t/τ}', 'ti', 'middle')
FIG['rc'] = f.svg(PRE, 'rc', 'Charge d\'un condensateur à travers une résistance : exponentielle de constante de temps tau égale RC',
                  'Charge de C par E à travers R : u[C] atteint 63 % de E au bout de τ = RC et pratiquement E (99 %) au bout de 5τ. Le courant, lui, décroît de E/R vers 0.')

# ============================================================ 9. couplage et découplage
f = F(480, 322, 'usages')
f.text(120, 20, 'Découplage', 'tn2', 'middle'); f.text(365, 20, 'Couplage (liaison)', 'tn2', 'middle')
f.line((20, 60), (215, 60)); f.text(24, 50, 'V[CC]')
for x, lab in ((60, 'C[1]'), (112, 'C[2]')):
    f.line((x, 60), (x, 127)); f.cap(x, 130, 90); f.line((x, 133), (x, 250)); f.dot(x, 60); f.dot(x, 250); f.text(x + 18, 124, lab, 't')
f.rect(152, 105, 56, 64, 'fr'); f.text(180, 142, 'CI', 'tn2', 'middle')
f.line((180, 60), (180, 105)); f.line((180, 169), (180, 250)); f.line((20, 250), (215, 250)); f.gnd(60, 250)
f.text(120, 276, 'C[1] = 10 µF (BF)', 'tm', 'middle'); f.text(120, 294, 'C[2] = 100 nF (HF)', 'tm', 'middle'); f.text(120, 312, 'au plus près du CI', 'tm', 'middle')
f.acsrc(280, 160, '', 18); f.line((280, 142), (280, 100), (322, 100)); f.cap(330, 100, 0); f.line((334, 100), (380, 100))
f.text(330, 82, 'C', 't', 'middle')
f.rect(380, 72, 80, 56, 'fr'); f.text(420, 97, 'étage', 't', 'middle'); f.text(420, 115, 'suivant', 't', 'middle')
f.line((280, 178), (280, 250), (420, 250), (420, 128)); f.gnd(350, 250); f.dot(350, 250)
f.text(365, 280, 'bloque le continu (offset)', 'tm', 'middle'); f.text(365, 302, 'laisse passer l\'alternatif', 'tm', 'middle')
FIG['usages'] = f.svg(PRE, 'usages', 'Condensateur de découplage en parallèle sur l\'alimentation et condensateur de couplage en série',
                      'Découplage : C en parallèle entre V[CC] et la masse, il court-circuite le bruit. Couplage : C en série, il bloque la composante continue et laisse passer le signal alternatif.')


# ============================================================ insertion
patch_css()
P = Page('fiche-ch0-ch1.html', PRE)
P.avant('<div class="s4-trap"><span class="s4-lbl">Piège classique</span>Appliquer le diviseur', FIG['diviseurs'])
P.avant("<h3>IV. Les méthodes d'analyse</h3>", FIG['suiveur'])
P.avant('<ol><li>Garder une seule source', FIG['neutraliser'])
P.avant('<div class="s4-tip"><span class="s4-lbl">Quelle méthode choisir ?</span>', FIG['thevenin'])
P.avant("<details><summary>Retrouver l'inverseur", FIG['ao'])
P.avant('<h4>Ordres de grandeur (métal', FIG['conduction'])
P.avant("<h4>Charge et décharge d'un condensateur (RC)</h4>", FIG['capa'])
P.avant('<ul>\n<li><b>Découplage</b>', FIG['rc'])
P.avant('<h4>Le circuit imprimé (PCB)</h4>', FIG['usages'])
P.ecrire()
