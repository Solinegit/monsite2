// Une fonction qui retourne une promesse qui se résout après un délai spécifié
function delay(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds); //ici resolve est une fonction qui ne prend pas de paramètre
    //et qui sera appelée après le délai spécifié
    //on ne voit pas le code de resolve mais elle est fournie par la promesse
    //cette fonction doit être appelée pour résoudre la promesse
    //or setTimeout appelle la fonction passée en paramètre après le délai spécifié
    //donc la promesse sera résolue après le délai spécifié
  });
}

// Une fonction asynchrone qui utilise la fonction de délai
async function fetchData(): Promise<string> {
  console.log("Fetching data...");
  await delay(2000); // Attendre 2 secondes
  console.log("Data fetched!");
  return "Some data";
}

// Appeler la fonction asynchrone
fetchData().then((data) => console.log(data));
//ici le then est appelé après que la promesse retournée par fetchData soit résolue
//et on récupère la valeur de la promesse (ici "Some data") dans le callback de then
//et on l'affiche

//même exemple mais dans une classe

class DataService {
  delay(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  async fetchData(): Promise<string> {
    console.log("Fetching data...");
    await this.delay(2000); // Attendre 2 secondes
    console.log("Data fetched!");
    return "Some data";
  }

  async retrieveData() {
    try {
      const data : string = await this.fetchData(); //ici data est de type string
      //car la fonction fetchData retourne une promesse de string
      //et on a utilisé await pour attendre la résolution de la promesse
      //ce qui nous donne directement la valeur de la promesse
      //or la valeur de la promesse est de type string
      //donc data est de type string
      console.log(data);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération des données",
        error
      );
    }
  }
}

const dataService = new DataService();
dataService.retrieveData(); //ici on utilise pas then ni await 
//car retrieveData est une méthode asynchrone qui utilise elle-même await

//autre exemple
// Une fonction qui retourne une promesse qui se résout
// si la lecture réussit, et se rejette si elle échoue
function readFile(filename: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // Simuler une opération de lecture de fichier
    const success = Math.random() > 0.5; // 50% de chance de réussir

    setTimeout(() => {
      if (success) {
        //ici simuler la lecture du fichier réussie
        resolve("Lecture du fichier OK");
      } else {
        //ici simuler la lecture du fichier échouée
        reject(new Error("Erreur de lecture du fichier!"));
      }
    }, 2000);
  });
}

// Utiliser la promesse
readFile("monFichier.txt") //ici ce fichier n'existe pas, mais comme vous pouvez le voir au dessus, la lecture réussit 50% du temps sans "vraiment" lire un fichier, il s'agit d'une simulation
  .then((retour) => console.log(retour))//ici on affiche le retour de la promesse, c'est à dire "Lecture du fichier OK"
  .catch((error) => console.error(error.message));

//même exemple mais dans une classe

class FileService {
  readFileInsideClass(filename: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const success = Math.random() > 0.5;

      setTimeout(() => {
        if (success) {
          resolve("Lecture du fichier OK (depuis une classe)");
        } else {
          reject(new Error("Erreur de lecture du fichier (depuis une classe)"));
        }
      }, 2000);
    });
  }

  async retrieveFileContent(filename: string) {
    try {
      const retour = await this.readFileInsideClass(filename);
      console.log(retour); //ici le retour est "Lecture du fichier OK (depuis une classe)"
    } catch (error) {
      console.error(error.message); //ici on affiche "Erreur de lecture du fichier (depuis une classe)"
    }
  }
}

const fileService = new FileService();
fileService.retrieveFileContent("monFichier.txt");
//ici le fichier n'existe pas, mais comme vous pouvez le voir au dessus, la lecture réussit 50% du temps sans "vraiment" lire un fichier, il s'agit d'une simulation





//exercice 1



// Une fonction qui retourne une promesse qui se résout après un délai de 3 secondes
function calculateSumAsync(a: number, b: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      const sum = a + b; // Calcul de la somme
      resolve(sum); // Résolution de la promesse avec la somme
    }, 3000); // Délai de 3 secondes
  });
}

// Fonction asynchrone pour afficher la somme
async function printSum(a: number, b: number): Promise<void> {
  console.log("Calcul en cours..."); // Afficher avant de commencer le calcul
  const sum = await calculateSumAsync(a, b); // Attendre la résolution de la promesse
  console.log(`La somme est : ${sum}`); // Afficher le résultat une fois que la promesse est résolue
}

// Appel de printSum
printSum(5, 7); // Affichera d'abord "Calcul en cours...", puis "La somme est : 12" après 3 secondes



//exercice 2

// Fonction qui vérifie le nom d'utilisateur et le mot de passe
function verifyUser(username: string, password: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const correctUsername = "admin"; // Nom d'utilisateur correct
    const correctPassword = "password123"; // Mot de passe correct

    // Vérification des informations
    if (username === correctUsername && password === correctPassword) {
      resolve("Utilisateur vérifié avec succès"); // Résolution si les informations sont correctes
    } else {
      reject("Nom d'utilisateur ou mot de passe incorrect"); // Rejet si l'une des informations est incorrecte
    }
  });
}

// Exemple d'utilisation de la fonction
verifyUser("admin", "password123")
  .then((message) => console.log(message)) // Si les informations sont correctes
  .catch((error) => console.error(error)); // Si une erreur se produit


  


  //exercice 3

  //exo1

  class Calculator {
    // Méthode qui retourne une promesse qui se résout après un délai de 3 secondes
    addNumbersAsync(a: number, b: number): Promise<number> {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          const sum = a + b; // Calcul de la somme
          resolve(sum); // Résolution de la promesse avec la somme
        }, 3000); // Délai de 3 secondes
      });
    }
  }
  
  // Utilisation de la classe Calculator pour calculer la somme
  const calculator = new Calculator();
  
  async function displaySum(a: number, b: number): Promise<void> {
    console.log("Calcul en cours..."); // Afficher avant de commencer le calcul
    const sum = await calculator.addNumbersAsync(a, b); // Attendre la résolution de la promesse
    console.log(`La somme est : ${sum}`); // Afficher le résultat une fois que la promesse est résolue
  }
  
  // Appel de displaySum
  displaySum(5, 7); // Affichera d'abord "Calcul en cours...", puis "La somme est : 12" après 3 secondes

  

  //exo2

  class User {
    // Méthode qui vérifie le nom d'utilisateur et le mot de passe
    checkCredentials(username: string, password: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        const correctUsername = "admin"; // Nom d'utilisateur correct
        const correctPassword = "password123"; // Mot de passe correct
  
        // Vérification des informations
        if (username === correctUsername && password === correctPassword) {
          resolve("Utilisateur vérifié avec succès"); // Résolution si les informations sont correctes
        } else {
          reject("Nom d'utilisateur ou mot de passe incorrect"); // Rejet si l'une des informations est incorrecte
        }
      });
    }
  }
  
  // Utilisation de la classe User pour vérifier l'utilisateur
  const user = new User();
  
  user.checkCredentials("admin", "password123")
    .then((message) => {
      console.log("Bienvenue, " + message); // Si les informations sont correctes
    })
    .catch((error) => {
      console.error("Erreur : " + error); // Si une erreur se produit (informations incorrectes)
    });

    
    