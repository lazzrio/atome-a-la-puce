/* Généré par gen_cm45.py : QCM CM4 (BJT en statique) et CM5 (BJT dynamique). Valeurs calculées, schémas SVG. */
window.CM45_THEMES = {"f4": "CM4 · formules", "k4": "CM4 · connaissances", "c4": "CM4 · calculs sur schéma", "f5": "CM5 · formules", "k5": "CM5 · connaissances", "c5": "CM5 · calculs sur schéma"};
window.CM45 = [
{
"id": "q01",
"th": "f4",
"src": "CM4",
"q": "Relations entre les courants et les gains du BJT : lesquelles sont justes ?",
"o": [
"\\(i_E=i_B+i_C\\)",
"\\(\\beta=\\dfrac{i_C}{i_B}\\) et \\(\\alpha=\\dfrac{i_C}{i_E}\\approx1\\)",
"\\(\\gamma=\\dfrac{i_E}{i_B}=\\beta+1=\\dfrac{1}{1-\\alpha}\\)",
"\\(i_C=i_B+i_E\\)",
"\\(\\alpha=\\beta+1\\)"
],
"a": [
0,
1,
2
],
"e": "Loi des nœuds sur le transistor ; \\(\\beta\\) (aussi noté \\(h_{FE}\\)) vaut typiquement 100 à 300."
},
{
"id": "q02",
"th": "f4",
"src": "CM4",
"q": "Émetteur commun fondamental (\\(V_{BB}\\), \\(R_B\\), \\(V_{CC}\\), \\(R_C\\)) : équation de la <b>droite de charge statique</b> ?",
"o": [
"\\(i_C=-\\dfrac{1}{R_C}V_{CE}+\\dfrac{V_{CC}}{R_C}\\)",
"\\(i_B=-\\dfrac{1}{R_B}V_{BE}+\\dfrac{V_{BB}}{R_B}\\)",
"\\(i_C=\\dfrac{V_{CE}}{R_C}\\)",
"\\(i_C=\\beta\\dfrac{V_{CC}}{R_C}\\)"
],
"a": [
0
],
"e": "Maille collecteur \\(V_{CC}-R_Ci_C-V_{CE}=0\\). La deuxième proposition est la droite d\\'<b>attaque</b> statique (maille base)."
},
{
"id": "q03",
"th": "f4",
"src": "CM4",
"q": "Points remarquables de la droite de charge statique :",
"o": [
"\\(i_{C,sat}=\\dfrac{V_{CC}}{R_C}\\) (obtenu pour \\(V_{CE}=0\\))",
"\\(V_{CE,blocage}=V_{CC}\\) (obtenu pour \\(i_C=0\\))",
"le point \\(Q\\) est l\\'intersection de la droite de charge et de la caractéristique \\(i_C=f(V_{CE})\\)",
"\\(i_{C,sat}=\\beta\\,i_B\\) toujours",
"\\(V_{CE,blocage}=0\\)"
],
"a": [
0,
1,
2
],
"e": "La droite de charge contient tous les points de fonctionnement possibles, du blocage à la saturation."
},
{
"id": "q04",
"th": "f4",
"src": "CM4",
"q": "Polarisation <b>par la base</b> : relations du montage ?",
"o": [
"\\(i_B=\\dfrac{V_{BB}-V_{BE}}{R_B}\\), \\(i_C=\\beta i_B\\), \\(V_{CE}=V_{CC}-R_Ci_C\\)",
"\\(i_E=\\dfrac{V_{BB}-V_{BE}}{R_E}\\), \\(V_{CE}=V_C-V_E\\)",
"\\(i_B=\\dfrac{V_{BB}}{R_B}\\), \\(V_{CE}=V_{CC}\\)",
"\\(i_C=\\dfrac{V_{CC}}{R_B}\\)"
],
"a": [
0
],
"e": "\\(i_C\\) et \\(V_{CE}\\) dépendent de \\(\\beta\\) : montage « \\(\\beta\\)-dépendant »."
},
{
"id": "q05",
"th": "f4",
"src": "CM4",
"q": "Polarisation <b>par l\\'émetteur</b> : relations du montage ?",
"o": [
"\\(V_E=V_{BB}-V_{BE}\\) et \\(i_E=\\dfrac{V_E}{R_E}\\)",
"\\(i_C\\approx i_E\\) car \\(\\alpha\\approx1\\)",
"\\(V_C=V_{CC}-R_Ci_C\\) et \\(V_{CE}=V_C-V_E\\)",
"\\(i_C=\\beta\\dfrac{V_{BB}-V_{BE}}{R_E}\\)",
"\\(V_{CE}=V_{CC}-V_{BB}\\)"
],
"a": [
0,
1,
2
],
"e": "On n\\'utilise jamais \\(\\beta\\) : montage « \\(\\beta\\)-indépendant »."
},
{
"id": "q06",
"th": "f4",
"src": "CM4",
"q": "Pont diviseur (PDT) : équivalent de Thévenin vu de la base, et calcul complet de \\(i_B\\) ?",
"o": [
"\\(V_{Th}=V_{CC}\\dfrac{R_2}{R_1+R_2}\\), \\(R_{Th}=R_1\\parallel R_2\\), \\(i_B=\\dfrac{V_{Th}-V_{BE}}{R_{Th}+(\\beta+1)R_E}\\)",
"\\(V_{Th}=V_{CC}\\dfrac{R_1}{R_1+R_2}\\), \\(R_{Th}=R_1+R_2\\)",
"\\(i_B=\\dfrac{V_{Th}-V_{BE}}{R_{Th}+R_E}\\)",
"\\(i_B=\\dfrac{V_{CC}-V_{BE}}{R_1}\\)"
],
"a": [
0
],
"e": "Maille base : \\(V_{Th}-R_{Th}i_B-V_{BE}-R_E(\\beta+1)i_B=0\\), car \\(i_E=(\\beta+1)i_B\\)."
},
{
"id": "q07",
"th": "f4",
"src": "CM4",
"q": "Condition pour considérer \\(R_1\\), \\(R_2\\), \\(V_{CC}\\) comme une source de tension constante (et calculer comme une polarisation par l\\'émetteur) :",
"o": [
"\\(R_1\\parallel R_2<0{,}01\\,(\\beta+1)R_E\\)",
"\\(R_1\\parallel R_2>100\\,(\\beta+1)R_E\\)",
"\\(R_1+R_2<0{,}01\\,R_E\\)",
"\\(R_1\\parallel R_2<0{,}01\\,R_C\\)"
],
"a": [
0
],
"e": "Résistance interne de la source (\\(R_{Th}\\), vue à gauche de la base) 100 fois plus petite que la charge vue à droite, \\((\\beta+1)R_E\\)."
},
{
"id": "q08",
"th": "f4",
"src": "CM4",
"q": "Transistor en commutation commandé par une sortie numérique \\(V_{cmd}\\) : dimensionnement ?",
"o": [
"\\(R_B=\\dfrac{V_{cmd}-V_{BE,sat}}{i_{B,sat}}\\)",
"\\(R_C=\\dfrac{V_{CC}-V_{CE,sat}}{i_{C,sat}}\\)",
"condition de saturation : \\(\\beta i_B>i_{C,sat}\\)",
"\\(R_B=\\dfrac{V_{CC}}{i_{C,sat}}\\)",
"\\(R_C=\\dfrac{V_{cmd}}{i_{B,sat}}\\)"
],
"a": [
0,
1,
2
],
"e": "On prend \\(i_{B,sat}\\) et \\(V_{BE,sat}\\) dans la datasheet ; le gain à saturation est faible (\\(\\beta=10\\) dans l\\'exemple du cours)."
},
{
"id": "q09",
"th": "f4",
"src": "CM4",
"q": "Temps de commutation :",
"o": [
"\\(t_{ON}=t_d+t_r\\) et \\(t_{OFF}=t_s+t_f\\)",
"\\(t_{ON}=t_s+t_f\\) et \\(t_{OFF}=t_d+t_r\\)",
"\\(t_{ON}=t_d\\cdot t_r\\)",
"\\(t_{ON}=t_{OFF}\\) toujours"
],
"a": [
0
],
"e": "\\(t_d\\) : retard (jusqu\\'à \\(10\\ \\%\\)), \\(t_r\\) : montée de \\(10\\) à \\(90\\ \\%\\), \\(t_s\\) : stockage, \\(t_f\\) : descente de \\(90\\) à \\(10\\ \\%\\)."
},
{
"id": "q10",
"th": "f4",
"src": "CM4",
"q": "En tenant compte du courant de fuite collecteur-base \\(i_{CB0}\\) :",
"o": [
"\\(i_C=\\beta\\,i_B+(\\beta+1)\\,i_{CB0}\\)",
"\\(i_C=\\beta\\,(i_B+i_{CB0})\\)",
"\\(i_C=\\beta\\,i_B-i_{CB0}\\)",
"\\(i_C=(\\beta+1)\\,i_B\\)"
],
"a": [
0
],
"e": "Quand \\(T\\) augmente, \\(\\beta\\) et \\(i_{CB0}\\) augmentent : le point \\(Q\\) se déplace. \\(i_{CB0}\\) est négligeable dans les calculs usuels."
},
{
"id": "q11",
"th": "k4",
"src": "CM4",
"q": "Modes de fonctionnement d\\'un NPN selon la polarisation des jonctions :",
"o": [
"BE directe et BC inverse : amplification (mode actif)",
"BE directe et BC directe : saturation (« ON »)",
"BE inverse : bloqué (« OFF »)",
"BE inverse et BC directe : amplification",
"BE directe et BC inverse : saturation"
],
"a": [
0,
1,
2
],
"e": ""
},
{
"id": "q12",
"th": "k4",
"src": "CM4",
"q": "Conditions sur les tensions (silicium) : lesquelles sont justes ?",
"o": [
"bloqué si \\(V_{BE}<0{,}7\\ \\mathrm V\\)",
"actif si \\(V_{BE}=0{,}7\\ \\mathrm V\\) et \\(V_{BC}<0\\), donc \\(V_{CE}>0{,}7\\ \\mathrm V\\)",
"saturation maximale : \\(V_{BC}=0{,}7\\ \\mathrm V\\), donc \\(V_{CE}=0\\)",
"actif si \\(V_{BC}>0{,}7\\ \\mathrm V\\)",
"bloqué si \\(V_{CE}<0{,}2\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(V_{CE}=V_{CB}+V_{BE}\\). Début de saturation dès \\(V_{BC}\\ge0\\) (\\(V_{CE}\\le0{,}7\\) V) ; en pratique il sature vraiment pour \\(V_{CE}<0{,}2\\) V."
},
{
"id": "q13",
"th": "k4",
"src": "CM4",
"q": "L\\'effet transistor (NPN) :",
"o": [
"les électrons diffusent de l\\'émetteur vers la base (jonction BE directe)",
"dans la base, minoritaires, ils sont entraînés vers le collecteur par le fort champ de la jonction BC inverse (dérive)",
"il est d\\'autant plus efficace que l\\'émetteur est très dopé et la base très fine",
"le collecteur émet les électrons",
"la base est la zone la plus épaisse"
],
"a": [
0,
1,
2
],
"e": "Une faible tension \\(V_{BE}\\) commande un fort courant \\(i_C\\). E émet, C collecte, B est une zone de transit."
},
{
"id": "q14",
"th": "k4",
"src": "CM4",
"q": "Comparaison des polarisations par la base et par l\\'émetteur :",
"o": [
"par la base : \\(\\beta\\)-dépendante, le point \\(Q\\) bouge si \\(\\beta\\) varie",
"par l\\'émetteur : \\(\\beta\\)-indépendante, \\(Q\\) très stable",
"par la base : utilisée pour la commutation (blocage / saturation)",
"par l\\'émetteur : utilisée pour la commutation",
"par la base : \\(Q\\) ne dépend pas de \\(\\beta\\)"
],
"a": [
0,
1,
2
],
"e": "Par l\\'émetteur : mode actif, amplification."
},
{
"id": "q15",
"th": "k4",
"src": "CM4",
"q": "Intérêt de la polarisation par pont diviseur par rapport à la polarisation par l\\'émetteur :",
"o": [
"on règle \\(V_{BB}=V_{Th}\\) en changeant seulement \\(R_1\\) et \\(R_2\\), sans changer l\\'alimentation",
"elle supprime le besoin de \\(R_E\\)",
"elle rend le montage \\(\\beta\\)-dépendant",
"elle évite toute alimentation continue"
],
"a": [
0
],
"e": "Si \\(R_1\\parallel R_2<0{,}01(\\beta+1)R_E\\), on se ramène à une polarisation par l\\'émetteur, \\(\\beta\\)-indépendante."
},
{
"id": "q16",
"th": "k4",
"src": "CM4",
"q": "Effet de la température :",
"o": [
"si \\(T\\) augmente, \\(\\beta\\) augmente",
"si \\(T\\) augmente, le courant de fuite \\(i_{CB0}\\) augmente",
"la température déplace le point de fonctionnement en modifiant \\(i_C\\)",
"\\(\\beta\\) ne dépend pas de la température",
"si \\(T\\) augmente, \\(i_{CB0}\\) diminue"
],
"a": [
0,
1,
2
],
"e": ""
},
{
"id": "q17",
"th": "k4",
"src": "CM4",
"q": "L\\'effet Early :",
"o": [
"se voit par la légère pente des caractéristiques \\(i_C(V_{CE})\\) en zone active",
"les droites prolongées se coupent en \\(-V_A\\) (tension d\\'Early) sur l\\'axe des \\(V_{CE}\\)",
"se modélise par une résistance en parallèle entre collecteur et émetteur",
"rend \\(i_C\\) rigoureusement indépendant de \\(V_{CE}\\)",
"se produit uniquement au blocage"
],
"a": [
0,
1,
2
],
"e": "Il vient de la diminution de la largeur effective de la base."
},
{
"id": "q18",
"th": "k4",
"src": "CM4",
"q": "Lecture d\\'une datasheet (ex. 2N3904) : quelles affirmations viennent du cours ?",
"o": [
"utiliser les courbes données pour \\(T_{amb}=25^{\\circ}\\mathrm C\\)",
"vérifier pour quelle valeur de \\(V_{CE}\\) les courbes sont tracées (ici \\(1\\ \\mathrm V\\))",
"quand le transistor sature, le gain \\(\\beta=\\frac{i_C}{i_B}\\) chute",
"\\(\\beta\\) est le même pour tous les courants",
"\\(V_{BE}\\) vaut toujours exactement \\(0{,}7\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "Dans l\\'exemple du cours on lit \\(V_{BE}=0{,}73\\ \\mathrm V\\) et \\(V_{CE,sat}=95\\ \\mathrm{mV}\\) pour \\(i_C\\approx10\\) mA."
},
{
"id": "q19",
"th": "k4",
"src": "CM4",
"q": "Modèle d\\'Ebers-Moll (statique) du BJT :",
"o": [
"une diode B-E (\\(V_{BE}=0{,}7\\ \\mathrm V\\)) et une source de courant \\(i_C=\\beta i_B\\) entre C et E",
"deux diodes tête-bêche sans source",
"une résistance \\(r_e\\) et une source \\(\\beta i_b\\) (petits signaux)",
"une source de tension entre C et E"
],
"a": [
0
],
"e": "Plus juste que les deux diodes : la diode B-C est remplacée par le générateur de courant."
},
{
"id": "q20",
"th": "k4",
"src": "CM4",
"q": "Les trois montages fondamentaux, d\\'après l\\'usage type indiqué dans le cours :",
"o": [
"émetteur commun : l\\'émetteur est commun à l\\'entrée et à la sortie",
"collecteur commun : amplification de puissance",
"base commune : amplification en tension",
"base commune : la base n\\'est reliée à rien"
],
"a": [
0,
1,
2
],
"e": "Le cours étudie surtout l\\'émetteur commun (usage type indiqué : amplification en courant)."
},
{
"id": "q21",
"th": "k4",
"src": "CM4",
"q": "Pourquoi le collecteur doit-il être porté à un potentiel positif (NPN) ?",
"o": [
"pour polariser la jonction collecteur-base en inverse et collecter les électrons venant de la base",
"pour polariser la jonction BE en inverse",
"pour bloquer le transistor",
"pour que \\(i_B\\) soit maximal"
],
"a": [
0
],
"e": "Maille collecteur : \\(V_{CC}\\) polarise BC en inverse à travers \\(R_C\\) ; sinon le transistor n\\'amplifie pas."
},
{
"id": "q22",
"th": "k4",
"src": "CM4",
"q": "Logique à BJT (pour info) :",
"o": [
"un transistor saturé/bloqué réalise une porte NOT (OUT = \\(V_{CE,sat}\\) quand IN = 1)",
"la technologie TTL (BJT) est plus rapide que la CMOS mais consomme davantage",
"en commutation, le transistor ne travaille jamais en zone active",
"la TTL consomme moins que la CMOS"
],
"a": [
0,
1,
2
],
"e": ""
},
{
"id": "q23",
"th": "c4",
"src": "Schéma M · mode de fonctionnement",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 460 300\" role=\"img\" aria-label=\"Transistor NPN alimenté par deux sources : déterminer le mode\"><path class=\"w\" d=\"M130 150 L130 201\"/><path class=\"w\" d=\"M130 211 L130 262\"/><path class=\"w\" d=\"M116 201 L144 201\"/><path class=\"w\" d=\"M123 211 L137 211\"/><text class=\"t\" x=\"110\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BE</tspan><tspan dy=\"-4\"> = 2 V</tspan></text><path class=\"w\" d=\"M120 262 L140 262\"/><path class=\"w\" d=\"M124 267 L136 267\"/><path class=\"w\" d=\"M128 272 L132 272\"/><path class=\"w\" d=\"M130 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 118 L256 60 L380 60\"/><path class=\"w\" d=\"M380 60 L380 156\"/><path class=\"w\" d=\"M380 166 L380 262\"/><path class=\"w\" d=\"M366 156 L394 156\"/><path class=\"w\" d=\"M373 166 L387 166\"/><text class=\"t\" x=\"360\" y=\"166\" text-anchor=\"end\">6 V</text><path class=\"w\" d=\"M370 262 L390 262\"/><path class=\"w\" d=\"M374 267 L386 267\"/><path class=\"w\" d=\"M378 272 L382 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text><text class=\"t\" x=\"256\" y=\"290\" text-anchor=\"middle\">M (masse commune)</text></svg></figure><b>Conditions :</b> NPN au silicium (seuil \\(0{,}7\\ \\mathrm V\\)) ; les résistances (nécessaires) ne sont pas dessinées. Le schéma donne directement \\(V_{BE}=2\\ \\mathrm V\\) et le collecteur est à \\(6\\ \\mathrm V\\) par rapport à M. Mode du transistor ?",
"o": [
"actif (amplification)",
"bloqué",
"saturé (au maximum)",
"détruit"
],
"a": [
0
],
"e": "\\(V_{BC}=V_{BM}+V_{MC}=2-6=-4\\ \\mathrm V<0\\) : transistor actif (amplification). (Méthode du cours : d\\'abord \\(V_{BE}\\) pour savoir s\\'il est passant, puis \\(V_{BC}\\) pour actif ou saturé.)"
},
{
"id": "q24",
"th": "c4",
"src": "Schéma M · mode de fonctionnement",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 460 300\" role=\"img\" aria-label=\"Transistor NPN alimenté par deux sources : déterminer le mode\"><path class=\"w\" d=\"M130 150 L130 201\"/><path class=\"w\" d=\"M130 211 L130 262\"/><path class=\"w\" d=\"M116 201 L144 201\"/><path class=\"w\" d=\"M123 211 L137 211\"/><text class=\"t\" x=\"110\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BE</tspan><tspan dy=\"-4\"> = 0{,}4 V</tspan></text><path class=\"w\" d=\"M120 262 L140 262\"/><path class=\"w\" d=\"M124 267 L136 267\"/><path class=\"w\" d=\"M128 272 L132 272\"/><path class=\"w\" d=\"M130 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 118 L256 60 L380 60\"/><path class=\"w\" d=\"M380 60 L380 156\"/><path class=\"w\" d=\"M380 166 L380 262\"/><path class=\"w\" d=\"M366 156 L394 156\"/><path class=\"w\" d=\"M373 166 L387 166\"/><text class=\"t\" x=\"360\" y=\"166\" text-anchor=\"end\">5 V</text><path class=\"w\" d=\"M370 262 L390 262\"/><path class=\"w\" d=\"M374 267 L386 267\"/><path class=\"w\" d=\"M378 272 L382 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text><text class=\"t\" x=\"256\" y=\"290\" text-anchor=\"middle\">M (masse commune)</text></svg></figure><b>Conditions :</b> NPN au silicium (seuil \\(0{,}7\\ \\mathrm V\\)) ; les résistances (nécessaires) ne sont pas dessinées. Le schéma donne directement \\(V_{BE}=0{,}4\\ \\mathrm V\\) et le collecteur est à \\(5\\ \\mathrm V\\) par rapport à M. Mode du transistor ?",
"o": [
"actif (amplification)",
"bloqué",
"saturé (au maximum)",
"détruit"
],
"a": [
1
],
"e": "\\(V_{BE}=0{,}4\\ \\mathrm V<0{,}7\\ \\mathrm V\\) : transistor bloqué. (Méthode du cours : d\\'abord \\(V_{BE}\\) pour savoir s\\'il est passant, puis \\(V_{BC}\\) pour actif ou saturé.)"
},
{
"id": "q25",
"th": "c4",
"src": "Schéma M · mode de fonctionnement",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 460 300\" role=\"img\" aria-label=\"Transistor NPN alimenté par deux sources : déterminer le mode\"><path class=\"w\" d=\"M130 150 L130 201\"/><path class=\"w\" d=\"M130 211 L130 262\"/><path class=\"w\" d=\"M116 201 L144 201\"/><path class=\"w\" d=\"M123 211 L137 211\"/><text class=\"t\" x=\"110\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BE</tspan><tspan dy=\"-4\"> = 4 V</tspan></text><path class=\"w\" d=\"M120 262 L140 262\"/><path class=\"w\" d=\"M124 267 L136 267\"/><path class=\"w\" d=\"M128 272 L132 272\"/><path class=\"w\" d=\"M130 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 118 L256 60 L380 60\"/><path class=\"w\" d=\"M380 60 L380 156\"/><path class=\"w\" d=\"M380 166 L380 262\"/><path class=\"w\" d=\"M366 156 L394 156\"/><path class=\"w\" d=\"M373 166 L387 166\"/><text class=\"t\" x=\"360\" y=\"166\" text-anchor=\"end\">2 V</text><path class=\"w\" d=\"M370 262 L390 262\"/><path class=\"w\" d=\"M374 267 L386 267\"/><path class=\"w\" d=\"M378 272 L382 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text><text class=\"t\" x=\"256\" y=\"290\" text-anchor=\"middle\">M (masse commune)</text></svg></figure><b>Conditions :</b> NPN au silicium (seuil \\(0{,}7\\ \\mathrm V\\)) ; les résistances (nécessaires) ne sont pas dessinées. Le schéma donne directement \\(V_{BE}=4\\ \\mathrm V\\) et le collecteur est à \\(2\\ \\mathrm V\\) par rapport à M. Mode du transistor ?",
"o": [
"actif (amplification)",
"bloqué",
"saturé (au maximum)",
"détruit"
],
"a": [
2
],
"e": "\\(V_{BC}=4-2=2\\ \\mathrm V>0{,}7\\ \\mathrm V\\) : transistor saturé (au maximum). (Méthode du cours : d\\'abord \\(V_{BE}\\) pour savoir s\\'il est passant, puis \\(V_{BC}\\) pour actif ou saturé.)"
},
{
"id": "q26",
"th": "c4",
"src": "Schéma F · émetteur commun fondamental",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = 100 kΩ</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> NPN, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\) ; modèle d\\'Ebers-Moll. Courant de base \\(i_B\\) :",
"o": [
"\\(43\\ \\mathrm{\\mu A}\\)",
"\\(50\\ \\mathrm{\\mu A}\\)",
"\\(645\\ \\mathrm{\\mu A}\\)",
"\\(113\\ \\mathrm{\\mu A}\\)"
],
"a": [
0
],
"e": "Maille base : \\(i_B=\\dfrac{V_{BB}-V_{BE}}{R_B}=\\dfrac{5-0{,}7}{100\\ \\mathrm k}=43\\ \\mu\\mathrm A\\)."
},
{
"id": "q27",
"th": "c4",
"src": "Schéma F · émetteur commun fondamental",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = 100 kΩ</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> NPN, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\) ; modèle d\\'Ebers-Moll. Courant collecteur et tension \\(V_{CE}\\) : quelles valeurs sont justes ?",
"o": [
"\\(i_C=6{,}45\\ \\mathrm{mA}\\)",
"\\(V_{CE}=5{,}55\\ \\mathrm V\\)",
"le transistor est en mode actif",
"\\(V_{CE}=11{,}3\\ \\mathrm V\\)",
"le transistor est saturé"
],
"a": [
0,
1,
2
],
"e": "\\(i_C=\\beta i_B=6{,}45\\) mA ; maille collecteur \\(V_{CE}=V_{CC}-R_Ci_C=12-6{,}45=5{,}55\\) V \\(>0{,}7\\) V : actif."
},
{
"id": "q28",
"th": "c4",
"src": "Schéma F · émetteur commun fondamental",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = 100 kΩ</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure> Droite de charge statique de ce montage : quelles affirmations sont justes ?",
"o": [
"\\(i_{C,sat}=12\\ \\mathrm{mA}\\)",
"\\(V_{CE,blocage}=12\\ \\mathrm V\\)",
"pente \\(-\\dfrac{1}{R_C}=-1\\ \\mathrm{mS}\\)",
"\\(i_{C,sat}=6{,}45\\ \\mathrm{mA}\\)",
"\\(V_{CE,blocage}=5\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(i_C=-\\dfrac{V_{CE}}{R_C}+\\dfrac{V_{CC}}{R_C}\\) : \\(i_{C,sat}=\\dfrac{12}{1\\ \\mathrm k}=12\\) mA, \\(V_{CE,bloc}=V_{CC}\\)."
},
{
"id": "q29",
"th": "c4",
"src": "Schéma F · émetteur commun fondamental",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = 100 kΩ</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> = 1 kΩ</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> NPN, \\(\\beta=150\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\) ; modèle d\\'Ebers-Moll. <b>Nouvelle condition : \\(R_B=10\\ \\mathrm{k\\Omega}\\).</b> Que se passe-t-il ?",
"o": [
"\\(\\beta i_B=64{,}5\\ \\mathrm{mA}>i_{C,sat}=12\\ \\mathrm{mA}\\)",
"le transistor sature : \\(i_C\\approx i_{C,sat}=12\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx0\\) (approximation grossière)",
"\\(i_C=64{,}5\\ \\mathrm{mA}\\)",
"\\(V_{CE}=-52{,}5\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(i_B=\\dfrac{4{,}3}{10\\ \\mathrm k}=430\\ \\mu\\mathrm A\\), \\(\\beta i_B=64{,}5\\) mA : impossible, \\(i_C\\) ne peut pas dépasser \\(i_{C,sat}\\). Même raisonnement que l\\'exercice du cours sur le 2N3904."
},
{
"id": "q30",
"th": "c4",
"src": "CM4 · saturation et datasheet",
"q": "<b>Conditions :</b> émetteur commun fondamental saturé, \\(V_{CC}=10\\ \\mathrm V\\), \\(R_C=1\\ \\mathrm{k\\Omega}\\). Sur la datasheet on lit \\(V_{CE,sat}=0{,}1\\ \\mathrm V\\) pour \\(i_C\\approx10\\ \\mathrm{mA}\\). Valeur affinée de \\(i_C\\) ?",
"o": [
"\\(9{,}9\\ \\mathrm{mA}\\)",
"\\(10\\ \\mathrm{mA}\\)",
"\\(9{,}3\\ \\mathrm{mA}\\)",
"\\(0{,}1\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "\\(i_C=\\dfrac{V_{CC}-V_{CE,sat}}{R_C}=\\dfrac{10-0{,}1}{1\\ \\mathrm k}=9{,}9\\) mA (le cours trouve \\(9{,}91\\) mA avec \\(95\\) mV)."
},
{
"id": "q31",
"th": "c4",
"src": "Schéma F · choisir R_B et R_C",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = ?</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> = ?</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> \\(V_{BB}=V_{CC}=12\\ \\mathrm V\\), \\(\\beta=200\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\). On veut le point de fonctionnement \\(i_C=5\\ \\mathrm{mA}\\), \\(V_{CE}=6\\ \\mathrm V\\). Quelles valeurs sont justes ?",
"o": [
"\\(i_B=25\\ \\mu\\mathrm A\\)",
"\\(R_B=452\\ \\mathrm{k\\Omega}\\)",
"\\(R_C=1{,}2\\ \\mathrm{k\\Omega}\\)",
"\\(R_C=2{,}4\\ \\mathrm{k\\Omega}\\)",
"\\(R_B=960\\ \\mathrm{k\\Omega}\\)"
],
"a": [
0,
1,
2
],
"e": "\\(i_B=\\dfrac{i_C}{\\beta}=25\\ \\mu\\mathrm A\\) ; maille base \\(R_B=\\dfrac{V_{BB}-V_{BE}}{i_B}=452\\ \\mathrm{k\\Omega}\\) ; maille collecteur \\(R_C=\\dfrac{V_{CC}-V_{CE}}{i_C}=\\dfrac{6}{5\\ \\mathrm m}=1{,}2\\ \\mathrm{k\\Omega}\\)."
},
{
"id": "q32",
"th": "c4",
"src": "Schéma E · polarisation par l'émetteur",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Polarisation par l'émetteur\"><path class=\"w\" d=\"M110 150 L110 201\"/><path class=\"w\" d=\"M110 211 L110 262\"/><path class=\"w\" d=\"M96 201 L124 201\"/><path class=\"w\" d=\"M103 211 L117 211\"/><text class=\"t\" x=\"90\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 3 V</tspan></text><path class=\"w\" d=\"M100 262 L120 262\"/><path class=\"w\" d=\"M104 267 L116 267\"/><path class=\"w\" d=\"M108 272 L112 272\"/><path class=\"w\" d=\"M110 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 202\"/><path class=\"w\" d=\"M256 242 L256 262\"/><rect class=\"res\" x=\"249\" y=\"202\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"227\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=100\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(i_C\\approx i_E\\). Courant d\\'émetteur \\(i_E\\) :",
"o": [
"\\(2{,}3\\ \\mathrm{mA}\\)",
"\\(3\\ \\mathrm{mA}\\)",
"\\(0{,}023\\ \\mathrm{mA}\\)",
"\\(4{,}47\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "Maille base : \\(V_E=V_{BB}-V_{BE}=2{,}3\\) V ; \\(i_E=\\dfrac{V_E}{R_E}=2{,}3\\) mA."
},
{
"id": "q33",
"th": "c4",
"src": "Schéma E · polarisation par l'émetteur",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Polarisation par l'émetteur\"><path class=\"w\" d=\"M110 150 L110 201\"/><path class=\"w\" d=\"M110 211 L110 262\"/><path class=\"w\" d=\"M96 201 L124 201\"/><path class=\"w\" d=\"M103 211 L117 211\"/><text class=\"t\" x=\"90\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 3 V</tspan></text><path class=\"w\" d=\"M100 262 L120 262\"/><path class=\"w\" d=\"M104 267 L116 267\"/><path class=\"w\" d=\"M108 272 L112 272\"/><path class=\"w\" d=\"M110 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 202\"/><path class=\"w\" d=\"M256 242 L256 262\"/><rect class=\"res\" x=\"249\" y=\"202\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"227\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=100\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(i_C\\approx i_E\\). Potentiels et tension \\(V_{CE}\\) :",
"o": [
"\\(V_C=9{,}94\\ \\mathrm V\\)",
"\\(V_{CE}=7{,}64\\ \\mathrm V\\)",
"le transistor est actif",
"\\(V_{CE}=9{,}94\\ \\mathrm V\\)",
"\\(V_E=3\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(V_C=V_{CC}-R_Ci_C=15-2{,}2\\ \\mathrm k\\times2{,}3\\ \\mathrm{mA}=9{,}94\\) V ; \\(V_{CE}=V_C-V_E=7{,}64\\) V \\(>0{,}7\\) V."
},
{
"id": "q34",
"th": "c4",
"src": "Schéma E · polarisation par l'émetteur",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Polarisation par l'émetteur\"><path class=\"w\" d=\"M110 150 L110 201\"/><path class=\"w\" d=\"M110 211 L110 262\"/><path class=\"w\" d=\"M96 201 L124 201\"/><path class=\"w\" d=\"M103 211 L117 211\"/><text class=\"t\" x=\"90\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">BB</tspan><tspan dy=\"-4\"> = 3 V</tspan></text><path class=\"w\" d=\"M100 262 L120 262\"/><path class=\"w\" d=\"M104 267 L116 267\"/><path class=\"w\" d=\"M108 272 L112 272\"/><path class=\"w\" d=\"M110 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 202\"/><path class=\"w\" d=\"M256 242 L256 262\"/><rect class=\"res\" x=\"249\" y=\"202\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"227\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 15 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=100\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\), \\(i_C\\approx i_E\\). <b>Nouvelle condition :</b> on remplace le transistor par un autre de \\(\\beta=300\\). Quelles affirmations sont justes ?",
"o": [
"\\(i_C\\) reste \\(\\approx2{,}3\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\) reste \\(\\approx7{,}64\\ \\mathrm V\\)",
"le montage est \\(\\beta\\)-indépendant",
"\\(i_C\\) est multiplié par 3",
"le transistor sature"
],
"a": [
0,
1,
2
],
"e": "On n\\'a jamais utilisé \\(\\beta\\) : \\(Q\\) ne bouge pas (seul \\(i_B=\\frac{i_E}{\\beta+1}\\) change)."
},
{
"id": "q35",
"th": "c4",
"src": "Schéma P · pont diviseur de tension",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Polarisation par pont diviseur de tension (continu)\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L256 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 8,2 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 1,8 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=200\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\). Peut-on considérer le pont comme une source de tension constante ?",
"o": [
"oui : \\(R_1\\parallel R_2=1\\,476\\ \\Omega<0{,}01(\\beta+1)R_E=2\\,010\\ \\Omega\\)",
"non : \\(R_1\\parallel R_2>0{,}01(\\beta+1)R_E\\)",
"oui, car \\(R_1>R_2\\)",
"on ne peut pas savoir sans \\(R_C\\)"
],
"a": [
0
],
"e": "\\(R_1\\parallel R_2=\\dfrac{8{,}2\\times1{,}8}{10}\\ \\mathrm{k\\Omega}=1\\,476\\ \\Omega\\) et \\(0{,}01\\times201\\times1\\ \\mathrm k=2\\,010\\ \\Omega\\) : condition vérifiée."
},
{
"id": "q36",
"th": "c4",
"src": "Schéma P · pont diviseur de tension",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Polarisation par pont diviseur de tension (continu)\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L256 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 8,2 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 1,8 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=200\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\). Avec l\\'approximation (source de tension), point de fonctionnement :",
"o": [
"\\(V_{BB}=V_{Th}=2{,}16\\ \\mathrm V\\)",
"\\(i_C\\approx i_E=1{,}46\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx6{,}6\\ \\mathrm V\\)",
"\\(i_C=2{,}16\\ \\mathrm{mA}\\)",
"\\(V_{CE}\\approx8{,}06\\ \\mathrm V\\)"
],
"a": [
0,
1,
2
],
"e": "\\(V_{Th}=12\\times\\dfrac{1{,}8}{10}=2{,}16\\) V, \\(V_E=1{,}46\\) V, \\(i_E=1{,}46\\) mA, \\(V_C=12-2{,}7\\ \\mathrm k\\times i_C=8{,}06\\) V, \\(V_{CE}=V_C-V_E=6{,}6\\) V."
},
{
"id": "q37",
"th": "c4",
"src": "Schéma P · pont diviseur de tension",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Polarisation par pont diviseur de tension (continu)\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L256 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 8,2 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 1,8 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,7 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/></svg></figure><b>Conditions :</b> NPN, \\(\\beta=200\\), \\(V_{BE}=0{,}7\\ \\mathrm V\\). Calcul <b>complet</b> (sans approximation) : courant collecteur \\(i_C\\) ?",
"o": [
"\\(1{,}442\\ \\mathrm{mA}\\)",
"\\(1{,}46\\ \\mathrm{mA}\\)",
"\\(117{,}9\\ \\mathrm{mA}\\)",
"\\(2{,}16\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "\\(i_B=\\dfrac{V_{Th}-V_{BE}}{R_{Th}+(\\beta+1)R_E}=\\dfrac{1{,}46}{1\\,476+201\\,000}=7{,}21\\ \\mu\\mathrm A\\), \\(i_C=\\beta i_B=1{,}442\\) mA (approximation : 1{,}46 mA), puis \\(V_{CE}=V_{CC}-R_E(\\beta+1)i_B-R_Ci_C=6{,}66\\) V."
},
{
"id": "q38",
"th": "c4",
"src": "CM4 · condition du pont",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 470 310\" role=\"img\" aria-label=\"Polarisation par pont diviseur de tension (continu)\"><path class=\"w\" d=\"M161 26 L179 26\"/><text class=\"tn2\" x=\"170\" y=\"19\" text-anchor=\"middle\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M170 26 L256 26\"/><path class=\"w\" d=\"M170 26 L170 68\"/><path class=\"w\" d=\"M170 108 L170 150\"/><rect class=\"res\" x=\"163\" y=\"68\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"93\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">1</tspan><tspan dy=\"-4\"> </tspan>= 47 kΩ</text><path class=\"w\" d=\"M170 150 L170 189\"/><path class=\"w\" d=\"M170 229 L170 268\"/><rect class=\"res\" x=\"163\" y=\"189\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"157\" y=\"214\" text-anchor=\"end\">R<tspan class=\"sb\" dy=\"4\">2</tspan><tspan dy=\"-4\"> </tspan>= 10 kΩ</text><path class=\"w\" d=\"M160 268 L180 268\"/><path class=\"w\" d=\"M164 273 L176 273\"/><path class=\"w\" d=\"M168 278 L172 278\"/><circle class=\"dot\" cx=\"170\" cy=\"150\" r=\"3.5\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M170 150 L216 150\"/><path class=\"w\" d=\"M256 26 L256 52\"/><path class=\"w\" d=\"M256 92 L256 118\"/><rect class=\"res\" x=\"249\" y=\"52\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"77\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> </tspan>= 2,2 kΩ</text><path class=\"w\" d=\"M256 182 L256 205\"/><path class=\"w\" d=\"M256 245 L256 268\"/><rect class=\"res\" x=\"249\" y=\"205\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"230\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">E</tspan><tspan dy=\"-4\"> </tspan>= 1 kΩ</text><path class=\"w\" d=\"M246 268 L266 268\"/><path class=\"w\" d=\"M250 273 L262 273\"/><path class=\"w\" d=\"M254 278 L258 278\"/></svg></figure><b>Conditions :</b> \\(\\beta=150\\). L\\'approximation « source de tension » est-elle permise ?",
"o": [
"non : \\(R_1\\parallel R_2\\approx8{,}25\\ \\mathrm{k\\Omega}>0{,}01(\\beta+1)R_E=1{,}51\\ \\mathrm{k\\Omega}\\), il faut le calcul complet par Thévenin",
"oui, l\\'écart est négligeable",
"oui, car \\(R_E=1\\ \\mathrm{k\\Omega}\\)",
"non, car \\(R_C>R_E\\)"
],
"a": [
0
],
"e": "C\\'est le montage du schéma A (CM5) : on y fait le calcul complet \\(i_B=\\dfrac{E_{Th}-V_{BE}}{R_{Th}+(\\beta+1)R_E}\\)."
},
{
"id": "q39",
"th": "c4",
"src": "Schéma S · transistor en commutation",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">cmd</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = ?</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> (charge) = ?</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> une sortie de microcontrôleur (\\(V_{cmd}=5\\ \\mathrm V\\), \\(40\\ \\mathrm{mA}\\) maximum) doit commander une charge parcourue par \\(i_C=100\\ \\mathrm{mA}\\) sous \\(12\\ \\mathrm V\\). Datasheet : \\(i_{C,max}=600\\ \\mathrm{mA}\\), \\(V_{CE,max}=40\\ \\mathrm V\\) ; à saturation \\(i_{B,sat}=10\\ \\mathrm{mA}\\), \\(V_{BE,sat}=1\\ \\mathrm V\\), \\(V_{CE,sat}\\approx0\\). Quelles affirmations sont justes ?",
"o": [
"le transistor convient : \\(100\\ \\mathrm{mA}<600\\ \\mathrm{mA}\\) et \\(12\\ \\mathrm V<40\\ \\mathrm V\\)",
"\\(R_B=400\\ \\Omega\\)",
"\\(R_C=120\\ \\Omega\\)",
"\\(R_B=500\\ \\Omega\\)",
"\\(R_C=50\\ \\Omega\\)"
],
"a": [
0,
1,
2
],
"e": "\\(R_B=\\dfrac{V_{cmd}-V_{BE,sat}}{i_{B,sat}}=\\dfrac{5-1}{10\\ \\mathrm m}=400\\ \\Omega\\) ; \\(R_C=\\dfrac{V_{CC}-V_{CE,sat}}{i_{C,sat}}=\\dfrac{12}{0{,}1}=120\\ \\Omega\\). On prend ensuite une valeur normalisée de \\(R_B\\) un peu <b>plus petite</b> pour bien saturer."
},
{
"id": "q40",
"th": "c4",
"src": "Schéma S · transistor en commutation",
"q": "<figure class=\"s4-fig cm-fig\"><svg viewBox=\"0 0 500 300\" role=\"img\" aria-label=\"Émetteur commun fondamental : deux sources continues\"><path class=\"w\" d=\"M90 150 L90 201\"/><path class=\"w\" d=\"M90 211 L90 262\"/><path class=\"w\" d=\"M76 201 L104 201\"/><path class=\"w\" d=\"M83 211 L97 211\"/><text class=\"t\" x=\"70\" y=\"211\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">cmd</tspan><tspan dy=\"-4\"> = 5 V</tspan></text><path class=\"w\" d=\"M80 262 L100 262\"/><path class=\"w\" d=\"M84 267 L96 267\"/><path class=\"w\" d=\"M88 272 L92 272\"/><path class=\"w\" d=\"M90 150 L110 150\"/><path class=\"w\" d=\"M110 150 L135 150\"/><path class=\"w\" d=\"M175 150 L200 150\"/><rect class=\"res\" x=\"135\" y=\"143\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"155\" y=\"137\" text-anchor=\"middle\">R<tspan class=\"sb\" dy=\"4\">B</tspan><tspan dy=\"-4\"> = ?</tspan></text><path class=\"w\" d=\"M200 150 L216 150\"/><path class=\"w\" d=\"M216 150 L238 150\"/><path class=\"w\" d=\"M238 134 L238 166\"/><path class=\"w\" d=\"M238 143 L256 130 L256 118\"/><path class=\"w\" d=\"M238 157 L256 170 L256 182\"/><path class=\"dot\" d=\"M254 169 l-9 -1 l5 -7z\"/><circle class=\"tr\" cx=\"244\" cy=\"150\" r=\"24\"/><path class=\"w\" d=\"M256 182 L256 262\"/><path class=\"w\" d=\"M246 262 L266 262\"/><path class=\"w\" d=\"M250 267 L262 267\"/><path class=\"w\" d=\"M254 272 L258 272\"/><path class=\"w\" d=\"M256 40 L256 59\"/><path class=\"w\" d=\"M256 99 L256 118\"/><rect class=\"res\" x=\"249\" y=\"59\" width=\"14\" height=\"40\"/><text class=\"t\" x=\"269\" y=\"84\" text-anchor=\"start\">R<tspan class=\"sb\" dy=\"4\">C</tspan><tspan dy=\"-4\"> (charge) = ?</tspan></text><path class=\"w\" d=\"M256 40 L410 40\"/><path class=\"w\" d=\"M410 40 L410 146\"/><path class=\"w\" d=\"M410 156 L410 262\"/><path class=\"w\" d=\"M396 146 L424 146\"/><path class=\"w\" d=\"M403 156 L417 156\"/><text class=\"t\" x=\"390\" y=\"156\" text-anchor=\"end\">V<tspan class=\"sb\" dy=\"4\">CC</tspan><tspan dy=\"-4\"> = 12 V</tspan></text><path class=\"w\" d=\"M400 262 L420 262\"/><path class=\"w\" d=\"M404 267 L416 267\"/><path class=\"w\" d=\"M408 272 L412 272\"/><text class=\"tn2\" x=\"272\" y=\"214\" text-anchor=\"start\">E</text><text class=\"tn2\" x=\"272\" y=\"112\" text-anchor=\"start\">C</text><text class=\"tn2\" x=\"206\" y=\"140\" text-anchor=\"end\">B</text></svg></figure><b>Conditions :</b> une sortie de microcontrôleur (\\(V_{cmd}=5\\ \\mathrm V\\), \\(40\\ \\mathrm{mA}\\) maximum) doit commander une charge parcourue par \\(i_C=100\\ \\mathrm{mA}\\) sous \\(12\\ \\mathrm V\\). Datasheet : \\(i_{C,max}=600\\ \\mathrm{mA}\\), \\(V_{CE,max}=40\\ \\mathrm V\\) ; à saturation \\(i_{B,sat}=10\\ \\mathrm{mA}\\), \\(V_{BE,sat}=1\\ \\mathrm V\\), \\(V_{CE,sat}\\approx0\\). Gain en courant à saturation \\(\\beta_{sat}=\\dfrac{i_{C,sat}}{i_{B,sat}}\\) :",
"o": [
"\\(\\beta_{sat}=10\\)",
"\\(\\beta_{sat}=200\\)",
"\\(\\beta_{sat}=100\\)",
"\\(\\beta_{sat}=1\\)"
],
"a": [
0
],
"e": "\\(\\dfrac{100}{10}=10\\) : faible, c\\'est normal en saturation."
},
{
"id": "q41",
"th": "c4",
"src": "CM4 · temps de commutation",
"q": "<b>Conditions :</b> datasheet : \\(t_d=35\\ \\mathrm{ns}\\), \\(t_r=35\\ \\mathrm{ns}\\), \\(t_s=200\\ \\mathrm{ns}\\), \\(t_f=50\\ \\mathrm{ns}\\). Temps de blocage \\(t_{OFF}\\) ?",
"o": [
"\\(250\\ \\mathrm{ns}\\)",
"\\(70\\ \\mathrm{ns}\\)",
"\\(320\\ \\mathrm{ns}\\)",
"\\(235\\ \\mathrm{ns}\\)"
],
"a": [
0
],
"e": "\\(t_{OFF}=t_s+t_f=200+50=250\\) ns (et \\(t_{ON}=t_d+t_r=70\\) ns)."
},
{
"id": "q42",
"th": "c4",
"src": "CM4 · courant de fuite",
"q": "<b>Conditions :</b> \\(\\beta=100\\), \\(i_B=20\\ \\mu\\mathrm A\\), courant de fuite \\(i_{CB0}=0{,}1\\ \\mu\\mathrm A\\) (température élevée). Courant collecteur ?",
"o": [
"\\(2{,}01\\ \\mathrm{mA}\\)",
"\\(2\\ \\mathrm{mA}\\)",
"\\(1{,}97\\ \\mathrm{mA}\\)",
"\\(2{,}02\\ \\mathrm{mA}\\)"
],
"a": [
0
],
"e": "\\(i_C=\\beta i_B+(\\beta+1)i_{CB0}=2\\ \\mathrm{mA}+10{,}1\\ \\mu\\mathrm A=2{,}01\\) mA."
},
{
"id": "q43",
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
"id": "q44",
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
"id": "q45",
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
"id": "q46",
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
"id": "q47",
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
"id": "q48",
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
"id": "q49",
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
"id": "q50",
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
"id": "q51",
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
"id": "q52",
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
"id": "q53",
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
"id": "q54",
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
"id": "q55",
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
"id": "q56",
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
"id": "q57",
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
"id": "q58",
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
"id": "q59",
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
"id": "q60",
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
"id": "q61",
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
"id": "q62",
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
"id": "q63",
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
"id": "q64",
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
"id": "q65",
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
"id": "q66",
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
"id": "q67",
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
"id": "q68",
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
"id": "q69",
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
"id": "q70",
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
"id": "q71",
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
"id": "q72",
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
"id": "q73",
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
"id": "q74",
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
"id": "q75",
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
"id": "q76",
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
"id": "q77",
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
"id": "q78",
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
}
];
