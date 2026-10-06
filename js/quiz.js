/* ================= QUIZ & FLASHCARDS ================= */
(function(){
  "use strict";
  var CHNAMES=["Révisions ING1","Conducteurs","Semi-conducteurs","La diode","BJT statique","BJT dynamique","Le FET","Logique CMOS"];
  var QCM=[
   {c:0,q:"Quel théorème donne directement un potentiel connaissant tous les composants reliés à un nœud ?",o:["Millman","Norton","Superposition","Thévenin"],a:0,e:"Millman : \\(V=\\left(\\sum \\frac{V_{k}}{R_{k}}+\\sum i_{k}\\right)\\,/\\,\\left(\\sum \\frac{1}{R_{k}}\\right)\\)."},
   {c:0,q:"Pour neutraliser une source de courant idéale, on la remplace par :",o:["un fil (court-circuit)","un trou (circuit ouvert)","une résistance","une source de tension"],a:1,e:"Source de courant → circuit ouvert ; source de tension → fil."},
   {c:0,q:"Quel lien entre les résistances de Thévenin et de Norton ?",o:["\\(R_{N}=R_{\\mathrm{Th}}\\)","\\(R_{N}=\\frac{1}{R_{\\mathrm{Th}}}\\)","\\(R_{N}=2\\cdot R_{\\mathrm{Th}}\\)","aucun lien"],a:0,e:"Les résistances équivalentes sont identiques : \\(R_{N}=R_{\\mathrm{Th}}\\)."},
   {c:0,q:"Un AOP idéal en régime linéaire vérifie :",o:["\\(V_{+}=V_{-}\\) et \\(i\\pm =0\\)","\\(V_{+}=0\\) uniquement","\\(i\\pm =\\infty\\)","\\(V_{\\mathrm{out}}=\\pm V_{\\mathrm{sat}}\\)"],a:0,e:"Contre-réaction \\(\\Longrightarrow V_{d}=0\\), donc \\(V_{+}=V_{-}\\), et courants d'entrée nuls."},
   {c:0,q:"Le montage suiveur sert surtout à :",o:["amplifier fortement","inverser le signal","adapter les impédances","filtrer"],a:2,e:"Gain 1 mais \\(Z_{\\mathrm{in}}\\) infinie : il prélève une tension sans la perturber."},
   {c:0,q:"Tension de sortie d'un montage inverseur (\\(R_{1}\\) en entrée, \\(R_{f}\\) en réaction) :",o:["\\(\\left(1+\\frac{R_{f}}{R_{1}}\\right)\\cdot V_{\\mathrm{in}}\\)","\\(-\\left(\\frac{R_{f}}{R_{1}}\\right)\\cdot V_{\\mathrm{in}}\\)","\\(-\\left(\\frac{R_{1}}{R_{f}}\\right)\\cdot V_{\\mathrm{in}}\\)","\\(\\left(\\frac{R_{f}}{R_{1}}\\right)\\cdot V_{\\mathrm{in}}\\)"],a:1,e:"Inverseur : \\(V_{\\mathrm{out}}=-\\left(\\frac{R_{f}}{R_{1}}\\right)\\cdot V_{\\mathrm{in}}\\)."},

   {c:1,q:"La loi d'Ohm locale s'écrit :",o:["\\(u=R\\cdot i\\)","\\(j=\\gamma \\cdot E\\)","\\(P=U\\cdot I\\)","\\(q=C\\cdot u\\)"],a:1,e:"\\(j=\\gamma \\cdot E\\) est la forme microscopique de la loi d'Ohm."},
   {c:1,q:"Pour un conducteur, si la température augmente :",o:["\\(R\\) augmente","\\(R\\) diminue","\\(R\\) est constante","\\(R\\) s'annule"],a:0,e:"L'agitation thermique réduit la mobilité \\(\\to \\rho \\uparrow\\) (loi de Matthiessen)."},
   {c:1,q:"La résistance d'un fil vaut :",o:["\\(\\rho \\cdot \\frac{S}{\\ell }\\)","\\(\\rho \\cdot \\frac{\\ell }{S}\\)","\\(\\gamma \\cdot \\frac{\\ell }{S}\\)","\\(\\frac{\\ell }{\\rho \\cdot S}\\)"],a:1,e:"\\(R=\\rho \\cdot \\frac{\\ell }{S}\\)."},
   {c:1,q:"Rôle d'un condensateur de liaison (couplage) :",o:["bloquer la composante continue","stocker de l'énergie longtemps","augmenter la tension","limiter le courant"],a:0,e:"En série, il ne laisse passer que l'alternatif (bloque l'offset)."},
   {c:1,q:"Relation courant/tension d'un condensateur :",o:["\\(i=C\\cdot \\frac{\\mathrm{d}u}{\\mathrm{d}t}\\)","\\(i=\\frac{u}{C}\\)","\\(i=C\\cdot u\\)","\\(i=C\\cdot \\frac{\\mathrm{d}t}{\\mathrm{d}u}\\)"],a:0,e:"\\(i=C\\cdot \\frac{\\mathrm{d}u}{\\mathrm{d}t}\\)."},
   {c:1,q:"Un composant actif :",o:["réduit toujours la puissance","augmente la puissance via une alimentation","ne consomme rien","est toujours une résistance"],a:1,e:"Actif = augmente la puissance grâce à une alim externe (AOP, transistor)."},

   {c:2,q:"La loi d'action de masse s'écrit :",o:["\\(n+p=n_{i}\\)","\\(n\\cdot p=n_{i}^{2}\\)","\\(\\frac{n}{p}=n_{i}\\)","\\(n\\cdot p=2\\cdot n_{i}\\)"],a:1,e:"\\(n\\cdot p=n_{i}^{2}\\) à l'équilibre thermodynamique."},
   {c:2,q:"Un dopant du groupe \\(V\\) (ex. phosphore) est :",o:["accepteur, type \\(P\\)","donneur, type \\(N\\)","neutre","isolant"],a:1,e:"5 électrons de valence → donneur → dopage type \\(N\\)."},
   {c:2,q:"Dans un semi-conducteur, si \\(T\\) augmente, la conductivité :",o:["augmente","diminue","reste constante","s'annule"],a:0,e:"Le nombre de porteurs croît fortement \\(\\to \\gamma\\) augmente (contraire du conducteur)."},
   {c:2,q:"La zone de charge désertée d'une jonction PN contient :",o:["beaucoup de porteurs mobiles","des ions fixes, sans porteurs mobiles","uniquement des électrons","uniquement des trous"],a:1,e:"Les porteurs se recombinent ; restent les ions fixes → barrière \\(V_{0}\\)."},
   {c:2,q:"Une jonction PN en polarisation directe (\\(P\\) relié au +) est :",o:["bloquante","passante","en claquage","inchangée"],a:1,e:"Vp annule \\(V_{0}\\), la diffusion des majoritaires reprend."},
   {c:2,q:"Type \\(N\\) dopé à \\(N_{D}\\) : la densité d'électrons \\(n\\approx\\) :",o:["\\(n_{i}\\)","\\(N_{A}\\)","\\(N_{D}\\)","\\(\\frac{n_{i}^{2}}{N_{D}}\\)"],a:2,e:"\\(n\\approx N_{D};\\,\\allowbreak p=\\frac{n_{i}^{2}}{N_{D}}\\)."},

   {c:3,q:"Tension de seuil d'une diode au silicium :",o:["\\(0{,}3\\,\\mathrm{V}\\)","\\(0{,}7\\,\\mathrm{V}\\)","\\(1{,}1\\,\\mathrm{V}\\)","\\(0\\,\\mathrm{V}\\)"],a:1,e:"Si : \\(0{,}7\\,\\mathrm{V}\\) ; Ge : \\(0{,}3\\,\\mathrm{V}\\)."},
   {c:3,q:"Le pont de Graëtz réalise :",o:["un redressement simple alternance","un redressement double alternance","un écrêtage","une régulation"],a:1,e:"4 diodes → les deux alternances sont redressées."},
   {c:3,q:"Une diode Zener régulatrice fonctionne :",o:["en direct","en inverse dans la zone Zener","bloquée","en avalanche destructive"],a:1,e:"En inverse : \\(V_{D}=-V_{Z}\\) quasi constant."},
   {c:3,q:"La diode de roue libre protège contre :",o:["les surtensions d'une charge inductive","les courts-circuits","la surchauffe","les inversions de polarité"],a:0,e:"Elle assure la continuité du courant dans \\(L\\,\\left(u_{L}=L\\cdot \\frac{\\mathrm{d}i}{\\mathrm{d}t}\\right)\\)."},
   {c:3,q:"Pour déterminer l'état d'une diode (modèle parfait) on :",o:["suppose un état et vérifie la cohérence","mesure toujours \\(0{,}7\\,\\mathrm{V}\\)","la considère toujours passante","ignore la tension de seuil"],a:0,e:"Raisonnement par l'absurde : hypothèse, calcul, vérification."},
   {c:3,q:"La diode Schottky se distingue par :",o:["un seuil élevé","une commutation rapide et un seuil faible","l'émission de lumière","une capacité variable"],a:1,e:"Métal-SC : seuil \\(0{,}15-0{,}45\\,\\mathrm{V}\\), adaptée aux hautes fréquences."},
   {c:3,q:"Dans un régulateur Zener, si \\(R_{L}\\) devient trop grande :",o:["\\(I_{Z}\\) diminue","\\(I_{Z}\\) devient maximal (risque)","\\(V_{\\mathrm{out}}\\) s'effondre","la Zener se bloque"],a:1,e:"\\(I_{L}\\) minimal \\(\\to I_{Z}\\) maximal → attention à \\(I_{Z,\\,\\mathrm{max}}\\)."},

   {c:4,q:"Relation fondamentale du BJT en mode actif :",o:["\\(i_{C}=\\beta \\cdot i_{B}\\)","\\(i_{B}=\\beta \\cdot i_{C}\\)","\\(i_{C}=i_{B}\\)","\\(i_{E}=\\beta \\cdot i_{C}\\)"],a:0,e:"\\(i_{C}=\\beta \\cdot i_{B}\\), avec \\(\\beta \\approx 100-200\\)."},
   {c:4,q:"Le transistor (Si) est bloqué si :",o:["\\(V_{\\mathrm{BE}}\\lt 0{,}7\\,\\mathrm{V}\\)","\\(V_{\\mathrm{BE}}=0{,}7\\,\\mathrm{V}\\)","\\(V_{\\mathrm{CE}}=0\\)","\\(V_{\\mathrm{CB}}\\gt 0\\)"],a:0,e:"La jonction base-émetteur n'est pas passante."},
   {c:4,q:"Le transistor est saturé si :",o:["\\(V_{\\mathrm{CE}}\\gt 5\\,\\mathrm{V}\\)","\\(V_{\\mathrm{CE}}\\lt 0{,}2\\,\\mathrm{V}\\)","\\(i_{B}=0\\)","\\(V_{\\mathrm{BE}}\\lt 0{,}7\\,\\mathrm{V}\\)"],a:1,e:"Les deux jonctions sont passantes, \\(V_{\\mathrm{CE}}\\approx 0\\)."},
   {c:4,q:"Le point de fonctionnement \\(Q\\) est :",o:["l'intersection droite de charge / caractéristique","le maximum de \\(i_{C}\\)","toujours à \\(V_{\\mathrm{CE}}=0\\)","le seuil de la base"],a:0,e:"\\(Q\\) = intersection de la droite de charge avec \\(I_{C}=f(V_{\\mathrm{CE}})\\)."},
   {c:4,q:"La polarisation par pont diviseur est avantageuse car :",o:["\\(\\beta\\)-dépendante","\\(\\beta\\)-indépendante et stable","plus simple (1 résistance)","supprime \\(R_{E}\\)"],a:1,e:"Elle se ramène à la polarisation par l'émetteur : \\(Q\\) stable en température."},
   {c:4,q:"En commutation, pour saturer le transistor il faut :",o:["\\(\\beta \\cdot i_{B}\\gt i_{C,\\,\\mathrm{sat}}\\)","\\(i_{B}=0\\)","\\(V_{\\mathrm{BE}}\\lt 0{,}7\\,\\mathrm{V}\\)","\\(i_{C}\\lt i_{B}\\)"],a:0,e:"Le courant de base commandé doit dépasser \\(i_{C,\\,\\mathrm{sat}}\\)."},

   {c:5,q:"Résistance dynamique d'émetteur \\(r_{E}\\) :",o:["\\(26\\,\\mathrm{mV}\\,/\\,I_{E}\\)","\\(I_{E}\\,/\\,26\\,\\mathrm{mV}\\)","\\(26\\,\\mathrm{\\Omega }\\) fixe","\\(\\beta \\cdot I_{E}\\)"],a:0,e:"\\(r_{E}=26\\,\\mathrm{mV}\\,/\\,I_{E}\\) (à \\(300\\,\\mathrm{K}\\))."},
   {c:5,q:"Gain en tension d'un émetteur commun (avec \\(C_{3}\\)) :",o:["\\(\\approx \\frac{R_{C}}{r_{E}}\\)","\\(\\approx \\frac{-R_{C}}{r_{E}}\\)","\\(\\approx \\frac{r_{E}}{R_{C}}\\)","\\(\\approx 1\\)"],a:1,e:"\\(A_{V}\\approx \\frac{-R_{C}}{r_{E}}\\) (déphasage de \\(\\pi\\))."},
   {c:5,q:"Le condensateur de découplage \\(C_{3}\\) (sur \\(R_{E}\\)) sert à :",o:["stabiliser \\(Q\\) en continu","augmenter fortement le gain en AC","bloquer l'entrée","filtrer la sortie"],a:1,e:"Il court-circuite \\(R_{E}\\) en AC → gain \\(\\approx \\frac{R_{C}}{r_{E}}\\)."},
   {c:5,q:"Impédance de sortie de l'émetteur commun :",o:["\\(r_{E}\\)","\\(R_{C}\\)","\\((\\beta +1)\\cdot r_{E}\\)","\\(R_{1}//R_{2}\\)"],a:1,e:"\\(Z_{\\mathrm{out}}=R_{C}\\)."},
   {c:5,q:"Rendement maximal d'un amplificateur de classe \\(B\\) :",o:["25 %","50 %","78,5 %","100 %"],a:2,e:"Classe \\(B\\colon \\eta \\le 78{,}5\\%\\)."},
   {c:5,q:"Gain en courant d'une paire Darlington :",o:["\\(\\beta _{1}+\\beta _{2}\\)","\\(\\beta _{1}\\cdot \\beta _{2}\\)","\\(\\beta _{1}-\\beta _{2}\\)","\\(\\frac{\\beta _{1}}{\\beta _{2}}\\)"],a:1,e:"\\(\\beta _{D}\\approx \\beta _{1}\\cdot \\beta _{2}\\)."},
   {c:5,q:"L'adaptation d'impédance entre deux étages, c'est :",o:["\\(Z_{o1}=Z_{i2}\\)","\\(Z_{o1}=0\\)","\\(Z_{i2}=\\infty\\)","\\(Z_{o1}\\gg Z_{i2}\\)"],a:0,e:"Transfert de puissance maximal quand \\(Z_{o1}=Z_{i2}\\)."},

   {c:6,q:"Le transistor à effet de champ (FET) est commandé en :",o:["courant","tension","puissance","fréquence"],a:1,e:"Effet de champ : commandé par la tension \\(V_{\\mathrm{GS}}\\)."},
   {c:6,q:"Le courant de grille d'un JFET/MOSFET est :",o:["\\(\\approx 0\\)","\\(=i_{D}\\)","\\(=\\beta \\cdot i_{B}\\)","élevé"],a:0,e:"\\(I_{G}\\approx 0\\to\\) impédance d'entrée énorme."},
   {c:6,q:"La caractéristique de transfert du JFET est :",o:["linéaire","quadratique","exponentielle","logarithmique"],a:1,e:"\\(I_{D}=I_{\\mathrm{DSS}}\\cdot \\left(1-\\frac{V_{\\mathrm{GS}}}{V_{\\mathrm{GS},\\,\\mathrm{off}}}\\right)^{2}\\)."},
   {c:6,q:"La transconductance \\(g_{m}\\) vaut :",o:["\\(\\frac{\\mathrm{d}V_{\\mathrm{GS}}}{\\mathrm{d}I_{D}}\\)","\\(\\frac{\\mathrm{d}I_{D}}{\\mathrm{d}V_{\\mathrm{GS}}}\\)","\\(\\frac{I_{D}}{V_{\\mathrm{DS}}}\\)","\\(\\frac{V_{\\mathrm{GS}}}{I_{D}}\\)"],a:1,e:"\\(g_{m}=\\frac{\\mathrm{d}I_{D}}{\\mathrm{d}V_{\\mathrm{GS}}}\\), en siemens."},
   {c:6,q:"Dans un MOSFET, le canal conducteur s'appelle :",o:["zone désertée","canal d'inversion","jonction","barrière"],a:1,e:"Canal d'inversion sous SiO₂, formé au-delà de \\(V_{T}\\)."},
   {c:6,q:"Gain d'un amplificateur source commune :",o:["\\(\\approx 1\\)","\\(-g_{m}\\cdot R_{D}\\)","\\(\\frac{g_{m}}{R_{D}}\\)","\\(\\frac{-R_{D}}{g_{m}}\\)"],a:1,e:"\\(A_{V}=-g_{m}\\cdot R_{D}\\)."},
   {c:6,q:"Le MOSFET est bloqué si :",o:["\\(V_{\\mathrm{GS}}\\lt V_{T}\\)","\\(V_{\\mathrm{GS}}\\gt V_{T}\\)","\\(V_{\\mathrm{DS}}\\gt 0\\)","\\(V_{\\mathrm{DS}}\\lt 0\\)"],a:0,e:"En dessous du seuil \\(V_{T}\\), pas de canal d'inversion."},

   {c:7,q:"Dans une porte CMOS, le réseau pMOS (PUN) :",o:["tire la sortie vers 0","tire la sortie vers 1","est relié à GND","conduit toujours"],a:1,e:"Les pMOS, reliés à \\(V_{\\mathrm{DD}}\\), tirent la sortie vers 1."},
   {c:7,q:"Avantage majeur de la logique CMOS :",o:["plus rapide que la TTL","consommation statique quasi-nulle","pas besoin d'alimentation","insensible au dopage"],a:1,e:"Au repos, toujours un interrupteur ouvert entre \\(V_{\\mathrm{DD}}\\) et la masse."},
   {c:7,q:"Théorème de De Morgan :",o:["¬\\((A+B)\\) = ¬\\(A\\cdot\\)¬\\(B\\)","¬\\((A+B)\\) = ¬\\(A\\)+¬\\(B\\)","¬\\((A\\cdot B)\\) = ¬\\(A\\cdot\\)¬\\(B\\)","\\(A+B=A\\cdot B\\)"],a:0,e:"¬\\((A+B)=\\bar{A}\\cdot \\bar{B}\\) et ¬\\((A\\cdot B)=\\bar{A}+\\bar{B}\\)."},
   {c:7,q:"Un opérateur « · » (ET) se traduit par des MOS :",o:["en parallèle","en série","en pont","déconnectés"],a:1,e:"« · » → série ; « + » → parallèle."},
   {c:7,q:"Le délai d'une porte CMOS (modèle \\(R_{C}\\)) :",o:["\\(R_{N}\\cdot R_{P}\\cdot C\\)","\\((R_{N}+R_{P})\\cdot \\frac{C_{\\mathrm{OUT}}}{2}\\)","\\(\\frac{C_{\\mathrm{OUT}}}{R}\\)","\\(\\frac{R}{C_{\\mathrm{OUT}}}\\)"],a:1,e:"\\(\\tau =(R_{N}+R_{P})\\cdot C_{\\mathrm{OUT}}\\,/\\,2\\)."},
   {c:7,q:"Miniaturiser (diminuer \\(L\\)) permet de :",o:["ralentir le circuit","augmenter la fréquence","augmenter la conso statique","réduire \\(I_{\\mathrm{DS}}\\)"],a:1,e:"\\(I_{\\mathrm{DS}}\\,\\propto \\,\\frac{W}{L}\\colon L\\) diminue → commutation plus rapide."},
   /* ---- Méthodes & déroulés (ajout) ---- */
   {c:0,q:"Pont diviseur \\(12\\,\\mathrm{V},\\,\\allowbreak R_{1}=4\\,\\mathrm{k\\Omega },\\,\\allowbreak R_{2}=8\\,\\mathrm{k\\Omega }\\), charge \\(8\\,\\mathrm{k\\Omega }\\) sur \\(R_{2}\\). Tension aux bornes de la charge :",o:["\\(8\\,\\mathrm{V}\\)","\\(6\\,\\mathrm{V}\\)","\\(4\\,\\mathrm{V}\\)","\\(12\\,\\mathrm{V}\\)"],a:1,e:"Thévenin : \\(V_{\\mathrm{Th}}=8\\,\\mathrm{V},\\,\\allowbreak R_{\\mathrm{Th}}=4//8=2{,}67\\,\\mathrm{k\\Omega };\\,\\allowbreak V_{L}=8\\cdot \\frac{8}{2{,}67+8}=6\\,\\mathrm{V}\\). Le diviseur « nu » \\((8\\,\\mathrm{V})\\) est faux car la charge tire du courant."},
   {c:0,q:"Non-inverseur avec \\(R_{1}=1\\,\\mathrm{k\\Omega },\\,\\allowbreak R_{f}=9\\,\\mathrm{k\\Omega }\\) : gain en dB ?",o:["9 dB","10 dB","19 dB","20 dB"],a:3,e:"\\(A=1+\\frac{R_{f}}{R_{1}}=10\\Longrightarrow 20\\cdot \\log (10)=20\\,\\mathrm{d}B\\)."},
   {c:1,q:"Fil de diamètre \\(1\\,\\mathrm{mm}\\) : sa section vaut",o:["\\(\\pi \\cdot 10^{-6}\\,\\mathrm{m}^{2}\\)","\\(\\pi \\cdot (0{,}5\\cdot 10^{-3})^{2}\\approx 7{,}85\\cdot 10^{-7}\\,\\mathrm{m}^{2}\\)","\\(10^{-6}\\,\\mathrm{m}^{2}\\)","\\(\\pi \\cdot 10^{-3}\\,\\mathrm{m}^{2}\\)"],a:1,e:"\\(S=\\pi r^{2}\\) avec \\(r=\\frac{d}{2}=0{,}5\\,\\mathrm{mm}\\). Erreur classique : utiliser \\(d\\) au lieu de \\(r\\) (facteur 4)."},
   {c:2,q:"Si type \\(N,\\,\\allowbreak N_{D}=10^{16}\\,\\mathrm{cm}^{-3},\\,\\allowbreak n_{i}=1{,}5\\cdot 10^{10}\\,\\mathrm{cm}^{-3}\\). Densité de trous \\(p\\approx\\)",o:["\\(1{,}5\\cdot 10^{10}\\,\\mathrm{cm}^{-3}\\)","\\(10^{16}\\,\\mathrm{cm}^{-3}\\)","\\(2{,}25\\cdot 10^{4}\\,\\mathrm{cm}^{-3}\\)","0"],a:2,e:"\\(p=\\frac{n_{i}^{2}}{N_{D}}=2{,}25\\cdot \\frac{10^{20}}{10^{16}}=2{,}25\\cdot 10^{4}\\,\\mathrm{cm}^{-3}\\) — négligeable devant \\(n\\)."},
   {c:2,q:"Si on multiplie \\(N_{D}\\) par 10, la barrière \\(V_{0}\\) :",o:["est multipliée par 10","augmente d'environ \\(60\\,\\mathrm{mV}\\)","diminue","ne change pas"],a:1,e:"\\(V_{0}=\\left(\\frac{kT}{e}\\right)\\cdot \\ln \\left(N_{A}\\,\\frac{N_{D}}{n_{i}^{2}}\\right)\\colon \\times 10\\) dans le \\(\\ln \\Longrightarrow +26\\,\\mathrm{mV}\\,\\times \\,\\ln \\,10\\approx +60\\,\\mathrm{mV}\\)."},
   {c:3,q:"Source \\(5\\,\\mathrm{V},\\,\\allowbreak R=1\\,\\mathrm{k\\Omega }\\), diode Si en direct. Courant (modèle parfait) :",o:["\\(5\\,\\mathrm{mA}\\)","\\(4{,}3\\,\\mathrm{mA}\\)","0","\\(0{,}7\\,\\mathrm{mA}\\)"],a:1,e:"Hypothèse bloquée \\(\\Longrightarrow V_{D}=5\\,\\mathrm{V}\\gt 0{,}7\\) : contradiction ⟹ passante, \\(I=\\frac{5-0{,}7}{1}\\,\\mathrm{k}=4{,}3\\,\\mathrm{mA}\\)."},
   {c:3,q:"Régulateur Zener : \\(V_{i}=12\\,\\mathrm{V},\\,\\allowbreak R=220\\,\\mathrm{\\Omega },\\,\\allowbreak V_{Z}=5{,}1\\,\\mathrm{V}\\). Le courant dans \\(R\\) vaut",o:["\\(54\\,\\mathrm{mA}\\)","\\(31\\,\\mathrm{mA}\\)","\\(23\\,\\mathrm{mA}\\)","\\(12\\,\\mathrm{mA}\\)"],a:1,e:"\\(I_{R}=\\frac{V_{i}-V_{Z}}{R}=\\frac{6{,}9}{220}\\approx 31\\,\\mathrm{mA}\\), constant tant que la Zener régule. La charge en prend une part, la Zener absorbe le reste."},
   {c:4,q:"Polarisation par la base : \\(I_{B}=43\\,\\mu A,\\,\\allowbreak R_{C}=1\\,\\mathrm{k\\Omega },\\,\\allowbreak V_{\\mathrm{CC}}=12\\,\\mathrm{V},\\,\\allowbreak \\beta =300\\). Le transistor est",o:["actif, \\(V_{\\mathrm{CE}}=-0{,}9\\,\\mathrm{V}\\)","saturé, \\(I_{C}\\approx 12\\,\\mathrm{mA}\\)","bloqué","actif, \\(V_{\\mathrm{CE}}=7{,}7\\,\\mathrm{V}\\)"],a:1,e:"\\(\\beta I_{B}=12{,}9\\,\\mathrm{mA}\\gt I_{C,\\,\\mathrm{sat}}=12\\,\\mathrm{mA}\\Longrightarrow\\) saturé : \\(I_{C}\\) plafonne à \\(12\\,\\mathrm{mA},\\,\\allowbreak V_{\\mathrm{CE}}\\approx 0{,}2\\,\\mathrm{V}\\). Un \\(V_{\\mathrm{CE}}\\) négatif calculé signifie « saturé »."},
   {c:4,q:"Pont diviseur : \\(V_{\\mathrm{Th}}=2{,}16\\,\\mathrm{V},\\,\\allowbreak R_{E}=2{,}2\\,\\mathrm{k\\Omega }\\). Le courant d'émetteur vaut environ",o:["\\(0{,}98\\,\\mathrm{mA}\\)","\\(0{,}66\\,\\mathrm{mA}\\)","\\(2{,}16\\,\\mathrm{mA}\\)","\\(0{,}32\\,\\mathrm{mA}\\)"],a:1,e:"\\(V_{E}=2{,}16-0{,}7=1{,}46\\,\\mathrm{V};\\,\\allowbreak I_{E}=\\frac{1{,}46}{2{,}2}\\,\\mathrm{k}\\approx 0{,}66\\,\\mathrm{mA}\\), indépendant de \\(\\beta\\)."},
   {c:5,q:"\\(I_{E}=0{,}66\\,\\mathrm{mA},\\,\\allowbreak R_{C}=3{,}3\\,\\mathrm{k\\Omega },\\,\\allowbreak C_{3}\\) présent. Gain en tension à vide :",o:["−3,3","−84","−1,5","+84"],a:1,e:"\\(r_{E}=\\frac{26}{0{,}66}\\approx 39\\,\\mathrm{\\Omega };\\,\\allowbreak A_{V}=\\frac{-R_{C}}{r_{E}}=\\frac{-3300}{39}\\approx -84\\,(38{,}5\\,\\mathrm{d}B)\\)."},
   {c:5,q:"Même ampli sans le condensateur de découplage \\(C_{3}\\,(R_{E}=2{,}2\\,\\mathrm{k\\Omega })\\) :",o:["\\(A_{V}\\approx -84\\)","\\(A_{V}\\approx -1{,}5\\)","\\(A_{V}\\approx 0\\)","\\(A_{V}\\approx -39\\)"],a:1,e:"\\(A_{V}=\\frac{-R_{C}}{R_{E}+r_{E}}=\\frac{-3300}{2239}\\approx -1{,}5\\). \\(C_{3}\\) multiplie le gain par ~57."},
   {c:5,q:"En schéma AC, la borne \\(V_{\\mathrm{CC}}\\) de \\(R_{C}\\) est reliée à :",o:["l'entrée","la masse","le collecteur","rien (ouvert)"],a:1,e:"Une source DC a une impédance nulle : en petit signal, \\(V_{\\mathrm{CC}}\\) est à la masse. \\(R_{C}\\) et \\(R_{1}\\) vont donc à la masse."},
   {c:6,q:"JFET autopolarisé : le second degré donne \\(I_{D}=19\\,\\mathrm{mA}\\) ou \\(3{,}4\\,\\mathrm{mA}\\), avec \\(I_{\\mathrm{DSS}}=10\\,\\mathrm{mA}\\). On garde",o:["\\(19\\,\\mathrm{mA}\\)","\\(3{,}4\\,\\mathrm{mA}\\)","les deux","aucune"],a:1,e:"\\(I_{D}\\) ne peut dépasser \\(I_{\\mathrm{DSS}}\\) et \\(V_{\\mathrm{GS}}\\) doit rester entre \\(V_{\\mathrm{GS},\\,\\mathrm{off}}\\) et 0 : seule \\(3{,}4\\,\\mathrm{mA}\\) est physique."},
   {c:6,q:"\\(N\\)-MOS, \\(V_{T}=1\\,\\mathrm{V},\\,\\allowbreak V_{\\mathrm{GS}}=3\\,\\mathrm{V}\\). Avec \\(R_{D}\\) on calcule \\(V_{\\mathrm{DS}}=-10\\,\\mathrm{V}\\). Conclusion :",o:["le transistor est bloqué","il est saturé","l'hypothèse « saturé » est fausse : région ohmique","erreur d'énoncé"],a:2,e:"\\(V_{\\mathrm{DS}}\\) négatif est impossible : le canal n'est pas pincé, le MOS est en région ohmique (interrupteur fermé), \\(V_{\\mathrm{DS}}\\) petit."},
   {c:7,q:"Réseau PDN de \\(Y=\\overline{(A\\cdot B+C)}\\) :",o:["\\(A//B\\), en série avec \\(C\\)","(\\(A\\) série \\(B\\)) // \\(C\\)","\\(A\\) série \\(B\\) série \\(C\\)","\\(A//B//C\\)"],a:1,e:"\\(\\bar{Y}=A\\cdot B+C\\Longrightarrow\\) « · » série, « + » parallèle : (nMOS_A série nMOS_B) en parallèle avec nMOS_C."},
   {c:7,q:"Combien de transistors pour \\(Y=\\overline{(A\\cdot B+C)}\\) en CMOS ?",o:["3","4","6","8"],a:2,e:"3 entrées \\(\\Longrightarrow 3\\) nMOS + 3 pMOS = 6. \\(Y=A\\cdot B+C\\) sans barre demanderait un inverseur en plus (8)."},
   {c:7,q:"Inverseur : \\(\\tau =100\\,\\mathrm{ps}\\). Une NAND3 (3 nMOS en série) a un délai de descente d'environ",o:["\\(100\\,\\mathrm{ps}\\)","\\(300\\,\\mathrm{ps}\\)","\\(450\\,\\mathrm{ps}\\)","\\(900\\,\\mathrm{ps}\\)"],a:2,e:"Elmore : \\(\\left(\\frac{n^{2}}{2}\\right)\\cdot R_{C}=4{,}5\\,\\times \\,(R_{N}\\,C)=4{,}5\\,\\times \\,100\\,\\mathrm{ps}=450\\,\\mathrm{ps}\\). Le délai croît comme \\(n^{2}\\)."},
  ];
  var FLASH=[
   {c:0,q:"Théorème pour un potentiel direct connaissant tous les composants d'un nœud ?",a:"Millman : \\(V=\\left(\\sum \\frac{V_{k}}{R_{k}}+\\sum i_{k}\\right)\\,/\\,\\left(\\sum \\frac{1}{R_{k}}\\right)\\)."},
   {c:0,q:"Comment neutraliser les sources pour un calcul de \\(R\\) équivalente ?",a:"Source de tension → fil ; source de courant → circuit ouvert."},
   {c:0,q:"Régime linéaire d'un AOP idéal : conditions ?",a:"Contre-réaction \\(\\Longrightarrow V_{+}=V_{-}\\) et \\(i\\pm =0\\)."},
   {c:0,q:"Gains des montages inverseur / non-inverseur ?",a:"\\(\\frac{-R_{f}}{R_{1}};\\,\\allowbreak 1+\\frac{R_{f}}{R_{1}}\\)."},
   {c:1,q:"Loi d'Ohm locale et conductivité ?",a:"\\(j=\\gamma \\cdot E\\), avec \\(\\gamma =n\\cdot e^{2}\\cdot \\frac{\\tau }{m}\\)."},
   {c:1,q:"Résistance géométrique d'un conducteur ?",a:"\\(R=\\rho \\cdot \\frac{\\ell }{S}\\), avec \\(\\rho =\\frac{1}{\\gamma }\\)."},
   {c:1,q:"Capacité d'un condensateur plan et relation \\(i(u)\\) ?",a:"\\(C=\\varepsilon \\cdot \\frac{S}{d};\\,\\allowbreak i=C\\cdot \\frac{\\mathrm{d}u}{\\mathrm{d}t}\\)."},
   {c:1,q:"Effet de la température sur \\(R\\) d'un conducteur ?",a:"\\(R\\) augmente (loi de Matthiessen : \\(\\rho =\\rho _{0}(1+\\alpha \\Delta T)\\))."},
   {c:2,q:"Loi d'action de masse ?",a:"\\(n\\cdot p=n_{i}^{2}\\)."},
   {c:2,q:"Dopage \\(N\\) : valeurs de \\(n\\) et \\(p\\) ?",a:"\\(n\\approx N_{D};\\,\\allowbreak p=\\frac{n_{i}^{2}}{N_{D}}\\)."},
   {c:2,q:"Barrière de potentiel d'une jonction PN ?",a:"\\(V_{0}=\\left(k_{B}\\cdot \\frac{T}{e}\\right)\\cdot \\ln (N_{A}\\cdot N_{D}\\,/\\,n_{i}^{2})\\)."},
   {c:2,q:"Relation d'Einstein ?",a:"\\(\\frac{D}{\\mu }=k_{B}\\cdot \\frac{T}{q}\\approx 26\\,\\mathrm{mV}\\) à \\(300\\,\\mathrm{K}\\)."},
   {c:3,q:"Tension de seuil Si / Ge ?",a:"\\(0{,}7\\,\\mathrm{V}\\) (silicium) / \\(0{,}3\\,\\mathrm{V}\\) (germanium)."},
   {c:3,q:"Modèle réel d'une diode passante ?",a:"\\(V_{D}=V_{S}+r\\cdot I_{D}\\)."},
   {c:3,q:"Que fait le pont de Graëtz ?",a:"Redressement double alternance (4 diodes)."},
   {c:3,q:"Rôle d'une diode Zener ?",a:"Régulateur : en inverse, \\(V_{D}=-V_{Z}\\approx\\) constant."},
   {c:4,q:"Relations de courant du BJT ?",a:"\\(i_{C}=\\beta \\cdot i_{B};\\,\\allowbreak i_{E}=i_{B}+i_{C};\\,\\allowbreak \\alpha \\approx 1\\)."},
   {c:4,q:"Conditions de saturation (Si) ?",a:"\\(V_{\\mathrm{BE}}=0{,}7\\,\\mathrm{V}\\) et \\(V_{\\mathrm{CE}}\\lt 0{,}2\\,\\mathrm{V}\\)."},
   {c:4,q:"\\(i_{C,\\,\\mathrm{sat}}\\) en montage émetteur commun ?",a:"\\(i_{C,\\,\\mathrm{sat}}=V_{\\mathrm{CC}}\\,/\\,R_{C}\\) (à \\(V_{\\mathrm{CE}}\\approx 0\\))."},
   {c:4,q:"Pourquoi polariser par pont / émetteur ?",a:"C'est \\(\\beta\\)-indépendant → point \\(Q\\) stable en température."},
   {c:5,q:"Résistance dynamique d'émetteur ?",a:"\\(r_{E}=26\\,\\mathrm{mV}\\,/\\,I_{E}\\)."},
   {c:5,q:"Gain d'un émetteur commun (avec \\(C_{3}\\)) ?",a:"\\(A_{V}\\approx -R_{C}\\,/\\,r_{E}\\) (déphasage \\(\\pi\\))."},
   {c:5,q:"Impédance d'entrée de l'émetteur commun ?",a:"\\(Z_{\\mathrm{in}}=R_{1}//R_{2}//(\\beta +1)\\cdot r_{E}\\)."},
   {c:5,q:"Gain d'une paire Darlington ?",a:"\\(\\beta _{D}\\approx \\beta _{1}\\cdot \\beta _{2}\\)."},
   {c:6,q:"JFET : caractéristique de transfert ?",a:"\\(I_{D}=I_{\\mathrm{DSS}}\\cdot \\left(1-\\frac{V_{\\mathrm{GS}}}{V_{\\mathrm{GS},\\,\\mathrm{off}}}\\right)^{2}\\)."},
   {c:6,q:"Définition de la transconductance ?",a:"\\(g_{m}=\\frac{\\mathrm{d}I_{D}}{\\mathrm{d}V_{\\mathrm{GS}}}\\) (en siemens)."},
   {c:6,q:"Gains source commune / drain commun ?",a:"\\(-g_{m}\\cdot R_{D};\\,\\allowbreak \\approx 1\\) (suiveur)."},
   {c:6,q:"MOSFET : condition de conduction ?",a:"\\(V_{\\mathrm{GS}}\\gt V_{T}\\) (formation du canal d'inversion)."},
   {c:7,q:"Réseaux \\(PUN\\,/\\,PDN\\) ?",a:"\\(PUN\\) = pMOS (tire vers 1) ; \\(PDN\\) = nMOS (tire vers 0)."},
   {c:7,q:"Théorème de De Morgan ?",a:"¬\\((A+B)=\\bar{A}\\cdot \\bar{B}\\)  ;  ¬\\((A\\cdot B)=\\bar{A}+\\bar{B}\\)."},
   {c:7,q:"« + » et « · » se traduisent par des MOS… ?",a:"« + » → parallèle ; « · » → série."},
   {c:7,q:"Délai d'une porte CMOS ?",a:"\\(\\tau =(R_{N}+R_{P})\\cdot C_{\\mathrm{OUT}}\\,/\\,2\\)."}
  ];

  var sel=new Set([0,1,2,3,4,5,6,7]), fmt="qcm", ord="chap";
  var pool=[], idx=0, score=0, answered=false;

  var $=function(id){return document.getElementById(id);};
  var setup=$("quizSetup"), run=$("quizRun"), result=$("quizResult"),
      chips=$("chapChips"), cont=$("qContainer");

  /* chips */
  CHNAMES.forEach(function(name,i){
    var b=document.createElement("button");
    b.className="chapchip on"; b.textContent=i+" · "+name;
    b.addEventListener("click",function(){
      if(sel.has(i)){sel.delete(i);b.classList.remove("on");}else{sel.add(i);b.classList.add("on");}
    });
    chips.appendChild(b);
  });
  $("chapAll").addEventListener("click",function(){sel=new Set([0,1,2,3,4,5,6,7]);chips.querySelectorAll(".chapchip").forEach(function(c){c.classList.add("on");});});
  $("chapNone").addEventListener("click",function(){sel.clear();chips.querySelectorAll(".chapchip").forEach(function(c){c.classList.remove("on");});});
  function seg(id,cb){ $(id).querySelectorAll("button").forEach(function(b){ b.addEventListener("click",function(){
    $(id).querySelectorAll("button").forEach(function(x){x.classList.remove("on");}); b.classList.add("on"); cb(b);
  }); }); }
  seg("segFormat",function(b){fmt=b.getAttribute("data-fmt");});
  seg("segOrder",function(b){ord=b.getAttribute("data-ord");});

  function shuffle(a){ for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;} return a; }

  function show(el){ setup.style.display="none"; run.classList.remove("active"); result.classList.remove("show");
    if(el==="run")run.classList.add("active"); else if(el==="result")result.classList.add("show"); else setup.style.display=""; }

  $("quizStart").addEventListener("click",function(){
    if(sel.size===0){ $("quizWarn").style.display="block"; return; }
    $("quizWarn").style.display="none";
    var src=(fmt==="qcm"?QCM:FLASH).filter(function(q){return sel.has(q.c);});
    pool=src.slice(); if(ord==="rand")shuffle(pool); else pool.sort(function(x,y){return x.c-y.c;});
    idx=0; score=0; render(); show("run");
  });

  function rm(el){ if(window.renderMathInElement){ var BS=String.fromCharCode(92); window.renderMathInElement(el,{delimiters:[{left:BS+"(",right:BS+")",display:false}],throwOnError:false,strict:false}); } }
  function render(){
    answered=false;
    var q=pool[idx];
    $("qCount").textContent=(idx+1)+" / "+pool.length;
    $("qProg").style.width=Math.round(idx/pool.length*100)+"%";
    $("qScore").textContent="Score : "+score;
    $("qNext").style.display="none";
    cont.innerHTML="";
    if(fmt==="qcm"){
      var card=document.createElement("div"); card.className="qcard";
      var opts=q.o.map(function(t,i){return {t:t,i:i};});
      var mixed=shuffle(opts.slice());
      var letters=["A","B","C","D","E"];
      var html='<div class="qtag">Chapitre '+q.c+' · '+CHNAMES[q.c]+'</div><div class="qtext">'+q.q+'</div><div class="opts">';
      mixed.forEach(function(op,k){ html+='<button class="opt" data-correct="'+(op.i===q.a?1:0)+'"><span class="mk">'+letters[k]+'</span><span>'+op.t+'</span></button>'; });
      html+='</div><div class="qfeed"><div class="verdict"></div><div class="expl"></div></div>';
      card.innerHTML=html; cont.appendChild(card); rm(card);
      card.querySelectorAll(".opt").forEach(function(btn){
        btn.addEventListener("click",function(){
          if(answered)return; answered=true;
          var good=btn.getAttribute("data-correct")==="1";
          if(good)score++;
          card.querySelectorAll(".opt").forEach(function(b){ b.disabled=true;
            if(b.getAttribute("data-correct")==="1")b.classList.add("correct"); });
          if(!good)btn.classList.add("wrong");
          var fb=card.querySelector(".qfeed"); fb.classList.add("show",good?"ok":"no");
          fb.querySelector(".verdict").textContent=good?"✓ Correct":"✗ Incorrect";
          fb.querySelector(".expl").textContent=q.e; rm(fb);
          $("qScore").textContent="Score : "+score;
          $("qNext").style.display="";
        });
      });
    } else {
      var f=document.createElement("div"); f.className="flash";
      f.innerHTML='<div class="fside">Question · Ch. '+q.c+'</div><div class="fq">'+q.q+'</div><div class="tap">Cliquez pour révéler la réponse</div>';
      var flipped=false;
      f.addEventListener("click",function(){ if(flipped)return; flipped=true;
        f.innerHTML='<div class="fside">Réponse</div><div class="fa">'+q.a+'</div>'; rm(f);
        $("qNext").style.display="";
      });
      cont.appendChild(f); rm(f);
    }
  }

  $("qNext").addEventListener("click",function(){
    idx++;
    if(idx>=pool.length){ finish(); } else { render(); }
  });
  $("qQuit").addEventListener("click",function(){ show("setup"); });

  function finish(){
    show("result");
    if(fmt==="qcm"){
      var pct=Math.round(score/pool.length*100);
      $("rScore").textContent=pct+"%";
      $("rMsg").textContent=score+" bonnes réponses sur "+pool.length+" — "+
        (pct>=80?"excellent, tu es prêt·e !":pct>=50?"bien, encore quelques révisions ciblées.":"à retravailler : reprends les chapitres concernés.");
    } else {
      $("rScore").textContent="✓";
      $("rMsg").textContent="Série de "+pool.length+" flashcards terminée. Relance pour t'auto-évaluer.";
    }
  }
  $("rRetry").addEventListener("click",function(){ if(ord==="rand")shuffle(pool); idx=0;score=0;render();show("run"); });
  $("rBack").addEventListener("click",function(){ show("setup"); });
})();
