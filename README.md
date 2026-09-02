# ⚡ De l'Atome à la Puce

Site de révision pour le cours d'**Électronique fondamentale — ING2, Semestre 1**.
Statique, sans dépendance, hébergeable tel quel sur GitHub Pages.

> 📅 Partiel : **14 décembre** (1h30)

## Contenu

| Section | Description |
|---|---|
| 📚 **Cours complet** | Les 8 chapitres expliqués pas à pas, dédoublonnés, avec 119 schémas |
| 💡 **Notions clés** | Une fiche de synthèse par chapitre — l'essentiel pour l'examen |
| 📘 **Formules détaillées** | Toutes les formules + constantes, variables, unités et conditions |
| ⚡ **Formules express** | Aide-mémoire brut, format anti-sèche |
| 🎯 **Exos types** | Les exercices qui tombent et leur méthode, chapitre par chapitre |
| 🧠 **Quiz & Flashcards** | 51 QCM + 32 flashcards, chapitres au choix, ordre ou aléatoire |
| 📅 **Planning** | Planning de révision du semestre, rythme équilibré |

**Fonctionnalités** : thème clair/sombre, suivi de progression (localStorage),
compte à rebours du Partiel, visionneuse plein écran, responsive mobile.

## Structure

```
atome-a-la-puce/
├── index.html          # page unique (SPA, ~160 Ko)
├── css/
│   └── style.css       # design system, thèmes clair/sombre
├── js/
│   ├── app.js          # navigation, thème, progression, filtres
│   ├── quiz.js         # moteur de quiz + banque de questions
│   └── lightbox.js     # visionneuse plein écran
├── assets/
│   ├── favicon.svg
│   └── img/            # 119 schémas (.jpg)
├── .nojekyll           # désactive Jekyll sur GitHub Pages
└── README.md
```

## Publier sur GitHub Pages

### 1. Créer le dépôt

Sur [github.com/new](https://github.com/new), créez un dépôt **public**
(ex. `atome-a-la-puce`). Ne cochez rien (pas de README, pas de .gitignore).

### 2. Pousser le code

> ⚠️ **N'utilisez pas le bouton « Upload files » du site GitHub** : il est limité à
> **100 fichiers par envoi**, or ce projet en contient 128. Git en ligne de commande
> n'a pas cette limite.

Le dépôt local est **déjà initialisé et commité** (branche `main`).
Il ne reste qu'à le relier à GitHub et à l'envoyer, depuis ce dossier :

```bash
git remote add origin https://github.com/VOTRE-PSEUDO/atome-a-la-puce.git
git push -u origin main
```

Git demandera votre identifiant GitHub et un **jeton d'accès personnel**
(pas votre mot de passe) : créez-le sur
<https://github.com/settings/tokens> → *Generate new token (classic)* →
cochez la portée **repo**.

### 3. Activer Pages

Dans le dépôt : **Settings** → **Pages** → *Build and deployment* →
**Source : Deploy from a branch** → Branche **main**, dossier **/ (root)** → **Save**.

Le site sera en ligne sous 1–2 minutes à l'adresse :

```
https://VOTRE-PSEUDO.github.io/atome-a-la-puce/
```

### 4. Mettre à jour plus tard

```bash
git add .
git commit -m "Mise à jour"
git push
```

## Lancer en local

Les fichiers étant séparés, ouvrir `index.html` directement en `file://`
empêche le chargement du CSS/JS sur certains navigateurs.
Lancez plutôt un petit serveur :

```bash
python -m http.server 8765
```

Puis ouvrez <http://localhost:8765>.

## Notes

- **Aucune dépendance à installer** : HTML/CSS/JS natifs. Seules les polices
  (Google Fonts) sont chargées depuis le réseau — le site reste lisible sans elles.
- Les schémas proviennent des supports de cours du module et sont inclus
  à des fins de **révision personnelle**. Si vous rendez le dépôt public,
  vérifiez que cette réutilisation vous convient (ou passez le dépôt en privé —
  GitHub Pages reste disponible sur les comptes Pro/Éducation).
- La progression de lecture est stockée dans le `localStorage` du navigateur :
  elle est propre à chaque appareil.
