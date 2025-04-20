# Les objets en TypeScript: héritage, polymorphisme, interfaces, classes abstraites



# Exercice

1. Créez une interface `IVehicle` qui définit une méthode `drive` qui renvoie `void` et une méthode `honk` qui renvoie `void`.
2. Créez une classe abstraite `Vehicle` qui implémente `IVehicle` et qui a une propriété `speed` et une méthode abstraite `honk` (qui renvoie `void`) et qui donne l'implémentation de `drive` = affichage de `Driving at ${this.speed} km/h` dans la console.
3. Créez une classe `Car` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Beep beep!" dans la console.
4. Créez une classe `Bicycle` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Ring Ring" dans la console.
5. Créez deux instances de Car et trois de Bicycle et ajoutez-les à un tableau `vehicles` de type `IVehicle[]` (on utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau).
6. Parcourez le tableau `vehicles` avec une boucle `for...of` et appelez les méthodes `drive` et `honk` à chaque itération.


# Réponse

fichier app.ts

[app.ts](app.ts ":include :type=code ts")