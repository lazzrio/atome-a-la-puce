# Génère les schémas SVG de la fiche Ch2-Ch3 (fiche-ch2-ch3.html) et les insère à leur place.
# Usage : python tools/gen_ch23_figs.py   (relançable : les figures sont repérées par <!-- c23-fig:nom -->)
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import F, Page, patch_css

PRE = 'c23'
FIG = {}

# ============================================================ 1. bandes d'énergie : isolant / semi-conducteur / conducteur
f = F(480, 318, 'bandes')
cols = (80, 240, 400)
for c, t in zip(cols, ('Isolant', 'Semi-conducteur', 'Conducteur')): f.text(c, 18, t, 'tn2', 'middle')
# isolant
f.rect(25, 44, 110, 36, 'bnc'); f.rect(25, 176, 110, 36, 'bnv'); f.text(31, 67, 'BC'); f.text(31, 199, 'BV')
f.line((50, 84), (50, 172), arrow=True); f.line((50, 172), (50, 84), arrow=True); f.text(58, 116, 'E[g]')
f.line((25, 134), (135, 134), cls='cv2', dash=True); f.text(140, 139, 'E[F]', 'ti')
# semi-conducteur
f.rect(185, 44, 110, 36, 'bnc'); f.rect(185, 108, 110, 36, 'bnv'); f.text(191, 67, 'BC'); f.text(191, 131, 'BV')
f.line((200, 82), (200, 106), arrow=True); f.line((200, 106), (200, 82), arrow=True); f.text(180, 99, 'E[g]', anchor='end')
f.line((185, 94), (295, 94), cls='cv2', dash=True); f.text(300, 99, 'E[F]', 'ti')
for x in (250, 275): f.circ(x, 62, 5, 'el')
for x in (250, 275): f.circ(x, 126, 5, 'hole')
# conducteur
f.rect(345, 44, 110, 92, 'bnc'); f.rect(345, 90, 110, 46, 'bnv'); f.text(351, 66, 'BC')
f.line((345, 90), (455, 90), cls='cv2', dash=True); f.text(405, 82, 'E[F]', 'ti', 'middle')
for x in (375, 405, 435): f.circ(x, 113, 5, 'el')
f.text(400, 160, 'bandes qui se', 'tm', 'middle'); f.text(400, 178, 'chevauchent', 'tm', 'middle')
rows = (('E[g] > 5 eV', 'BC vide', 'T ↑ : rien'), ('E[g] ≈ 1 eV', 'Si 1,12 · Ge 0,67', 'T ↑ : γ ↑'), ('pas de gap', 'E[F] dans la BC', 'T ↑ : γ ↓'))
for c, rr in zip(cols, rows):
    for i, s in enumerate(rr): f.text(c, 244 + 20 * i, s, 't' if i < 2 else 'ti', 'middle')
f.text(240, 308, '- - E[F] : niveau de Fermi    ● électron    ○ trou', 'tm', 'middle')
FIG['bandes'] = f.svg(PRE, 'bandes', 'Bandes d\'énergie d\'un isolant, d\'un semi-conducteur et d\'un conducteur',
                      'Isolant : grand gap, bande de conduction vide. Semi-conducteur : gap d\'environ 1 eV, quelques paires électron-trou à température ambiante, plus quand T monte. Conducteur : le niveau de Fermi est dans la bande de conduction.')

# ============================================================ 2. dopage : cristal + niveaux dans la bande interdite
f = F(480, 450, 'dopage')
for x0, titre in ((0, 'Type N'), (240, 'Type P')): f.text(x0 + 120, 18, titre, 'tn2', 'middle')
rows_y = (62, 125, 188); cols_x = (45, 120, 195)
for x0, kind in ((0, 'N'), (240, 'P')):
    for y in rows_y:
        f.line((x0 + cols_x[0], y), (x0 + cols_x[2], y), cls='bond')
    for x in cols_x:
        f.line((x0 + x, rows_y[0]), (x0 + x, rows_y[2]), cls='bond')
    for y in rows_y:
        for x in cols_x:
            if x == 120 and y == 125:
                f.circ(x0 + x, y, 19, 'atd'); f.text(x0 + x, y + 5, 'Sb' if kind == 'N' else 'B', 'tn2', 'middle')
            else:
                f.circ(x0 + x, y, 17, 'atm'); f.text(x0 + x, y + 5, 'Si', 't', 'middle')
# électron libre / trou
f.circ(157, 97, 6, 'el'); f.cur((166, 97), (192, 97))
f.text(155, 86, 'e⁻', 'ti', 'middle')
f.circ(397, 125, 6, 'hole')
f.text(397, 104, 'trou', 'ti', 'middle')
rowt = (('Sb (colonne V) : donneur', 'ion Sb⁺ fixe + e⁻ libre', 'n ≈ N[D] · p = n[i]²/N[D]'), ('B (colonne III) : accepteur', 'ion B⁻ fixe + trou', 'p ≈ N[A] · n = n[i]²/N[A]'))
for x0, rr in ((0, rowt[0]), (240, rowt[1])):
    for i, s in enumerate(rr): f.text(x0 + 120, 238 + 20 * i, s, 't' if i < 2 else 'ti', 'middle')
# niveaux d'énergie
for x0, kind in ((0, 'N'), (240, 'P')):
    yc, yv = 308, 392                                   # bas de la BC, haut de la BV
    f.rect(x0 + 30, yc - 22, 180, 22, 'bnc'); f.rect(x0 + 30, yv, 180, 22, 'bnv')
    f.text(x0 + 36, yc - 7, 'BC'); f.text(x0 + 36, yv + 16, 'BV')
    f.line((x0 + 62, yc + 2), (x0 + 62, yv - 2), arrow=True); f.line((x0 + 62, yv - 2), (x0 + 62, yc + 2), arrow=True); f.text(x0 + 70, 354, 'E[g]')
    if kind == 'N':
        f.line((x0 + 100, yc + 26), (x0 + 196, yc + 26), dash=True)
        f.text(x0 + 34, yc + 31, 'E[D]', 'tm')
        f.line((x0 + 100, yc + 11), (x0 + 196, yc + 11), cls='cv2', dash=True); f.text(x0 + 202, yc + 15, 'E[F]', 'ti')
        for x in (120, 140, 160, 180): f.circ(x0 + x, yc + 26, 3.5, 'el')
        for x in (130, 170): f.circ(x0 + x, yc - 9, 5, 'el')
    else:
        f.line((x0 + 100, yv - 24), (x0 + 196, yv - 24), dash=True); f.text(x0 + 34, yv - 19, 'E[A]', 'tm')
        f.line((x0 + 100, yv - 10), (x0 + 196, yv - 10), cls='cv2', dash=True); f.text(x0 + 202, yv - 6, 'E[F]', 'ti')
        for x in (120, 140, 160, 180): f.circ(x0 + x, yv - 24, 3.5, 'hole')
        for x in (130, 170): f.circ(x0 + x, yv + 11, 5, 'hole')
f.text(240, 440, 'E[g] inchangé : le dopage ajoute des niveaux dans le gap', 'tm', 'middle')
FIG['dopage'] = f.svg(PRE, 'dopage', 'Dopage de type N par un atome d\'antimoine et de type P par un atome de bore, avec les niveaux d\'énergie',
                      'Type N : le 5e électron de l\'antimoine est presque libre (niveau donneur E[D] juste sous la BC). Type P : le bore capte un électron et laisse un trou (niveau accepteur E[A] juste au-dessus de la BV). Le niveau de Fermi se déplace, le gap ne change pas.')

# ============================================================ 3. résistivité en fonction de la température
f = F(480, 252, 'rho_t')
f.text(125, 18, 'Métal', 'tn2', 'middle'); f.text(365, 18, 'Semi-conducteur', 'tn2', 'middle')
f.axes(50, 190, 215, 40, 'T', 'ρ'); f.path('M50 150 L205 96'); f.line((50, 150), (50, 150)); f.text(42, 154, 'ρ[0]', 't', 'end')
f.text(125, 218, 'ρ = ρ[0] (1 + α(T − T[0]))', 'ti', 'middle'); f.text(125, 240, 'plus de chocs : γ ↓, ρ ↑', 'tm', 'middle')
f.axes(290, 190, 455, 40, 'T', 'ρ')
pts = ['%.1f %.1f' % (x, 60 + 118 * math.exp(-(x - 290) / 52)) for x in range(290, 451, 4)]
f.path('M' + ' L'.join(pts))
f.text(365, 218, 'n[i] ↑ avec T', 'ti', 'middle'); f.text(365, 240, 'plus de paires : γ ↑, ρ ↓', 'tm', 'middle')
FIG['rho_t'] = f.svg(PRE, 'rho_t', 'Résistivité en fonction de la température : métal croissante, semi-conducteur décroissante',
                     'Métal : ρ croît avec T (plus de collisions). Semi-conducteur intrinsèque : ρ décroît avec T (plus de porteurs, n[i] ∝ T^{3/2} e^{−E[g]/2k[B]T}).')

# ============================================================ 4. jonction PN : équilibre, directe, inverse
f = F(480, 364, 'jonction')
for k, (titre, w, bas, pol) in enumerate((("À l'équilibre", 50, 'équilibre : barrière V[0] ≈ 0,7 V', None),
                                          ('Polarisation directe', 22, 'barrière ↓ · ZCD étroite · I grand', 'dir'),
                                          ('Polarisation inverse', 90, 'barrière ↑ · ZCD large · seul I[S] passe', 'inv'))):
    y0 = k * 122
    f.text(240, y0 + 16, titre, 'tn2', 'middle')
    xl, xr = 240 - w / 2, 240 + w / 2
    f.rect(50, y0 + 26, xl - 50, 58, 'pz'); f.rect(xr, y0 + 26, 430 - xr, 58, 'nz'); f.rect(xl, y0 + 26, w, 58, 'zdc')
    f.text(58, y0 + 44, 'P'); f.text(410, y0 + 44, 'N')
    for x in (90, 130, 170): f.circ(x, y0 + 62, 5, 'hole')
    for x in (310, 350, 390): f.circ(x, y0 + 62, 5, 'el')
    if w >= 50:
        for i in range(2 if w > 60 else 1): f.text(xl + 11 + 15 * i, y0 + 68, '−', 't', 'middle'); f.text(xr - 11 - 15 * i, y0 + 68, '+', 't', 'middle')
    else:
        f.text(xl + 5, y0 + 68, '−', 't', 'middle'); f.text(xr - 5, y0 + 68, '+', 't', 'middle')
    if pol:
        f.line((26, y0 + 55), (50, y0 + 55)); f.line((430, y0 + 55), (454, y0 + 55))
        a, b = ('+', '−') if pol == 'dir' else ('−', '+')
        f.text(14, y0 + 61, a, 'tn2', 'middle'); f.text(466, y0 + 61, b, 'tn2', 'middle')
    f.text(240, y0 + 106, bas, 'ti', 'middle')
FIG['jonction'] = f.svg(PRE, 'jonction', 'Jonction PN à l\'équilibre, en polarisation directe et en polarisation inverse',
                        'La zone de charge désertée (ZCD, ions fixes − côté P et + côté N) se rétrécit en direct et s\'élargit en inverse.')

# ============================================================ 5. les trois modèles de la diode
f = F(480, 326, 'modeles')
f.axes(70, 160, 456, 20, 'V[D]', 'I[D]')
f.line((70, 160), (70, 30), cls='cvm', dash=True); f.text(78, 62, 'idéal', 'tm')
f.line((70, 160), (170, 160), cls='cv2'); f.line((170, 160), (170, 30), cls='cv2'); f.text(178, 50, 'parfait', 'ti')
f.line((70, 160), (170, 160), cls='cv'); f.line((170, 160), (300, 30), cls='cv'); f.text(306, 44, 'réel : pente 1/r', 'ti')
f.line((170, 160), (170, 166), cls='mut'); f.text(170, 184, 'V[S]', 't', 'middle')
cs = (78, 238, 396)
for c, t in zip(cs, ('idéal', 'parfait', 'réel')): f.text(c, 214, t, 'tn2', 'middle')
y = 248
f.circ(cs[0] - 52, y, 4); f.circ(cs[0] + 52, y, 4); f.line((cs[0] - 48, y), (cs[0] + 48, y))
f.circ(cs[1] - 52, y, 4); f.circ(cs[1] + 52, y, 4); f.line((cs[1] - 48, y), (cs[1] - 4, y)); f.batt(cs[1], y); f.line((cs[1] + 4, y), (cs[1] + 48, y)); f.text(cs[1], y - 22, 'V[S]', 't', 'middle')
f.circ(cs[2] - 52, y, 4); f.circ(cs[2] + 52, y, 4); f.line((cs[2] - 48, y), (cs[2] - 34, y)); f.batt(cs[2] - 30, y); f.line((cs[2] - 26, y), (cs[2] - 18, y))
f.resh(cs[2] - 18, cs[2] + 48, y, 'r'); f.text(cs[2] - 30, y - 22, 'V[S]', 't', 'middle')
f.text(cs[0], 288, 'V[D] = 0', 'ti', 'middle'); f.text(cs[1], 288, 'V[D] = V[S]', 'ti', 'middle'); f.text(cs[2], 288, 'V[D] = V[S] + r I[D]', 'ti', 'middle')
f.text(240, 314, 'bloquée : interrupteur ouvert, I[D] = 0', 'tm', 'middle')
FIG['modeles'] = f.svg(PRE, 'modeles', 'Les trois modèles de la diode passante : idéal, parfait, réel',
                       'Idéal : V[D] = 0. Parfait : V[D] = V[S] (source de tension). Réel : V[D] = V[S] + r I[D] (source et résistance en série). Bloquée : I[D] = 0 dans les trois cas.')

# ============================================================ 6. caractéristique complète, R_stat et r_d
f = F(480, 318, 'caracteristique')
ox, oy = 250, 170
f.axes(ox, oy, 462, 20, 'V[D]', 'I[D]'); f.line((ox, oy), (ox, 300))
pts = ['%.1f %.1f' % (x, oy - 3 * (math.exp((x - ox) / 22) - 1)) for x in range(ox, 337, 2)]
f.path('M' + ' L'.join(pts))
f.path('M250 172 L116 172 C106 173 103 200 101 230 S98 270 97 294')
f.line((290, oy), (290, 154), cls='mut', dash=True); f.text(290, 190, 'V[S]', 't', 'middle')
f.line((110, 150), (110, oy), cls='mut', dash=True); f.text(116, 148, 'V[BR]')
f.text(180, 148, 'bloquée', 'tm', 'middle'); f.text(372, 56, 'passante', 'tm'); f.text(92, 254, 'claquage', 'tm', 'end'); f.text(92, 272, 'avalanche', 'tm', 'end')
f.text(170, 196, 'fuite I[S]', 'tm', 'middle')
qx = 318; qy = oy - 3 * (math.exp((qx - ox) / 22) - 1)
f.line((ox, oy), (qx, qy), cls='mut', dash=True)
slope = -3 * math.exp((qx - ox) / 22) / 22
f.line((qx - 24, round(qy - slope * 24, 1)), (qx + 14, round(qy + slope * 14, 1)), cls='cv2')
f.line((qx, qy), (qx, oy), cls='mut', dash=True); f.line((ox, qy), (qx, qy), cls='mut', dash=True); f.dot(qx, round(qy, 1))
f.text(qx, oy + 20, 'V[Q]', 't', 'middle'); f.text(ox - 6, qy + 5, 'I[Q]', 't', 'end'); f.text(qx + 9, qy - 8, 'Q', 'tn2')
f.text(262, 228, 'R[stat] = V[Q] / I[Q]', 't'); f.text(262, 246, '(corde O–Q, en tirets)', 'tm')
f.text(262, 274, 'r[d] = η V[T] / I[D]', 't'); f.text(262, 292, '(inverse de la pente', 'tm'); f.text(262, 308, 'de la tangente en Q)', 'tm')
FIG['caracteristique'] = f.svg(PRE, 'caracteristique', 'Caractéristique courant-tension d\'une diode : zones, résistance statique et résistance dynamique',
                               'Trois zones : passante au-delà de V[S], bloquée (courant de fuite I[S]), claquage sous −V[BR]. R[stat] est la pente de la corde O–Q (inverse), r[d] celle de la tangente en Q (inverse).')

# ============================================================ 7. pont de Graëtz
f = F(480, 346, 'pont')
L, T, B, R = (150, 125), (235, 45), (235, 205), (320, 125)
f.line(L, T); f.line(T, R); f.line(R, B); f.line(B, L)
ang = math.degrees(math.atan2(-80, 85))
f.diode(192.5, 85, round(ang, 1), 'on'); f.diode(277.5, 85, round(ang - 93.4, 1), 'off')
f.diode(192.5, 165, round(ang - 93.4, 1), 'off'); f.diode(277.5, 165, round(ang, 1), 'on')
f.text(160, 76, 'D[1]', 't', 'end'); f.text(298, 76, 'D[3]'); f.text(160, 178, 'D[4]', 't', 'end'); f.text(298, 178, 'D[2]')
f.line((60, 130), (60, 125), (150, 125)); f.acsrc(60, 150, '', 20); f.text(88, 156, 'e(t)')
f.line((60, 170), (60, 250), (345, 250), (345, 125), (320, 125)); f.dot(L[0], L[1]); f.dot(R[0], R[1])
f.line((235, 45), (420, 45)); f.add('<path class="w" d="M235 205 H337 a8 8 0 0 1 16 0 H420"/>'); f.dot(235, 45); f.dot(235, 205)
f.resv(420, 45, 205, 'R[L]'); f.text(404, 66, '+', 'tn2', 'end'); f.text(404, 198, '−', 'tn2', 'end')
f.cur((340, 45), (380, 45)); f.cur((300, 205), (262, 205)); f.cur((250, 250), (210, 250)); f.cur((345, 150), (345, 178))
f.text(240, 296, 'alternance + : D[1] et D[2] passantes', 'ti', 'middle'); f.text(240, 316, 'alternance − : D[3] et D[4] passantes', 't', 'middle')
f.text(240, 338, 'V[max] = V[m] − 2V[S]   ·   f[s] = 2f', 'tm', 'middle')
FIG['pont'] = f.svg(PRE, 'pont', 'Pont de Graetz : deux diodes en série à chaque alternance',
                    'Pont de Graëtz : à chaque alternance le courant traverse deux diodes (D[1] et D[2] ici), donc une chute de 2V[S] ; le courant dans la charge garde le même sens.')

# ============================================================ 8. formes d'onde du redressement
f = F(480, 410, 'redresse')
x0, y0, A, per, vs2 = 40, 118, 55, 200, 12
f.text(240, 16, 'Redressement double alternance', 'tn2', 'middle')
f.axes(x0, y0, 462, 36, 't', 'u')
f.path('M' + ' L'.join('%.1f %.1f' % (x, y0 - A * math.sin(2 * math.pi * (x - x0) / per)) for x in range(x0, 441, 2)), 'cvm dsh')
f.path('M' + ' L'.join('%.1f %.1f' % (x, y0 - max(abs(A * math.sin(2 * math.pi * (x - x0) / per)) - vs2, 0)) for x in range(x0, 441, 2)))
f.line((x0 - 4, y0 - A), (x0 + 4, y0 - A), cls='mut'); f.text(x0 - 8, y0 - A + 5, 'V[m]', 't', 'end')
f.line((x0 + 150, 48), (x0 + 52, 48), arrow=True); f.line((x0 + 50, 48), (x0 + 148, 48), arrow=True); f.text(x0 + 100, 40, 'T/2 : f[s] = 2f', 'tm', 'middle')
f.line((60, 194), (90, 194), cls='cvm dsh'); f.text(96, 199, 'e(t)'); f.line((170, 194), (200, 194)); f.text(206, 199, 's(t) après le pont')
# lissage
yb, K = 352, 1.5
f.text(240, 228, 'Avec condensateur de lissage', 'tn2', 'middle')
f.axes(x0, yb, 462, 244, 't', 'u')
sig = lambda x: max(abs(A * math.sin(2 * math.pi * (x - x0) / per)) - vs2, 0)
f.path('M' + ' L'.join('%.1f %.1f' % (x, yb - K * sig(x)) for x in range(x0, 441, 2)), 'cvm dsh')
v, pts, vals = 0.0, [], []
for x in range(x0, 441, 1):
    v = max(sig(x), v * math.exp(-1 / 95.0)); pts.append('%.1f %.1f' % (x, yb - K * v)); vals.append((x, v))
f.path('M' + ' L'.join(pts))
seg = [(x, v) for x, v in vals if 240 <= x <= 340]
vmax = max(v for _, v in seg); vmin = min(v for _, v in seg)
f.line((338, yb - K * vmax), (462, yb - K * vmax), cls='mut', dash=True); f.line((338, yb - K * vmin), (462, yb - K * vmin), cls='mut', dash=True)
f.line((450, yb - K * vmax), (450, yb - K * vmin), arrow=True); f.line((450, yb - K * vmin), (450, yb - K * vmax), arrow=True); f.text(436, yb - K * (vmax + vmin) / 2 + 5, 'ΔV', 'ti', 'end')
f.text(240, 384, 'ΔV ≈ I / (2 f C)   (double alternance)', 'ti', 'middle'); f.text(240, 403, 'C grand ou I petit → ondulation faible', 'tm', 'middle')
FIG['redresse'] = f.svg(PRE, 'redresse', 'Tension redressée double alternance sans puis avec condensateur de lissage',
                        'Le pont retranche 2V[S] au sommet et double la fréquence. Le condensateur se charge au sommet et se décharge dans la charge entre deux sommets : ondulation ΔV ≈ I/(2fC).')

# ============================================================ 9. régulateur Zener : circuit
f = F(480, 300, 'zener_circuit')
f.line((50, 60), (50, 105)); f.vsrc(50, 125, 'E'); f.line((50, 145), (50, 210))
f.resh(50, 170, 60, 'R'); f.line((170, 60), (330, 60)); f.dot(230, 60)
f.line((230, 60), (230, 120)); f.diode(230, 130, -90, zener=True); f.line((230, 140), (230, 210)); f.line((50, 210), (330, 210)); f.dot(230, 210); f.gnd(160, 210); f.dot(160, 210)
f.resv(330, 60, 210, 'R[L]')
f.cur((140, 48), (180, 48)); f.text(160, 38, 'I[R]', 't', 'middle'); f.cur((246, 72), (246, 104)); f.text(254, 92, 'I[Z]'); f.cur((314, 72), (314, 104)); f.text(308, 92, 'I[L]', 't', 'end')
f.line((330, 60), (395, 60), cls='mut', dash=True); f.line((330, 210), (395, 210), cls='mut', dash=True); f.line((395, 205), (395, 65), cls='w2', arrow=True); f.text(405, 140, 'u[L]')
f.text(240, 244, 'I[R] = I[Z] + I[L]', 'ti', 'middle'); f.text(240, 266, 'régule si E · R[L]/(R+R[L]) ≥ V[Z]', 't', 'middle'); f.text(240, 288, 'I[Z] = (E − V[Z])/R − V[Z]/R[L]', 't', 'middle')
FIG['zener_circuit'] = f.svg(PRE, 'zener_circuit', 'Régulateur de tension à diode Zener avec résistance série et charge',
                             'La Zener (cathode vers le + ) est en parallèle sur la charge. Quand elle régule, u[L] = V[Z] et I[R] = I[Z] + I[L].')

# ============================================================ 10. diode Zener : caractéristique
f = F(480, 306, 'zener_car')
ox, oy = 320, 100
f.axes(ox, oy, 462, 20, 'V[D]', 'I[D]'); f.line((ox, oy), (ox, 288))
f.path('M' + ' L'.join('%.1f %.1f' % (x, oy - 3 * (math.exp((x - ox) / 22) - 1)) for x in range(ox, 377, 2)))
f.path('M320 101 L164 101 C154 102 151 130 149 170 S146 230 145 270')
f.line((160, 60), (160, oy), cls='mut', dash=True); f.text(160, 52, '−V[Z]', 't', 'middle')
f.line((146, 240), (ox, 240), cls='mut', dash=True); f.text(314, 234, 'I[Z,max]', 't', 'end')
f.text(240, 86, 'bloquée', 'tm', 'middle'); f.text(386, 56, 'direct :', 'tm'); f.text(386, 74, 'diode', 'tm')
f.text(332, 150, 'zone Zener', 'ti'); f.text(332, 172, 'V ≈ −V[Z]', 't'); f.text(332, 192, 'I[Z] ≤ I[Z,max]', 't')
f.text(240, 298, 'P[max] = V[Z] · I[Z,max]', 'tm', 'middle')
FIG['zener_car'] = f.svg(PRE, 'zener_car', 'Caractéristique d\'une diode Zener : zone Zener en inverse quasi verticale',
                         'En inverse, la caractéristique est quasi verticale à −V[Z] : la tension reste presque constante pour un courant entre 0 et I[Z,max]. En direct, c\'est une diode ordinaire.')

# ============================================================ insertion
patch_css()
P = Page('fiche-ch2-ch3.html', PRE)
P.avant('<ul>\n<li><b>Paires électron-trou</b>', FIG['bandes'])
P.avant('<div class="s4-trap"><span class="s4-lbl">Piège</span>Le gap n\'est pas la « tension de seuil »', FIG['rho_t'])
P.avant('<ul>\n<li><b>Hypothèse de dopage fort</b>', FIG['dopage'])
P.avant('<ul>\n<li><b>Polarisation directe</b>', FIG['jonction'])
P.avant('<div class="s4-trap"><span class="s4-lbl">Piège de DS', FIG['modeles'])
P.avant('<h3>C. Méthode : état d\'une diode', FIG['caracteristique'])
P.avant('<h3>E. La diode Zener</h3>', FIG['pont'] + '\n' + FIG['redresse'])
P.avant('<figure class="s4-fig">\n<svg aria-label="Tension de sortie du régulateur', FIG['zener_car'] + '\n' + FIG['zener_circuit'])
P.ecrire()
