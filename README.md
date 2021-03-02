# Examen2

## Statut

```
En développement
```

## Présentation

```
Le site web est une plateforme regroupant des _développeurs Front-End_ .
Les utilisateurs connectés ont accès à leurs pages de profil et à leurs projets.
Une page contact permet aux utilisateurs de poser une question à la communauté inscrite.
```

## Technologies

[vue cli](https://cli.vuejs.org/guide/installation.html)  
[vue router](https://router.vuejs.org/installation.html)  
[jest](https://jestjs.io/docs/en/getting-started.html)

## Installation

```
vue cli : npm install -g @vue/cli
vue router: npm install vue-router
jest: npm install --save-dev jest


npm install
```

### Déploiement de l'application avec GitHub OnePage

```
1.Dans le fichier .gitignore commenter la ligne /build.
2.Synchroniser le projet avec GitHub.
3.Dans le fichier package.json
Mettre le champ private à false.
Ajouter sous "private" le champ "homepage": "./".
4.Créer un fichier vue.config.js à la racine du projet.
    Ajouter
    module.exports = {
        publicPath: "/1017examen2maudharvey/dist/",
    };
5. À la racine du projet : npm run build
6. Synchroniser de nouveau le projet sur GitHub.
7. Dans le répertoire GitHub, dans les settings, ajuster la source de GitHub Pages
avec la Branch:main et le dossier:/(root)
8. Le projet sera déployé sur l'url suivant:
https://mau-d.github.io/1017examen2maudharvey/dist/

Les choix pour cette plateforme de déploiement
1.Le projet se trouve déjà sur GitHub, pas besoin d'une autre dépendance.
2.Les changements effectués sur le projet seront automatiquement ajoutés.
Refaire un npm run build et une synchronisation du répertoire.
3.Pas besoin de changer les fichiers dans la plateforme d'hébergement.
4.Méthode déjà connu par l'utilisateur, simple et rapide.
```

### Compile et rechargement pour le développement

```
npm run serve
```

### Compile pour la production

```
npm run build
```

### Lints et fichiers fixes

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Création de l'Application vueCLI pour GitHub

vue create 1017examen2maudharvey
git pull
git add .
git commit -m"test git commit"
git push
