//voir https://www.json.org/json-fr.html
//dé-sérialisation de JSON vers des objets (eux-même décrits par une interface)
var data = "[\n    {\n      \"id\": \"1042\",\n      \"name\": \"Joe\",\n      \"age\": 27,\n      \"scores\": [31.4, 29.9, 35.7]\n    },\n    {\n      \"id\": \"1071\",\n      \"name\": \"Sarah\",\n      \"age\": 29,\n      \"scores\": [25.0, 27.1]\n    }\n  ]";
//dé-sérialisation de JSON vers un tableau d'objets
var users = JSON.parse(data);
users.forEach(function (u) {
    console.log("id: ".concat(u.id, ", name: ").concat(u.name, ", age: ").concat(u.age));
    u.scores.forEach(function (s) {
        console.log("    score[".concat(u.scores.indexOf(s), "]: ").concat(s));
    });
});
//sérialisation d'objets (instanciés depuis une classe qui implémente une interface) vers JSON
var Userx = /** @class */ (function () {
    function Userx(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    Userx.prototype.getMaxScore = function () {
        return Math.max.apply(Math, this.scores);
    };
    Userx.prototype.getAverageScore = function () {
        if (this.scores.length === 0)
            return 0;
        var sum = this.scores.reduce(function (acc, score) { return acc + score; }, 0);
        return sum / this.scores.length;
    };
    return Userx;
}());
//création d'objets (instanciés depuis la classe User
//qui implémente l'interface UserInterface)
var u1, u2;
u1 = new Userx("456", "Eya", 23, [2.4, 34]);
u2 = new Userx("789", "Emma", 32, [23.1, 9, 5]);
//sans utiliser de classe cela donne
var u3 = {
    id: "1042",
    name: "Joe",
    age: 27,
    scores: [31.4, 29.9, 35.7],
};
//création d'un tableau de 3 objets (instanciés depuis la classe Use
//qui implémente l'interface UserInterface)
var users2 = [u1, u2, u3];
//sérialisation du tableau users2 vers JSON
var data2 = JSON.stringify(users2);
console.log(data2);
var User = /** @class */ (function () {
    function User(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    User.prototype.getMaxScore = function () {
        return Math.max.apply(Math, this.scores);
    };
    User.prototype.getAverageScore = function () {
        if (this.scores.length === 0)
            return 0;
        var sum = this.scores.reduce(function (acc, score) { return acc + score; }, 0);
        return sum / this.scores.length;
    };
    return User;
}());
//const user1 = new User(1, "Alice", 25, [78, 92, 85, 88]);
//console.log("Nom:", user1.name);
//console.log("Score max:", user1.getMaxScore()); // 92
//console.log("Moyenne des scores:", user1.getAverageScore()); // 85.75
//exercice 2 :
var user1 = new User(1, "Alice", 25, [78, 92, 85, 88]);
var user2 = new User(2, "Bob", 30, [65, 70, 72]);
var user3 = new User(3, "Charlie", 22, [90, 95, 100, 85, 80]);
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
var user = [user1, user2, user3];
function serializeUsers(users) {
    // On enlève les méthodes car JSON.stringify ne les inclut pas, mais on le fait explicitement ici pour plus de clarté
    return JSON.stringify(users.map(function (user) { return ({
        id: user.id,
        name: user.name,
        age: user.age,
        scores: user.scores
    }); }));
}
// Appel de la fonction avec le tableau `users`
var serializedUsers = serializeUsers(user);
console.log(serializedUsers);
//exercice 6 :
function deserializeUsers(json) {
    var parsed = JSON.parse(json);
    return parsed.map(function (userData) { return new User(userData.id, userData.name, userData.age, userData.scores); });
}
// Appel de la fonction avec le JSON obtenu précédemment
var deserializedUsers = deserializeUsers(serializedUsers);
console.log(deserializedUsers);
// Affichage pour vérifier que les méthodes fonctionnent
deserializedUsers.forEach(function (user) {
    console.log("".concat(user.name, " - Max Score: ").concat(user.getMaxScore(), ", Average Score: ").concat(user.getAverageScore().toFixed(2)));
});
//exercice 7 :
// Non, ce n'est pas possible directement car JSON.parse retourne de simples objets 
// sans les méthodes de la classe User. Pour pouvoir appeler getMaxScore ou getAverageScore,
// il faut recréer des instances de User à partir des données désérialisées.
//exercice 8 :
// Fonction de désérialisation qui crée des instances de User
function deserializeUsersWithMethods(json) {
    var parsedUsers = JSON.parse(json);
    return parsedUsers.map(function (user) {
        // Créer une nouvelle instance de User
        var newUser = new User(user.id, user.name, user.age, user.scores);
        return newUser;
    });
}
// Exemple d'utilisation
var serializedUsers2 = serializeUsers(user);
var deserializedUsers2 = deserializeUsersWithMethods(serializedUsers2);
// Affichage des résultats
deserializedUsers2.forEach(function (user) {
    console.log("Max Score: ".concat(user.getMaxScore()));
    console.log("Average Score: ".concat(user.getAverageScore()));
});
//exercice 9 :
// Exemple d'utilisation après avoir désérialisé les utilisateurs
var serializedUsers3 = serializeUsers(user);
var deserializedUsers3 = deserializeUsersWithMethods(serializedUsers3);
// Récupérer le deuxième utilisateur (index 1)
var secondUser = deserializedUsers3[1];
// Afficher le nom, le score le plus élevé et le score moyen
console.log("Nom : ".concat(secondUser.name));
console.log("Score le plus \u00E9lev\u00E9 : ".concat(secondUser.getMaxScore()));
console.log("Score moyen : ".concat(secondUser.getAverageScore()));
