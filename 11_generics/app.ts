//Supposons que nous voulons créer une classe GenericStorage
//qui peut stocker des éléments de n'importe quel type :

class GenericStorage<T> {
  private data: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.data.set(key, value);
  }

  get(key: string): T | undefined {
    return this.data.get(key);
  }

  size(): number {
    return this.data.size;
  }
}
// Utilisation de la classe GenericStorage avec des nombres
let numberStorage = new GenericStorage<number>();
numberStorage.set("one", 1);
numberStorage.set("two", 2);
console.log(numberStorage.get("one")); // Affiche 1

// Utilisation de la classe GenericStorage avec des chaînes de caractères
let stringStorage = new GenericStorage<string>();
stringStorage.set("hello", "world");
stringStorage.set("goodbye", "cruel world");
console.log(stringStorage.get("hello")); // Affiche "world"


//exercice 1

class Queue<T> {
  private data: T[] = [];

  // Ajoute un élément à la queue
  enqueue(element: T): void {
    this.data.push(element);
  }

  // Supprime et renvoie l'élément en tête de la queue
  dequeue(): T | undefined {
    return this.data.shift();
  }

  // Renvoie le nombre d'éléments dans la queue
  size(): number {
    return this.data.length;
  }
}

// Exemple d'utilisation de la classe Queue avec des nombres
let numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue()); // Affiche 1
console.log(numberQueue.size());    // Affiche 1

// Exemple d'utilisation de la classe Queue avec des chaînes de caractères
let stringQueue = new Queue<string>();
stringQueue.enqueue("hello");
stringQueue.enqueue("world");
console.log(stringQueue.dequeue()); // Affiche "hello"
console.log(stringQueue.size());    // Affiche 1



//exercice 2

class Queue2<T> {
  private data: T[] = [];

  // Ajoute un élément à la queue
  enqueue(element: T): void {
    this.data.push(element);
  }

  // Supprime et renvoie l'élément en tête de la queue
  dequeue(): T | undefined {
    return this.data.shift();
  }

  // Renvoie le nombre d'éléments dans la queue
  size(): number {
    return this.data.length;
  }
}

// Testez votre code ici

// Création d'une instance de Queue qui stocke des nombres
let numberQueue2 = new Queue<number>();

// Utilisation de la méthode enqueue pour ajouter des éléments
numberQueue2.enqueue(10);
numberQueue2.enqueue(20);
numberQueue2.enqueue(30);

// Utilisation de la méthode dequeue pour supprimer et récupérer un élément
console.log(numberQueue2.dequeue()); // Affiche 10

// Vérification de la taille de la queue
console.log(numberQueue2.size()); // Affiche 2

// Création d'une instance de Queue qui stocke des chaînes de caractères
let stringQueue2 = new Queue<string>();

// Utilisation de la méthode enqueue pour ajouter des éléments
stringQueue2.enqueue("apple");
stringQueue2.enqueue("banana");
stringQueue2.enqueue("cherry");

// Utilisation de la méthode dequeue pour supprimer et récupérer un élément
console.log(stringQueue2.dequeue()); // Affiche "apple"

// Vérification de la taille de la queue
console.log(stringQueue2.size()); // Affiche 2
