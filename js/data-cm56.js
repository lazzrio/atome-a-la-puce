/* Généré par gen_cm56.py : QCM CM5 (BJT dynamique) et CM6 (FET). Valeurs calculées, schémas SVG. */
window.CM56_THEMES = {"f5": "CM5 · formules", "k5": "CM5 · connaissances", "c5": "CM5 · calculs sur schéma", "f6": "CM6 · formules", "k6": "CM6 · connaissances", "c6": "CM6 · calculs sur schéma"};
window.CM56 = [
{
"id": "q01",
"th": "f5",
"src": "CM5",
"q": "Résistance dynamique d\\'émetteur du modèle \\(r_e\\) :",
"o": [
"\\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\)",
"\\(r_e=26\\ \\mathrm{mV}\\cdot I_E\\)",
"\\(r_e=\\dfrac{I_E}{26\\ \\mathrm{mV}}\\)",
"\\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_B}\\)"
],
"a": [
0
],
"e": "\\(I_E\\) est le courant <b>continu</b> du point de repos (à \\(300\\) K)."
},
{
"id": "q02",
"th": "f5",
"src": "CM5",
"q": "Émetteur commun, \\(C_E\\) (découplage) présent, sans charge. Quelles expressions sont justes ?",
"o": [
"\\(A_v\\approx-\\dfrac{R_C}{r_e}\\)",
"\\(Z_{in}=R_1\\parallel R_2\\parallel(\\beta+1)r_e\\)",
"\\(Z_{out}=R_C\\)",
"\\(Z_{out}=(\\beta+1)r_e\\)",
"\\(A_v\\approx+\\dfrac{R_C}{r_e}\\)"
],
"a": [
0,
1,
2
],
"e": "Gain négatif (déphasage de \\(\\pi\\)) ; vue de la base, \\(r_e\\) est multipliée par \\(\\beta+1\\) ; en sortie la source \\(\\beta i_b\\) est éteinte quand on calcule \\(Z_{out}\\), il reste \\(R_C\\) (erratum du cours, diapo 12)."
},
{
"id": "q03",
"th": "f5",
"src": "CM5",
"q": "Même montage sans condensateur de découplage \\(C_E\\) :",
"o": [
"\\(A_v\\approx-\\dfrac{R_C}{R_E+r_e}\\) et \\(Z_{in}=R_1\\parallel R_2\\parallel(\\beta+1)(r_e+R_E)\\)",
"\\(A_v\\approx-\\dfrac{R_C}{r_e}\\) et \\(Z_{in}=R_1\\parallel R_2\\)",
"\\(A_v\\approx-\\dfrac{R_E}{R_C}\\) et \\(Z_{in}=(\\beta+1)r_e\\)",
"\\(A_v=0\\)"
],
"a": [
0
],
"e": "\\(R_E\\) n\\'est plus court-circuitée en AC : elle s\\'ajoute à \\(r_e\\), le gain s\\'effondre mais \\(Z_{in}\\) augmente."
},
{
"id": "q04",
"th": "f5",
"src": "CM5",
"q": "Sortie d\\'un amplificateur (\\(A_v\\) à vide, \\(Z_{out}\\)) chargée par \\(R_L\\) :",
"o": [
"\\(v_{out}=A_v\\,v_{in}\\,\\dfrac{R_L}{Z_{out}+R_L}\\)",
"\\(v_{out}=A_v\\,v_{in}\\,\\dfrac{Z_{out}}{Z_{out}+R_L}\\)",
"\\(v_{out}=A_v\\,v_{in}\\,(Z_{out}+R_L)\\)",
"\\(v_{out}=A_v\\,v_{in}\\)"
],
"a": [
0
],
"e": "Pont diviseur entre \\(Z_{out}\\) et \\(R_L\\)."
},
{
"id": "q05",
"th": "f5",
"src": "CM5",
"q": "Gains et décibels : quelles relations sont justes ?",
"o": [
"\\(A_P=A_v\\cdot A_i\\)",
"\\(A_{v,dB}=20\\log|A_v|\\)",
"\\(A_{P,dB}=10\\log A_P\\)",
"\\(A_{v,dB}=10\\log|A_v|\\)",
"\\(A_P=A_v+A_i\\)"
],
"a": [
0,
1,
2
],
"e": "\\(20\\log\\) pour une tension ou un courant, \\(10\\log\\) pour une puissance."
},
{
"id": "q06",
"th": "f5",
"src": "CM5",
"q": "Modèle de Giacoletto (haute fréquence) :",
"o": [
"\\(g_m=\\dfrac{I_C}{V_T}\\) et \\(r_\\pi=\\dfrac{\\beta}{g_m}\\)",
"\\(g_m=I_C\\,V_T\\) et \\(r_\\pi=\\beta\\,g_m\\)",
"\\(g_m=\\dfrac{V_T}{I_C}\\) et \\(r_\\pi=\\dfrac{g_m}{\\beta}\\)",
"\\(g_m=\\beta\\,I_C\\) et \\(r_\\pi=r_e\\)"
],
"a": [
0
],
"e": "\\(V_T=26\\) mV ; \\(r_\\pi\\approx(\\beta+1)r_e\\)."
},
{
"id": "q07",
"th": "f5",
"src": "CM5",
"q": "Rendement maximal théorique des classes d\\'amplification :",
"o": [
"A : \\(\\le50\\ \\%\\) ; B : \\(\\le78{,}5\\ \\%\\) ; D : très élevé",
"A : \\(\\le78{,}5\\ \\%\\) ; B : \\(\\le50\\ \\%\\)",
"A et B : \\(100\\ \\%\\)",
"A : \\(25\\ \\%\\) ; B : \\(25\\ \\%\\)"
],
"a": [
0
],
"e": "Classe B : \\(\\dfrac{\\pi}{4}=78{,}5\\ \\%\\)."
},
{
"id": "q08",
"th": "f5",
"src": "CM5",
"q": "Paire Darlington (gains \\(\\beta_1\\), \\(\\beta_2\\)) :",
"o": [
"\\(\\beta_D\\approx\\beta_1\\,\\beta_2\\) et \\(V_{BE,D}\\approx1{,}4\\ \\mathrm V\\)",
"\\(\\beta_D=\\beta_1+\\beta_2\\) et \\(V_{BE,D}=0{,}7\\ \\mathrm V\\)",
"\\(\\beta_D=\\dfrac{\\beta_1}{\\beta_2}\\)",
"\\(\\beta_D\\approx\\beta_1\\beta_2\\) et \\(V_{BE,D}=0{,}35\\ \\mathrm V\\)"
],
"a": [
0
],
"e": "Deux jonctions base-émetteur en série."
},
{
"id": "q09",
"th": "f5",
"src": "CM5",
"q": "Deux étages en cascade : gain total en tension (avec charge) :",
"o": [
"produit des gains <b>chargés</b> de chaque étage",
"somme des gains à vide",
"produit des gains à vide",
"gain du premier étage seulement"
],
"a": [
0
],
"e": "Chaque étage est chargé par l\\'impédance d\\'entrée du suivant (pont \\(\\dfrac{Z_{i,2}}{Z_{o,1}+Z_{i,2}}\\))."
},
{
"id": "q10",
"th": "k5",
"src": "CM5",
"q": "Rôle des condensateurs d\\'un émetteur commun (\\(C_1\\), \\(C_2\\), \\(C_E\\)) :",
"o": [
"\\(C_1\\) et \\(C_2\\) (liaison) bloquent la composante continue",
"\\(C_E\\) court-circuite \\(R_E\\) en alternatif et augmente le gain",
"en continu les condensateurs sont des circuits ouverts",
"\\(C_E\\) déplace le point de repos",
"\\(C_1\\) amplifie le signal"
],
"a": [
0,
1,
2
],
"e": "Ils ne changent pas le point \\(Q\\) (circuits ouverts en DC) et sont des fils en AC."
},
{
"id": "q11",
"th": "k5",
"src": "CM5",
"q": "Pour passer du schéma DC au schéma équivalent AC petits signaux :",
"o": [
"les condensateurs deviennent des fils",
"les sources continues (\\(V_{CC}\\)) sont reliées à la masse",
"le transistor est remplacé par \\((\\beta+1)r_e\\) entre B et E et une source \\(\\beta i_b\\)",
"les condensateurs deviennent des circuits ouverts",
"on garde \\(V_{CC}\\)"
],
"a": [
0,
1,
2
],
"e": "Majuscules = grandeurs DC, minuscules = AC."
},
{
"id": "q12",
"th": "k5",
"src": "CM5",
"q": "Le signal de sortie d\\'un émetteur commun est :",
"o": [
"en opposition de phase avec l\\'entrée (déphasage de \\(\\pi\\))",
"en phase",
"déphasé de \\(\\pi/2\\)",
"toujours plus petit que l\\'entrée"
],
"a": [
0
],
"e": "Le signe moins de \\(A_v\\)."
},
{
"id": "q13",
"th": "k5",
"src": "CM5",
"q": "Bande passante d\\'un émetteur commun :",
"o": [
"limitée en basses fréquences par les condensateurs de liaison et de découplage",
"limitée en hautes fréquences par les capacités internes du transistor",
"il se comporte comme un passe-bande",
"il se comporte comme un réjecteur de bande"
],
"a": [
0,
1,
2
],
"e": "En HF on utilise le modèle de Giacoletto."
},
{
"id": "q14",
"th": "k5",
"src": "CM5",
"q": "Le transfert maximal de <b>puissance</b> entre deux étages est obtenu quand :",
"o": [
"\\(Z_{o,1}=Z_{i,2}\\) (adaptation d\\'impédance)",
"\\(Z_{o,1}\\gg Z_{i,2}\\)",
"\\(Z_{i,2}=0\\)",
"\\(Z_{o,1}=0\\)"
],
"a": [
0
],
"e": "Pour transmettre le maximum de <em>tension</em> on veut plutôt \\(Z_{i,2}\\gg Z_{o,1}\\)."
},
{
"id": "q15",
"th": "k5",
"src": "CM5",
"q": "La distorsion de croisement :",
"o": [
"apparaît en classe B (push-pull)",
"est réduite en classe AB en polarisant les bases avec des diodes",
"vient de la zone où aucun transistor ne conduit (\\(|v|<0{,}7\\ \\mathrm V\\))",
"apparaît en classe A",
"est due au condensateur de liaison"
],
"a": [
0,
1,
2
],
"e": ""
},
{
"id": "q16",
"th": "k5",
"src": "CM5",
"q": "Classe D :",
"o": [
"les transistors fonctionnent en commutation (PWM) et un filtre reconstitue le signal",
"le point de repos est au milieu de la droite de charge",
"le rendement est inférieur à \\(25\\ \\%\\)",
"un seul transistor conduit en permanence"
],
"a": [
0
],
"e": "Très haut rendement : les transistors sont bloqués ou saturés."
},
{
"id": "q17",
"th": "k5",
"src": "CM5",
"q": "Quels montages à transistors du cours sont correctement décrits ?",
"o": [
"Miroir de courant : \\(i_{out}\\approx i_{in}\\), peu sensible à \\(\\beta\\)",
"Pont en H : inverse le sens d\\'un moteur à courant continu",
"Paire différentielle : cœur (étage d\\'entrée) de l\\'AOP",
"Générateur de courant à Zener : \\(i_L\\approx\\dfrac{V_Z-V_{BE}}{R_E}\\)",
"Darlington : gain \\(\\beta_1+\\beta_2\\)"
],
"a": [
0,
1,
2,
3
],
"e": "Darlington : \\(\\beta_1\\beta_2\\)."
},
{
"id": "q18",
"th": "k5",
"src": "CM5",
"q": "Ordres de grandeur d\\'un AOP réel donnés en cours :",
"o": [
"\\(Z_{in}\\approx2\\ \\mathrm{M\\Omega}\\), \\(Z_{out}\\approx50\\ \\Omega\\), \\(A_d\\approx10^5\\)",
"\\(Z_{in}\\approx50\\ \\Omega\\), \\(Z_{out}\\approx2\\ \\mathrm{M\\Omega}\\)",
"\\(A_d\\approx10\\)",
"\\(Z_{in}=0\\)"
],
"a": [
0
],
"e": "AOP = paire différentielle + étage à gain + push-pull de sortie."
},
{
"id": "q19",
"th": "k5",
"src": "CM5",
"q": "Pourquoi \\(Z_{out}=R_C\\) pour l\\'émetteur commun (erratum du cours) ?",
"o": [
"on éteint \\(v_{in}\\) (fil), donc \\(i_b=0\\), donc la source \\(\\beta i_b\\) devient un circuit ouvert : il ne reste que \\(R_C\\)",
"parce que \\(r_e\\) est très grande",
"parce que \\(C_2\\) court-circuite \\(R_C\\)",
"parce que \\(R_L=R_C\\)"
],
"a": [
0
],
"e": "Définition : \\(Z_{out}=\\dfrac{v_{out}}{i_{out}}\\) sources indépendantes éteintes."
},
{
"id": "q20",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Que vaut le courant d\\'émetteur \\(I_E\\) (sans négliger \\(I_B\\) dans le pont) ?",
"o": [
"\\(1{,}33\\ \\mathrm{mA}\\)",
"\\(1{,}41\\ \\mathrm{mA}\\)",
"\\(0{,}666\\ \\mathrm{mA}\\)",
"\\(11{,}3\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "Thévenin du pont : \\(E_{Th}=12\\times\\dfrac{10}{57}=2{,}11\\) V, \\(R_{Th}=47\\parallel10=8{,}25\\ \\mathrm{k\\Omega}\\). \\(I_B=\\dfrac{E_{Th}-V_{BE}}{R_{Th}+(\\beta+1)R_E}=8{,}82\\ \\mu\\mathrm A\\), \\(I_E=(\\beta+1)I_B=1{,}33\\) mA. (Avec \\(I_B\\) négligé on trouverait \\(\\dfrac{E_{Th}-0{,}7}{R_E}=1{,}41\\) mA.)"
},
{
"id": "q21",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Que vaut \\(V_{CE}\\) et dans quel mode est le transistor ?",
"o": [
"\\(V_{CE}\\approx7{,}76\\ \\mathrm V\\)",
"mode actif (BE directe, BC inverse)",
"\\(V_{CE}\\approx12\\ \\mathrm V\\)",
"transistor saturé",
"\\(V_{CE}\\approx0{,}2\\ \\mathrm V\\)"
],
"a": [
0,
1
],
"e": "\\(V_{CE}=V_{CC}-R_CI_C-R_EI_E=12-2{,}91-1{,}33=7{,}76\\) V \\(>0{,}2\\) V et \\(V_{BE}=0{,}7\\) V : actif."
},
{
"id": "q22",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Résistance dynamique d\\'émetteur \\(r_e\\) :",
"o": [
"\\(19{,}5\\ \\mathrm{\\Omega}\\)",
"\\(2\\,946\\ \\mathrm{\\Omega}\\)",
"\\(195\\ \\mathrm{\\Omega}\\)",
"\\(1{,}95\\ \\mathrm{\\Omega}\\)"
],
"a": [
0
],
"e": "\\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}=\\dfrac{26}{1{,}33}=19{,}5\\ \\Omega\\)."
},
{
"id": "q23",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Impédance d\\'entrée \\(Z_{in}\\) (avec \\(C_E\\)) :",
"o": [
"\\(2{,}17\\ \\mathrm{k\\Omega}\\)",
"\\(8{,}25\\ \\mathrm{k\\Omega}\\)",
"\\(2{,}95\\ \\mathrm{k\\Omega}\\)",
"\\(7{,}83\\ \\mathrm{k\\Omega}\\)"
],
"a": [
0
],
"e": "\\((\\beta+1)r_e=2{,}95\\ \\mathrm{k\\Omega}\\) ; \\(Z_{in}=R_1\\parallel R_2\\parallel(\\beta+1)r_e=8{,}25\\parallel2{,}95=2{,}17\\ \\mathrm{k\\Omega}\\)."
},
{
"id": "q24",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Gain en tension <b>à vide</b> (sans \\(R_L\\)), \\(C_E\\) présent :",
"o": [
"\\(A_v\\approx-113\\)",
"\\(A_v\\approx113\\)",
"\\(A_v\\approx-76{,}8\\)",
"\\(A_v\\approx-2{,}16\\)"
],
"a": [
0
],
"e": "\\(A_v=-\\dfrac{R_C}{r_e}=-\\dfrac{2\\,200}{19{,}5}=-113\\)."
},
{
"id": "q25",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Gain en tension avec la charge \\(R_L\\) branchée, \\(C_E\\) présent :",
"o": [
"\\(A_v\\approx-76{,}8\\)",
"\\(A_v\\approx-113\\)",
"\\(A_v\\approx76{,}8\\)",
"\\(A_v\\approx-1{,}47\\)"
],
"a": [
0
],
"e": "\\(R_C\\parallel R_L=1{,}5\\ \\mathrm{k\\Omega}\\), \\(A_v=-\\dfrac{R_C\\parallel R_L}{r_e}=-76{,}8\\) (ou \\(A_{v,vide}\\dfrac{R_L}{R_C+R_L}\\))."
},
{
"id": "q26",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. <b>Nouvelle condition : on retire \\(C_E\\).</b> Quelles affirmations sont justes (charge \\(R_L\\) branchée) ?",
"o": [
"\\(A_v\\approx-1{,}47\\)",
"\\(Z_{in}\\) augmente (\\(\\approx7{,}83\\ \\mathrm{k\\Omega}\\))",
"le point de repos \\(Q\\) ne change pas",
"\\(A_v\\approx-76{,}8\\)",
"le transistor sature"
],
"a": [
0,
1,
2
],
"e": "\\(A_v=-\\dfrac{R_C\\parallel R_L}{R_E+r_e}=-1{,}47\\) ; \\(Z_{in}=R_1\\parallel R_2\\parallel(\\beta+1)(r_e+R_E)=7{,}83\\ \\mathrm{k\\Omega}\\). En DC un condensateur est un circuit ouvert : \\(Q\\) inchangé."
},
{
"id": "q27",
"th": "c5",
"src": "Schéma A · émetteur commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 590 310\" role=\"img\" aria-label=\"Émetteur commun polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><circle class=\"dot\" cx=\"250\" cy=\"26\" r=\"3.5\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/><circle class=\"dot\" cx=\"256\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M256 196 L370 196\"/><path class=\"w\" d=\"M370 196 L370 228\"/><path class=\"w\" d=\"M370 236 L370 268\"/><path class=\"w\" d=\"M359 228 L381 228\"/><path class=\"w\" d=\"M359 236 L381 236\"/><text class=\"t\" x=\"385\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M360 268 L380 268\"/><path class=\"w\" d=\"M364 273 L376 273\"/><path class=\"w\" d=\"M368 278 L372 278\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L420 100\"/><path class=\"w\" d=\"M420 100 L441 100\"/><path class=\"w\" d=\"M449 100 L470 100\"/><path class=\"w\" d=\"M441 89 L441 111\"/><path class=\"w\" d=\"M449 89 L449 111\"/><text class=\"t\" x=\"445\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M470 100 L500 100\"/><path class=\"w\" d=\"M500 100 L500 164\"/><path class=\"w\" d=\"M500 204 L500 268\"/><rect class=\"res\" x=\"493\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M490 268 L510 268\"/><path class=\"w\" d=\"M494 273 L506 273\"/><path class=\"w\" d=\"M498 278 L502 278\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 196\"/><circle class=\"src\" cx=\"50\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M40 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 226 L50 268\"/><path class=\"w\" d=\"M40 268 L60 268\"/><path class=\"w\" d=\"M44 273 L56 273\"/><path class=\"w\" d=\"M48 278 L52 278\"/></svg></figure><b>Conditions :</b> NPN au silicium en zone active, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(r_e=\\dfrac{26\\ \\mathrm{mV}}{I_E}\\), condensateurs de valeur suffisante. Impédance de sortie \\(Z_{out}\\) (\\(r_o\\) infinie) :",
"o": [
"\\(2{,}2\\ \\mathrm{k\\Omega}\\)",
"\\(1{,}5\\ \\mathrm{k\\Omega}\\)",
"\\(19{,}5\\ \\mathrm{\\Omega}\\)",
"\\(2{,}95\\ \\mathrm{k\\Omega}\\)"
],
"a": [
0
],
"e": "\\(Z_{out}=R_C\\) (la charge ne fait pas partie de l\\'amplificateur)."
},
{
"id": "q28",
"th": "c5",
"src": "Schéma B · polarisation par la base",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 530 300\" role=\"img\" aria-label=\"Émetteur commun polarisé par la base\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L270 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> </tspan>= 390 kΩ</text><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L330 100\"/><path class=\"w\" d=\"M330 100 L356 100\"/><path class=\"w\" d=\"M364 100 L390 100\"/><path class=\"w\" d=\"M356 89 L356 111\"/><path class=\"w\" d=\"M364 89 L364 111\"/><text class=\"t\" x=\"360\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M390 100 L420 100\"/><path class=\"w\" d=\"M420 100 L420 161\"/><path class=\"w\" d=\"M420 201 L420 262\"/><rect class=\"res\" x=\"413\" y=\"161\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"433\" y=\"186\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M410 262 L430 262\"/><path class=\"w\" d=\"M414 267 L426 267\"/><path class=\"w\" d=\"M418 272 L422 272\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 190\"/><circle class=\"src\" cx=\"50\" cy=\"205\" r=\"15\"/><path class=\"w\" d=\"M40 205 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"210\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 220 L50 262\"/><path class=\"w\" d=\"M40 262 L60 262\"/><path class=\"w\" d=\"M44 267 L56 267\"/><path class=\"w\" d=\"M48 272 L52 272\"/></svg></figure><b>Conditions :</b> NPN au silicium, \\(\\beta=120\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(V_{CE,sat}=0{,}2\\ \\mathrm V\\). Point de repos : quelles valeurs sont justes ?",
"o": [
"\\(I_C\\approx3{,}48\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx2{,}61\\ \\mathrm V\\)",
"\\(I_B\\approx29\\ \\mu\\mathrm A\\)",
"\\(I_C\\approx8{,}74\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx11{,}3\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(I_B=\\dfrac{12-0{,}7}{390\\ \\mathrm k}=29\\ \\mu\\mathrm A\\), \\(I_C=\\beta I_B=3{,}48\\) mA, \\(V_{CE}=12-2{,}7\\ \\mathrm k\\times I_C=2{,}61\\) V \\(>0{,}2\\) V : actif."
},
{
"id": "q29",
"th": "c5",
"src": "Schéma B · polarisation par la base",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 530 300\" role=\"img\" aria-label=\"Émetteur commun polarisé par la base\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L270 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> </tspan>= 390 kΩ</text><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L330 100\"/><path class=\"w\" d=\"M330 100 L356 100\"/><path class=\"w\" d=\"M364 100 L390 100\"/><path class=\"w\" d=\"M356 89 L356 111\"/><path class=\"w\" d=\"M364 89 L364 111\"/><text class=\"t\" x=\"360\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M390 100 L420 100\"/><path class=\"w\" d=\"M420 100 L420 161\"/><path class=\"w\" d=\"M420 201 L420 262\"/><rect class=\"res\" x=\"413\" y=\"161\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"433\" y=\"186\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M410 262 L430 262\"/><path class=\"w\" d=\"M414 267 L426 267\"/><path class=\"w\" d=\"M418 272 L422 272\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 190\"/><circle class=\"src\" cx=\"50\" cy=\"205\" r=\"15\"/><path class=\"w\" d=\"M40 205 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"210\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 220 L50 262\"/><path class=\"w\" d=\"M40 262 L60 262\"/><path class=\"w\" d=\"M44 267 L56 267\"/><path class=\"w\" d=\"M48 272 L52 272\"/></svg></figure><b>Conditions :</b> NPN au silicium, \\(\\beta=120\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(V_{CE,sat}=0{,}2\\ \\mathrm V\\). Impédance d\\'entrée \\(Z_{in}\\) en petits signaux :",
"o": [
"\\(895\\ \\mathrm{\\Omega}\\)",
"\\(390\\ \\mathrm{k\\Omega}\\)",
"\\(7{,}42\\ \\mathrm{\\Omega}\\)",
"\\(1\\,791\\ \\mathrm{\\Omega}\\)"
],
"a": [
0
],
"e": "\\(r_e=\\dfrac{26}{3{,}51}=7{,}42\\ \\Omega\\), \\((\\beta+1)r_e=897\\ \\Omega\\), \\(Z_{in}=R_B\\parallel(\\beta+1)r_e=895\\ \\Omega\\) (\\(R_B\\) très grande ne compte presque pas)."
},
{
"id": "q30",
"th": "c5",
"src": "Schéma B · polarisation par la base",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 530 300\" role=\"img\" aria-label=\"Émetteur commun polarisé par la base\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L270 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> </tspan>= 390 kΩ</text><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L330 100\"/><path class=\"w\" d=\"M330 100 L356 100\"/><path class=\"w\" d=\"M364 100 L390 100\"/><path class=\"w\" d=\"M356 89 L356 111\"/><path class=\"w\" d=\"M364 89 L364 111\"/><text class=\"t\" x=\"360\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M390 100 L420 100\"/><path class=\"w\" d=\"M420 100 L420 161\"/><path class=\"w\" d=\"M420 201 L420 262\"/><rect class=\"res\" x=\"413\" y=\"161\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"433\" y=\"186\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M410 262 L430 262\"/><path class=\"w\" d=\"M414 267 L426 267\"/><path class=\"w\" d=\"M418 272 L422 272\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 190\"/><circle class=\"src\" cx=\"50\" cy=\"205\" r=\"15\"/><path class=\"w\" d=\"M40 205 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"210\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 220 L50 262\"/><path class=\"w\" d=\"M40 262 L60 262\"/><path class=\"w\" d=\"M44 267 L56 267\"/><path class=\"w\" d=\"M48 272 L52 272\"/></svg></figure><b>Conditions :</b> NPN au silicium, \\(\\beta=120\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(V_{CE,sat}=0{,}2\\ \\mathrm V\\). Gain en tension chargé par \\(R_L\\) :",
"o": [
"\\(A_v\\approx-287\\)",
"\\(A_v\\approx-364\\)",
"\\(A_v\\approx287\\)",
"\\(A_v\\approx-2{,}37\\)"
],
"a": [
0
],
"e": "\\(A_v=-\\dfrac{R_C\\parallel R_L}{r_e}=-\\dfrac{2\\,126}{7{,}42}=-287\\) (à vide : \\(-364\\))."
},
{
"id": "q31",
"th": "c5",
"src": "Schéma B · polarisation par la base",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 530 300\" role=\"img\" aria-label=\"Émetteur commun polarisé par la base\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L270 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> </tspan>= 390 kΩ</text><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><circle class=\"dot\" cx=\"256\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M256 100 L330 100\"/><path class=\"w\" d=\"M330 100 L356 100\"/><path class=\"w\" d=\"M364 100 L390 100\"/><path class=\"w\" d=\"M356 89 L356 111\"/><path class=\"w\" d=\"M364 89 L364 111\"/><text class=\"t\" x=\"360\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M390 100 L420 100\"/><path class=\"w\" d=\"M420 100 L420 161\"/><path class=\"w\" d=\"M420 201 L420 262\"/><rect class=\"res\" x=\"413\" y=\"161\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"433\" y=\"186\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M410 262 L430 262\"/><path class=\"w\" d=\"M414 267 L426 267\"/><path class=\"w\" d=\"M418 272 L422 272\"/><path class=\"w\" d=\"M80 150 L106 150\"/><path class=\"w\" d=\"M114 150 L140 150\"/><path class=\"w\" d=\"M106 139 L106 161\"/><path class=\"w\" d=\"M114 139 L114 161\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M140 150 L170 150\"/><path class=\"w\" d=\"M50 150 L80 150\"/><path class=\"w\" d=\"M50 150 L50 190\"/><circle class=\"src\" cx=\"50\" cy=\"205\" r=\"15\"/><path class=\"w\" d=\"M40 205 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"30\" y=\"210\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M50 220 L50 262\"/><path class=\"w\" d=\"M40 262 L60 262\"/><path class=\"w\" d=\"M44 267 L56 267\"/><path class=\"w\" d=\"M48 272 L52 272\"/></svg></figure><b>Nouvelle condition :</b> on remplace le transistor par un autre de \\(\\beta=200\\) (même \\(R_B\\), même \\(R_C\\)). Que se passe-t-il ?",
"o": [
"le transistor sature",
"\\(I_C\\) est limité à \\(I_{C,sat}\\approx4{,}37\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx0{,}2\\ \\mathrm V\\)",
"\\(I_C=\\beta I_B\\approx5{,}79\\ \\mathrm{mA}\\)",
"le montage amplifie toujours sans distorsion"
],
"a": [
0,
1,
2
],
"e": "\\(\\beta I_B=5{,}79\\) mA dépasse \\(I_{C,sat}=\\dfrac{12-0{,}2}{2{,}7\\ \\mathrm k}=4{,}37\\) mA : le calcul linéaire donnerait \\(V_{CE}<0\\), impossible. La polarisation par la base dépend de \\(\\beta\\)."
},
{
"id": "q32",
"th": "c5",
"src": "Schéma C · cascade",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 610 200\" role=\"img\" aria-label=\"Deux étages amplificateurs en cascade\"><circle class=\"src\" cx=\"40\" cy=\"110\" r=\"15\"/><path class=\"w\" d=\"M30 110 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"20\" y=\"115\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">g</tspan></text><path class=\"w\" d=\"M40 95 L40 60 L60 60\"/><path class=\"w\" d=\"M60 60 L70 60\"/><path class=\"w\" d=\"M110 60 L120 60\"/><rect class=\"res\" x=\"70\" y=\"53\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"90\" y=\"47\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">s</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M40 125 L40 165 L500 165\"/><rect class=\"res\" x=\"140\" y=\"40\" width=\"120\" height=\"100\" rx=\"8\"/><text class=\"tn2\" x=\"200\" y=\"70\" text-anchor=\"middle\">Étage 1</text><text class=\"t\" x=\"200\" y=\"92\" text-anchor=\"middle\">A<tspan class=\"sb\" dy=\"4\">v1</tspan><tspan dy=\"-4\"> = −50</tspan></text><text class=\"t\" x=\"200\" y=\"112\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">i1</tspan><tspan dy=\"-4\"> = 2 kΩ</tspan></text><text class=\"t\" x=\"200\" y=\"132\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">o1</tspan><tspan dy=\"-4\"> = 3 kΩ</tspan></text><rect class=\"res\" x=\"320\" y=\"40\" width=\"120\" height=\"100\" rx=\"8\"/><text class=\"tn2\" x=\"380\" y=\"70\" text-anchor=\"middle\">Étage 2</text><text class=\"t\" x=\"380\" y=\"92\" text-anchor=\"middle\">A<tspan class=\"sb\" dy=\"4\">v2</tspan><tspan dy=\"-4\"> = −20</tspan></text><text class=\"t\" x=\"380\" y=\"112\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">i2</tspan><tspan dy=\"-4\"> = 6 kΩ</tspan></text><text class=\"t\" x=\"380\" y=\"132\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">o2</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M120 60 L140 60\"/><path class=\"w\" d=\"M260 60 L320 60\"/><path class=\"w\" d=\"M440 60 L500 60\"/><path class=\"w\" d=\"M500 60 L500 92\"/><path class=\"w\" d=\"M500 132 L500 165\"/><rect class=\"res\" x=\"493\" y=\"92\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"117\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text></svg></figure>Gains \\(A_{v1}\\), \\(A_{v2}\\) <b>à vide</b>. Gain total \\(\\dfrac{v_{L}}{v_{in,1}}\\) avec la charge \\(R_L\\) (sans tenir compte de \\(R_s\\)) :",
"o": [
"\\(333\\)",
"\\(1\\,000\\)",
"\\(-333\\)",
"\\(-70\\)"
],
"a": [
0
],
"e": "\\(A_{tot}=A_{v1}\\dfrac{Z_{i2}}{Z_{o1}+Z_{i2}}\\,A_{v2}\\dfrac{R_L}{Z_{o2}+R_L}=(-50)(0{,}667)(-20)(0{,}5)=333\\). Deux inversions : en phase."
},
{
"id": "q33",
"th": "c5",
"src": "Schéma C · cascade",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 610 200\" role=\"img\" aria-label=\"Deux étages amplificateurs en cascade\"><circle class=\"src\" cx=\"40\" cy=\"110\" r=\"15\"/><path class=\"w\" d=\"M30 110 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"20\" y=\"115\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">g</tspan></text><path class=\"w\" d=\"M40 95 L40 60 L60 60\"/><path class=\"w\" d=\"M60 60 L70 60\"/><path class=\"w\" d=\"M110 60 L120 60\"/><rect class=\"res\" x=\"70\" y=\"53\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"90\" y=\"47\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">s</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M40 125 L40 165 L500 165\"/><rect class=\"res\" x=\"140\" y=\"40\" width=\"120\" height=\"100\" rx=\"8\"/><text class=\"tn2\" x=\"200\" y=\"70\" text-anchor=\"middle\">Étage 1</text><text class=\"t\" x=\"200\" y=\"92\" text-anchor=\"middle\">A<tspan class=\"sb\" dy=\"4\">v1</tspan><tspan dy=\"-4\"> = −50</tspan></text><text class=\"t\" x=\"200\" y=\"112\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">i1</tspan><tspan dy=\"-4\"> = 2 kΩ</tspan></text><text class=\"t\" x=\"200\" y=\"132\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">o1</tspan><tspan dy=\"-4\"> = 3 kΩ</tspan></text><rect class=\"res\" x=\"320\" y=\"40\" width=\"120\" height=\"100\" rx=\"8\"/><text class=\"tn2\" x=\"380\" y=\"70\" text-anchor=\"middle\">Étage 2</text><text class=\"t\" x=\"380\" y=\"92\" text-anchor=\"middle\">A<tspan class=\"sb\" dy=\"4\">v2</tspan><tspan dy=\"-4\"> = −20</tspan></text><text class=\"t\" x=\"380\" y=\"112\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">i2</tspan><tspan dy=\"-4\"> = 6 kΩ</tspan></text><text class=\"t\" x=\"380\" y=\"132\" text-anchor=\"middle\">Z<tspan class=\"sb\" dy=\"4\">o2</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M120 60 L140 60\"/><path class=\"w\" d=\"M260 60 L320 60\"/><path class=\"w\" d=\"M440 60 L500 60\"/><path class=\"w\" d=\"M500 60 L500 92\"/><path class=\"w\" d=\"M500 132 L500 165\"/><rect class=\"res\" x=\"493\" y=\"92\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"513\" y=\"117\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text></svg></figure>Avec la résistance de source \\(R_s\\), quelles affirmations sont justes ?",
"o": [
"\\(\\dfrac{v_L}{v_g}\\approx267\\)",
"\\(20\\log\\left|\\dfrac{v_L}{v_{in,1}}\\right|\\approx50{,}5\\ \\mathrm{dB}\\)",
"le pont d\\'entrée vaut \\(\\dfrac{Z_{i1}}{Z_{i1}+R_s}=0{,}8\\)",
"\\(\\dfrac{v_L}{v_g}=1\\,000\\)",
"\\(R_s\\) n\\'a aucun effet"
],
"a": [
0,
1,
2
],
"e": "\\(\\dfrac{v_L}{v_g}=0{,}8\\times333=267\\) ; \\(20\\log333=50{,}5\\) dB."
},
{
"id": "q34",
"th": "c5",
"src": "CM5 · Giacoletto",
"q": "<b>Conditions :</b> \\(I_C=2\\ \\mathrm{mA}\\), \\(V_T=26\\ \\mathrm{mV}\\), \\(\\beta=100\\). Que valent \\(g_m\\) et \\(r_\\pi\\) ?",
"o": [
"\\(g_m\\approx76{,}9\\ \\mathrm{mS}\\), \\(r_\\pi\\approx1{,}3\\ \\mathrm{k\\Omega}\\)",
"\\(g_m\\approx7{,}69\\ \\mathrm{mS}\\), \\(r_\\pi\\approx130\\ \\Omega\\)",
"\\(g_m=52\\ \\mathrm{mS}\\), \\(r_\\pi=26\\ \\Omega\\)",
"\\(g_m\\approx76{,}9\\ \\mathrm{mS}\\), \\(r_\\pi\\approx13\\ \\Omega\\)"
],
"a": [
0
],
"e": "\\(g_m=\\dfrac{I_C}{V_T}=\\dfrac{2}{26}\\ \\mathrm S=76{,}9\\) mS, \\(r_\\pi=\\dfrac{\\beta}{g_m}=1{,}3\\ \\mathrm{k\\Omega}\\approx(\\beta+1)r_e\\)."
},
{
"id": "q35",
"th": "c5",
"src": "CM5 · Darlington",
"q": "<b>Conditions :</b> paire Darlington avec \\(\\beta_1=80\\) et \\(\\beta_2=50\\), courant de base \\(I_B=10\\ \\mu\\mathrm A\\). Courant de sortie (collecteur) ?",
"o": [
"\\(40\\ \\mathrm{mA}\\)",
"\\(1{,}3\\ \\mathrm{mA}\\)",
"\\(0{,}8\\ \\mathrm{mA}\\)",
"\\(4\\ \\mathrm{A}\\)"
],
"a": [
0
],
"e": "\\(\\beta_D\\approx\\beta_1\\beta_2=4\\,000\\), \\(I_C\\approx4\\,000\\times10\\ \\mu\\mathrm A=40\\) mA."
},
{
"id": "q36",
"th": "c5",
"src": "CM5 · bande passante",
"q": "<b>Conditions :</b> le condensateur de liaison d\\'entrée \\(C_1=10\\ \\mu\\mathrm F\\) voit une résistance \\(R_s+Z_{in}=1\\ \\mathrm{k\\Omega}+2{,}17\\ \\mathrm{k\\Omega}\\). Fréquence de coupure basse ?",
"o": [
"\\(5{,}02\\ \\mathrm{Hz}\\)",
"\\(31{,}5\\ \\mathrm{Hz}\\)",
"\\(50{,}2\\ \\mathrm{Hz}\\)",
"\\(2{,}51\\ \\mathrm{Hz}\\)"
],
"a": [
0
],
"e": "\\(f_c=\\dfrac{1}{2\\pi RC}=\\dfrac{1}{2\\pi\\times3\\,170\\times10^{-5}}=5{,}02\\) Hz."
},
{
"id": "q37",
"th": "f6",
"src": "CM6 · erratum",
"q": "Selon l\\'erratum du cours, quelle relation faut-il connaître <b>par cœur</b> ?",
"o": [
"la définition \\(g_m=\\dfrac{\\mathrm dI_D}{\\mathrm dV_{GS}}\\)",
"\\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\) (elle serait donnée si besoin)",
"\\(g_m=\\dfrac{2I_{DSS}}{|V_P|}\\left(1-\\dfrac{V_{GS}}{V_P}\\right)\\)",
"\\(R_{DS}=V_P\\,I_{DSS}\\)"
],
"a": [
0
],
"e": "L\\'erratum précise que la loi quadratique n\\'est pas à apprendre (donnée en évaluation si besoin), mais que \\(g_m=\\dfrac{\\mathrm dI_D}{\\mathrm dV_{GS}}\\) est à connaître par cœur. La formule avec \\(V_P\\) de la diapo 17 est fausse."
},
{
"id": "q38",
"th": "f6",
"src": "CM6 · erratum",
"q": "Transconductance d\\'un JFET à utiliser en évaluation (erratum) :",
"o": [
"\\(g_m=-\\dfrac{2I_{DSS}}{V_{GS,off}}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)\\)",
"\\(g_m=\\dfrac{2I_{DSS}}{|V_P|}\\left(1-\\dfrac{V_{GS}}{V_P}\\right)\\) avec \\(V_P>0\\)",
"\\(g_m=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\)",
"\\(g_m=\\dfrac{I_{DSS}}{V_{GS,off}}\\)"
],
"a": [
0
],
"e": "On dérive \\(I_D\\) : \\((u^2)\\'=2u\\'u\\) avec \\(u\\'=-\\dfrac{1}{V_{GS,off}}\\). Comme \\(V_{GS,off}<0\\), \\(g_m>0\\). Utiliser \\(V_{GS,off}\\), pas \\(V_P\\)."
},
{
"id": "q39",
"th": "f6",
"src": "CM6",
"q": "JFET : quelles relations sont justes ?",
"o": [
"\\(I_D=I_S\\) et \\(I_G\\approx0\\)",
"\\(R_{DS}=\\dfrac{V_P}{I_{DSS}}\\) (zone ohmique, \\(V_{GS}=0\\))",
"\\(|V_{GS,off}|=V_P\\)",
"\\(I_D=\\beta\\,I_G\\)",
"\\(I_D=I_{DSS}\\) pour \\(V_{GS}=V_{GS,off}\\)"
],
"a": [
0,
1,
2
],
"e": "\\(I_D=I_{DSS}\\) pour \\(V_{GS}=0\\) ; \\(I_D=0\\) pour \\(V_{GS}=V_{GS,off}\\)."
},
{
"id": "q40",
"th": "f6",
"src": "CM6",
"q": "Droite de charge d\\'un JFET (maille drain, \\(R_D\\) et \\(R_S\\)) :",
"o": [
"\\(I_D=-\\dfrac{V_{DS}}{R_D+R_S}+\\dfrac{V_{DD}}{R_D+R_S}\\)",
"\\(I_D=\\dfrac{V_{DS}}{R_D+R_S}\\)",
"\\(I_D=-\\dfrac{V_{DS}}{R_D}+\\dfrac{V_{DD}}{R_S}\\)",
"\\(I_D=\\dfrac{V_{DD}-V_{GS}}{R_D}\\)"
],
"a": [
0
],
"e": "\\(V_{DD}=(R_D+R_S)I_D+V_{DS}\\)."
},
{
"id": "q41",
"th": "f6",
"src": "CM6",
"q": "Ampli <b>source commune</b> (\\(C_S\\) présent) :",
"o": [
"\\(A_v=-g_m\\,R_D\\)",
"\\(Z_{in}=R_1\\parallel R_2\\) (ou \\(R_G\\))",
"\\(Z_{out}=R_D\\)",
"\\(A_v\\approx1\\)",
"\\(Z_{out}=\\dfrac{1}{g_m}\\)"
],
"a": [
0,
1,
2
],
"e": "Gain élevé, déphasage de \\(\\pi\\)."
},
{
"id": "q42",
"th": "f6",
"src": "CM6 · erratum",
"q": "Ampli <b>drain commun</b> (source suiveuse) :",
"o": [
"\\(A_v=\\dfrac{g_mR_S}{1+g_mR_S}\\approx1\\)",
"\\(Z_{in}=R_G\\) (très grande)",
"\\(Z_{out}=\\left(\\dfrac{1}{R_S}+g_m\\right)^{-1}=R_S\\parallel\\dfrac{1}{g_m}\\)",
"\\(Z_{out}=R_S\\) exactement",
"\\(A_v=-g_mR_S\\)"
],
"a": [
0,
1,
2
],
"e": "L\\'erratum de la diapo 19 corrige \\(Z_{out}\\) : on éteint \\(v_{in}\\), \\(v_{gs}=-e_{out}\\), \\(i_{out}=\\dfrac{e_{out}}{R_S}+g_me_{out}\\)."
},
{
"id": "q43",
"th": "f6",
"src": "CM6",
"q": "MOSFET à enrichissement (canal N), région active :",
"o": [
"\\(I_D=\\tfrac12K_n\\dfrac WL(V_{GS}-V_T)^2\\)",
"\\(g_m=K_n\\dfrac WL(V_{GS}-V_T)=\\dfrac{2I_D}{V_{GS}-V_T}\\)",
"condition : \\(V_{GS}>V_T\\) et \\(V_{DS}>V_{GS}-V_T\\)",
"\\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\)",
"condition : \\(V_{DS}<V_{GS}-V_T\\)"
],
"a": [
0,
1,
2
],
"e": "\\(0<V_{DS}<V_{GS}-V_T\\) : région ohmique (\\(R_{DS}=\\dfrac{V_{DS}}{I_D}\\)). \\(V_{GS}<V_T\\) : bloqué."
},
{
"id": "q44",
"th": "f6",
"src": "CM6",
"q": "Variation de courant de drain pour une petite variation de \\(V_{GS}\\) :",
"o": [
"\\(\\Delta I_D=g_m\\,\\Delta V_{GS}\\)",
"\\(\\Delta I_D=\\dfrac{\\Delta V_{GS}}{g_m}\\)",
"\\(\\Delta I_D=\\beta\\,\\Delta V_{GS}\\)",
"\\(\\Delta I_D=g_m^2\\,\\Delta V_{GS}\\)"
],
"a": [
0
],
"e": "\\(g_m\\) est la pente de la caractéristique de transfert, en siemens."
},
{
"id": "q45",
"th": "k6",
"src": "CM6",
"q": "Le transistor à effet de champ :",
"o": [
"est commandé en tension (\\(V_{GS}\\))",
"est unipolaire (un seul type de porteur)",
"a une impédance d\\'entrée très élevée",
"est commandé par un courant de base",
"est bipolaire"
],
"a": [
0,
1,
2
],
"e": "Dans un JFET canal N, seuls les électrons circulent (de la source au drain)."
},
{
"id": "q46",
"th": "k6",
"src": "CM6",
"q": "JFET canal N en fonctionnement normal :",
"o": [
"\\(V_{GS}<0\\), \\(V_{DS}>0\\), \\(I_D>0\\)",
"\\(V_{GS}>0\\), \\(V_{DS}<0\\)",
"\\(V_{GS}>V_T\\)",
"\\(V_{GS}=V_{DS}\\)"
],
"a": [
0
],
"e": "La jonction grille-source est polarisée en inverse (\\(I_G\\approx0\\)). Canal P : tous les signes s\\'inversent."
},
{
"id": "q47",
"th": "k6",
"src": "CM6",
"q": "Distinguer \\(V_{GS,off}\\) et \\(V_P\\) :",
"o": [
"\\(V_{GS,off}\\) est la tension grille-source qui ferme le canal (\\(I_D=0\\))",
"\\(V_P\\) est la tension \\(V_{DS}\\) de pincement à partir de laquelle \\(I_D\\) devient constant",
"numériquement \\(|V_{GS,off}|=V_P\\)",
"\\(V_P\\) est la tension qui bloque le transistor",
"les datasheets donnent toujours \\(V_P\\)"
],
"a": [
0,
1,
2
],
"e": "Les datasheets donnent \\(V_{GS,off}\\), jamais \\(V_P\\)."
},
{
"id": "q48",
"th": "k6",
"src": "CM6",
"q": "Inconvénients de l\\'impédance d\\'entrée très élevée du FET :",
"o": [
"sensibilité au bruit thermique (bruit Johnson)",
"sensibilité aux charges électrostatiques et aux champs parasites",
"consommation statique élevée",
"gain en courant trop faible"
],
"a": [
0,
1
],
"e": "Elle reste un avantage majeur pour les capteurs et les amplificateurs d\\'instrumentation."
},
{
"id": "q49",
"th": "k6",
"src": "CM6",
"q": "Comparatif BJT / JFET du cours : quelles affirmations sont justes ?",
"o": [
"le JFET a une meilleure stabilité thermique",
"le BJT a un gain d\\'amplification plus élevé",
"le JFET consomme moins",
"le JFET a une impédance d\\'entrée plus faible",
"le JFET est bipolaire"
],
"a": [
0,
1,
2
],
"e": "BJT : \\(I_C=\\beta I_B\\), \\(V_{BE}=0{,}7\\) V ; JFET : \\(I_D=I_S\\), \\(I_G=0\\)."
},
{
"id": "q50",
"th": "k6",
"src": "CM6",
"q": "Comparatif JFET / MOSFET du cours :",
"o": [
"la grille du MOSFET est séparée du canal par un isolant (\\(\\mathrm{SiO_2}\\))",
"le canal du MOSFET est créé par la polarisation (canal d\\'inversion)",
"le MOSFET a une impédance d\\'entrée encore plus forte (\\(>10\\,000\\ \\mathrm{M\\Omega}\\))",
"le MOSFET est plus difficile et plus coûteux à fabriquer",
"la grille du JFET est isolée du canal"
],
"a": [
0,
1,
2
],
"e": "Le JFET est plus difficile à fabriquer et plus coûteux ; sa grille est en contact avec le canal (jonction PN)."
},
{
"id": "q51",
"th": "k6",
"src": "CM6",
"q": "MOSFET canal N : formation du canal :",
"o": [
"au-delà de \\(V_T\\), des électrons s\\'accumulent sous le \\(\\mathrm{SiO_2}\\) et forment un canal d\\'inversion",
"le canal existe déjà à \\(V_{GS}=0\\) et on le réduit",
"les trous forment le canal",
"le courant traverse l\\'oxyde de grille"
],
"a": [
0
],
"e": "Pour \\(V_{GS}<V_T\\) le transistor est bloqué (cut-off)."
},
{
"id": "q52",
"th": "k6",
"src": "CM6",
"q": "JFET en commutation (hypothèse \\(R_D\\gg R_{DS}\\)) :",
"o": [
"si \\(V_{in}=V_{GS}<V_{GS,off}\\) : interrupteur ouvert, \\(V_{out}=V_{DD}\\)",
"si \\(V_{in}=V_{GS}=0\\) : interrupteur fermé équivalent à \\(R_{DS}\\), \\(V_{out}\\approx0\\)",
"si \\(V_{GS}=0\\) le transistor est bloqué",
"\\(V_{out}=V_{DD}\\) pour \\(V_{in}=0\\)"
],
"a": [
0,
1
],
"e": "C\\'est un inverseur."
},
{
"id": "q53",
"th": "k6",
"src": "CM6",
"q": "Pourquoi l\\'ampli source commune est-il adapté à l\\'amplification et le drain commun à l\\'adaptation d\\'impédance ?",
"o": [
"source commune : gain \\(-g_mR_D\\) élevé",
"drain commun : \\(A_v\\approx1\\) et \\(Z_{in}\\) très élevée",
"drain commun : gain très élevé",
"source commune : \\(Z_{out}\\) nulle"
],
"a": [
0,
1
],
"e": "Le drain commun est aussi appelé « source suiveuse »."
},
{
"id": "q54",
"th": "k6",
"src": "CM6",
"q": "Dans le modèle petits signaux du FET, la résistance \\(r_o\\) (ou \\(r_{ds}\\)) :",
"o": [
"est omise dans les calculs sauf avis contraire",
"est toujours très faible",
"remplace \\(g_m\\)",
"est en série avec la grille"
],
"a": [
0
],
"e": "Comme pour le BJT, sa valeur élevée n\\'a qu\\'un faible impact."
},
{
"id": "q55",
"th": "c6",
"src": "Schéma D · JFET autopolarisé",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 330 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L500 100\"/><text class=\"t\" x=\"506\" y=\"105\" text-anchor=\"start\">v<tspan class=\"sb\" dy=\"4\">out</tspan></text><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, courant de drain \\(I_D=3\\ \\mathrm{mA}\\) (mesuré), courant de grille négligeable. Quelles valeurs sont justes ?",
"o": [
"\\(V_G\\approx0\\ \\mathrm V\\)",
"\\(V_{GS}=-0{,}99\\ \\mathrm V\\)",
"\\(V_{DS}=4{,}41\\ \\mathrm V\\)",
"\\(V_{GS}=+0{,}99\\ \\mathrm V\\)",
"\\(V_{DS}=5{,}4\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(I_G\\approx0\\) donc pas de chute dans \\(R_G\\) : \\(V_G=0\\). \\(V_S=R_SI_D=0{,}99\\) V, \\(V_{GS}=V_G-V_S=-0{,}99\\) V (négatif, conforme). \\(V_D=V_{DD}-R_DI_D=5{,}4\\) V, \\(V_{DS}=V_D-V_S=4{,}41\\) V."
},
{
"id": "q56",
"th": "c6",
"src": "Schéma D · JFET autopolarisé",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 330 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L500 100\"/><text class=\"t\" x=\"506\" y=\"105\" text-anchor=\"start\">v<tspan class=\"sb\" dy=\"4\">out</tspan></text><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> on mesure \\(I_G=1\\ \\mathrm{nA}\\) quand on applique \\(V_{GS}=-20\\ \\mathrm V\\) (datasheet). Impédance d\\'entrée vue par la grille du transistor ?",
"o": [
"\\(20\\,000\\ \\mathrm{M\\Omega}\\)",
"\\(20\\ \\mathrm{M\\Omega}\\)",
"\\(20\\ \\mathrm{k\\Omega}\\)",
"\\(1\\ \\mathrm{M\\Omega}\\)"
],
"a": [
0
],
"e": "Loi d\\'Ohm : \\(R_{in}=\\dfrac{V_{GS}}{I_G}=\\dfrac{20}{10^{-9}}=2\\cdot10^{10}\\ \\Omega=20\\,000\\ \\mathrm{M\\Omega}\\) (le montage, lui, a \\(Z_{in}=R_G\\))."
},
{
"id": "q57",
"th": "c6",
"src": "Schéma E · JFET autopolarisé, source commune",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 18 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1,5 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L390 196\"/><path class=\"w\" d=\"M390 196 L390 228\"/><path class=\"w\" d=\"M390 236 L390 268\"/><path class=\"w\" d=\"M379 228 L401 228\"/><path class=\"w\" d=\"M379 236 L401 236\"/><text class=\"t\" x=\"405\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M380 268 L400 268\"/><path class=\"w\" d=\"M384 273 L396 273\"/><path class=\"w\" d=\"M388 278 L392 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L510 100\"/><path class=\"w\" d=\"M510 100 L510 164\"/><path class=\"w\" d=\"M510 204 L510 268\"/><rect class=\"res\" x=\"503\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"523\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M500 268 L520 268\"/><path class=\"w\" d=\"M504 273 L516 273\"/><path class=\"w\" d=\"M508 278 L512 278\"/><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=10\\ \\mathrm{mA}\\), \\(V_{GS,off}=-5\\ \\mathrm V\\), loi donnée \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(C_1\\), \\(C_2\\), \\(C_S\\) de valeur suffisante. Point de repos : quelles affirmations sont justes ?",
"o": [
"\\(V_{GS}\\approx-1{,}91\\ \\mathrm V\\)",
"\\(I_D\\approx3{,}82\\ \\mathrm{mA}\\)",
"la racine \\(V_{GS}\\approx-13{,}1\\ \\mathrm V\\) est rejetée car inférieure à \\(V_{GS,off}\\)",
"\\(I_D=I_{DSS}=10\\ \\mathrm{mA}\\)",
"\\(V_{GS}\\approx+1{,}91\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(V_G=0\\), \\(V_{GS}=-R_SI_D\\). On remplace dans la loi : équation du second degré, racines \\(-1{,}91\\) V et \\(-13{,}1\\) V. On garde \\(V_{GS,off}<V_{GS}\\le0\\) : \\(V_{GS}=-1{,}91\\) V, \\(I_D=\\dfrac{-V_{GS}}{R_S}=3{,}82\\) mA."
},
{
"id": "q58",
"th": "c6",
"src": "Schéma E · JFET autopolarisé, source commune",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 18 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1,5 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L390 196\"/><path class=\"w\" d=\"M390 196 L390 228\"/><path class=\"w\" d=\"M390 236 L390 268\"/><path class=\"w\" d=\"M379 228 L401 228\"/><path class=\"w\" d=\"M379 236 L401 236\"/><text class=\"t\" x=\"405\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M380 268 L400 268\"/><path class=\"w\" d=\"M384 273 L396 273\"/><path class=\"w\" d=\"M388 278 L392 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L510 100\"/><path class=\"w\" d=\"M510 100 L510 164\"/><path class=\"w\" d=\"M510 204 L510 268\"/><rect class=\"res\" x=\"503\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"523\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M500 268 L520 268\"/><path class=\"w\" d=\"M504 273 L516 273\"/><path class=\"w\" d=\"M508 278 L512 278\"/><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=10\\ \\mathrm{mA}\\), \\(V_{GS,off}=-5\\ \\mathrm V\\), loi donnée \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(C_1\\), \\(C_2\\), \\(C_S\\) de valeur suffisante. Tension \\(V_{DS}\\) et zone de fonctionnement :",
"o": [
"\\(V_{DS}\\approx10{,}4\\ \\mathrm V\\)",
"zone active (car \\(V_{DS}>V_{GS}-V_{GS,off}=3{,}09\\ \\mathrm V\\))",
"zone ohmique",
"\\(V_{DS}\\approx12{,}3\\ \\mathrm V\\)"
],
"a": [
0,
1
],
"e": "\\(V_{DS}=V_{DD}-(R_D+R_S)I_D=18-2\\ \\mathrm k\\times3{,}82\\ \\mathrm{mA}=10{,}4\\) V."
},
{
"id": "q59",
"th": "c6",
"src": "Schéma E · JFET autopolarisé, source commune",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 18 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1,5 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L390 196\"/><path class=\"w\" d=\"M390 196 L390 228\"/><path class=\"w\" d=\"M390 236 L390 268\"/><path class=\"w\" d=\"M379 228 L401 228\"/><path class=\"w\" d=\"M379 236 L401 236\"/><text class=\"t\" x=\"405\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M380 268 L400 268\"/><path class=\"w\" d=\"M384 273 L396 273\"/><path class=\"w\" d=\"M388 278 L392 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L510 100\"/><path class=\"w\" d=\"M510 100 L510 164\"/><path class=\"w\" d=\"M510 204 L510 268\"/><rect class=\"res\" x=\"503\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"523\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M500 268 L520 268\"/><path class=\"w\" d=\"M504 273 L516 273\"/><path class=\"w\" d=\"M508 278 L512 278\"/><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=10\\ \\mathrm{mA}\\), \\(V_{GS,off}=-5\\ \\mathrm V\\), loi donnée \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(C_1\\), \\(C_2\\), \\(C_S\\) de valeur suffisante. Transconductance \\(g_m\\) au point de repos (formule de l\\'erratum) :",
"o": [
"\\(2{,}47\\ \\mathrm{mS}\\)",
"\\(4\\ \\mathrm{mS}\\)",
"\\(1{,}24\\ \\mathrm{mS}\\)",
"\\(147\\ \\mathrm{mS}\\)"
],
"a": [
0
],
"e": "\\(g_m=-\\dfrac{2I_{DSS}}{V_{GS,off}}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)=\\dfrac{2\\times10}{5}\\left(1-\\dfrac{-1{,}91}{-5}\\right)=2{,}47\\) mS."
},
{
"id": "q60",
"th": "c6",
"src": "Schéma E · JFET autopolarisé, source commune",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 18 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1,5 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L390 196\"/><path class=\"w\" d=\"M390 196 L390 228\"/><path class=\"w\" d=\"M390 236 L390 268\"/><path class=\"w\" d=\"M379 228 L401 228\"/><path class=\"w\" d=\"M379 236 L401 236\"/><text class=\"t\" x=\"405\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M380 268 L400 268\"/><path class=\"w\" d=\"M384 273 L396 273\"/><path class=\"w\" d=\"M388 278 L392 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L510 100\"/><path class=\"w\" d=\"M510 100 L510 164\"/><path class=\"w\" d=\"M510 204 L510 268\"/><rect class=\"res\" x=\"503\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"523\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M500 268 L520 268\"/><path class=\"w\" d=\"M504 273 L516 273\"/><path class=\"w\" d=\"M508 278 L512 278\"/><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=10\\ \\mathrm{mA}\\), \\(V_{GS,off}=-5\\ \\mathrm V\\), loi donnée \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(C_1\\), \\(C_2\\), \\(C_S\\) de valeur suffisante. Gain en tension et impédances (avec \\(g_m\\) du point de repos) :",
"o": [
"\\(A_v\\approx-3{,}22\\) avec \\(R_L\\) branchée",
"\\(A_v\\approx-3{,}71\\) à vide",
"\\(Z_{in}=R_G=1\\ \\mathrm{M\\Omega}\\) et \\(Z_{out}=R_D\\)",
"\\(A_v\\approx3{,}22\\) avec \\(R_L\\)",
"\\(Z_{in}=R_S\\)"
],
"a": [
0,
1,
2
],
"e": "\\(A_v=-g_mR_D=-3{,}71\\) ; avec la charge, \\(-g_m(R_D\\parallel R_L)=-3{,}22\\)."
},
{
"id": "q61",
"th": "c6",
"src": "Schéma E · JFET autopolarisé, source commune",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Transistor à effet de champ autopolarisé\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 18 V</tspan></text><path class=\"w\" d=\"M268 26 L268 52\"/><path class=\"w\" d=\"M268 92 L268 118\"/><rect class=\"res\" x=\"261\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1,5 kΩ</text><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 500 Ω</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L390 196\"/><path class=\"w\" d=\"M390 196 L390 228\"/><path class=\"w\" d=\"M390 236 L390 268\"/><path class=\"w\" d=\"M379 228 L401 228\"/><path class=\"w\" d=\"M379 236 L401 236\"/><text class=\"t\" x=\"405\" y=\"237\" text-anchor=\"start\">C<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M380 268 L400 268\"/><path class=\"w\" d=\"M384 273 L396 273\"/><path class=\"w\" d=\"M388 278 L392 278\"/><circle class=\"dot\" cx=\"268\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M268 100 L430 100\"/><path class=\"w\" d=\"M430 100 L451 100\"/><path class=\"w\" d=\"M459 100 L480 100\"/><path class=\"w\" d=\"M451 89 L451 111\"/><path class=\"w\" d=\"M459 89 L459 111\"/><text class=\"t\" x=\"455\" y=\"84\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M480 100 L510 100\"/><path class=\"w\" d=\"M510 100 L510 164\"/><path class=\"w\" d=\"M510 204 L510 268\"/><rect class=\"res\" x=\"503\" y=\"164\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"523\" y=\"189\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">L</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M500 268 L520 268\"/><path class=\"w\" d=\"M504 273 L516 273\"/><path class=\"w\" d=\"M508 278 L512 278\"/><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=10\\ \\mathrm{mA}\\), \\(V_{GS,off}=-5\\ \\mathrm V\\), loi donnée \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(C_1\\), \\(C_2\\), \\(C_S\\) de valeur suffisante. <b>Nouvelle condition : on retire \\(C_S\\)</b> (\\(R_S\\) non découplée), sans charge. Gain en tension :",
"o": [
"\\(A_v\\approx-1{,}66\\)",
"\\(A_v\\approx-3{,}71\\)",
"\\(A_v\\approx1{,}66\\)",
"\\(A_v\\approx1\\)"
],
"a": [
0
],
"e": "\\(A_v=-\\dfrac{g_mR_D}{1+g_mR_S}=-\\dfrac{3{,}71}{1+1{,}24}=-1{,}66\\). Le point de repos ne change pas."
},
{
"id": "q62",
"th": "c6",
"src": "Schéma F · JFET polarisé par pont",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Transistor à effet de champ polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 24 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 150 L170 190\"/><path class=\"w\" d=\"M170 230 L170 270\"/><rect class=\"res\" x=\"163\" y=\"190\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"215\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 200 kΩ</text><path class=\"w\" d=\"M160 270 L180 270\"/><path class=\"w\" d=\"M164 275 L176 275\"/><path class=\"w\" d=\"M168 280 L172 280\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L240 150\"/><path class=\"w\" d=\"M240 132 L240 168\"/><path class=\"w\" d=\"M240 138 L258 138 L258 118\"/><path class=\"w\" d=\"M240 162 L258 162 L258 182\"/><path class=\"dot\" d=\"M239 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"246\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M258 26 L258 52\"/><path class=\"w\" d=\"M258 92 L258 118\"/><rect class=\"res\" x=\"251\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 2 kΩ</text><path class=\"w\" d=\"M258 182 L258 206\"/><path class=\"w\" d=\"M258 246 L258 270\"/><rect class=\"res\" x=\"251\" y=\"206\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"231\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 2 kΩ</text><path class=\"w\" d=\"M248 270 L268 270\"/><path class=\"w\" d=\"M252 275 L264 275\"/><path class=\"w\" d=\"M256 280 L260 280\"/><circle class=\"dot\" cx=\"258\" cy=\"98\" r=\"3.5\"/><path class=\"w\" d=\"M258 98 L370 98\"/><text class=\"t\" x=\"376\" y=\"103\" text-anchor=\"start\">D</text><text class=\"ti\" x=\"300\" y=\"140\" text-anchor=\"start\">I<tspan class=\"sb\" dy=\"4\">D</tspan></text></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=12\\ \\mathrm{mA}\\), \\(V_{GS,off}=-6\\ \\mathrm V\\), \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(I_G=0\\). Générateur de Thévenin vu par la grille :",
"o": [
"\\(V_{Th}=4\\ \\mathrm V\\), \\(R_{Th}\\approx167\\ \\mathrm{k\\Omega}\\)",
"\\(V_{Th}=20\\ \\mathrm V\\), \\(R_{Th}=1{,}2\\ \\mathrm{M\\Omega}\\)",
"\\(V_{Th}=24\\ \\mathrm V\\), \\(R_{Th}=200\\ \\mathrm{k\\Omega}\\)",
"\\(V_{Th}=4\\ \\mathrm V\\), \\(R_{Th}=1{,}2\\ \\mathrm{M\\Omega}\\)"
],
"a": [
0
],
"e": "\\(V_{Th}=V_{DD}\\dfrac{R_2}{R_1+R_2}=24\\times\\dfrac{0{,}2}{1{,}2}=4\\) V ; \\(R_{Th}=R_1\\parallel R_2=167\\ \\mathrm{k\\Omega}\\). Comme \\(I_G=0\\), aucune chute dans \\(R_{Th}\\) : \\(V_G=V_{Th}\\)."
},
{
"id": "q63",
"th": "c6",
"src": "Schéma F · JFET polarisé par pont",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Transistor à effet de champ polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 24 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 150 L170 190\"/><path class=\"w\" d=\"M170 230 L170 270\"/><rect class=\"res\" x=\"163\" y=\"190\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"215\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 200 kΩ</text><path class=\"w\" d=\"M160 270 L180 270\"/><path class=\"w\" d=\"M164 275 L176 275\"/><path class=\"w\" d=\"M168 280 L172 280\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L240 150\"/><path class=\"w\" d=\"M240 132 L240 168\"/><path class=\"w\" d=\"M240 138 L258 138 L258 118\"/><path class=\"w\" d=\"M240 162 L258 162 L258 182\"/><path class=\"dot\" d=\"M239 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"246\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M258 26 L258 52\"/><path class=\"w\" d=\"M258 92 L258 118\"/><rect class=\"res\" x=\"251\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 2 kΩ</text><path class=\"w\" d=\"M258 182 L258 206\"/><path class=\"w\" d=\"M258 246 L258 270\"/><rect class=\"res\" x=\"251\" y=\"206\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"231\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 2 kΩ</text><path class=\"w\" d=\"M248 270 L268 270\"/><path class=\"w\" d=\"M252 275 L264 275\"/><path class=\"w\" d=\"M256 280 L260 280\"/><circle class=\"dot\" cx=\"258\" cy=\"98\" r=\"3.5\"/><path class=\"w\" d=\"M258 98 L370 98\"/><text class=\"t\" x=\"376\" y=\"103\" text-anchor=\"start\">D</text><text class=\"ti\" x=\"300\" y=\"140\" text-anchor=\"start\">I<tspan class=\"sb\" dy=\"4\">D</tspan></text></svg></figure><b>Conditions :</b> JFET canal N, \\(I_{DSS}=12\\ \\mathrm{mA}\\), \\(V_{GS,off}=-6\\ \\mathrm V\\), \\(I_D=I_{DSS}\\left(1-\\dfrac{V_{GS}}{V_{GS,off}}\\right)^2\\), \\(I_G=0\\). Point de repos : quelles valeurs sont justes ?",
"o": [
"\\(V_{GS}\\approx-2{,}81\\ \\mathrm V\\)",
"\\(I_D\\approx3{,}4\\ \\mathrm{mA}\\)",
"\\(V_{DS}\\approx10{,}4\\ \\mathrm V\\)",
"\\(V_{GS}\\approx-10{,}7\\ \\mathrm V\\)",
"\\(I_D=\\dfrac{V_{Th}}{R_S}=2\\ \\mathrm{mA}\\)"
],
"a": [
0,
1,
2
],
"e": "\\(I_D=\\dfrac{V_{Th}-V_{GS}}{R_S}\\) et la loi quadratique donnent les racines \\(-2{,}81\\) V et \\(-10{,}7\\) V ; on garde \\(V_{GS}>V_{GS,off}\\). \\(I_D=3{,}4\\) mA, \\(V_{DS}=V_{DD}-(R_D+R_S)I_D=10{,}4\\) V \\(>V_{GS}-V_{GS,off}=3{,}19\\) V : zone active."
},
{
"id": "q64",
"th": "c6",
"src": "Schéma G · drain commun",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 300\" role=\"img\" aria-label=\"Montage drain commun (source suiveuse)\"><path class=\"w\" d=\"M259 26 L277 26\"/><text class=\"tn2\" x=\"268\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M268 26 L268 118\"/><path class=\"w\" d=\"M226 150 L250 150\"/><path class=\"w\" d=\"M250 132 L250 168\"/><path class=\"w\" d=\"M250 138 L268 138 L268 118\"/><path class=\"w\" d=\"M250 162 L268 162 L268 182\"/><path class=\"dot\" d=\"M249 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"256\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M180 150 L226 150\"/><circle class=\"dot\" cx=\"180\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M180 150 L180 189\"/><path class=\"w\" d=\"M180 229 L180 268\"/><rect class=\"res\" x=\"173\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"167\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">G</tspan><tspan dy=\"-4\"> </tspan>= 1 MΩ</text><path class=\"w\" d=\"M170 268 L190 268\"/><path class=\"w\" d=\"M174 273 L186 273\"/><path class=\"w\" d=\"M178 278 L182 278\"/><path class=\"w\" d=\"M268 182 L268 205\"/><path class=\"w\" d=\"M268 245 L268 268\"/><rect class=\"res\" x=\"261\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"281\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M258 268 L278 268\"/><path class=\"w\" d=\"M262 273 L274 273\"/><path class=\"w\" d=\"M266 278 L270 278\"/><circle class=\"dot\" cx=\"268\" cy=\"196\" r=\"3.5\"/><path class=\"w\" d=\"M268 196 L350 196\"/><path class=\"w\" d=\"M350 196 L376 196\"/><path class=\"w\" d=\"M384 196 L410 196\"/><path class=\"w\" d=\"M376 185 L376 207\"/><path class=\"w\" d=\"M384 185 L384 207\"/><text class=\"t\" x=\"380\" y=\"180\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M410 196 L430 196\"/><text class=\"t\" x=\"436\" y=\"201\" text-anchor=\"start\">v<tspan class=\"sb\" dy=\"4\">out</tspan></text><path class=\"w\" d=\"M90 150 L116 150\"/><path class=\"w\" d=\"M124 150 L150 150\"/><path class=\"w\" d=\"M116 139 L116 161\"/><path class=\"w\" d=\"M124 139 L124 161\"/><text class=\"t\" x=\"120\" y=\"134\" text-anchor=\"middle\">C<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan></text><path class=\"w\" d=\"M150 150 L180 150\"/><path class=\"w\" d=\"M55 150 L90 150\"/><path class=\"w\" d=\"M55 150 L55 196\"/><circle class=\"src\" cx=\"55\" cy=\"211\" r=\"15\"/><path class=\"w\" d=\"M45 211 q5 -9 10 0 t10 0\"/><text class=\"t\" x=\"35\" y=\"216\" text-anchor=\"end\">v<tspan class=\"sb\" dy=\"4\">in</tspan></text><path class=\"w\" d=\"M55 226 L55 268\"/><path class=\"w\" d=\"M45 268 L65 268\"/><path class=\"w\" d=\"M49 273 L61 273\"/><path class=\"w\" d=\"M53 278 L57 278\"/></svg></figure><b>Conditions :</b> au point de repos \\(g_m=4\\ \\mathrm{mS}\\) ; \\(r_o\\) négligée ; pas de charge. Quelles valeurs sont justes ?",
"o": [
"\\(A_v=0{,}8\\)",
"\\(Z_{in}=1\\ \\mathrm{M\\Omega}\\)",
"\\(Z_{out}=200\\ \\Omega\\)",
"\\(Z_{out}=1\\ \\mathrm{k\\Omega}\\)",
"\\(A_v=-4\\)"
],
"a": [
0,
1,
2
],
"e": "\\(A_v=\\dfrac{g_mR_S}{1+g_mR_S}=\\dfrac{4}{5}=0{,}8\\) ; \\(Z_{in}=R_G\\) ; \\(Z_{out}=\\left(\\dfrac{1}{R_S}+g_m\\right)^{-1}=\\dfrac{1}{10^{-3}+4\\cdot10^{-3}}=200\\ \\Omega\\) (erratum : ce n\\'est pas \\(R_S\\))."
},
{
"id": "q65",
"th": "c6",
"src": "Schéma H · MOSFET",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Transistor à effet de champ polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><path class=\"w\" d=\"M170 26 L170 74\"/><path class=\"w\" d=\"M170 114 L170 162\"/><rect class=\"res\" x=\"163\" y=\"74\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"99\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 200 kΩ</text><path class=\"w\" d=\"M170 162 L170 196\"/><path class=\"w\" d=\"M170 236 L170 270\"/><rect class=\"res\" x=\"163\" y=\"196\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"221\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 100 kΩ</text><path class=\"w\" d=\"M160 270 L180 270\"/><path class=\"w\" d=\"M164 275 L176 275\"/><path class=\"w\" d=\"M168 280 L172 280\"/><circle class=\"dot\" cx=\"170\" cy=\"162\" r=\"3.5\"/><path class=\"w\" d=\"M216 162 L233 162\"/><path class=\"w\" d=\"M233 136 L233 164\"/><path class=\"w\" d=\"M240 132 L240 142\"/><path class=\"w\" d=\"M240 146 L240 154\"/><path class=\"w\" d=\"M240 158 L240 168\"/><path class=\"w\" d=\"M240 138 L258 138 L258 118\"/><path class=\"w\" d=\"M240 162 L258 162 L258 182\"/><path class=\"w\" d=\"M240 150 L258 150\"/><path class=\"dot\" d=\"M241 150 l9 -5 v10z\"/><circle class=\"tr\" cx=\"246\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 162 L216 162\"/><path class=\"w\" d=\"M258 26 L258 52\"/><path class=\"w\" d=\"M258 92 L258 118\"/><rect class=\"res\" x=\"251\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M258 182 L258 206\"/><path class=\"w\" d=\"M258 246 L258 270\"/><rect class=\"res\" x=\"251\" y=\"206\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"231\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 0 Ω (fil)</text><path class=\"w\" d=\"M248 270 L268 270\"/><path class=\"w\" d=\"M252 275 L264 275\"/><path class=\"w\" d=\"M256 280 L260 280\"/><circle class=\"dot\" cx=\"258\" cy=\"98\" r=\"3.5\"/><path class=\"w\" d=\"M258 98 L370 98\"/><text class=\"t\" x=\"376\" y=\"103\" text-anchor=\"start\">D</text><text class=\"ti\" x=\"300\" y=\"140\" text-anchor=\"start\">I<tspan class=\"sb\" dy=\"4\">D</tspan></text></svg></figure><b>Conditions :</b> N-MOSFET, \\(V_T=2\\ \\mathrm V\\), \\(K_n\\dfrac WL=2\\ \\mathrm{mA/V^2}\\), loi \\(I_D=\\tfrac12K_n\\dfrac WL(V_{GS}-V_T)^2\\) en région active, source à la masse (\\(R_S=0\\)). En supposant la région active, quelles valeurs sont justes ?",
"o": [
"\\(V_{GS}=5\\ \\mathrm V\\)",
"\\(I_D=9\\ \\mathrm{mA}\\)",
"\\(V_{DS}=6\\ \\mathrm V\\), hypothèse vérifiée (\\(V_{DS}>V_{GS}-V_T=3\\ \\mathrm V\\))",
"\\(I_D=18\\ \\mathrm{mA}\\)",
"le transistor est bloqué"
],
"a": [
0,
1,
2
],
"e": "\\(I_G=0\\) : \\(V_G=15\\times\\dfrac{100}{300}=5\\) V \\(=V_{GS}\\). \\(I_D=\\tfrac12\\times2\\times(5-2)^2=9\\) mA. \\(V_{DS}=15-1\\ \\mathrm k\\times9\\ \\mathrm{mA}=6\\) V."
},
{
"id": "q66",
"th": "c6",
"src": "Schéma H · MOSFET",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Transistor à effet de champ polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><path class=\"w\" d=\"M170 26 L170 74\"/><path class=\"w\" d=\"M170 114 L170 162\"/><rect class=\"res\" x=\"163\" y=\"74\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"99\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 200 kΩ</text><path class=\"w\" d=\"M170 162 L170 196\"/><path class=\"w\" d=\"M170 236 L170 270\"/><rect class=\"res\" x=\"163\" y=\"196\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"221\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 100 kΩ</text><path class=\"w\" d=\"M160 270 L180 270\"/><path class=\"w\" d=\"M164 275 L176 275\"/><path class=\"w\" d=\"M168 280 L172 280\"/><circle class=\"dot\" cx=\"170\" cy=\"162\" r=\"3.5\"/><path class=\"w\" d=\"M216 162 L233 162\"/><path class=\"w\" d=\"M233 136 L233 164\"/><path class=\"w\" d=\"M240 132 L240 142\"/><path class=\"w\" d=\"M240 146 L240 154\"/><path class=\"w\" d=\"M240 158 L240 168\"/><path class=\"w\" d=\"M240 138 L258 138 L258 118\"/><path class=\"w\" d=\"M240 162 L258 162 L258 182\"/><path class=\"w\" d=\"M240 150 L258 150\"/><path class=\"dot\" d=\"M241 150 l9 -5 v10z\"/><circle class=\"tr\" cx=\"246\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 162 L216 162\"/><path class=\"w\" d=\"M258 26 L258 52\"/><path class=\"w\" d=\"M258 92 L258 118\"/><rect class=\"res\" x=\"251\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M258 182 L258 206\"/><path class=\"w\" d=\"M258 246 L258 270\"/><rect class=\"res\" x=\"251\" y=\"206\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"231\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 0 Ω (fil)</text><path class=\"w\" d=\"M248 270 L268 270\"/><path class=\"w\" d=\"M252 275 L264 275\"/><path class=\"w\" d=\"M256 280 L260 280\"/><circle class=\"dot\" cx=\"258\" cy=\"98\" r=\"3.5\"/><path class=\"w\" d=\"M258 98 L370 98\"/><text class=\"t\" x=\"376\" y=\"103\" text-anchor=\"start\">D</text><text class=\"ti\" x=\"300\" y=\"140\" text-anchor=\"start\">I<tspan class=\"sb\" dy=\"4\">D</tspan></text></svg></figure><b>Conditions :</b> N-MOSFET, \\(V_T=2\\ \\mathrm V\\), \\(K_n\\dfrac WL=2\\ \\mathrm{mA/V^2}\\), loi \\(I_D=\\tfrac12K_n\\dfrac WL(V_{GS}-V_T)^2\\) en région active, source à la masse (\\(R_S=0\\)). Transconductance au point de repos (\\(R_D=1\\ \\mathrm{k\\Omega}\\)) :",
"o": [
"\\(6\\ \\mathrm{mS}\\)",
"\\(3\\ \\mathrm{mS}\\)",
"\\(9\\ \\mathrm{mS}\\)",
"\\(18\\ \\mathrm{mS}\\)"
],
"a": [
0
],
"e": "\\(g_m=K_n\\dfrac WL(V_{GS}-V_T)=2\\times3=6\\) mS, ou \\(\\dfrac{2I_D}{V_{GS}-V_T}=\\dfrac{2\\times9}{3}\\)."
},
{
"id": "q67",
"th": "c6",
"src": "Schéma H · MOSFET",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Transistor à effet de champ polarisé par pont diviseur\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M170 26 L300 26\"/><path class=\"w\" d=\"M170 26 L170 74\"/><path class=\"w\" d=\"M170 114 L170 162\"/><rect class=\"res\" x=\"163\" y=\"74\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"99\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 200 kΩ</text><path class=\"w\" d=\"M170 162 L170 196\"/><path class=\"w\" d=\"M170 236 L170 270\"/><rect class=\"res\" x=\"163\" y=\"196\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"221\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 100 kΩ</text><path class=\"w\" d=\"M160 270 L180 270\"/><path class=\"w\" d=\"M164 275 L176 275\"/><path class=\"w\" d=\"M168 280 L172 280\"/><circle class=\"dot\" cx=\"170\" cy=\"162\" r=\"3.5\"/><path class=\"w\" d=\"M216 162 L233 162\"/><path class=\"w\" d=\"M233 136 L233 164\"/><path class=\"w\" d=\"M240 132 L240 142\"/><path class=\"w\" d=\"M240 146 L240 154\"/><path class=\"w\" d=\"M240 158 L240 168\"/><path class=\"w\" d=\"M240 138 L258 138 L258 118\"/><path class=\"w\" d=\"M240 162 L258 162 L258 182\"/><path class=\"w\" d=\"M240 150 L258 150\"/><path class=\"dot\" d=\"M241 150 l9 -5 v10z\"/><circle class=\"tr\" cx=\"246\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 162 L216 162\"/><path class=\"w\" d=\"M258 26 L258 52\"/><path class=\"w\" d=\"M258 92 L258 118\"/><rect class=\"res\" x=\"251\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M258 182 L258 206\"/><path class=\"w\" d=\"M258 246 L258 270\"/><rect class=\"res\" x=\"251\" y=\"206\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"271\" y=\"231\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">S</tspan><tspan dy=\"-4\"> </tspan>= 0 Ω (fil)</text><path class=\"w\" d=\"M248 270 L268 270\"/><path class=\"w\" d=\"M252 275 L264 275\"/><path class=\"w\" d=\"M256 280 L260 280\"/><circle class=\"dot\" cx=\"258\" cy=\"98\" r=\"3.5\"/><path class=\"w\" d=\"M258 98 L370 98\"/><text class=\"t\" x=\"376\" y=\"103\" text-anchor=\"start\">D</text><text class=\"ti\" x=\"300\" y=\"140\" text-anchor=\"start\">I<tspan class=\"sb\" dy=\"4\">D</tspan></text></svg></figure><b>Conditions :</b> N-MOSFET, \\(V_T=2\\ \\mathrm V\\), \\(K_n\\dfrac WL=2\\ \\mathrm{mA/V^2}\\), loi \\(I_D=\\tfrac12K_n\\dfrac WL(V_{GS}-V_T)^2\\) en région active, source à la masse (\\(R_S=0\\)). <b>Nouvelle condition : \\(R_D=1{,}5\\ \\mathrm{k\\Omega}\\).</b> Que conclure ?",
"o": [
"avec la loi de la région active on trouverait \\(V_{DS}=1{,}5\\ \\mathrm V\\)",
"cette valeur est inférieure à \\(V_{GS}-V_T=3\\ \\mathrm V\\) : l\\'hypothèse « région active » est fausse",
"le transistor est en région ohmique",
"le transistor est bloqué",
"\\(I_D\\) reste égal à \\(9\\ \\mathrm{mA}\\)"
],
"a": [
0,
1,
2
],
"e": "\\(V_{DS}=15-1{,}5\\ \\mathrm k\\times9\\ \\mathrm{mA}=1{,}5\\) V \\(<3\\) V : le canal n\\'est pas pincé, on est en région ohmique et la loi quadratique ne s\\'applique plus."
},
{
"id": "q68",
"th": "c6",
"src": "Schéma I · JFET en commutation",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 420 280\" role=\"img\" aria-label=\"JFET en commutation\"><path class=\"w\" d=\"M229 26 L247 26\"/><text class=\"tn2\" x=\"238\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">DD</tspan><tspan dy=\"-4\"> = 10 V</tspan></text><path class=\"w\" d=\"M238 26 L238 52\"/><path class=\"w\" d=\"M238 92 L238 118\"/><rect class=\"res\" x=\"231\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"251\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">D</tspan><tspan dy=\"-4\"> </tspan>= 4,7 kΩ</text><path class=\"w\" d=\"M196 150 L220 150\"/><path class=\"w\" d=\"M220 132 L220 168\"/><path class=\"w\" d=\"M220 138 L238 138 L238 118\"/><path class=\"w\" d=\"M220 162 L238 162 L238 182\"/><path class=\"dot\" d=\"M219 150 l-9 -5 v10z\"/><circle class=\"tr\" cx=\"226\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M238 182 L238 250\"/><path class=\"w\" d=\"M228 250 L248 250\"/><path class=\"w\" d=\"M232 255 L244 255\"/><path class=\"w\" d=\"M236 260 L240 260\"/><path class=\"w\" d=\"M120 150 L196 150\"/><text class=\"t\" x=\"112\" y=\"155\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">in</tspan></text><circle class=\"dot\" cx=\"238\" cy=\"100\" r=\"3.5\"/><path class=\"w\" d=\"M238 100 L320 100\"/><text class=\"t\" x=\"326\" y=\"105\" text-anchor=\"start\">V<tspan class=\"sb\" dy=\"4\">out</tspan></text></svg></figure><b>Conditions :</b> JFET avec \\(I_{DSS}=18{,}5\\ \\mathrm{mA}\\), \\(V_P=1{,}4\\ \\mathrm V\\) (\\(V_{GS,off}=-1{,}4\\ \\mathrm V\\)), \\(R_{DS}=\\dfrac{V_P}{I_{DSS}}\\). Quelles affirmations sont justes ?",
"o": [
"\\(R_{DS}\\approx75{,}7\\ \\Omega\\)",
"pour \\(V_{in}=0\\) : \\(V_{out}\\approx0{,}158\\ \\mathrm V\\)",
"pour \\(V_{in}=-5\\ \\mathrm V\\) : \\(V_{out}=10\\ \\mathrm V\\)",
"pour \\(V_{in}=0\\) : \\(V_{out}=10\\ \\mathrm V\\)",
"pour \\(V_{in}=-5\\ \\mathrm V\\) : \\(V_{out}\\approx0\\)"
],
"a": [
0,
1,
2
],
"e": "\\(R_{DS}=\\dfrac{1{,}4}{0{,}0185}=75{,}7\\ \\Omega\\). \\(V_{in}=0\\) : interrupteur fermé, \\(V_{out}=V_{DD}\\dfrac{R_{DS}}{R_{DS}+R_D}=0{,}158\\) V. \\(V_{in}=-5\\ \\mathrm V<V_{GS,off}\\) : bloqué, \\(V_{out}=V_{DD}\\)."
},
{
"id": "q69",
"th": "c6",
"src": "CM6 · transconductance",
"q": "<b>Conditions :</b> un JFET a une transconductance \\(g_m=5\\ \\mathrm{mS}\\) (\\(5\\,000\\ \\mu\\mathrm S\\)). On fait varier \\(V_{GS}\\) de \\(1\\ \\mathrm V\\). Variation du courant de drain ?",
"o": [
"\\(5\\ \\mathrm{mA}\\)",
"\\(0{,}2\\ \\mathrm{mA}\\)",
"\\(5\\ \\mathrm{\\mu A}\\)",
"\\(50\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "\\(\\Delta I_D=g_m\\Delta V_{GS}=5\\cdot10^{-3}\\times1=5\\) mA (exemple du cours)."
}
];
