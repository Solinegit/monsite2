# Fonctions anonymes, fonctions fléchées, lambdas


# Exercice 1 :

Faites un projet Astro et faites en sorte que le fichier `app.ts` soit exécuté dans le navigateur (côté client). Cela permet d'accéder à l'objet `document` qui représente la page web affichée dans le navigateur.

Ajoutez un addEventListener sur le document pour afficher les coordonnées du clic de la souris.

```typescript
document.addEventListener("click", (event: MouseEvent) => {
  console.log(`x: ${event.clientX}, y: ${event.clientY}`);
});

//ici la fonction fléchée reçoit un paramètre de type MouseEvent
//qui sera passé automatiquement par le navigateur lors du clic
//En fait, la fonction fléchée est un callback qui sera appelé par le navigateur
//à chaque clic sur la page. C'est pour cela qu'on dit qu'on "ajoute" un écouteur
//d'événement sur le document. On dit aussi qu'on "écoute" l'événement "click" sur le document.
//On dit aussi qu'on "souscrit" à l'événement "click" sur le document.
```

Testez et vérifiez qu'à chaque clic de la souris, les coordonnées du clic sont affichées dans la console du navigateur.



# Exercice 2 : Calculatrice simple

Faites une application de calculatrice.

Créez une fonction fléchée **additionner** qui prend deux nombres en paramètres et retourne leur somme. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **soustraire** qui prend deux nombres en paramètres et retourne leur différence. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **multiplier** qui prend deux nombres en paramètres et retourne leur produit. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée **diviser** qui prend deux nombres en paramètres et retourne leur quotient. Utilisez une expression pour le corps de la fonction.

Créez une fonction fléchée calculatrice qui prend trois paramètres : deux nombres et une opération sous forme de chaîne de caractères ("additionner", "soustraire", "multiplier", "diviser"). Cette fonction doit utiliser une instruction pour déterminer quelle opération effectuer, puis appeler la fonction appropriée et afficher le résultat.

Par exemple,

```typescript
calculatrice(5, 3, "additionner");
```

doit afficher "La somme est: 8".

# Exercice 3 : affichage des coordonnées de la souris toutes les secondes

Faites une application qui affiche les coordonnées de la souris toutes les secondes.
Vous pouvez vous aider de la documentation de l'objet `MouseEvent` : 
https://developer.mozilla.org/fr/docs/Web/API/MouseEvent



# Réponse

Fichier index.astro

[index.astro](index.astro ":include :type=code html")

Fichier app.ts

[app.ts](app.ts ":include :type=code ts")