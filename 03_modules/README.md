# 03 les modules



# Exercice

1. Créez une application avec trois fichiers: `calculJours.ts` `moduleVacances.ts` et `moduleTravail.ts` qui utilisent des modules pour calculer le nombre de jours de vacances restants et le nombre de jours de travail restants pour un employé. 
2. Dans les deux modules `moduleVacances.ts` et `moduleTravail.ts` créez la fonction `calculerJoursRestants` avec le même nom dans les deux modules, qui prend en paramètre le nombre de jours de vacances ou de travail déjà pris et retourne le nombre de jours restants. Vous pouvez inventer les règles pour le calcul des jours de vacances et de travail restants. Exportez la fonction qui a le même nom avec `export` dans les deux modules.
3. Dans le fichier `calculJours.ts` importez les deux modules et utilisez la fonction `calculerJoursRestants` pour afficher le nombre de jours de vacances et de travail restants pour un employé. Vous devez résoudre le conflit de nom entre les deux modules (voir la partie "gestion des conflits de nommage" dans la lecture ci-dessus).
4. Affichez les résultats dans des balises `div` avec `createElement` et `appendChild`.




# Solution 


fichier index.astro

[index.astro](index.astro ":include :type=code html")




fichier moduleVacances.ts

[moduleVacances.ts](moduleVacances.ts ":include :type=code ts")


Fichier moduleTravail.ts

[moduleTravail.ts](moduleTravail.ts ":include :type=code ts")


Fichier calculJours.ts

[calculJours.ts](calculJours.ts ":include :type=code ts")


Fichier app.ts

[app.ts](app.ts ":include :type=code ts")


Fichier moduleMath.ts

[moduleMath.ts](moduleMath.ts ":include :type=code ts")