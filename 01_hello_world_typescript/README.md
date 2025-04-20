## 01_hello_world_typescript



# exercice : le typage dans typescript

comparez le fichier `hello.js` et `hello.ts` et déduisez l'étape de transpilation. A quoi sert le typage fort dans typescript qui n'existe pas dans javascript ? Répondez dans un fichier texte au format markdown.



# Réponse 

Dans le fichier hello js le typage n'est pas fort, c'est à dire que on précise le type à titre informatif mais ce n'est pas nécessaire pour executer le programme.

Dans le fichier hello ts on a une typage fort, on en déduit que lors de la transpilation on a un changement de typage faible vers typage fort.

Le typage fort permet de réduire les erreurs en faisant des conversions implicites de types, d'avoir une meilleur lisibilité et compréhention du code.