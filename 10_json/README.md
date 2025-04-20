# Le JSON : JavaScript Object Notation



# Exercice

1. Créez une interface `IUser` qui représente un utilisateur avec les propriétés `id`, `name`, `age`, et un tableau de scores `scores` (qui sont des nombres entiers) et les méthodes `getMaxScore` et `getAverageScore`.
2. Créez une classe `User` qui implémente `IUser`
3. Créez trois instances de `User`.
4. Créez un tableau contenant des `IUser` (attention c'est bien des `IUser` et non des `User`) et mettez-y les trois instances de `User` que vous avez créées.
5. Créez une fonction `serializeUsers` qui sérialise un tableau de `IUser` en une chaîne JSON. Appelez cette fonction avec le tableau que vous avez créé à l'étape 4 et affichez le résultat dans la console.
6. Créez une fonction `deserializeUsers` qui prend une chaîne JSON et retourne un tableau de `IUser`. Appelez cette fonction avec le résultat de la fonction `serializeUsers` et affichez le résultat dans la console.
7. Est-il possible d'appeler les méthodes `getMaxScore` et `getAverageScore` des objets désérialisés lors de l'étape précédente ? Pourquoi ?
8. Trouvez une façon de rendre possible l'appel des méthodes `getMaxScore` et `getAverageScore` des objets désérialisés. Pour cela vous pouvez créer, pour chaque objet désérialisé, une nouvelle instance de la classe `User` et copier les propriétés de l'objet désérialisé dans l'instance de `User`.
8. Affichez le nom du deuxième utilisateur du tableau désérialisé ainsi que son score le plus élevé et son score moyen.

# Réponse

[app.ts](app.ts ":include :type=code ts")