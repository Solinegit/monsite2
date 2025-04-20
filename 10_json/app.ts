//voir https://www.json.org/json-fr.html

//dé-sérialisation de JSON vers des objets (eux-même décrits par une interface)

let data = `[
    {
      "id": "1042",
      "name": "Joe",
      "age": 27,
      "scores": [31.4, 29.9, 35.7]
    },
    {
      "id": "1071",
      "name": "Sarah",
      "age": 29,
      "scores": [25.0, 27.1]
    }
  ]`;

interface UserInterface {
  id: string;
  name: string;
  age: number;
  scores: number[];

  
}

//dé-sérialisation de JSON vers un tableau d'objets

let users: UserInterface[] = JSON.parse(data);

users.forEach((u) => {
  console.log(`id: ${u.id}, name: ${u.name}, age: ${u.age}`);
  u.scores.forEach((s) => {
    console.log(`    score[${u.scores.indexOf(s)}]: ${s}`);
  });
});

//sérialisation d'objets (instanciés depuis une classe qui implémente une interface) vers JSON

class Userx implements UserInterface {
  id: string;
  name: string;
  age: number;
  scores: number[];
  constructor(id: string, name: string, age: number, scores: number[]) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }

  getMaxScore(): number {
    return Math.max(...this.scores);
  }

  getAverageScore(): number {
    if (this.scores.length === 0) return 0;
    const sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length;
  }

}

//création d'objets (instanciés depuis la classe User
//qui implémente l'interface UserInterface)

let u1: UserInterface, u2: UserInterface;
u1 = new Userx("456", "Eya", 23, [2.4, 34]);
u2 = new Userx("789", "Emma", 32, [23.1, 9, 5]);

//sans utiliser de classe cela donne

let u3: UserInterface = {
  id: "1042",
  name: "Joe",
  age: 27,
  scores: [31.4, 29.9, 35.7],
};

//création d'un tableau de 3 objets (instanciés depuis la classe Use
//qui implémente l'interface UserInterface)

let users2: UserInterface[] = [u1, u2, u3];

//sérialisation du tableau users2 vers JSON

let data2: string = JSON.stringify(users2);

console.log(data2);



// Exercice 1 :

interface IUser {
  id: number;
  name: string;
  age: number;
  scores: number[];

  getMaxScore(): number;
  getAverageScore(): number;
}


class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public scores: number[]
  ) {}

  getMaxScore(): number {
    return Math.max(...this.scores);
  }

  getAverageScore(): number {
    if (this.scores.length === 0) return 0;
    const sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length;
  }
}


//const user1 = new User(1, "Alice", 25, [78, 92, 85, 88]);

//console.log("Nom:", user1.name);
//console.log("Score max:", user1.getMaxScore()); // 92
//console.log("Moyenne des scores:", user1.getAverageScore()); // 85.75


//exercice 2 :

const user1 = new User(1, "Alice", 25, [78, 92, 85, 88]);
const user2 = new User(2, "Bob", 30, [65, 70, 72]);
const user3 = new User(3, "Charlie", 22, [90, 95, 100, 85, 80]);

console.log("=== Utilisateur 1 ===");
console.log("Nom:", user1.name);
console.log("Score max:", user1.getMaxScore());
console.log("Moyenne des scores:", user1.getAverageScore());

console.log("\n=== Utilisateur 2 ===");
console.log("Nom:", user2.name);
console.log("Score max:", user2.getMaxScore());
console.log("Moyenne des scores:", user2.getAverageScore());

console.log("\n=== Utilisateur 3 ===");
console.log("Nom:", user3.name);
console.log("Score max:", user3.getMaxScore());
console.log("Moyenne des scores:", user3.getAverageScore());


//exercice 3 :

// On suppose que la classe User implémente déjà l'interface IUser
const user: IUser[] = [user1, user2, user3];



function serializeUsers(users: IUser[]): string {
  // On enlève les méthodes car JSON.stringify ne les inclut pas, mais on le fait explicitement ici pour plus de clarté
  return JSON.stringify(users.map(user => ({
    id: user.id,
    name: user.name,
    age: user.age,
    scores: user.scores
  })));
}

// Appel de la fonction avec le tableau `users`
const serializedUsers = serializeUsers(user);
console.log(serializedUsers);


//exercice 6 :

function deserializeUsers(json: string): IUser[] {
  const parsed = JSON.parse(json);
  return parsed.map((userData: any) => new User(userData.id, userData.name, userData.age, userData.scores));
}

// Appel de la fonction avec le JSON obtenu précédemment
const deserializedUsers = deserializeUsers(serializedUsers);
console.log(deserializedUsers);

// Affichage pour vérifier que les méthodes fonctionnent
deserializedUsers.forEach(user => {
  console.log(`${user.name} - Max Score: ${user.getMaxScore()}, Average Score: ${user.getAverageScore().toFixed(2)}`);
});


//exercice 7 :

// Non, ce n'est pas possible directement car JSON.parse retourne de simples objets 
// sans les méthodes de la classe User. Pour pouvoir appeler getMaxScore ou getAverageScore,
// il faut recréer des instances de User à partir des données désérialisées.


//exercice 8 :

// Fonction de désérialisation qui crée des instances de User
function deserializeUsersWithMethods(json: string): IUser[] {
  const parsedUsers = JSON.parse(json);
  return parsedUsers.map((user: any) => {
    // Créer une nouvelle instance de User
    const newUser = new User(user.id, user.name, user.age, user.scores);
    return newUser;
  });
}

// Exemple d'utilisation
const serializedUsers2 = serializeUsers(user);
const deserializedUsers2 = deserializeUsersWithMethods(serializedUsers2);

// Affichage des résultats
deserializedUsers2.forEach(user => {
  console.log(`Max Score: ${user.getMaxScore()}`);
  console.log(`Average Score: ${user.getAverageScore()}`);
});


//exercice 9 :

// Exemple d'utilisation après avoir désérialisé les utilisateurs
const serializedUsers3 = serializeUsers(user);
const deserializedUsers3 = deserializeUsersWithMethods(serializedUsers3);

// Récupérer le deuxième utilisateur (index 1)
const secondUser = deserializedUsers3[1];

// Afficher le nom, le score le plus élevé et le score moyen
console.log(`Nom : ${secondUser.name}`);
console.log(`Score le plus élevé : ${secondUser.getMaxScore()}`);
console.log(`Score moyen : ${secondUser.getAverageScore()}`);
