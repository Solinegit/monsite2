//Supposons que nous voulons créer une classe GenericStorage
//qui peut stocker des éléments de n'importe quel type :
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.data = new Map();
    }
    GenericStorage.prototype.set = function (key, value) {
        this.data.set(key, value);
    };
    GenericStorage.prototype.get = function (key) {
        return this.data.get(key);
    };
    GenericStorage.prototype.size = function () {
        return this.data.size;
    };
    return GenericStorage;
}());
// Utilisation de la classe GenericStorage avec des nombres
var numberStorage = new GenericStorage();
numberStorage.set("one", 1);
numberStorage.set("two", 2);
console.log(numberStorage.get("one")); // Affiche 1
// Utilisation de la classe GenericStorage avec des chaînes de caractères
var stringStorage = new GenericStorage();
stringStorage.set("hello", "world");
stringStorage.set("goodbye", "cruel world");
console.log(stringStorage.get("hello")); // Affiche "world"
//exercice 1
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    // Ajoute un élément à la queue
    Queue.prototype.enqueue = function (element) {
        this.data.push(element);
    };
    // Supprime et renvoie l'élément en tête de la queue
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    // Renvoie le nombre d'éléments dans la queue
    Queue.prototype.size = function () {
        return this.data.length;
    };
    return Queue;
}());
// Exemple d'utilisation de la classe Queue avec des nombres
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue()); // Affiche 1
console.log(numberQueue.size()); // Affiche 1
// Exemple d'utilisation de la classe Queue avec des chaînes de caractères
var stringQueue = new Queue();
stringQueue.enqueue("hello");
stringQueue.enqueue("world");
console.log(stringQueue.dequeue()); // Affiche "hello"
console.log(stringQueue.size()); // Affiche 1
//exercice 2
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data = [];
    }
    // Ajoute un élément à la queue
    Queue2.prototype.enqueue = function (element) {
        this.data.push(element);
    };
    // Supprime et renvoie l'élément en tête de la queue
    Queue2.prototype.dequeue = function () {
        return this.data.shift();
    };
    // Renvoie le nombre d'éléments dans la queue
    Queue2.prototype.size = function () {
        return this.data.length;
    };
    return Queue2;
}());
// Testez votre code ici
// Création d'une instance de Queue qui stocke des nombres
var numberQueue2 = new Queue();
// Utilisation de la méthode enqueue pour ajouter des éléments
numberQueue2.enqueue(10);
numberQueue2.enqueue(20);
numberQueue2.enqueue(30);
// Utilisation de la méthode dequeue pour supprimer et récupérer un élément
console.log(numberQueue2.dequeue()); // Affiche 10
// Vérification de la taille de la queue
console.log(numberQueue2.size()); // Affiche 2
// Création d'une instance de Queue qui stocke des chaînes de caractères
var stringQueue2 = new Queue();
// Utilisation de la méthode enqueue pour ajouter des éléments
stringQueue2.enqueue("apple");
stringQueue2.enqueue("banana");
stringQueue2.enqueue("cherry");
// Utilisation de la méthode dequeue pour supprimer et récupérer un élément
console.log(stringQueue2.dequeue()); // Affiche "apple"
// Vérification de la taille de la queue
console.log(stringQueue2.size()); // Affiche 2
