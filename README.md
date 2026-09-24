# ⚡ De l'Atome à la Puce

Site de révision pour le cours d'**Électronique « De l'atome à la puce » — ING2, Semestre 1 (ECE)**.
Statique, sans dépendance, hébergé tel quel sur GitHub Pages :
<https://lazzrio.github.io/atome-a-la-puce/>

> 📅 Évaluation : **samedi 7 novembre, 8h45-10h15** · partiels la semaine du **14 décembre**
> (dates de l'emploi du temps au 23/09/2026, à vérifier sur l'EDT officiel)

## Contenu

| Section | Description |
|---|---|
| 📚 **Cours complet** | Les 8 chapitres expliqués pas à pas, avec 119 schémas et, pour chaque chapitre, les compléments utiles aux TD |
| ✅ **TD corrigés** (`corriges.html`) | Les 11 TD du livret d'exercices : 87 fiches (23 exercices de TD que le poly ne corrige pas, 31 applications directes dont le corrigé a été revu, 33 exercices supplémentaires). Pour chaque question, tout le raisonnement : données et inconnues, loi utilisée et pourquoi, formule encadrée avec ses symboles, calcul complet avec unités, vérification du résultat, pièges, **erreurs du poly signalées**. Formules écrites comme sur une copie (rendu KaTeX). Recherche, filtres par TD et par type, suivi « fait » |
| 🧭 **Déroulés** | Table de décision + 14 exercices types résolus pas à pas avec valeurs numériques |
| 💡 **Notions clés** | Une fiche de synthèse par chapitre |
| 📘 **Formules détaillées** / ⚡ **Express** | Toutes les formules avec variables, unités et conditions, et l'aide-mémoire brut |
| 🎯 **Exos types** | Les exercices qui tombent et leur méthode |
| 🧰 **À côté** | Kit de calcul, séries E12/E24, simulation (LTspice, Falstad, KiCad), PCB et mémoires en bref, mesures en TP, pièges par chapitre, rédaction |
| 🧠 **Quiz & Flashcards** | 68 QCM + 32 flashcards |
| 📅 **Planning** | Planning du semestre calé sur les dates d'évaluation |

Toutes les valeurs des corrigés ont été recalculées (plus de 240 contrôles
numériques) et les schémas relus sur le PDF du poly.

**Fonctionnalités** : thème clair/sombre, adresses directes vers chaque vue
(`index.html#cours`, `index.html#ch5`, `corriges.html#ex6-4`), bouton « retour »
du navigateur, compte à rebours jusqu'à la prochaine évaluation, suivi de
progression (localStorage), utilisable hors ligne et installable sur téléphone
(service worker + manifest), mise en page testée à 375, 768, 1024 et 1280 px.

## Structure

```
atome-a-la-puce/
├── index.html            # page unique (vues : cours, déroulés, notions…)
├── corriges.html         # le poly de TD corrigé
├── 404.html              # page d'erreur GitHub Pages
├── manifest.webmanifest  # installation sur téléphone
├── sw.js                 # hors ligne (réseau d'abord, cache ensuite)
├── css/style.css         # design system, thèmes clair/sombre, responsive
├── js/
│   ├── app.js            # navigation, adresses, thème, progression, compte à rebours
│   ├── corriges.js       # recherche, filtres, suivi « fait » des corrigés
│   ├── maths.js          # rendu des formules (KaTeX) et ajustement à la largeur de l'écran
│   ├── quiz.js           # moteur de quiz + banque de questions
│   └── lightbox.js       # visionneuse plein écran
├── assets/
│   ├── favicon.svg, icon-192.png, icon-512.png
│   └── img/              # 119 schémas (.jpg)
├── .nojekyll
└── README.md
```

## Mettre en ligne

Le dépôt est relié à `https://github.com/lazzrio/atome-a-la-puce.git`
et GitHub Pages publie la branche **main** (dossier racine). Après un commit :

```bash
git push
```

Le site est à jour sous 1-2 minutes. Si le téléphone affiche une ancienne
version, recharger une fois la page.

## Lancer en local

```bash
python -m http.server 8765
```

Puis <http://localhost:8765>.

## Notes

- Aucune dépendance : HTML/CSS/JS natifs ; seules les polices viennent de
  Google Fonts (le site reste lisible sans elles).
- Les schémas proviennent des supports du module et sont inclus à des fins
  de révision personnelle.
- La progression est stockée dans le `localStorage` du navigateur (propre à
  chaque appareil).
