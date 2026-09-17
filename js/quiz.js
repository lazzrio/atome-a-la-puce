/* ================= QUIZ & FLASHCARDS ================= */
(function(){
  "use strict";
  var CHNAMES=["Révisions ING1","Conducteurs","Semi-conducteurs","La diode","BJT statique","BJT dynamique","Le FET","Logique CMOS"];
  var QCM=[
   {c:0,q:"Quel théorème donne directement un potentiel connaissant tous les composants reliés à un nœud ?",o:["Millman","Norton","Superposition","Thévenin"],a:0,e:"Millman : V = (ΣVk/Rk + Σik) / (Σ1/Rk)."},
   {c:0,q:"Pour neutraliser une source de courant idéale, on la remplace par :",o:["un fil (court-circuit)","un trou (circuit ouvert)","une résistance","une source de tension"],a:1,e:"Source de courant → circuit ouvert ; source de tension → fil."},
   {c:0,q:"Quel lien entre les résistances de Thévenin et de Norton ?",o:["R_N = R_Th","R_N = 1/R_Th","R_N = 2·R_Th","aucun lien"],a:0,e:"Les résistances équivalentes sont identiques : R_N = R_Th."},
   {c:0,q:"Un AOP idéal en régime linéaire vérifie :",o:["V+ = V− et i± = 0","V+ = 0 uniquement","i± = ∞","Vout = ±Vsat"],a:0,e:"Contre-réaction ⟹ V_d = 0, donc V+ = V−, et courants d'entrée nuls."},
   {c:0,q:"Le montage suiveur sert surtout à :",o:["amplifier fortement","inverser le signal","adapter les impédances","filtrer"],a:2,e:"Gain 1 mais Z_in infinie : il prélève une tension sans la perturber."},
   {c:0,q:"Tension de sortie d'un montage inverseur (R1 en entrée, Rf en réaction) :",o:["(1+Rf/R1)·Vin","−(Rf/R1)·Vin","−(R1/Rf)·Vin","(Rf/R1)·Vin"],a:1,e:"Inverseur : Vout = −(Rf/R1)·Vin."},

   {c:1,q:"La loi d'Ohm locale s'écrit :",o:["u = R·i","j = γ·E","P = U·I","q = C·u"],a:1,e:"j = γ·E est la forme microscopique de la loi d'Ohm."},
   {c:1,q:"Pour un conducteur, si la température augmente :",o:["R augmente","R diminue","R est constante","R s'annule"],a:0,e:"L'agitation thermique réduit la mobilité → ρ ↑ (loi de Matthiessen)."},
   {c:1,q:"La résistance d'un fil vaut :",o:["ρ·S/ℓ","ρ·ℓ/S","γ·ℓ/S","ℓ/(ρ·S)"],a:1,e:"R = ρ·ℓ/S."},
   {c:1,q:"Rôle d'un condensateur de liaison (couplage) :",o:["bloquer la composante continue","stocker de l'énergie longtemps","augmenter la tension","limiter le courant"],a:0,e:"En série, il ne laisse passer que l'alternatif (bloque l'offset)."},
   {c:1,q:"Relation courant/tension d'un condensateur :",o:["i = C·du/dt","i = u/C","i = C·u","i = C·dt/du"],a:0,e:"i = C·du/dt."},
   {c:1,q:"Un composant actif :",o:["réduit toujours la puissance","augmente la puissance via une alimentation","ne consomme rien","est toujours une résistance"],a:1,e:"Actif = augmente la puissance grâce à une alim externe (AOP, transistor)."},

   {c:2,q:"La loi d'action de masse s'écrit :",o:["n + p = n_i","n·p = n_i²","n/p = n_i","n·p = 2·n_i"],a:1,e:"n·p = n_i² à l'équilibre thermodynamique."},
   {c:2,q:"Un dopant du groupe V (ex. phosphore) est :",o:["accepteur, type P","donneur, type N","neutre","isolant"],a:1,e:"5 électrons de valence → donneur → dopage type N."},
   {c:2,q:"Dans un semi-conducteur, si T augmente, la conductivité :",o:["augmente","diminue","reste constante","s'annule"],a:0,e:"Le nombre de porteurs croît fortement → γ augmente (contraire du conducteur)."},
   {c:2,q:"La zone de charge désertée d'une jonction PN contient :",o:["beaucoup de porteurs mobiles","des ions fixes, sans porteurs mobiles","uniquement des électrons","uniquement des trous"],a:1,e:"Les porteurs se recombinent ; restent les ions fixes → barrière V0."},
   {c:2,q:"Une jonction PN en polarisation directe (P relié au +) est :",o:["bloquante","passante","en claquage","inchangée"],a:1,e:"Vp annule V0, la diffusion des majoritaires reprend."},
   {c:2,q:"Type N dopé à N_D : la densité d'électrons n ≈ :",o:["n_i","N_A","N_D","n_i²/N_D"],a:2,e:"n ≈ N_D ; p = n_i²/N_D."},

   {c:3,q:"Tension de seuil d'une diode au silicium :",o:["0,3 V","0,7 V","1,1 V","0 V"],a:1,e:"Si : 0,7 V ; Ge : 0,3 V."},
   {c:3,q:"Le pont de Graëtz réalise :",o:["un redressement simple alternance","un redressement double alternance","un écrêtage","une régulation"],a:1,e:"4 diodes → les deux alternances sont redressées."},
   {c:3,q:"Une diode Zener régulatrice fonctionne :",o:["en direct","en inverse dans la zone Zener","bloquée","en avalanche destructive"],a:1,e:"En inverse : V_D = −V_Z quasi constant."},
   {c:3,q:"La diode de roue libre protège contre :",o:["les surtensions d'une charge inductive","les courts-circuits","la surchauffe","les inversions de polarité"],a:0,e:"Elle assure la continuité du courant dans L (u_L = L·di/dt)."},
   {c:3,q:"Pour déterminer l'état d'une diode (modèle parfait) on :",o:["suppose un état et vérifie la cohérence","mesure toujours 0,7 V","la considère toujours passante","ignore la tension de seuil"],a:0,e:"Raisonnement par l'absurde : hypothèse, calcul, vérification."},
   {c:3,q:"La diode Schottky se distingue par :",o:["un seuil élevé","une commutation rapide et un seuil faible","l'émission de lumière","une capacité variable"],a:1,e:"Métal-SC : seuil 0,15–0,45 V, adaptée aux hautes fréquences."},
   {c:3,q:"Dans un régulateur Zener, si R_L devient trop grande :",o:["I_Z diminue","I_Z devient maximal (risque)","V_out s'effondre","la Zener se bloque"],a:1,e:"I_L minimal → I_Z maximal → attention à I_Z,max."},

   {c:4,q:"Relation fondamentale du BJT en mode actif :",o:["i_C = β·i_B","i_B = β·i_C","i_C = i_B","i_E = β·i_C"],a:0,e:"i_C = β·i_B, avec β ≈ 100–200."},
   {c:4,q:"Le transistor (Si) est bloqué si :",o:["V_BE < 0,7 V","V_BE = 0,7 V","V_CE = 0","V_CB > 0"],a:0,e:"La jonction base-émetteur n'est pas passante."},
   {c:4,q:"Le transistor est saturé si :",o:["V_CE > 5 V","V_CE < 0,2 V","i_B = 0","V_BE < 0,7 V"],a:1,e:"Les deux jonctions sont passantes, V_CE ≈ 0."},
   {c:4,q:"Le point de fonctionnement Q est :",o:["l'intersection droite de charge / caractéristique","le maximum de i_C","toujours à V_CE = 0","le seuil de la base"],a:0,e:"Q = intersection de la droite de charge avec I_C = f(V_CE)."},
   {c:4,q:"La polarisation par pont diviseur est avantageuse car :",o:["β-dépendante","β-indépendante et stable","plus simple (1 résistance)","supprime R_E"],a:1,e:"Elle se ramène à la polarisation par l'émetteur : Q stable en température."},
   {c:4,q:"En commutation, pour saturer le transistor il faut :",o:["β·i_B > i_C,sat","i_B = 0","V_BE < 0,7 V","i_C < i_B"],a:0,e:"Le courant de base commandé doit dépasser i_C,sat."},

   {c:5,q:"Résistance dynamique d'émetteur r_E :",o:["26 mV / I_E","I_E / 26 mV","26 Ω fixe","β·I_E"],a:0,e:"r_E = 26 mV / I_E (à 300 K)."},
   {c:5,q:"Gain en tension d'un émetteur commun (avec C3) :",o:["≈ R_C/r_E","≈ −R_C/r_E","≈ r_E/R_C","≈ 1"],a:1,e:"A_V ≈ −R_C/r_E (déphasage de π)."},
   {c:5,q:"Le condensateur de découplage C3 (sur R_E) sert à :",o:["stabiliser Q en continu","augmenter fortement le gain en AC","bloquer l'entrée","filtrer la sortie"],a:1,e:"Il court-circuite R_E en AC → gain ≈ R_C/r_E."},
   {c:5,q:"Impédance de sortie de l'émetteur commun :",o:["r_E","R_C","(β+1)·r_E","R_1//R_2"],a:1,e:"Z_out = R_C."},
   {c:5,q:"Rendement maximal d'un amplificateur de classe B :",o:["25 %","50 %","78,5 %","100 %"],a:2,e:"Classe B : η ≤ 78,5 %."},
   {c:5,q:"Gain en courant d'une paire Darlington :",o:["β1 + β2","β1·β2","β1 − β2","β1/β2"],a:1,e:"β_D ≈ β1·β2."},
   {c:5,q:"L'adaptation d'impédance entre deux étages, c'est :",o:["Z_o1 = Z_i2","Z_o1 = 0","Z_i2 = ∞","Z_o1 ≫ Z_i2"],a:0,e:"Transfert de puissance maximal quand Z_o1 = Z_i2."},

   {c:6,q:"Le transistor à effet de champ (FET) est commandé en :",o:["courant","tension","puissance","fréquence"],a:1,e:"Effet de champ : commandé par la tension V_GS."},
   {c:6,q:"Le courant de grille d'un JFET/MOSFET est :",o:["≈ 0","= i_D","= β·i_B","élevé"],a:0,e:"I_G ≈ 0 → impédance d'entrée énorme."},
   {c:6,q:"La caractéristique de transfert du JFET est :",o:["linéaire","quadratique","exponentielle","logarithmique"],a:1,e:"I_D = I_DSS·(1 − V_GS/V_GS,off)²."},
   {c:6,q:"La transconductance g_m vaut :",o:["dV_GS/dI_D","dI_D/dV_GS","I_D/V_DS","V_GS/I_D"],a:1,e:"g_m = dI_D/dV_GS, en siemens."},
   {c:6,q:"Dans un MOSFET, le canal conducteur s'appelle :",o:["zone désertée","canal d'inversion","jonction","barrière"],a:1,e:"Canal d'inversion sous SiO₂, formé au-delà de V_T."},
   {c:6,q:"Gain d'un amplificateur source commune :",o:["≈ 1","−g_m·R_D","g_m/R_D","−R_D/g_m"],a:1,e:"A_V = −g_m·R_D."},
   {c:6,q:"Le MOSFET est bloqué si :",o:["V_GS < V_T","V_GS > V_T","V_DS > 0","V_DS < 0"],a:0,e:"En dessous du seuil V_T, pas de canal d'inversion."},

   {c:7,q:"Dans une porte CMOS, le réseau pMOS (PUN) :",o:["tire la sortie vers 0","tire la sortie vers 1","est relié à GND","conduit toujours"],a:1,e:"Les pMOS, reliés à V_DD, tirent la sortie vers 1."},
   {c:7,q:"Avantage majeur de la logique CMOS :",o:["plus rapide que la TTL","consommation statique quasi-nulle","pas besoin d'alimentation","insensible au dopage"],a:1,e:"Au repos, toujours un interrupteur ouvert entre V_DD et la masse."},
   {c:7,q:"Théorème de De Morgan :",o:["¬(A+B) = ¬A·¬B","¬(A+B) = ¬A+¬B","¬(A·B) = ¬A·¬B","A+B = A·B"],a:0,e:"¬(A+B) = Ā·B̄ et ¬(A·B) = Ā+B̄."},
   {c:7,q:"Un opérateur « · » (ET) se traduit par des MOS :",o:["en parallèle","en série","en pont","déconnectés"],a:1,e:"« · » → série ; « + » → parallèle."},
   {c:7,q:"Le délai d'une porte CMOS (modèle RC) :",o:["R_N·R_P·C","(R_N+R_P)·C_OUT/2","C_OUT/R","R/C_OUT"],a:1,e:"τ = (R_N + R_P)·C_OUT / 2."},
   {c:7,q:"Miniaturiser (diminuer L) permet de :",o:["ralentir le circuit","augmenter la fréquence","augmenter la conso statique","réduire I_DS"],a:1,e:"I_DS ∝ W/L : L diminue → commutation plus rapide."},
   /* ---- Méthodes & déroulés (ajout) ---- */
   {c:0,q:"Pont diviseur 12 V, R1 = 4 kΩ, R2 = 8 kΩ, charge 8 kΩ sur R2. Tension aux bornes de la charge :",o:["8 V","6 V","4 V","12 V"],a:1,e:"Thévenin : V_Th = 8 V, R_Th = 4//8 = 2,67 kΩ ; V_L = 8·8/(2,67+8) = 6 V. Le diviseur « nu » (8 V) est faux car la charge tire du courant."},
   {c:0,q:"Non-inverseur avec R1 = 1 kΩ, Rf = 9 kΩ : gain en dB ?",o:["9 dB","10 dB","19 dB","20 dB"],a:3,e:"A = 1 + Rf/R1 = 10 ⟹ 20·log(10) = 20 dB."},
   {c:1,q:"Fil de diamètre 1 mm : sa section vaut",o:["π·10⁻⁶ m²","π·(0,5·10⁻³)² ≈ 7,85·10⁻⁷ m²","10⁻⁶ m²","π·10⁻³ m²"],a:1,e:"S = πr² avec r = d/2 = 0,5 mm. Erreur classique : utiliser d au lieu de r (facteur 4)."},
   {c:2,q:"Si type N, N_D = 10¹⁶ cm⁻³, n_i = 1,5·10¹⁰ cm⁻³. Densité de trous p ≈",o:["1,5·10¹⁰ cm⁻³","10¹⁶ cm⁻³","2,25·10⁴ cm⁻³","0"],a:2,e:"p = n_i²/N_D = 2,25·10²⁰/10¹⁶ = 2,25·10⁴ cm⁻³ — négligeable devant n."},
   {c:2,q:"Si on multiplie N_D par 10, la barrière V₀ :",o:["est multipliée par 10","augmente d'environ 60 mV","diminue","ne change pas"],a:1,e:"V₀ = (kT/e)·ln(N_A N_D/n_i²) : ×10 dans le ln ⟹ +26 mV × ln 10 ≈ +60 mV."},
   {c:3,q:"Source 5 V, R = 1 kΩ, diode Si en direct. Courant (modèle parfait) :",o:["5 mA","4,3 mA","0","0,7 mA"],a:1,e:"Hypothèse bloquée ⟹ V_D = 5 V > 0,7 : contradiction ⟹ passante, I = (5 − 0,7)/1 k = 4,3 mA."},
   {c:3,q:"Régulateur Zener : V_i = 12 V, R = 220 Ω, V_Z = 5,1 V. Le courant dans R vaut",o:["54 mA","31 mA","23 mA","12 mA"],a:1,e:"I_R = (V_i − V_Z)/R = 6,9/220 ≈ 31 mA, constant tant que la Zener régule. La charge en prend une part, la Zener absorbe le reste."},
   {c:4,q:"Polarisation par la base : I_B = 43 µA, R_C = 1 kΩ, V_CC = 12 V, β = 300. Le transistor est",o:["actif, V_CE = −0,9 V","saturé, I_C ≈ 12 mA","bloqué","actif, V_CE = 7,7 V"],a:1,e:"βI_B = 12,9 mA > I_C,sat = 12 mA ⟹ saturé : I_C plafonne à 12 mA, V_CE ≈ 0,2 V. Un V_CE négatif calculé signifie « saturé »."},
   {c:4,q:"Pont diviseur : V_Th = 2,16 V, R_E = 2,2 kΩ. Le courant d'émetteur vaut environ",o:["0,98 mA","0,66 mA","2,16 mA","0,32 mA"],a:1,e:"V_E = 2,16 − 0,7 = 1,46 V ; I_E = 1,46/2,2 k ≈ 0,66 mA, indépendant de β."},
   {c:5,q:"I_E = 0,66 mA, R_C = 3,3 kΩ, C₃ présent. Gain en tension à vide :",o:["−3,3","−84","−1,5","+84"],a:1,e:"r_E = 26/0,66 ≈ 39 Ω ; A_V = −R_C/r_E = −3300/39 ≈ −84 (38,5 dB)."},
   {c:5,q:"Même ampli sans le condensateur de découplage C₃ (R_E = 2,2 kΩ) :",o:["A_V ≈ −84","A_V ≈ −1,5","A_V ≈ 0","A_V ≈ −39"],a:1,e:"A_V = −R_C/(R_E + r_E) = −3300/2239 ≈ −1,5. C₃ multiplie le gain par ~57."},
   {c:5,q:"En schéma AC, la borne V_CC de R_C est reliée à :",o:["l'entrée","la masse","le collecteur","rien (ouvert)"],a:1,e:"Une source DC a une impédance nulle : en petit signal, V_CC est à la masse. R_C et R₁ vont donc à la masse."},
   {c:6,q:"JFET autopolarisé : le second degré donne I_D = 19 mA ou 3,4 mA, avec I_DSS = 10 mA. On garde",o:["19 mA","3,4 mA","les deux","aucune"],a:1,e:"I_D ne peut dépasser I_DSS et V_GS doit rester entre V_GS,off et 0 : seule 3,4 mA est physique."},
   {c:6,q:"N-MOS, V_T = 1 V, V_GS = 3 V. Avec R_D on calcule V_DS = −10 V. Conclusion :",o:["le transistor est bloqué","il est saturé","l'hypothèse « saturé » est fausse : région ohmique","erreur d'énoncé"],a:2,e:"V_DS négatif est impossible : le canal n'est pas pincé, le MOS est en région ohmique (interrupteur fermé), V_DS petit."},
   {c:7,q:"Réseau PDN de Y = (A·B + C)̄ :",o:["A // B, en série avec C","(A série B) // C","A série B série C","A // B // C"],a:1,e:"Ȳ = A·B + C ⟹ « · » série, « + » parallèle : (nMOS_A série nMOS_B) en parallèle avec nMOS_C."},
   {c:7,q:"Combien de transistors pour Y = (A·B + C)̄ en CMOS ?",o:["3","4","6","8"],a:2,e:"3 entrées ⟹ 3 nMOS + 3 pMOS = 6. Y = A·B + C sans barre demanderait un inverseur en plus (8)."},
   {c:7,q:"Inverseur : τ = 100 ps. Une NAND3 (3 nMOS en série) a un délai de descente d'environ",o:["100 ps","300 ps","450 ps","900 ps"],a:2,e:"Elmore : (n²/2)·RC = 4,5 × (R_N C) = 4,5 × 100 ps = 450 ps. Le délai croît comme n²."},
  ];
  var FLASH=[
   {c:0,q:"Théorème pour un potentiel direct connaissant tous les composants d'un nœud ?",a:"Millman : V = (ΣVk/Rk + Σik) / (Σ1/Rk)."},
   {c:0,q:"Comment neutraliser les sources pour un calcul de R équivalente ?",a:"Source de tension → fil ; source de courant → circuit ouvert."},
   {c:0,q:"Régime linéaire d'un AOP idéal : conditions ?",a:"Contre-réaction ⟹ V+ = V− et i± = 0."},
   {c:0,q:"Gains des montages inverseur / non-inverseur ?",a:"−Rf/R1  ;  1 + Rf/R1."},
   {c:1,q:"Loi d'Ohm locale et conductivité ?",a:"j = γ·E, avec γ = n·e²·τ/m."},
   {c:1,q:"Résistance géométrique d'un conducteur ?",a:"R = ρ·ℓ/S, avec ρ = 1/γ."},
   {c:1,q:"Capacité d'un condensateur plan et relation i(u) ?",a:"C = ε·S/d  ;  i = C·du/dt."},
   {c:1,q:"Effet de la température sur R d'un conducteur ?",a:"R augmente (loi de Matthiessen : ρ = ρ0(1+αΔT))."},
   {c:2,q:"Loi d'action de masse ?",a:"n·p = n_i²."},
   {c:2,q:"Dopage N : valeurs de n et p ?",a:"n ≈ N_D  ;  p = n_i²/N_D."},
   {c:2,q:"Barrière de potentiel d'une jonction PN ?",a:"V0 = (k_B·T/e)·ln(N_A·N_D / n_i²)."},
   {c:2,q:"Relation d'Einstein ?",a:"D/μ = k_B·T/q ≈ 26 mV à 300 K."},
   {c:3,q:"Tension de seuil Si / Ge ?",a:"0,7 V (silicium) / 0,3 V (germanium)."},
   {c:3,q:"Modèle réel d'une diode passante ?",a:"V_D = V_S + r·I_D."},
   {c:3,q:"Que fait le pont de Graëtz ?",a:"Redressement double alternance (4 diodes)."},
   {c:3,q:"Rôle d'une diode Zener ?",a:"Régulateur : en inverse, V_D = −V_Z ≈ constant."},
   {c:4,q:"Relations de courant du BJT ?",a:"i_C = β·i_B  ;  i_E = i_B + i_C  ;  α ≈ 1."},
   {c:4,q:"Conditions de saturation (Si) ?",a:"V_BE = 0,7 V et V_CE < 0,2 V."},
   {c:4,q:"i_C,sat en montage émetteur commun ?",a:"i_C,sat = V_CC / R_C (à V_CE ≈ 0)."},
   {c:4,q:"Pourquoi polariser par pont / émetteur ?",a:"C'est β-indépendant → point Q stable en température."},
   {c:5,q:"Résistance dynamique d'émetteur ?",a:"r_E = 26 mV / I_E."},
   {c:5,q:"Gain d'un émetteur commun (avec C3) ?",a:"A_V ≈ −R_C / r_E (déphasage π)."},
   {c:5,q:"Impédance d'entrée de l'émetteur commun ?",a:"Z_in = R_1 // R_2 // (β+1)·r_E."},
   {c:5,q:"Gain d'une paire Darlington ?",a:"β_D ≈ β1·β2."},
   {c:6,q:"JFET : caractéristique de transfert ?",a:"I_D = I_DSS·(1 − V_GS/V_GS,off)²."},
   {c:6,q:"Définition de la transconductance ?",a:"g_m = dI_D/dV_GS (en siemens)."},
   {c:6,q:"Gains source commune / drain commun ?",a:"−g_m·R_D  ;  ≈ 1 (suiveur)."},
   {c:6,q:"MOSFET : condition de conduction ?",a:"V_GS > V_T (formation du canal d'inversion)."},
   {c:7,q:"Réseaux PUN / PDN ?",a:"PUN = pMOS (tire vers 1) ; PDN = nMOS (tire vers 0)."},
   {c:7,q:"Théorème de De Morgan ?",a:"¬(A+B) = Ā·B̄  ;  ¬(A·B) = Ā+B̄."},
   {c:7,q:"« + » et « · » se traduisent par des MOS… ?",a:"« + » → parallèle ; « · » → série."},
   {c:7,q:"Délai d'une porte CMOS ?",a:"τ = (R_N + R_P)·C_OUT / 2."}
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
      card.innerHTML=html; cont.appendChild(card);
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
          fb.querySelector(".expl").textContent=q.e;
          $("qScore").textContent="Score : "+score;
          $("qNext").style.display="";
        });
      });
    } else {
      var f=document.createElement("div"); f.className="flash";
      f.innerHTML='<div class="fside">Question · Ch. '+q.c+'</div><div class="fq">'+q.q+'</div><div class="tap">Cliquez pour révéler la réponse</div>';
      var flipped=false;
      f.addEventListener("click",function(){ if(flipped)return; flipped=true;
        f.innerHTML='<div class="fside">Réponse</div><div class="fa">'+q.a+'</div>';
        $("qNext").style.display="";
      });
      cont.appendChild(f);
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
