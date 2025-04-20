# Exceptions



# Exercice

1. Créer la classe `Rectangle` avec les propriétés `longueur` et `largeur` et un constructeur qui prend deux paramètres pour initialiser ces propriétés.
2. Ajoutez une méthode `calculerSurface`. N'oubliez pas de gérer le cas où la longueur ou la largeur sont négatives ou nulles en utilisant throw.
3. Ajouter la méthode `essayerCalculSurface` à la classe Rectangle qui utilise un bloc `try-catch-finally` pour appeler la méthode `calculerSurface` et gérer les erreurs potentielles.
4. Enfin, créez trois instances de la classe Rectangle pour tester les cas où la longueur ou la largeur sont négatives ou nulles et utilisez ces instances pour appeler la méthode `essayerCalculSurface` pour voir comment elle gère les erreurs.


# Réponse 

[app.ts](app.ts ":include :type=code ts")