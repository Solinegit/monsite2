# HTTP CRUD


# Exercice

Modifiez le fichier `app.ts` pour bien gérer les modifications des relations entre les restaurants et les catégories:

- à chaque suppression/modification d'une catégorie, modifiez les `categoryIds` de tous les restaurants qui la contiennent
- à chaque suppression/modification d'un restaurant, modifiez les `restaurantIds` de toutes les catégories qui le contiennent
- à chaque suppression/modification modifiez les relations dans `restaurantCategories`


# Réponse 

Ficher app.ts 

[app.ts](app.ts ":include :type=code ts")