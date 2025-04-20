# 02_hello_astro_typescript


# Exercice

- créer une application web servie avec Astro, en TypeScript qui affiche "Bonjour, TypeScript!" dans la page web:
  - créer programmatiquement (depuis le script TypeScript) un div avec un id "app"
  - créer un h1 avec le texte "Bonjour, TypeScript!"
  - ajouter le h1 dans le div
  - ajouter le div dans le body
- Démarrez un serveur avec astro et déboguez dans Chrome votre application.


# Code 


Fichier index.astro 

[index.astro](index.astro ":include :type=code html")

Fichier app.ts

---
const my_hello_message: string = "Hello, hello TYPESCRIPT World!";
// create a new heading 1 element
const my_title: HTMLHeadingElement = document.createElement("h1");
my_title.textContent = my_hello_message;
// add the heading the document
document.body.appendChild(my_title);
---