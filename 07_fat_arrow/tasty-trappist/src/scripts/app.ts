//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }

// Premier exemple avec instructions
const ajouter = (a: number, b: number): void => {
  const somme = a + b;
  console.log(`La somme est: ${somme}`);
};
ajouter(5, 3); // Affiche "La somme est: 8"

//avec expression
//(<paramètres> ...) => <expression>

// Deuxième exemple avec expression
const multiplier = (a: number, b: number): number => a * b;
console.log(multiplier(5, 3)); // Affiche "15"

//Troisième exemple de fonction fléchée qui ne prend pas de paramètre
//et qui est passée en paramètre de setTimeout et setInterval

//setTimeout déclenche une fonction une seule fois après x secondes
setTimeout(() => {
  console.log("4 secondes se sont écoulées");
}, 4000);

//setInterval déclenche une fonction toutes les x secondes
setInterval(() => {
  console.log("répétition: 9 secondes se sont écoulées");
}, 9000);

//quatrième exemple
//comment accéder à des variables extérieures depuis une fonction fléchée?

let x = 5;
let y = 3;
let z = 2;
//on peut accéder à des variables extérieures
const afficherVariables = () => {
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
};
afficherVariables(); // Affiche "x: 5, y: 3, z: 2"

//Cinquième exemple de passage de fonction en paramètre

const afficher = (
  a: number,
  b: number,
  operation: (a: number, b: number) => number
) => {
  console.log(`Le résultat est: ${operation(a, b)}`);
};

afficher(5, 3, multiplier); // Affiche "Le résultat est: 15"
//on ne peut pas faire afficher(5, 3, ajouter); car ajouter retourne void et non number
//on ne peut pas faire afficher(5, 3, (a: number, b: number) => { console.log(a + b); }); car cette fonction retourne void et non number
afficher(5, 3, (a: number, b: number) => a / b); // Affiche "Le résultat est: 1.6666666666666667"
afficher(5, 3, (a: number, b: number) => a % b); // Affiche "Le résultat est: 2"
afficher(5, 3, (a: number, b: number) => a ** b); // Affiche "Le résultat est: 125"
afficher(5, 3, (a: number, b: number) => Math.pow(a, b)); // Affiche "Le résultat est: 125"
//ici on va donner une fonction fléchée qui retourne le nombre composé de a fois le chiffre b
afficher(5, 3, (a: number, b: number) => {
  let resultat: string = "";
  for (let i = 0; i < a; i++) {
    resultat += b;
  }
  return parseInt(resultat);
});
// Affiche "Le résultat est: 33333"




document.addEventListener("click", (event: MouseEvent) => {
  console.log(`x: ${event.clientX}, y: ${event.clientY}`);
});

//ici la fonction fléchée reçoit un paramètre de type MouseEvent
//qui sera passé automatiquement par le navigateur lors du clic
//En fait, la fonction fléchée est un callback qui sera appelé par le navigateur
//à chaque clic sur la page. C'est pour cela qu'on dit qu'on "ajoute" un écouteur
//d'événement sur le document. On dit aussi qu'on "écoute" l'événement "click" sur le document.
//On dit aussi qu'on "souscrit" à l'événement "click" sur le document.
// ca marche


// Exercice 2

// Fonctions fléchées pour les opérations
const additionner = (a: number, b: number): number => a + b;
const soustraire = (a: number, b: number): number => a - b;
const diviser = (a: number, b: number): number => a / b;

// Fonction fléchée calculatrice
const calculatrice = (a: number, b: number, operation: string): void => {
  switch (operation) {
    case "additionner":
      console.log(`La somme est: ${additionner(a, b)}`);
      break;
    case "soustraire":
      console.log(`La différence est: ${soustraire(a, b)}`);
      break;
    case "multiplier":
      console.log(`Le produit est: ${multiplier(a, b)}`);
      break;
    case "diviser":
      if (b !== 0) {
        console.log(`Le quotient est: ${diviser(a, b)}`);
      } else {
        console.log("Erreur: division par zéro !");
      }
      break;
    default:
      console.log("Opération non reconnue.");
  }
};

// Exemple d'utilisation
calculatrice(5, 3, "additionner");
calculatrice(10, 4, "soustraire");
calculatrice(6, 7, "multiplier");
calculatrice(20, 4, "diviser");
calculatrice(10, 0, "diviser");


// Exercice 3

let mouseX: number = 0;
let mouseY: number = 0;

// Met à jour les coordonnées quand la souris bouge
document.addEventListener("mousemove", (event: MouseEvent): void => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Affiche les coordonnées toutes les secondes
setInterval(() => {
  const coordsElement = document.getElementById("coords");
  if (coordsElement) {
    coordsElement.textContent = `X: ${mouseX}, Y: ${mouseY}`;
  }
}, 1000);
