
// Défi 2 //////////////////////////////////////////////////////////////////////////////////////////

function setValue(row, col, value) {
    const cell = document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1})`);
    if (cell) {
      cell.textContent = value;
    }
  }
  
  function getValue(row, col) {
    const cell = document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1})`);
    if (cell) {
      return cell.textContent;
    }
    return null;
  }

  function setColor(row, col, color) {
    const cell = document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1})`);
    if (cell) {
      cell.style.backgroundColor = color;
      cell.classList.add(color);
    }
  }
  
  function getColor(row, col) {
    const cell = document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1})`);
    if (cell) {
      return cell.style.backgroundColor;
    }
    return null;
  }

 

  // fonctions test


  function testSetValue() {
    setValue(1, 1, "test");
    const cell = document.querySelector("table tr:nth-child(2) td:nth-child(2)");
    if (cell.textContent === "test") {
      console.log("testSetValue: success");
    } else {
      console.error("testSetValue: failed");
    }
  }

  function testGetValue() {
    setValue(1, 1, "test");
    const value = getValue(1, 1);
    if (value === "test") {
      console.log("testGetValue: success");
    } else {
      console.error("testGetValue: failed");
    }
  }

  function testSetColor() { 
    setColor(1, 1, "red");
    const cell = document.querySelector("table tr:nth-child(2) td:nth-child(2)");
    if (cell.style.backgroundColor === "red") {
      console.log("testSetColor: success");
    } else {
      console.error("testSetColor: failed");
    }
  } 


  function testGetColor() { 
    setColor(1, 1, "red");
    const color = getColor(1, 1);
    if (color === "red") {
      console.log("testGetColor: success");
    } else {
      console.error("testGetColor: failed");
    }
  } 



//Défi 3///////////////////////////////////////////////////////////////////////////////////////////////

function clickedOnCell(index) {
  const rows = 11;
  const col = index % rows;
  const row = Math.floor(index / rows);
  const card = playerHands[currentPlayer].shift(); // Utiliser la main du joueur actuel

  if (card === undefined) {
      updateMessage("Vous n'avez plus de cartes !");
      return;
  }

  if (isCorrectPlacement(row, col, card) && isWithinLimits(row, col)) {
      setValue(row, col, card);
      setColor(row, col, playerColors[currentPlayer]); // Utiliser la couleur du joueur
      displayHands();
      if (hasWin(playerColors[currentPlayer])) {
          updateMessage(`Le joueur ${currentPlayer + 1} a gagné !`);
      } else {
          switchPlayer();
      }
  } else {
      updateMessage("Coup invalide !");
      playerHands[currentPlayer].unshift(card); // Remettre la carte dans la main
      displayHands();
  }
}


function setListeners() {
  const cells = document.querySelectorAll("table td");
  cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
          clickedOnCell(index);
      });
  });
}


//Défi 4///////////////////////////////////////////////////////////////////////////////////////////////

function isEmpty(row, col) {  //Copilot l'a faite tout seul !!!!
    return getValue(row, col) === "";
  }


function testIsEmpty() {  
    setValue(1, 1, "testonsssssss");
    if (!isEmpty(1, 1)) {
      console.log("testIsEmpty: success");
    } else {
      console.error("testIsEmpty: failed");
    }
    setValue(1, 1, "");
    if (isEmpty(1, 1)) {
      console.log("testIsEmpty: success");
    } else {
      console.error("testIsEmpty: failed");
    }
  }


  //Défi 5///////////////////////////////////////////////////////////////////////////////////////////////


  function isCorrectAdjacency(row, col) {
    const adjacentCells = [
        { r: row - 1, c: col },
        { r: row + 1, c: col },
        { r: row, c: col - 1 },
        { r: row, c: col + 1 },
        { r: row - 1, c: col - 1 }, // Diagonale haut-gauche
        { r: row - 1, c: col + 1 }, // Diagonale haut-droite
        { r: row + 1, c: col - 1 }, // Diagonale bas-gauche
        { r: row + 1, c: col + 1 }  // Diagonale bas-droite
    ];

    for (const cell of adjacentCells) {
        if (cell.r >= 0 && cell.r < 11 && cell.c >= 0 && cell.c < 11 && !isEmpty(cell.r, cell.c)) {
            return true;
        }
    }
    return false;
}

function testIsCorrectAdjacency() {
  setValue(1, 1, "test");
  if (isCorrectAdjacency(1, 2)) {
    console.log("testIsCorrectAdjacency: success");
  } else {
    console.error("testIsCorrectAdjacency: failed");
  }
  setValue(2, 1, "test");
  if (isCorrectAdjacency(1, 1)) {
    console.log("testIsCorrectAdjacency: success");
  } else {
    console.error("testIsCorrectAdjacency: failed");
  }
  setValue(1, 4, "test");
  if (!isCorrectAdjacency(7, 2)) {
    console.log("testIsCorrectAdjacency: success");
  } else {
    console.error("testIsCorrectAdjacency: failed");
  }
}

//Défi 6///////////////////////////////////////////////////////////////////////////////////////////////




function isCorrectPlacement(row, col, value) {
  // Vérifier si la cellule est vide
  if (!isEmpty(row, col)) {
      // Si la cellule n'est pas vide, vérifier si on peut la recouvrir
      if (getValue(row, col) < value) {
          return true; // Recouvrement autorisé
      } else {
          return false; // Recouvrement non autorisé
      }
  }

  // Vérifier si c'est le premier tour
  if (isFirstMove()) {
      return true; // Autoriser le placement n'importe où
  }

  // Vérifier l'adjacence
  if (isCorrectAdjacency(row, col)) {
      return true; // Adjacence correcte
  }

  // Vérifier le recouvrement (si la cellule est vide)
  const adjacentCells = [
      { r: row - 1, c: col },
      { r: row + 1, c: col },
      { r: row, c: col - 1 },
      { r: row, c: col + 1 },
      { r: row - 1, c: col - 1 }, // Diagonale haut-gauche
      { r: row - 1, c: col + 1 }, // Diagonale haut-droite
      { r: row + 1, c: col - 1 }, // Diagonale bas-gauche
      { r: row + 1, c: col + 1 }  // Diagonale bas-droite
  ];

  for (const cell of adjacentCells) {
      if (cell.r >= 0 && cell.r < 11 && cell.c >= 0 && cell.c < 11 && !isEmpty(cell.r, cell.c)) {
          if (getValue(cell.r, cell.c) < value) {
              return true; // Recouvrement correct
          }
      }
  }

  return false; // Aucune des conditions n'est remplie
}

function testIsCorrectPlacement() {
  setValue(1, 1, 8);
  if (isCorrectPlacement(1, 2, 5)) {
    console.log("testIsCorrectPlacement: success");
  } else {
    console.error("testIsCorrectPlacement: failed");
  }
  setValue(2, 10, 2);
  if (isCorrectPlacement(2, 9, 2)) {
    console.log("testIsCorrectPlacement: success");
  } else {
    console.error("testIsCorrectPlacement: failed");
  }
  setValue(3, 3, 6);
  if (isCorrectPlacement(3, 3, 7)) {
    console.log("testIsCorrectPlacement: success");
  } else {
    console.error("testIsCorrectPlacement: failed");
  }
  setValue(4, 4, 3);
  if (!isCorrectPlacement(4, 4, 2)) {
    console.log("testIsCorrectPlacement: success");
  } else {
    console.error("testIsCorrectPlacement: failed");
  }
}



//Défi 7///////////////////////////////////////////////////////////////////////////////////////////////

const redList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
const greenList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
const yellowList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
const blueList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

function getAndRemoveRandomCard(liste) {
  if (liste.length === 0) {
    return null; 
  }
  const indexAleatoire = Math.floor(Math.random() * liste.length);
  const carteTiree = liste[indexAleatoire];
  liste.splice(indexAleatoire, 1);
  return carteTiree;
}


function testGetAndRemoveRandomCard() {
  console.log(getAndRemoveRandomCard(redList));
  console.log(getAndRemoveRandomCard(redList));
  console.log(getAndRemoveRandomCard(redList));
  console.log(redList);}



  //Défi 8///////////////////////////////////////////////////////////////////////////////////////////////


function hasWin(color) {
  for (let ligne = 1; ligne <= 11; ligne++) {
    for (let colonne = 1; colonne <= 11; colonne++) {
      const cellule = document.querySelector(`table tr:nth-child(${ligne}) td:nth-child(${colonne})`);
        if (cellule.classList.contains(color)){
          if (document.querySelector(`table tr:nth-child(${ligne}) td:nth-child(${colonne})`).classList.contains(color)) {

            // Vérification horizontale
            if (
              colonne + 3 < 11 &&
              document.querySelector(`table tr:nth-child(${ligne}) td:nth-child(${colonne+1})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne}) td:nth-child(${colonne+2})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne}) td:nth-child(${colonne+3})`).classList.contains(color) 
            ) {
              return true;
            }
    
            // Vérification verticale
            if (
              ligne + 3 < 11 &&
              document.querySelector(`table tr:nth-child(${ligne+1}) td:nth-child(${colonne})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne +2}) td:nth-child(${colonne})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne +3}) td:nth-child(${colonne})`).classList.contains(color) 
            ) {
              return true;
            }
    
            // Vérification diagonale (de haut à gauche vers bas à droite)
            if (
              ligne + 3 < 11 &&
              colonne + 3 < 11 &&
              document.querySelector(`table tr:nth-child(${ligne+1}) td:nth-child(${colonne+1})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne+2}) td:nth-child(${colonne+2})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne+3}) td:nth-child(${colonne+3})`).classList.contains(color) 
            ) {
              return true;
            }
    
            // Vérification diagonale (de haut à droite vers bas à gauche)
            if (
              ligne + 3 < 11 &&
              colonne - 3 >= 0 &&
              document.querySelector(`table tr:nth-child(${ligne+1}) td:nth-child(${colonne-1})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne+2}) td:nth-child(${colonne-2})`).classList.contains(color)  &&
              document.querySelector(`table tr:nth-child(${ligne+3}) td:nth-child(${colonne-3})`).classList.contains(color) 
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }




function testHasWin() {

  setColor(1, 1, "red");
  setColor(1, 2, "red");
  setColor(1, 3, "red");
  setColor(1, 4, "red");  
  if (hasWin("red")) {
    console.log("testHasWin: success");
  } else {
    console.error("testHasWin: failed");
  }
  setColor(2, 1, "blue");
  setColor(3, 1, "blue");
  setColor(4, 1, "blue");
  setColor(5, 1, "blue");
  if (hasWin("blue")) {
    console.log("testHasWin: success");
  } else {
    console.error("testHasWin: failed");
  }
  setColor(6, 6, "green");
  setColor(7, 7, "green");
  setColor(8, 8, "green");
  setColor(9, 9, "green");
  if (hasWin("green")) {
    console.log("testHasWin: success");
  } else {
    console.error("testHasWin: failed");
  }
  setColor(10, 10, "yellow");
  setColor(9, 9, "yellow");
  setColor(8, 8, "yellow");
  if (!hasWin("yellow")) {
    console.log("testHasWin: success");
  }
  else {
    console.error("testHasWin: failed");
  }
}


//Défi 9///////////////////////////////////////////////////////////////////////////////////////////////

function isWithinLimits(row, col) {
  if (row < 0 || row >= 11 || col < 0 || col >= 11) {
      return false;
  }
  return true; // Supprimer la logique de distance
}



function testIsWithinLimits() {
  // Test 1 : (0, 0) est dans les limites
  if (isWithinLimits(0, 0)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }

  // Test 2 : (11, 0) est en dehors des limites
  if (!isWithinLimits(11, 0)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }

  // Test 3 : (5, 5) est dans les limites
  if (isWithinLimits(5, 5)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }

  // Test 4 : (10, 10) est dans les limites
  if (isWithinLimits(10, 10)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }

  
  // Test 5 : (6, 6) est dans les limites
  setValue(0, 0, "test"); // Ajoute une cellule non vide
  if (isWithinLimits(6, 6)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }

  // Test 6 : (7, 7) est en dehors des limites
  if (!isWithinLimits(7, 7)) {
    console.log("testIsWithinLimits: success");
  } else {
    console.error("testIsWithinLimits: failed");
  }
}


// Fin des défis //////////////////////////////////////////////////////////////////////////////////////////

// ... (Défi 2 à Défi 9, inchangés) ...

const allLists = [redList, greenList, yellowList, blueList];

let playerHands = [[], [], [], []]; // Tableau pour les mains des 4 joueurs
let currentPlayer = 0; // Index du joueur actuel (0 à 3)
const playerColors = ["red", "blue", "green", "yellow"]; // Couleurs des joueurs

function dealCards() {
    for (let i = 0; i < 4; i++) { // 4 joueurs
        for (let j = 0; j < 5; j++) { // 5 cartes par joueur
            playerHands[i].push(getRandomCard());
        }
    }
}

function getRandomCard() {
    const listIndex = Math.floor(Math.random() * allLists.length);
    const list = allLists[listIndex];
    return getAndRemoveRandomCard(list);
}

function displayHands() {
    const playerHandsDiv = document.getElementById("player-hands");
    playerHandsDiv.innerHTML = ""; // Effacer les mains précédentes

    for (let i = 0; i < 4; i++) {
        const playerHandDiv = document.createElement("div");
        playerHandDiv.classList.add("player-hand");
        playerHandDiv.textContent = `Joueur ${i + 1} : `;

        playerHands[i].forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.textContent = card;
            cardDiv.classList.add("card");
            playerHandDiv.appendChild(cardDiv);
        });

        playerHandsDiv.appendChild(playerHandDiv);
    }
}

function switchPlayer() {
    currentPlayer = (currentPlayer + 1) % 4; // Passer au joueur suivant (0, 1, 2, 3)
    updateMessage(`Tour du joueur ${currentPlayer + 1}`);
}

function updateMessage(message) {
    document.getElementById("message").textContent = message;
}

function isFirstMove() {
    let cardCount = 0;
    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            if (!isEmpty(row, col)) {
                cardCount++;
            }
        }
    }
    return cardCount === 0;
}



function main() {
    dealCards();
    displayHands();
    setListeners();
    updateMessage(`Tour du joueur ${currentPlayer + 1}`);
}

main();