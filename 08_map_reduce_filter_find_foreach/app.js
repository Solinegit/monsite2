var tab = [0, 2, 4, 7, 1, 8];
console.log("tab: " + tab);
function fois2(x) {
    return x * 2;
}
//impossible de faire let tab2 : number[] = fois2(tab); (a tester et voir l'erreur)
//utilisation de map
var tab2 = tab.map(fois2);
console.log("tab.map(fois2): " + tab2);
//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }
var fois3 = function (x) {
    var result = x * 3;
    return result;
};
var tab3 = tab.map(fois3);
console.log("tab.map(fois3): " + tab3);
//avec expression
//(<paramètres> ...) => <expression>
var fois4 = function (x) { return x * 4; };
var tab4 = tab.map(fois4);
console.log("tab.map(fois4): " + tab4);
//fonction de filtrage
var estPair = function (x) { return x % 2 === 0; };
var tabPair = tab.filter(estPair);
console.log("tab.filter(estPair): " + tabPair);
//fonction de reduce (ici la somme de tous les éléments du tableau)
var somme = function (a, b) { return a + b; };
var tabSomme = tab.reduce(somme);
console.log("tab.reduce(somme): " + tabSomme);
//chaînage
var tabSumPairFois2 = tab.filter(estPair).map(fois2).map(fois3).reduce(somme);
console.log("tab.filter(estPair).map(fois2).map(fois3).reduce(somme): " + tabSumPairFois2);
//fonction de chaînage
function ma_chaine(tab) {
    return tab.filter(estPair).map(fois2).map(fois3).reduce(somme);
}
var tabSumPairFois2Bis = ma_chaine(tab);
console.log("ma_chaine(tab): " + tabSumPairFois2Bis);
//fonction de chaînage avec fonctions en paramètres
function ma_chaine2(tab, f_filter, f_map1, f_map2, f_reduce) {
    return tab.filter(f_filter).map(f_map1).map(f_map2).reduce(f_reduce);
}
var tabSumPairFois2Ter = ma_chaine2(tab, estPair, fois2, fois3, somme);
console.log("ma_chaine2(tab,estPair,fois2,fois3,somme): " + tabSumPairFois2Ter);
//fonction de recherche
var plusGrandQue5 = function (a) { return a > 5; };
var valeur = tab.find(plusGrandQue5);
var index = tab.findIndex(plusGrandQue5);
console.log("".concat(valeur, " est le premier \u00E9l\u00E9ment sup\u00E9rieur \u00E0 5 et il est situ\u00E9 \u00E0 la position ").concat(index));
//différence avec forEach
//La différence principale entre forEach et map est que
// map crée un nouveau tableau avec les résultats de
// l'appel d'une fonction fournie sur chaque élément
// du tableau appelant, tandis que forEach exécute
// une fonction fournie une fois pour chaque élément
// du tableau, sans modifier le tableau lui-même
// et sans créer un nouveau tableau.
// Voici un exemple de code qui illustre cette différence :
var other_tab = [1, 2, 3, 4, 5];
// Avec map
var tabMap = other_tab.map(function (x) { return x * 2; });
console.log("Avec map: ", tabMap); // Affiche [2, 4, 6, 8, 10]
// Avec forEach
other_tab.forEach(function (x, i, arr) { return (arr[i] = x * 2); });
console.log("Avec forEach: ", other_tab); // Affiche [2, 4, 6, 8, 10]
// Exemple avec le talbeau initial
// différence avec forEach (attention ici il y a un retour à la ligne 
// à chaque console.log, donc pour chaque élément !)
// forEach retourne void donc ne pas mettre le retour de forEach
// dans une variable sinon sa valeur sera undefined !
tab.forEach(function (x) {
    x = fois2(x);
    console.log("for each (fois2): " + x);
});
//Exercice 1
var fruits = [
    "pomme",
    "kiwi",
    "banane",
    "cerise",
    "orange",
    "poire",
    "fraise",
    "prune",
    "ananas",
    "pêche"
];
console.log(fruits);
// Exercice 2
var fruitsMajuscules = fruits.map(function (fruit) { return fruit.toUpperCase(); });
console.log("Fruits en majuscules :", fruitsMajuscules);
// Exercice 3
var fruitsCommencentParP = fruits.filter(function (fruit) { return fruit.startsWith("p"); });
console.log("Fruits qui commencent par 'p' :", fruitsCommencentParP);
// Exercice 4
var fruitsEnChaine = fruits.reduce(function (acc, fruit) { return acc + ", " + fruit; });
console.log("Fruits concaténés :", fruitsEnChaine);
// Exercice 5
var fruitLong = fruits.find(function (fruit) { return fruit.length > 5; });
console.log("Premier fruit avec plus de 5 lettres :", fruitLong);
