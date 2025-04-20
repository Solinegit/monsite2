<!DOCTYPE html>   #Déclaration du type de document, ici html5
<html lang="en">  # balise html qui contient tout le contenu de la page + info sur la langue

<head>  #en tête du document
    <meta charset="UTF-8">   #permet d'afficher les caratères spéciaux (é,è)
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> # adapte l'affichage 
    <title>WebDev101 Telecom Paris</title> #défini le titre de la page qui appait dans le navigateur
</head>

<body> #conitient le contenu visible de la page
    <script src="app.js"></script> # charge le fichier app.js 
    
</body>

</html>







const my_hello_message: string = "Hello, hello TYPESCRIPT World!"; #déclare un message texte
// create a new heading 1 element
const my_title: HTMLHeadingElement = document.createElement("h1"); #créer l'élément <h1> en javascript
my_title.textContent = my_hello_message; #on met le message dans <h1>
// add the heading the document
document.body.appendChild(my_title); # on ajoute <h1> dans le body de la page


