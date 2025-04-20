 

---

---

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  #adapte la taille de la page
    <title>WebDev101 Telecom Paris</title>
</head>

<body>
    <script src="../scripts/app.ts"></script>  # chage un fichier typescript depuis le répertoire script
    
</body>

</html>



import { pi, phi, soustraire, absolue} from "./moduleMath.ts";  #importe un module de maths typescript
const resultat: HTMLDivElement = document.createElement("div"); # cré un élément <div>
resultat.textContent = `la valeur absolue de phi - pi = ${absolue(soustraire(phi, pi)).toString()}`; #modification du contenu de div

document.body.appendChild(resultat);  # on insère la résultat dans le texte du div






