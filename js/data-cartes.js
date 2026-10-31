/* Flashcards QCM : formules (f) et constantes / valeurs à connaître (k), par chapitre (0 à 7).
   Carte : C(chapitre, type, question, bonne réponse, [3 mauvaises réponses], explication). */
(function () {
  "use strict";
  var r = String.raw;
  var L = [];
  function C(c, t, q, a, d, e) { L.push({ c: c, t: t, q: q, a: a, d: d, e: e || "" }); }

  /* ===================== CH0 ===================== */
  C(0, "f", r`Diviseur de tension : tension aux bornes de \(R_2\) (\(R_1\) et \(R_2\) en série, alimentées par \(V_s\)) ?`,
    r`\(V_2=\dfrac{R_2}{R_1+R_2}V_s\)`, [r`\(V_2=\dfrac{R_1}{R_1+R_2}V_s\)`, r`\(V_2=\dfrac{R_1+R_2}{R_2}V_s\)`, r`\(V_2=\dfrac{R_1R_2}{R_1+R_2}V_s\)`],
    r`La plus grande part de tension est aux bornes de la plus grande résistance. Condition : aucun courant ne sort du point milieu.`);
  C(0, "f", r`Diviseur de courant : courant dans \(R_2\) (\(R_1\) et \(R_2\) en parallèle, courant total \(i_0\)) ?`,
    r`\(i_2=\dfrac{R_1}{R_1+R_2}i_0\)`, [r`\(i_2=\dfrac{R_2}{R_1+R_2}i_0\)`, r`\(i_2=\dfrac{R_1+R_2}{R_1}i_0\)`, r`\(i_2=\dfrac{R_1R_2}{R_1+R_2}i_0\)`],
    r`C'est l'<em>autre</em> résistance qui est au numérateur : la plus petite résistance prend le plus de courant.`);
  C(0, "f", r`Deux résistances en parallèle : \(R_1\parallel R_2=\) ?`,
    r`\(\dfrac{R_1R_2}{R_1+R_2}\)`, [r`\(R_1+R_2\)`, r`\(\dfrac{R_1+R_2}{R_1R_2}\)`, r`\(\dfrac{R_1+R_2}{2}\)`],
    r`Toujours plus petite que la plus petite des deux.`);
  C(0, "f", r`Loi d'Ohm en potentiels, pour un courant \(i\) allant de \(A\) vers \(B\) dans \(R\) :`,
    r`\(i=\dfrac{V_A-V_B}{R}\)`, [r`\(i=\dfrac{V_B-V_A}{R}\)`, r`\(i=\dfrac{V_A+V_B}{R}\)`, r`\(i=R\,(V_A-V_B)\)`], r`Le courant va du potentiel haut vers le potentiel bas.`);
  C(0, "f", r`Théorème de Millman : potentiel d'un nœud \(A\) relié à des sources \(V_k\) par des résistances \(R_k\) ?`,
    r`\(V_A=\dfrac{\sum V_k/R_k+\sum i_k}{\sum 1/R_k}\)`, [r`\(V_A=\dfrac{\sum V_k\,R_k}{\sum R_k}\)`, r`\(V_A=\dfrac{\sum V_k/R_k}{\sum R_k}\)`, r`\(V_A=\sum\dfrac{V_k}{R_k}\)`],
    r`Une résistance à la masse ajoute \(1/R\) au dénominateur et rien au numérateur.`);
  C(0, "f", r`Équivalence Thévenin \(\leftrightarrow\) Norton :`,
    r`\(R_N=R_{Th}\) et \(i_N=\dfrac{V_{Th}}{R_{Th}}\)`, [r`\(R_N=\dfrac{1}{R_{Th}}\) et \(i_N=V_{Th}R_{Th}\)`, r`\(R_N=2R_{Th}\) et \(i_N=\dfrac{V_{Th}}{R_{Th}}\)`, r`\(R_N=R_{Th}\) et \(i_N=V_{Th}\,R_{Th}\)`],
    r`\(V_{Th}\) : tension à vide ; \(i_N\) : courant de court-circuit ; \(R_{Th}\) : résistance vue sources neutralisées.`);
  C(0, "f", r`Neutraliser des sources (pour \(R_{Th}\) ou la superposition) : source de tension \(\to\) ? source de courant \(\to\) ?`,
    r`tension \(\to\) fil (court-circuit) ; courant \(\to\) circuit ouvert`, [r`tension \(\to\) circuit ouvert ; courant \(\to\) fil`, r`les deux \(\to\) fil`, r`les deux \(\to\) circuit ouvert`], r``);
  C(0, "f", r`AOP idéal en régime linéaire :`,
    r`\(V_+=V_-\) et \(i_+=i_-=0\)`, [r`\(V_+=0\) et \(i_+=i_-=\infty\)`, r`\(V_{out}=\pm V_{sat}\) et \(i_\pm=0\)`, r`\(V_+=-V_-\) et \(i_\pm\ne0\)`],
    r`Condition : contre-réaction sur l'entrée \(-\). Sans elle (comparateur) : \(V_{out}=\pm V_{sat}\).`);
  C(0, "f", r`AOP inverseur (\(R_1\) en entrée, \(R_f\) en réaction) :`,
    r`\(V_{out}=-\dfrac{R_f}{R_1}V_{in}\)`, [r`\(V_{out}=\left(1+\dfrac{R_f}{R_1}\right)V_{in}\)`, r`\(V_{out}=-\dfrac{R_1}{R_f}V_{in}\)`, r`\(V_{out}=\dfrac{R_f}{R_1}V_{in}\)`], r``);
  C(0, "f", r`AOP non inverseur :`,
    r`\(V_{out}=\left(1+\dfrac{R_f}{R_1}\right)V_{in}\)`, [r`\(V_{out}=-\dfrac{R_f}{R_1}V_{in}\)`, r`\(V_{out}=\dfrac{R_f}{R_1}V_{in}\)`, r`\(V_{out}=\left(1-\dfrac{R_f}{R_1}\right)V_{in}\)`], r`Gain \(\ge1\). Suiveur : \(R_f=0\), \(V_{out}=V_{in}\).`);
  C(0, "f", r`AOP sommateur inverseur à deux entrées :`,
    r`\(V_{out}=-R_f\left(\dfrac{V_1}{R_1}+\dfrac{V_2}{R_2}\right)\)`, [r`\(V_{out}=R_f\left(\dfrac{V_1}{R_1}+\dfrac{V_2}{R_2}\right)\)`, r`\(V_{out}=-\dfrac{R_f}{R_1+R_2}(V_1+V_2)\)`, r`\(V_{out}=-R_f\,(V_1R_1+V_2R_2)\)`], r``);
  C(0, "f", r`Puissance dissipée dans une résistance :`,
    r`\(P=u\,i=R\,i^2=\dfrac{u^2}{R}\)`, [r`\(P=\dfrac{R}{i^2}\)`, r`\(P=R^2\,i\)`, r`\(P=\dfrac{u}{R^2}\)`], r`En watts.`);

  /* ===================== CH1 ===================== */
  C(1, "f", r`Vitesse de dérive d'un électron sous un champ \(\vec E\) :`,
    r`\(\vec v=-\mu\vec E\)`, [r`\(\vec v=+\mu\vec E\)`, r`\(\vec v=-\dfrac{\vec E}{\mu}\)`, r`\(\vec v=-\mu^2\vec E\)`], r`Charge \(-e\) : sens opposé au champ.`);
  C(1, "f", r`Mobilité dans le modèle de Drude :`,
    r`\(\mu=\dfrac{e\,\tau}{m}\)`, [r`\(\mu=\dfrac{m\,\tau}{e}\)`, r`\(\mu=\dfrac{e\,m}{\tau}\)`, r`\(\mu=\dfrac{\tau}{e\,m}\)`], r`En \(\mathrm{m^2\,V^{-1}\,s^{-1}}\).`);
  C(1, "f", r`Loi d'Ohm locale et conductivité :`,
    r`\(\vec j=\gamma\vec E\) avec \(\gamma=\dfrac{ne^2\tau}{m}\)`, [r`\(\vec j=\gamma\vec E\) avec \(\gamma=\dfrac{ne\tau}{m}\)`, r`\(\vec j=\dfrac{\vec E}{\gamma}\) avec \(\gamma=\dfrac{ne^2\tau}{m}\)`, r`\(\vec j=\gamma\vec E\) avec \(\gamma=\dfrac{ne^2m}{\tau}\)`], r``);
  C(1, "f", r`Densité de courant et courant dans une section \(S\) :`,
    r`\(j=\dfrac{i}{S}\)`, [r`\(j=i\,S\)`, r`\(j=\dfrac{S}{i}\)`, r`\(j=\dfrac{i}{S^2}\)`], r`\(j\) en \(\mathrm{A/m^2}\) ; \(1\ \mathrm{mm^2}=10^{-6}\ \mathrm{m^2}\).`);
  C(1, "f", r`Densité de courant et vitesse de dérive :`,
    r`\(j=-n\,e\,v\)`, [r`\(j=-\dfrac{n\,e}{v}\)`, r`\(j=-n\,e\,v^2\)`, r`\(j=-\dfrac{e\,v}{n}\)`], r`Donc \(v=\dfrac{j}{ne}\) en valeur absolue.`);
  C(1, "f", r`Résistance d'un conducteur de longueur \(\ell\) et de section \(S\) :`,
    r`\(R=\rho\dfrac{\ell}{S}\)`, [r`\(R=\rho\dfrac{S}{\ell}\)`, r`\(R=\dfrac{\ell}{\rho\,S}\)`, r`\(R=\rho\,\ell\,S\)`], r`Avec \(\rho=\dfrac1\gamma\) en \(\Omega\cdot\mathrm m\).`);
  C(1, "f", r`Résistivité en fonction de la température (loi de Matthiessen) :`,
    r`\(\rho(T)=\rho_0\,[1+\alpha\,(T-T_0)]\)`, [r`\(\rho(T)=\rho_0\,[1-\alpha\,(T-T_0)]\)`, r`\(\rho(T)=\rho_0\,\alpha\,(T-T_0)\)`, r`\(\rho(T)=\dfrac{\rho_0}{1+\alpha\,(T-T_0)}\)`], r`Conducteur chaud : \(\rho\) et \(R\) augmentent.`);
  C(1, "f", r`Capacité d'un condensateur plan :`,
    r`\(C=\dfrac{\varepsilon_0\varepsilon_r\,S}{d}\)`, [r`\(C=\dfrac{\varepsilon_0\varepsilon_r\,d}{S}\)`, r`\(C=\varepsilon_0\varepsilon_r\,S\,d\)`, r`\(C=\dfrac{\varepsilon_0\,S}{\varepsilon_r\,d}\)`], r`\(S\) surface des armatures, \(d\) écart.`);
  C(1, "f", r`Relation courant-tension d'un condensateur :`,
    r`\(i=C\dfrac{\mathrm du}{\mathrm dt}\)`, [r`\(u=C\dfrac{\mathrm di}{\mathrm dt}\)`, r`\(i=\dfrac{C}{u}\)`, r`\(i=\dfrac{u}{C}\)`], r``);
  C(1, "f", r`Fréquence de coupure d'un filtre RC :`,
    r`\(f_c=\dfrac{1}{2\pi RC}\)`, [r`\(f_c=2\pi RC\)`, r`\(f_c=\dfrac{1}{RC}\)`, r`\(f_c=\dfrac{1}{2\pi R^2C}\)`], r`En hertz. \(\tau=RC\).`);
  C(1, "f", r`Module de l'impédance d'un condensateur :`,
    r`\(|Z_C|=\dfrac{1}{2\pi f\,C}\)`, [r`\(|Z_C|=2\pi f\,C\)`, r`\(|Z_C|=\dfrac{1}{f\,C}\)`, r`\(|Z_C|=\dfrac{C}{2\pi f}\)`], r`Fil aux hautes fréquences, circuit ouvert en continu.`);
  C(1, "f", r`Énergie stockée dans un condensateur :`,
    r`\(W=\tfrac12\,C\,u^2\)`, [r`\(W=C\,u^2\)`, r`\(W=\tfrac12\,C^2u\)`, r`\(W=C\,u\)`], r``);
  C(1, "f", r`Condensateurs en série :`,
    r`\(\dfrac{1}{C_s}=\dfrac{1}{C_1}+\dfrac{1}{C_2}\)`, [r`\(C_s=C_1+C_2\)`, r`\(C_s=C_1C_2\)`, r`\(C_s=\dfrac{C_1+C_2}{2}\)`], r`En parallèle les capacités s'additionnent.`);
  C(1, "f", r`Un condensateur de couplage (liaison) sert à :`,
    r`bloquer la composante continue`, [r`débruiter l'alimentation`, r`amplifier le signal`, r`stocker de l'énergie longtemps`], r`Le <em>découplage</em> (vers la masse) sert à débruiter.`);
  C(1, "k", r`Charge élémentaire \(e\) ?`, r`\(1{,}6\cdot10^{-19}\ \mathrm C\)`, [r`\(1{,}6\cdot10^{-16}\ \mathrm C\)`, r`\(9{,}1\cdot10^{-19}\ \mathrm C\)`, r`\(6{,}02\cdot10^{-19}\ \mathrm C\)`], r``);
  C(1, "k", r`Masse de l'électron \(m_e\) ?`, r`\(9{,}1\cdot10^{-31}\ \mathrm{kg}\)`, [r`\(1{,}6\cdot10^{-19}\ \mathrm{kg}\)`, r`\(9{,}1\cdot10^{-27}\ \mathrm{kg}\)`, r`\(1{,}67\cdot10^{-27}\ \mathrm{kg}\)`], r``);
  C(1, "k", r`Permittivité du vide \(\varepsilon_0\) ?`, r`\(8{,}85\cdot10^{-12}\ \mathrm{F/m}\)`, [r`\(8{,}85\cdot10^{-9}\ \mathrm{F/m}\)`, r`\(1{,}6\cdot10^{-19}\ \mathrm{F/m}\)`, r`\(8{,}85\cdot10^{12}\ \mathrm{F/m}\)`], r``);
  C(1, "k", r`Temps moyen entre deux collisions d'un électron dans un métal ?`, r`\(\tau\approx3\cdot10^{-14}\ \mathrm s\)`, [r`\(\tau\approx3\cdot10^{-9}\ \mathrm s\)`, r`\(\tau\approx3\cdot10^{-3}\ \mathrm s\)`, r`\(\tau\approx3\cdot10^{-20}\ \mathrm s\)`], r``);
  C(1, "k", r`Ordre de grandeur de la résistivité du cuivre ?`, r`\(1{,}7\cdot10^{-8}\ \Omega\cdot\mathrm m\)`, [r`\(1{,}7\cdot10^{-5}\ \Omega\cdot\mathrm m\)`, r`\(1{,}7\cdot10^{8}\ \Omega\cdot\mathrm m\)`, r`\(1{,}7\cdot10^{-2}\ \Omega\cdot\mathrm m\)`], r`Soit \(1{,}7\ \mu\Omega\cdot\mathrm{cm}\).`);
  C(1, "k", r`Conversion : \(1\ \mu\Omega\cdot\mathrm{cm}=\) ?`, r`\(10^{-8}\ \Omega\cdot\mathrm m\)`, [r`\(10^{-6}\ \Omega\cdot\mathrm m\)`, r`\(10^{-4}\ \Omega\cdot\mathrm m\)`, r`\(10^{-2}\ \Omega\cdot\mathrm m\)`], r``);
  C(1, "k", r`Densité d'électrons libres du cuivre ?`, r`\(\approx8{,}5\cdot10^{28}\ \mathrm{m^{-3}}\)`, [r`\(\approx8{,}5\cdot10^{22}\ \mathrm{m^{-3}}\)`, r`\(\approx8{,}5\cdot10^{10}\ \mathrm{m^{-3}}\)`, r`\(\approx8{,}5\cdot10^{35}\ \mathrm{m^{-3}}\)`], r`Environ \(1\) électron libre par atome.`);
  C(1, "k", r`Ordre de grandeur de la vitesse de dérive dans un fil de cuivre ?`, r`le mm/s ou moins`, [r`le m/s`, r`le km/s`, r`la vitesse de la lumière`], r`Très lente, contrairement à la propagation du champ.`);
  C(1, "k", r`Les condensateurs céramique sont : `, r`non polarisés, petites capacités (\(\le1\ \mu\mathrm F\))`, [r`polarisés, grandes capacités`, r`non polarisés, très grandes capacités`, r`polarisés, petites capacités`], r`Électrolytiques et tantale : polarisés, grandes capacités.`);

  /* ===================== CH2 ===================== */
  C(2, "f", r`Loi d'action de masse :`, r`\(n\,p=n_i^2\)`, [r`\(n+p=n_i\)`, r`\(\dfrac{n}{p}=n_i\)`, r`\(n\,p=2n_i\)`], r`À l'équilibre thermodynamique.`);
  C(2, "f", r`Semi-conducteur de type \(N\) dopé à \(N_D\) :`, r`\(n\approx N_D\) et \(p=\dfrac{n_i^2}{N_D}\)`, [r`\(p\approx N_D\) et \(n=\dfrac{n_i^2}{N_D}\)`, r`\(n=p=N_D\)`, r`\(n\approx n_i\) et \(p=N_D\)`], r``);
  C(2, "f", r`Semi-conducteur de type \(P\) dopé à \(N_A\) :`, r`\(p\approx N_A\) et \(n=\dfrac{n_i^2}{N_A}\)`, [r`\(n\approx N_A\) et \(p=\dfrac{n_i^2}{N_A}\)`, r`\(p=n=N_A\)`, r`\(p\approx n_i\) et \(n=N_A\)`], r``);
  C(2, "f", r`Conductivité d'un semi-conducteur :`, r`\(\gamma=e\,(n\mu_n+p\mu_p)\)`, [r`\(\gamma=\dfrac{e\,(n+p)}{\mu_n+\mu_p}\)`, r`\(\gamma=e\,(n\mu_p+p\mu_n)\)`, r`\(\gamma=e\,n\,p\,\mu\)`], r`Dopé : un seul terme domine.`);
  C(2, "f", r`Nombre d'atomes par unité de volume :`, r`\(\mathcal N_{at}=\dfrac{\rho_v\,\mathcal N_A}{M}\)`, [r`\(\mathcal N_{at}=\dfrac{M\,\mathcal N_A}{\rho_v}\)`, r`\(\mathcal N_{at}=\dfrac{\rho_v\,M}{\mathcal N_A}\)`, r`\(\mathcal N_{at}=\rho_v\,M\,\mathcal N_A\)`], r`\(\rho_v\) masse volumique, \(M\) masse molaire.`);
  C(2, "f", r`Barrière de potentiel d'une jonction PN :`, r`\(V_0=\dfrac{k_BT}{e}\ln\dfrac{N_AN_D}{n_i^2}\)`, [r`\(V_0=\dfrac{e}{k_BT}\ln\dfrac{N_AN_D}{n_i^2}\)`, r`\(V_0=\dfrac{k_BT}{e}\ln\dfrac{n_i^2}{N_AN_D}\)`, r`\(V_0=\dfrac{k_BT}{e}\,\dfrac{N_AN_D}{n_i^2}\)`], r`\(\approx0{,}7\) V pour le silicium.`);
  C(2, "f", r`Relation de Shockley :`, r`\(I_D=I_S\left(e^{U_D/\eta V_T}-1\right)\)`, [r`\(I_D=I_S\,e^{-U_D/\eta V_T}\)`, r`\(I_D=I_S\left(1-e^{U_D/\eta V_T}\right)\)`, r`\(I_D=\dfrac{U_D}{I_S}\left(e^{\eta V_T}-1\right)\)`], r`\(V_T=\dfrac{k_BT}{e}\), \(\eta\in[1;2]\).`);
  C(2, "f", r`Tension d'une diode pour un courant donné (inversion de Shockley) :`, r`\(U_D=\eta V_T\ln\left(\dfrac{I_D}{I_S}+1\right)\)`, [r`\(U_D=\eta V_T\,\dfrac{I_D}{I_S}\)`, r`\(U_D=\dfrac{\eta V_T}{I_D}\ln I_S\)`, r`\(U_D=\eta V_T\,e^{I_D/I_S}\)`], r`\(\times10\) sur \(I_D\) : \(+60\) mV seulement.`);
  C(2, "f", r`Concentration intrinsèque :`, r`\(n_i=A\,T^{3/2}\,e^{-E_g/2k_BT}\)`, [r`\(n_i=A\,T^{3/2}\,e^{+E_g/2k_BT}\)`, r`\(n_i=A\,T^{2}\,e^{-E_g/k_BT}\)`, r`\(n_i=A\,\dfrac{e^{-E_g/2k_BT}}{T^{3/2}}\)`], r`Croît très vite avec \(T\).`);
  C(2, "f", r`Relation d'Einstein :`, r`\(\dfrac{D}{\mu}=\dfrac{k_BT}{e}\)`, [r`\(D\,\mu=\dfrac{k_BT}{e}\)`, r`\(\dfrac{\mu}{D}=\dfrac{k_BT}{e}\)`, r`\(D=\mu\,k_BT\)`], r`\(\approx26\) mV à \(300\) K.`);
  C(2, "f", r`Courant de diffusion (loi de Fick) :`, r`\(j_{diff}=e\,D_n\nabla n-e\,D_p\nabla p\)`, [r`\(j_{diff}=e\,\mu\,E\)`, r`\(j_{diff}=-e\,D\,n\,p\)`, r`\(j_{diff}=\dfrac{e\,n}{D}\)`], r`Des zones concentrées vers les zones diluées.`);
  C(2, "f", r`Photoconduction (éclairement stationnaire, taux de génération \(G\), durée de vie \(\tau_v\)) :`, r`\(\Delta n=\Delta p=G\,\tau_v\)`, [r`\(\Delta n=\Delta p=\dfrac{G}{\tau_v}\)`, r`\(\Delta n=G\,\tau_v\) et \(\Delta p=0\)`, r`\(\Delta n=\Delta p=G\,\tau_v^2\)`], r``);
  C(2, "f", r`Énergie thermique d'un électron (équipartition, 3 degrés de liberté) :`, r`\(E_{th}=\dfrac32k_BT\)`, [r`\(E_{th}=k_BT\)`, r`\(E_{th}=\dfrac{k_BT}{2}\)`, r`\(E_{th}=3\,k_BT^2\)`], r``);
  C(2, "k", r`Constante de Boltzmann \(k_B\) ?`, r`\(1{,}38\cdot10^{-23}\ \mathrm{J/K}\)`, [r`\(1{,}38\cdot10^{-19}\ \mathrm{J/K}\)`, r`\(6{,}02\cdot10^{-23}\ \mathrm{J/K}\)`, r`\(1{,}6\cdot10^{-23}\ \mathrm{J/K}\)`], r`Soit \(8{,}62\cdot10^{-5}\) eV/K.`);
  C(2, "k", r`Tension thermique \(V_T=k_BT/e\) à \(300\) K ?`, r`\(\approx26\) mV`, [r`\(\approx0{,}7\) V`, r`\(\approx260\) mV`, r`\(\approx2{,}6\) mV`], r``);
  C(2, "k", r`Nombre d'Avogadro \(\mathcal N_A\) ?`, r`\(6{,}02\cdot10^{23}\ \mathrm{mol^{-1}}\)`, [r`\(6{,}02\cdot10^{-23}\ \mathrm{mol^{-1}}\)`, r`\(1{,}38\cdot10^{23}\ \mathrm{mol^{-1}}\)`, r`\(6{,}02\cdot10^{26}\ \mathrm{mol^{-1}}\)`], r``);
  C(2, "k", r`Énergie du gap du silicium ? du germanium ?`, r`Si \(1{,}12\) eV ; Ge \(0{,}67\) eV`, [r`Si \(0{,}67\) eV ; Ge \(1{,}12\) eV`, r`Si \(0{,}7\) eV ; Ge \(0{,}3\) eV`, r`Si \(5\) eV ; Ge \(3\) eV`], r`Le silicium a le gap le plus grand.`);
  C(2, "k", r`Conversion : \(1\ \mathrm{eV}=\) ?`, r`\(1{,}6\cdot10^{-19}\ \mathrm J\)`, [r`\(1{,}6\cdot10^{-19}\ \mathrm C\)`, r`\(1{,}38\cdot10^{-23}\ \mathrm J\)`, r`\(6{,}02\cdot10^{23}\ \mathrm J\)`], r``);
  C(2, "k", r`Atomes de silicium par cm³ ?`, r`\(\approx5\cdot10^{22}\ \mathrm{cm^{-3}}\)`, [r`\(\approx5\cdot10^{10}\ \mathrm{cm^{-3}}\)`, r`\(\approx5\cdot10^{28}\ \mathrm{cm^{-3}}\)`, r`\(\approx1{,}5\cdot10^{10}\ \mathrm{cm^{-3}}\)`], r`Donc \(5\cdot10^{25}\) atomes dans \(1\) L.`);
  C(2, "k", r`Concentration intrinsèque \(n_i\) du silicium à \(300\) K ?`, r`\(\approx1{,}5\cdot10^{10}\ \mathrm{cm^{-3}}\)`, [r`\(\approx1{,}5\cdot10^{16}\ \mathrm{cm^{-3}}\)`, r`\(\approx5\cdot10^{22}\ \mathrm{cm^{-3}}\)`, r`\(\approx1{,}5\cdot10^{4}\ \mathrm{cm^{-3}}\)`], r`(\(10^{10}\) dans les sujets d'annales).`);
  C(2, "k", r`Mobilités du silicium (électrons, trous) ?`, r`\(\approx1\,350\) et \(480\ \mathrm{cm^2/(V\cdot s)}\)`, [r`\(\approx480\) et \(1\,350\ \mathrm{cm^2/(V\cdot s)}\)`, r`\(\approx13{,}5\) et \(4{,}8\ \mathrm{cm^2/(V\cdot s)}\)`, r`\(\approx1\,350\) et \(1\,350\ \mathrm{cm^2/(V\cdot s)}\)`], r`\(\mu_n>\mu_p\).`);
  C(2, "k", r`Un dopant du groupe V (P, As, Sb) est : `, r`donneur, donne le type \(N\)`, [r`accepteur, donne le type \(N\)`, r`donneur, donne le type \(P\)`, r`accepteur, donne le type \(P\)`], r`Groupe III (B, In, Ga) : accepteur, type \(P\).`);
  C(2, "k", r`Quand la température augmente, la conductivité d'un semi-conducteur :`, r`augmente`, [r`diminue`, r`reste constante`, r`s'annule`], r`Contraire d'un métal.`);
  C(2, "k", r`Le courant inverse de saturation \(I_S\) d'une diode au silicium double environ tous les :`, r`\(11\,^{\circ}\)C`, [r`\(1\,^{\circ}\)C`, r`\(100\,^{\circ}\)C`, r`\(0{,}1\,^{\circ}\)C`], r``);

  /* ===================== CH3 ===================== */
  C(3, "f", r`Modèle de la diode réelle (passante) :`, r`\(V_D=V_S+r\,I_D\)`, [r`\(V_D=V_S\)`, r`\(V_D=r\,I_D\)`, r`\(V_D=V_S-r\,I_D\)`], r`Parfaite : \(V_D=V_S\). Idéale : \(V_D=0\).`);
  C(3, "f", r`Courant dans une diode passante alimentée par \(E_{Th}\) à travers \(R_{Th}\) :`, r`\(I_D=\dfrac{E_{Th}-V_S}{R_{Th}+r}\)`, [r`\(I_D=\dfrac{E_{Th}+V_S}{R_{Th}+r}\)`, r`\(I_D=\dfrac{E_{Th}-V_S}{R_{Th}}\,r\)`, r`\(I_D=\dfrac{E_{Th}}{R_{Th}}\)`], r`À vérifier : \(I_D>0\).`);
  C(3, "f", r`Droite de charge d'une diode :`, r`\(I_D=\dfrac{E_{Th}-V_D}{R_{Th}}\)`, [r`\(I_D=\dfrac{E_{Th}+V_D}{R_{Th}}\)`, r`\(I_D=\dfrac{V_D-E_{Th}}{R_{Th}}\)`, r`\(I_D=E_{Th}-R_{Th}V_D\)`], r`Intersection avec la caractéristique = point de fonctionnement.`);
  C(3, "f", r`Résistance dynamique d'une diode :`, r`\(r_d=\dfrac{\mathrm dV_D}{\mathrm dI_D}=\dfrac{\eta V_T}{I_D}\)`, [r`\(r_d=\dfrac{V_D}{I_D}\)`, r`\(r_d=\eta V_T\,I_D\)`, r`\(r_d=\dfrac{I_D}{\eta V_T}\)`], r`Statique : \(R_{stat}=\dfrac{V_D}{I_D}\).`);
  C(3, "f", r`Tension de crête en sortie d'un pont de Graëtz (entrée de crête \(V_m\)) :`, r`\(V_m-2V_S\)`, [r`\(V_m-V_S\)`, r`\(V_m+2V_S\)`, r`\(\dfrac{V_m}{2}\)`], r`Deux diodes en série à chaque alternance. Fréquence en sortie : \(2f\).`);
  C(3, "f", r`Valeur moyenne d'un signal redressé double alternance (crête \(V_m\), diodes idéales) :`, r`\(\dfrac{2V_m}{\pi}\)`, [r`\(\dfrac{V_m}{\pi}\)`, r`\(\dfrac{V_m}{2}\)`, r`\(\dfrac{V_m}{\sqrt2}\)`], r`Simple alternance : \(\dfrac{V_m}{\pi}\).`);
  C(3, "f", r`Écrêteur : diode (anode vers la sortie) en série avec une pile \(E_0\). Plafond de la sortie :`, r`\(E_0+V_S\)`, [r`\(E_0-V_S\)`, r`\(E_0\)`, r`\(V_S\)`], r``);
  C(3, "f", r`Résistance de limitation d'une LED :`, r`\(R=\dfrac{V_{alim}-V_{LED}}{I_{LED}}\)`, [r`\(R=\dfrac{V_{alim}+V_{LED}}{I_{LED}}\)`, r`\(R=\dfrac{I_{LED}}{V_{alim}-V_{LED}}\)`, r`\(R=\dfrac{V_{alim}}{I_{LED}}\,V_{LED}\)`], r``);
  C(3, "f", r`Tension d'entrée minimale pour qu'un régulateur Zener (\(R\), charge \(R_L\)) régule :`, r`\(E_{min}=V_Z\,\dfrac{R+R_L}{R_L}\)`, [r`\(E_{min}=V_Z\)`, r`\(E_{min}=V_Z\,\dfrac{R_L}{R+R_L}\)`, r`\(E_{min}=V_Z\,(R+R_L)\)`], r`Condition : tension <em>à vide</em> \(E\dfrac{R_L}{R+R_L}\ge V_Z\).`);
  C(3, "f", r`Courant dans la Zener d'un régulateur :`, r`\(I_Z=\dfrac{E-V_Z}{R}-\dfrac{V_Z}{R_L}\)`, [r`\(I_Z=\dfrac{E-V_Z}{R}+\dfrac{V_Z}{R_L}\)`, r`\(I_Z=\dfrac{E}{R}-\dfrac{V_Z}{R_L}\)`, r`\(I_Z=\dfrac{V_Z}{R}-\dfrac{E-V_Z}{R_L}\)`], r`\(I_Z=I_R-I_L\), avec \(0\le I_Z\le I_{Z,max}\).`);
  C(3, "f", r`Plus petite charge qui laisse la Zener conduire :`, r`\(R_{L,min}=\dfrac{V_Z\,R}{E-V_Z}\)`, [r`\(R_{L,min}=\dfrac{E-V_Z}{V_Z\,R}\)`, r`\(R_{L,min}=\dfrac{V_Z}{E\,R}\)`, r`\(R_{L,min}=V_Z\,(E-V_Z)\,R\)`], r``);
  C(3, "f", r`Choix de \(R\) pour un régulateur : borne qui protège la Zener (\(I_Z\le I_{Z,max}\)) :`, r`\(R\ge\dfrac{E_{max}-V_Z}{I_{Z,max}+I_{L,min}}\)`, [r`\(R\le\dfrac{E_{max}-V_Z}{I_{Z,max}+I_{L,min}}\)`, r`\(R\ge\dfrac{E_{min}-V_Z}{I_{Z,min}+I_{L,max}}\)`, r`\(R\ge\dfrac{V_Z}{I_{Z,max}}\)`], r`L'autre borne : \(R\le\dfrac{E_{min}-V_Z}{I_{Z,min}+I_{L,max}}\).`);
  C(3, "f", r`Transformateur (primaire \(N_1\), secondaire \(N_2\)) :`, r`\(\dfrac{V_2}{V_1}=\dfrac{N_2}{N_1}\) et \(\dfrac{i_2}{i_1}=\dfrac{N_1}{N_2}\)`, [r`\(\dfrac{V_2}{V_1}=\dfrac{N_1}{N_2}\) et \(\dfrac{i_2}{i_1}=\dfrac{N_1}{N_2}\)`, r`\(\dfrac{V_2}{V_1}=\dfrac{N_2}{N_1}\) et \(\dfrac{i_2}{i_1}=\dfrac{N_2}{N_1}\)`, r`\(V_2=V_1+N_2\)`], r`La puissance se conserve : tension \(\times\) courant.`);
  C(3, "f", r`Bobine en série avec un interrupteur : surtension à l'ouverture :`, r`\(u_L=L\dfrac{\mathrm di}{\mathrm dt}\), évitée par une diode de roue libre`, [r`\(u_L=L\,i\), évitée par un condensateur`, r`\(u_L=\dfrac{i}{L}\), évitée par une résistance`, r`\(u_L=L\dfrac{\mathrm du}{\mathrm dt}\), évitée par une Zener en série`], r``);
  C(3, "k", r`Tension de seuil d'une diode au silicium ? au germanium ?`, r`\(0{,}7\) V ; \(0{,}3\) V`, [r`\(0{,}3\) V ; \(0{,}7\) V`, r`\(1{,}12\) V ; \(0{,}67\) V`, r`\(0{,}15\) V ; \(0{,}45\) V`], r``);
  C(3, "k", r`Tension de seuil d'une diode Schottky ?`, r`\(0{,}15\) à \(0{,}45\) V`, [r`\(0{,}7\) V`, r`\(1{,}2\) V`, r`\(5\) V`], r`Seuil bas, commutation rapide, hautes fréquences.`);
  C(3, "k", r`Dérive de la tension d'une diode avec la température (courant constant) ?`, r`\(\approx-2\ \mathrm{mV/^{\circ}C}\)`, [r`\(\approx+2\ \mathrm{mV/^{\circ}C}\)`, r`\(\approx-2\ \mathrm{V/^{\circ}C}\)`, r`\(\approx0\)`], r`Principe du capteur de température à diode.`);
  C(3, "k", r`Variation de la tension d'une diode quand son courant est multiplié par \(10\) ?`, r`\(\approx+60\) mV`, [r`\(\approx+0{,}7\) V`, r`\(\approx\times10\)`, r`\(\approx+6\) mV`], r`\(V_T\ln10\) pour \(\eta=1\).`);
  C(3, "k", r`Diode Zener : fonctionne en général :`, r`en inverse, dans sa zone Zener (\(V_D\approx-V_Z\))`, [r`en direct uniquement`, r`bloquée, en inverse`, r`en avalanche destructive`], r``);
  C(3, "k", r`Le pont de Graëtz comporte :`, r`4 diodes, redresse les deux alternances`, [r`2 diodes, redresse une alternance`, r`4 diodes, redresse une alternance`, r`2 diodes, redresse les deux alternances`], r``);
  C(3, "k", r`Tension de claquage ou tension de rupture, notée :`, r`\(V_{BR}\) (breakdown)`, [r`\(V_{RRM}\) uniquement`, r`\(V_S\)`, r`\(V_0\)`], r``);

  /* ===================== CH4 ===================== */
  C(4, "f", r`Relations entre les courants et les gains du BJT :`, r`\(i_E=i_B+i_C\), \(i_C=\beta\,i_B\), \(i_E=(\beta+1)\,i_B\)`, [r`\(i_E=i_B-i_C\), \(i_C=\beta\,i_B\)`, r`\(i_B=\beta\,i_C\), \(i_E=i_B+i_C\)`, r`\(i_E=\beta\,i_B\), \(i_C=i_E+i_B\)`], r``);
  C(4, "f", r`Lien entre \(\alpha\) et \(\beta\) :`, r`\(\alpha=\dfrac{\beta}{\beta+1}\) et \(\beta=\dfrac{\alpha}{1-\alpha}\)`, [r`\(\alpha=\dfrac{\beta+1}{\beta}\) et \(\beta=\dfrac{1-\alpha}{\alpha}\)`, r`\(\alpha=\dfrac{1}{\beta}\)`, r`\(\alpha=\beta-1\)`], r`\(\alpha=\dfrac{i_C}{i_E}\approx0{,}99\).`);
  C(4, "f", r`Droite de charge statique d'un émetteur commun (sans \(R_E\)) :`, r`\(V_{CE}=V_{CC}-R_C\,i_C\)`, [r`\(V_{CE}=V_{CC}+R_C\,i_C\)`, r`\(V_{CE}=\dfrac{V_{CC}}{R_C}-i_C\)`, r`\(V_{CE}=V_{CC}-\dfrac{i_C}{R_C}\)`], r`\(i_{C,sat}=\dfrac{V_{CC}}{R_C}\) à \(V_{CE}\approx0\).`);
  C(4, "f", r`Courant de base avec une résistance de base \(R_B\) (sans \(R_E\)) :`, r`\(i_B=\dfrac{V_{BB}-V_{BE}}{R_B}\)`, [r`\(i_B=\dfrac{V_{BB}+V_{BE}}{R_B}\)`, r`\(i_B=\dfrac{V_{BB}}{R_B}-V_{BE}\)`, r`\(i_B=\dfrac{V_{BE}}{V_{BB}\,R_B}\)`], r`Droite d'attaque, sur la caractéristique d'entrée.`);
  C(4, "f", r`Courant de base avec pont diviseur et résistance d'émetteur :`, r`\(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}\)`, [r`\(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}+\beta\,R_E}\)`, r`\(i_B=\dfrac{V_{Th}-V_{BE}}{R_{Th}\,(\beta+1)R_E}\)`, r`\(i_B=\dfrac{V_{Th}+V_{BE}}{R_{Th}+(\beta+1)R_E}\)`], r`\(V_{Th}=V_{CC}\dfrac{R_2}{R_1+R_2}\), \(R_{Th}=R_1\parallel R_2\).`);
  C(4, "f", r`Condition pour que le point \(Q\) soit indépendant de \(\beta\) (pont + \(R_E\)) :`, r`\((\beta+1)R_E\ge10\,R_{Th}\)`, [r`\((\beta+1)R_E\le R_{Th}\)`, r`\(R_E\ge\beta\,R_{Th}\,V_{BE}\)`, r`\(R_{Th}\ge10\,(\beta+1)R_E\)`], r`Alors \(V_E\approx V_{Th}-V_{BE}\), \(i_E\approx\dfrac{V_E}{R_E}\).`);
  C(4, "f", r`Maille de sortie avec \(R_C\) et \(R_E\) :`, r`\(V_{CC}=R_C\,i_C+V_{CE}+R_E\,i_E\)`, [r`\(V_{CC}=R_C\,i_C-V_{CE}+R_E\,i_E\)`, r`\(V_{CC}=R_C\,i_E+V_{CE}\)`, r`\(V_{CC}=V_{CE}\,(R_C+R_E)\)`], r``);
  C(4, "f", r`Condition de saturation d'un transistor en commutation :`, r`\(\beta\,i_B>i_{C,sat}=\dfrac{V_{CC}-V_{CE,sat}}{R_C}\)`, [r`\(\beta\,i_B<i_{C,sat}\)`, r`\(i_B=i_C\)`, r`\(V_{BE}<0{,}7\) V`], r`En pratique \(i_B=2\) à \(5\times\dfrac{i_{C,sat}}{\beta}\).`);
  C(4, "f", r`Régulateur à transistor ballast (Zener sur la base) : tension de sortie :`, r`\(V_Z-V_{BE}\)`, [r`\(V_Z+V_{BE}\)`, r`\(V_Z\)`, r`\(\beta\,V_Z\)`], r``);
  C(4, "f", r`Tension base-collecteur :`, r`\(V_{CB}=V_{CE}-V_{BE}\)`, [r`\(V_{CB}=V_{CE}+V_{BE}\)`, r`\(V_{CB}=V_{BE}-V_{CE}\)`, r`\(V_{CB}=V_{CE}\,V_{BE}\)`], r`Mode actif : \(V_{CB}>0\).`);
  C(4, "f", r`Effet Early : courant collecteur en zone active :`, r`\(i_C=i_{C0}\left(1+\dfrac{V_{CE}}{V_A}\right)\)`, [r`\(i_C=i_{C0}\left(1-\dfrac{V_{CE}}{V_A}\right)\)`, r`\(i_C=\beta\,V_A\)`, r`\(i_C=i_{C0}\,\dfrac{V_A}{V_{CE}}\)`], r`Dû à la modulation de la largeur de la base (très fine).`);
  C(4, "k", r`\(V_{BE}\) d'un transistor au silicium passant ? et \(V_{CE,sat}\) ?`, r`\(0{,}7\) V ; \(\approx0{,}2\) V`, [r`\(0{,}2\) V ; \(\approx0{,}7\) V`, r`\(1{,}2\) V ; \(0{,}7\) V`, r`\(0{,}7\) V ; \(\approx5\) V`], r``);
  C(4, "k", r`Ordre de grandeur de \(\beta\) ?`, r`\(\approx100\) à \(200\)`, [r`\(\approx1\)`, r`\(\approx10^{5}\)`, r`\(\approx0{,}99\)`], r``);
  C(4, "k", r`\(\alpha\) vaut typiquement :`, r`\(0{,}9\) à \(1\) (\(\approx0{,}99\))`, [r`\(\approx100\)`, r`\(\approx0{,}1\)`, r`\(\approx10\)`], r``);
  C(4, "k", r`Mode actif : états des jonctions base-émetteur et base-collecteur :`, r`BE directe, BC inverse`, [r`BE inverse, BC directe`, r`les deux directes`, r`les deux inverses`], r`Saturé : les deux directes. Bloqué : les deux inverses.`);
  C(4, "k", r`Le transistor (silicium) est bloqué lorsque :`, r`\(V_{BE}<0{,}7\) V (\(i_B\approx0\))`, [r`\(V_{CE}<0{,}2\) V`, r`\(V_{BC}>0\)`, r`\(i_B\) est grand`], r``);
  C(4, "k", r`L'effet transistor vient d'une base :`, r`très fine et peu dopée`, [r`épaisse et très dopée`, r`très fine et très dopée`, r`épaisse et peu dopée`], r``);
  C(4, "k", r`L'effet Early vient d'une base :`, r`très fine`, [r`peu dopée uniquement`, r`épaisse`, r`métallique`], r``);
  C(4, "k", r`Quand la température augmente, \(\beta\) :`, r`augmente`, [r`diminue`, r`reste constant`, r`s'annule`], r`Et \(V_{BE}\) baisse d'environ \(2\) mV/°C.`);
  C(4, "k", r`Polarisation par la base seule : le point \(Q\) dépend :`, r`fortement de \(\beta\) (usage : commutation)`, [r`pas de \(\beta\)`, r`seulement de \(V_{BE}\)`, r`seulement de \(R_C\)`], r``);

  /* ===================== CH5 ===================== */
  C(5, "f", r`Résistance dynamique d'émetteur :`, r`\(r_e=\dfrac{26\ \mathrm{mV}}{I_E}\)`, [r`\(r_e=26\ \mathrm{mV}\cdot I_E\)`, r`\(r_e=\dfrac{I_E}{26\ \mathrm{mV}}\)`, r`\(r_e=\dfrac{26\ \mathrm{mV}}{\beta}\)`], r`\(I_E\) : courant continu de repos.`);
  C(5, "f", r`Gain en tension d'un émetteur commun (\(C_3\) présent, sans charge) :`, r`\(A_v\approx-\dfrac{R_C}{r_e}\)`, [r`\(A_v\approx+\dfrac{R_C}{r_e}\)`, r`\(A_v\approx-\dfrac{R_C}{R_E}\)`, r`\(A_v\approx-\dfrac{r_e}{R_C}\)`], r`Déphasage de \(\pi\).`);
  C(5, "f", r`Gain en tension d'un émetteur commun sans condensateur de découplage :`, r`\(A_v\approx-\dfrac{R_C}{R_E+r_e}\)`, [r`\(A_v\approx-\dfrac{R_C}{r_e}\)`, r`\(A_v\approx-\dfrac{R_C\,R_E}{r_e}\)`, r`\(A_v\approx+\dfrac{R_E}{R_C}\)`], r``);
  C(5, "f", r`Impédance d'entrée d'un émetteur commun (pont \(R_1\), \(R_2\)) :`, r`\(Z_{in}=R_1\parallel R_2\parallel(\beta+1)\,r_e\)`, [r`\(Z_{in}=R_1\parallel R_2\parallel\beta\,r_e\)`, r`\(Z_{in}=R_1+R_2+(\beta+1)\,r_e\)`, r`\(Z_{in}=R_C\parallel r_e\)`], r`La plus petite des résistances en parallèle domine.`);
  C(5, "f", r`Impédance de sortie d'un émetteur commun :`, r`\(Z_{out}=R_C\) (ou \(R_C\parallel r_o\))`, [r`\(Z_{out}=r_e\)`, r`\(Z_{out}=(\beta+1)\,r_e\)`, r`\(Z_{out}=R_1\parallel R_2\)`], r``);
  C(5, "f", r`Gain en tension chargé par \(R_L\) :`, r`\(A_v\dfrac{R_L}{Z_{out}+R_L}\)`, [r`\(A_v\dfrac{Z_{out}}{Z_{out}+R_L}\)`, r`\(A_v\,(Z_{out}+R_L)\)`, r`\(A_v\dfrac{R_L}{Z_{out}}\)`], r`Pont diviseur de sortie.`);
  C(5, "f", r`Gain global avec une source de résistance interne \(R_s\) :`, r`\(\dfrac{v_{out}}{v_g}=A_v\dfrac{Z_{in}}{Z_{in}+R_s}\)`, [r`\(A_v\dfrac{R_s}{Z_{in}+R_s}\)`, r`\(A_v\,(Z_{in}+R_s)\)`, r`\(A_v\dfrac{Z_{in}}{R_s}\)`], r``);
  C(5, "f", r`Gains en décibels :`, r`\(20\log|A_v|\) (tension) et \(10\log A_P\) (puissance)`, [r`\(10\log|A_v|\) (tension) et \(20\log A_P\) (puissance)`, r`\(20\ln|A_v|\)`, r`\(\log|A_v|\) pour tout`], r`\(\times10\) en tension : \(20\) dB ; \(\times100\) : \(40\) dB.`);
  C(5, "f", r`Gain en puissance :`, r`\(A_P=A_v\cdot A_i\)`, [r`\(A_P=A_v+A_i\)`, r`\(A_P=\dfrac{A_v}{A_i}\)`, r`\(A_P=A_v^{2}\)`], r``);
  C(5, "f", r`Dimensionner un condensateur de liaison de coupure basse \(f_c\) :`, r`\(C=\dfrac{1}{2\pi f_c\,R_{vue}}\)`, [r`\(C=2\pi f_c\,R_{vue}\)`, r`\(C=\dfrac{f_c}{2\pi R_{vue}}\)`, r`\(C=\dfrac{1}{f_c\,R_{vue}}\)`], r`\(R_{vue}\) : résistance vue par le condensateur (Thévenin).`);
  C(5, "f", r`Modèle de Giacoletto (haute fréquence) :`, r`\(g_m=\dfrac{I_C}{V_T}\) et \(r_\pi=\dfrac{\beta}{g_m}\)`, [r`\(g_m=I_C\,V_T\) et \(r_\pi=\beta\,g_m\)`, r`\(g_m=\dfrac{V_T}{I_C}\) et \(r_\pi=\dfrac{g_m}{\beta}\)`, r`\(g_m=\beta\,I_C\) et \(r_\pi=\dfrac1\beta\)`], r`\(r_\pi\approx(\beta+1)r_e\).`);
  C(5, "f", r`Gain en courant d'une paire Darlington :`, r`\(\beta_D\approx\beta_1\,\beta_2\)`, [r`\(\beta_D=\beta_1+\beta_2\)`, r`\(\beta_D=\dfrac{\beta_1}{\beta_2}\)`, r`\(\beta_D=\beta_1-\beta_2\)`], r`Mais \(V_{BE}\approx1{,}4\) V.`);
  C(5, "f", r`Miroir de courant à deux transistors identiques :`, r`\(i_{out}\approx i_{in}\) (indépendant de \(\beta\) et de la charge)`, [r`\(i_{out}=\beta\,i_{in}\)`, r`\(i_{out}=\dfrac{i_{in}}{\beta}\)`, r`\(i_{out}=2\,i_{in}\)`], r``);
  C(5, "f", r`Rendement d'un étage de puissance :`, r`\(\eta=\dfrac{P_{charge}}{P_{alimentation}}\)`, [r`\(\eta=\dfrac{P_{alimentation}}{P_{charge}}\)`, r`\(\eta=P_{charge}-P_{alimentation}\)`, r`\(\eta=\dfrac{P_{charge}}{P_{charge}+P_{alimentation}}\)`], r``);
  C(5, "k", r`Rendement maximal théorique d'un ampli de classe B ? de classe A ?`, r`\(78{,}5\ \%\) ; \(\le50\ \%\)`, [r`\(50\ \%\) ; \(78{,}5\ \%\)`, r`\(100\ \%\) ; \(78{,}5\ \%\)`, r`\(25\ \%\) ; \(50\ \%\)`], r`Classe B : \(\dfrac{\pi}{4}\).`);
  C(5, "k", r`Angle de conduction des classes A, B, AB :`, r`\(360^{\circ}\) ; \(180^{\circ}\) ; entre \(180^{\circ}\) et \(360^{\circ}\)`, [r`\(180^{\circ}\) ; \(360^{\circ}\) ; \(90^{\circ}\)`, r`\(360^{\circ}\) ; \(90^{\circ}\) ; \(180^{\circ}\)`, r`\(180^{\circ}\) ; \(180^{\circ}\) ; \(360^{\circ}\)`], r``);
  C(5, "k", r`La classe B présente :`, r`une distorsion de croisement`, [r`un rendement de \(25\ \%\)`, r`un courant de repos élevé`, r`une commutation PWM`], r`Réduite en classe AB (polarisation par diodes).`);
  C(5, "k", r`Un amplificateur de classe D utilise :`, r`un signal PWM et un filtre passe-bas`, [r`un push-pull polarisé par diodes`, r`un seul transistor toujours conducteur`, r`un miroir de courant`], r``);
  C(5, "k", r`Un émetteur commun, côté signal :`, r`inverse le signal (déphasage de \(\pi\))`, [r`ne l'inverse jamais`, r`a toujours un gain de \(1\)`, r`n'amplifie pas en tension`], r``);
  C(5, "k", r`Bande passante d'un émetteur commun : coupure basse due aux :`, r`condensateurs de liaison et de découplage`, [r`capacités internes du transistor`, r`résistances de polarisation`, r`tensions d'alimentation`], r`Coupure haute : capacités internes (Giacoletto). Comportement passe-bande.`);
  C(5, "k", r`Le pont en H sert à :`, r`inverser le sens de rotation d'un moteur à courant continu`, [r`redresser une tension alternative`, r`stabiliser une tension`, r`amplifier en classe B`], r``);

  /* ===================== CH6 ===================== */
  C(6, "f", r`Caractéristique de transfert d'un JFET (zone active) :`, r`\(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)^2\)`, [r`\(I_D=I_{DSS}\left(1-\dfrac{V_{GS}}{V_{GS,off}}\right)\)`, r`\(I_D=I_{DSS}\left(1+\dfrac{V_{GS}}{V_{GS,off}}\right)^2\)`, r`\(I_D=I_{DSS}\left(\dfrac{V_{GS}}{V_{GS,off}}\right)^2\)`], r`\(I_D=I_{DSS}\) en \(V_{GS}=0\) ; \(I_D=0\) en \(V_{GS,off}\).`);
  C(6, "f", r`Transconductance d'un JFET :`, r`\(g_m=\dfrac{2I_{DSS}}{|V_P|}\left(1-\dfrac{V_{GS}}{V_P}\right)\)`, [r`\(g_m=\dfrac{I_{DSS}}{|V_P|}\left(1-\dfrac{V_{GS}}{V_P}\right)^2\)`, r`\(g_m=\dfrac{2\,|V_P|}{I_{DSS}}\left(1-\dfrac{V_{GS}}{V_P}\right)\)`, r`\(g_m=2I_{DSS}\,|V_P|\)`], r`\(g_m=\dfrac{\mathrm dI_D}{\mathrm dV_{GS}}\), en siemens.`);
  C(6, "f", r`JFET autopolarisé (grille à la masse, résistance de source \(R_S\)) :`, r`\(V_{GS}=-R_S\,I_D\)`, [r`\(V_{GS}=+R_S\,I_D\)`, r`\(V_{GS}=-\dfrac{I_D}{R_S}\)`, r`\(V_{GS}=-R_S\,I_G\)`], r`Équation du second degré : garder la racine \(V_P<V_{GS}\le0\).`);
  C(6, "f", r`Condition de zone active d'un JFET :`, r`\(V_{DS}>V_{GS}-V_P\)`, [r`\(V_{DS}<V_{GS}-V_P\)`, r`\(V_{DS}>V_{GS}+V_P\)`, r`\(V_{DS}=0\)`], r`Sinon zone ohmique.`);
  C(6, "f", r`Gain d'un ampli source commune (\(R_S\) découplée) :`, r`\(A_v=-g_m\,R_D\)`, [r`\(A_v=+g_m\,R_D\)`, r`\(A_v=-\dfrac{g_m}{R_D}\)`, r`\(A_v=-\dfrac{R_D}{g_m}\)`], r`Non découplée : \(-\dfrac{g_mR_D}{1+g_mR_S}\).`);
  C(6, "f", r`Gain d'un drain commun (suiveur) :`, r`\(A_v=\dfrac{g_mR_S}{1+g_mR_S}\lesssim1\)`, [r`\(A_v=-g_mR_S\)`, r`\(A_v=1+g_mR_S\)`, r`\(A_v=-\dfrac{g_mR_S}{1+g_mR_S}\)`], r``);
  C(6, "f", r`Loi du MOSFET en zone active (convention du cours) :`, r`\(I_D=\tfrac12K_n\dfrac WL(V_{GS}-V_T)^2\)`, [r`\(I_D=\tfrac12K_n\dfrac WL(V_{GS}-V_T)\)`, r`\(I_D=K_n\dfrac WL(V_{GS}+V_T)^2\)`, r`\(I_D=\tfrac12K_n\dfrac LW(V_{GS}-V_T)^2\)`], r`Autre convention : \(I_D=K(V_{GS}-V_T)^2\) et \(g_m\) change d'un facteur \(2\) : recopier la loi de l'énoncé.`);
  C(6, "f", r`Transconductance d'un MOSFET :`, r`\(g_m=K_n\dfrac WL(V_{GS}-V_T)=\dfrac{2I_D}{V_{GS}-V_T}\)`, [r`\(g_m=K_n\dfrac WL(V_{GS}-V_T)^2\)`, r`\(g_m=\dfrac{I_D}{2\,(V_{GS}-V_T)}\)`, r`\(g_m=\dfrac{V_{GS}-V_T}{2I_D}\)`], r``);
  C(6, "f", r`Régions d'un nMOS (\(V_{ov}=V_{GS}-V_T\)) :`, r`bloqué si \(V_{ov}<0\) ; ohmique si \(V_{DS}<V_{ov}\) ; active si \(V_{DS}>V_{ov}\)`, [r`bloqué si \(V_{ov}>0\) ; ohmique si \(V_{DS}>V_{ov}\) ; active si \(V_{DS}<V_{ov}\)`, r`bloqué si \(V_{DS}<0\) ; ohmique si \(V_{ov}<V_{DS}\) ; active si \(V_{ov}=0\)`, r`bloqué si \(V_{ov}<0\) ; ohmique si \(V_{DS}>V_{ov}\) ; active si \(V_{DS}<V_{ov}\)`], r``);
  C(6, "f", r`Résistance ohmique d'un JFET (\(V_{GS}=0\)) selon le cours :`, r`\(R_{DS}=\dfrac{V_P}{I_{DSS}}\)`, [r`\(R_{DS}=V_P\,I_{DSS}\)`, r`\(R_{DS}=\dfrac{I_{DSS}}{V_P}\)`, r`\(R_{DS}=\dfrac{V_P}{g_m}\)`], r``);
  C(6, "k", r`Courant de grille d'un JFET ou d'un MOSFET :`, r`\(I_G\approx0\) (impédance d'entrée énorme)`, [r`\(I_G=\beta\,I_D\)`, r`\(I_G=I_D\)`, r`\(I_G\) élevé`], r``);
  C(6, "k", r`Un FET est commandé en :`, r`tension (\(V_{GS}\))`, [r`courant de base`, r`puissance`, r`fréquence`], r`À un seul type de porteur (unipolaire).`);
  C(6, "k", r`Le canal d'un MOSFET s'appelle :`, r`canal d'inversion`, [r`zone désertée`, r`jonction`, r`barrière`], r`Formé sous la couche de SiO\(_2\) au-delà de \(V_T\).`);
  C(6, "k", r`Pour un JFET canal N en fonctionnement normal :`, r`\(V_{GS}<0\) (grille en inverse)`, [r`\(V_{GS}>V_T\)`, r`\(V_{GS}=+5\) V`, r`\(V_{DS}<0\)`], r`\(|V_{GS,off}|=V_P\).`);
  C(6, "k", r`Comparé au BJT, le FET a :`, r`une plus forte impédance d'entrée, mais un gain plus faible`, [r`une plus faible impédance d'entrée et un gain plus fort`, r`un gain plus fort et une meilleure impédance`, r`le même gain et la même impédance`], r``);

  /* ===================== CH7 ===================== */
  C(7, "f", r`Théorèmes de De Morgan :`, r`\(\overline{A+B}=\bar A\cdot\bar B\) et \(\overline{A\cdot B}=\bar A+\bar B\)`, [r`\(\overline{A+B}=\bar A+\bar B\) et \(\overline{A\cdot B}=\bar A\cdot\bar B\)`, r`\(\overline{A+B}=\bar A\cdot B\) et \(\overline{A\cdot B}=A+\bar B\)`, r`\(\overline{A+B}=\overline{A\cdot B}\)`], r``);
  C(7, "f", r`Porte NAND en CMOS :`, r`pull-up : 2 pMOS en parallèle ; pull-down : 2 nMOS en série`, [r`pull-up : 2 pMOS en série ; pull-down : 2 nMOS en parallèle`, r`pull-up et pull-down : en série`, r`pull-up : 2 nMOS en parallèle ; pull-down : 2 pMOS en série`], r`NOR : l'inverse.`);
  C(7, "f", r`Porte NOR en CMOS :`, r`pull-up : 2 pMOS en série ; pull-down : 2 nMOS en parallèle`, [r`pull-up : 2 pMOS en parallèle ; pull-down : 2 nMOS en série`, r`pull-up et pull-down : en parallèle`, r`pull-up : 2 nMOS en série ; pull-down : 2 pMOS en parallèle`], r``);
  C(7, "f", r`Construire une porte CMOS pour \(Y\) : les réseaux sont :`, r`PDN \(=\overline Y\) (entrées non complémentées), PUN \(=Y\) (entrées complémentées)`, [r`PUN \(=\overline Y\), PDN \(=Y\)`, r`PUN et PDN \(=Y\), entrées non complémentées`, r`PDN \(=Y\) avec des pMOS`], r`« \(\cdot\) » \(\to\) série, « \(+\) » \(\to\) parallèle.`);
  C(7, "f", r`Nombre de transistors d'une porte complémentaire à \(n\) entrées :`, r`\(2n\) (\(n\) nMOS + \(n\) pMOS)`, [r`\(n\)`, r`\(n^2\)`, r`\(2^n\)`], r`NAND2 : 4 transistors.`);
  C(7, "f", r`Résistance d'un rail de métal (largeur \(w\), longueur \(\ell\)) :`, r`\(R=R_\square\,\dfrac{\ell}{w}\) (un coude vaut \(\tfrac{R_\square}{2}\))`, [r`\(R=R_\square\,\dfrac{w}{\ell}\)`, r`\(R=R_\square\,\ell\,w\)`, r`\(R=\dfrac{R_\square}{\ell\,w}\)`], r`On compte les carrés.`);
  C(7, "f", r`Capacité de sortie d'une porte :`, r`\(C_{OUT}=\sum C_\square\cdot(\ell\,w)\) sur les surfaces reliées à la sortie`, [r`\(C_{OUT}=\prod C_\square\)`, r`\(C_{OUT}=\dfrac{C_\square}{\ell\,w}\)`, r`\(C_{OUT}=C_\square\,(\ell+w)\)`], r`Poly, métal, diffusions, contacts.`);
  C(7, "f", r`Temps de propagation d'une porte (cours) :`, r`\(\tau=\dfrac{(R_N+R_P)\,C_{OUT}}{2}\)`, [r`\(\tau=(R_N+R_P)\,C_{OUT}\)`, r`\(\tau=\dfrac{R_N\,R_P\,C_{OUT}}{2}\)`, r`\(\tau=\dfrac{(R_N+R_P)}{2\,C_{OUT}}\)`], r`\(R_N,R_P\) : résistances équivalentes des <em>pires chemins</em> des deux réseaux.`);
  C(7, "f", r`Résistance équivalente de \(n\) transistors identiques en série (de résistance \(R\)) :`, r`\(n\,R\)`, [r`\(\dfrac{R}{n}\)`, r`\(n^2R\)`, r`\(R\)`], r`Délai de Elmore : proportionnel à \(\dfrac{n^2}{2}RC\).`);
  C(7, "f", r`Puissance dynamique d'une porte CMOS :`, r`\(P_{dyn}=C_{OUT}\,V_{DD}^2\,f\)`, [r`\(P_{dyn}=C_{OUT}\,V_{DD}\,f\)`, r`\(P_{dyn}=\dfrac{V_{DD}^2}{C_{OUT}\,f}\)`, r`\(P_{dyn}=C_{OUT}\,V_{DD}^2/f\)`], r`La consommation statique est quasi nulle.`);
  C(7, "f", r`Multiplexeur 2:1 (sélection \(S\)) :`, r`\(OUT=\bar S\,A+S\,B\)`, [r`\(OUT=S\,A+\bar S\,B\)`, r`\(OUT=\bar S\,\bar A+S\,\bar B\)`, r`\(OUT=S+A+B\)`], r``);
  C(7, "f", r`Fonction OU exclusif :`, r`\(A\oplus B=A\bar B+\bar A B\)`, [r`\(A\oplus B=AB+\bar A\bar B\)`, r`\(A\oplus B=A+B\)`, r`\(A\oplus B=\overline{A+B}\)`], r`\(AB+\bar A\bar B\) est le XNOR.`);
  C(7, "f", r`Miniaturisation d'un facteur \(S\) (\(V_{DD}\) constant), d'après le cours :`, r`délai \(\dfrac{\tau}{S^2}\), fréquence \(\times S^2\)`, [r`délai \(\dfrac{\tau}{S}\), fréquence \(\times S\)`, r`délai \(\tau\,S^2\), fréquence \(\dfrac{f}{S^2}\)`, r`délai inchangé, fréquence \(\times S\)`], r`Courant \(I_{DS}\propto\dfrac WL\) : réduire \(L\) accélère la charge de \(C_{OUT}\).`);
  C(7, "k", r`Consommation statique d'une porte CMOS :`, r`quasi nulle (toujours un interrupteur ouvert entre \(V_{DD}\) et la masse)`, [r`élevée, comme en TTL`, r`égale à la dynamique`, r`proportionnelle à \(\beta\)`], r``);
  C(7, "k", r`Le nMOS tire la sortie vers ? le pMOS vers ?`, r`nMOS \(\to0\) ; pMOS \(\to1\)`, [r`nMOS \(\to1\) ; pMOS \(\to0\)`, r`les deux vers \(0\)`, r`les deux vers \(1\)`], r`nMOS conduit pour une entrée à \(1\), pMOS pour une entrée à \(0\).`);
  C(7, "k", r`Une porte CMOS est toujours :`, r`inverseuse (NAND, NOR, NOT…)`, [r`non inverseuse (AND, OR)`, r`à un seul transistor`, r`à deux nMOS seulement`], r`Pour un AND ou un OR : ajouter un inverseur.`);
  C(7, "k", r`Parcours d'Euler d'un layout :`, r`donne une seule bande de diffusion, sans coupure`, [r`double le nombre de transistors`, r`supprime les contacts`, r`augmente \(C_{OUT}\)`], r`Même ordre des entrées dans les graphes des réseaux N et P.`);
  C(7, "k", r`Une cellule SRAM comporte :`, r`6 transistors (2 inverseurs rebouclés + 2 d'accès)`, [r`1 transistor et 1 condensateur`, r`2 transistors`, r`4 diodes`], r`DRAM : 1 transistor + 1 condensateur ; Flash : grille flottante.`);

  window.CARTES = L;
  window.CARTES_CH = ["Ch0 Lois & AOP", "Ch1 Conduction", "Ch2 Semi-conducteurs", "Ch3 Diode", "Ch4 BJT statique", "Ch5 BJT dynamique", "Ch6 FET", "Ch7 CMOS"];
})();
