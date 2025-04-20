# Async Await

# Exercice 1

1. Créez une fonction `calculateSumAsync` qui prend deux nombres comme arguments et retourne une promesse (`Promise`) qui se résout à leur somme après un délai de 3 secondes.
2. Utilisez `async` et `await` pour appeler `calculateSumAsync` dans une autre fonction `printSum`. `printSum` doit afficher le message "Calcul en cours..." avant d'appeler `calculateSumAsync`, puis afficher le résultat une fois qu'il est prêt.

# Exercice 2

1. Créez une fonction `verifyUser` qui prend un nom d'utilisateur et un mot de passe comme arguments. Cette fonction doit retourner une promesse (`Promise`) qui se résout (`resolve`) si le nom d'utilisateur et le mot de passe sont corrects, et se rejette (`reject`) si l'un d'eux est incorrect.
2. Utilisez `then` et `catch` pour gérer la promesse retournée par `verifyUser`. Si la promesse est résolue, affichez un message de bienvenue à l'utilisateur. Si la promesse est rejetée, affichez un message d'erreur.

# Exercice 3

Reprenez les exercices 1 et 2 mais cette fois-ci utilisez des classes (`Calculator` pour l'exercice 1 et `User` pour l'exercice 2). La fonction `calculateSumAsync` doit être une méthode de la classe `Calculator` et la fonction `verifyUser` doit être une méthode de la classe `User`.



# Réponse

Fichier app.ts

[app.ts](app.ts ":include :type=code ts")