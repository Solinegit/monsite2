class Calculatrice {
  diviser(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée");
    }
    return a / b;
  }

  essayerDivision(a: number, b: number) {
    try {
      console.log(this.diviser(a, b));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de division.");
    }
  }
}

const calc = new Calculatrice();
calc.essayerDivision(10, 0);

//deuxième exemple

class Convertisseur {
  convertirEnNombre(input: string): number {
    const resultat = Number(input);
    if (isNaN(resultat)) {
      throw new Error(`'${input}' ne peut pas être converti en nombre`);
    }
    return resultat;
  }

  essayerConversion() {
    try {
      console.log(this.convertirEnNombre("123"));
      console.log(this.convertirEnNombre("abc"));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de conversion.");
    }
  }
}

const convertisseur = new Convertisseur();
convertisseur.essayerConversion();




//exercie 1


class Rectangle {
  longueur: number;
  largeur: number;

  constructor(longueur: number, largeur: number) {
    // Vérification des valeurs des propriétés
    if (longueur <= 0 || largeur <= 0) {
      throw new Error("La longueur et la largeur doivent être des valeurs positives.");
    }

    this.longueur = longueur;
    this.largeur = largeur;
  }

  // Méthode pour calculer l'aire du rectangle
  aire(): number {
    return this.longueur * this.largeur;
  }

  // Méthode pour calculer le périmètre du rectangle
  perimetre(): number {
    return 2 * (this.longueur + this.largeur);
  }

  // Méthode pour calculer la surface du rectangle
  calculerSurface(): number {
    return this.aire(); // L'aire et la surface sont équivalentes pour un rectangle
  }

  // Méthode pour essayer de calculer la surface, avec gestion des erreurs
  essayerCalculSurface() {
    try {
      console.log("Surface du rectangle : " + this.calculerSurface());
    } catch (e) {
      console.error("Erreur lors du calcul de la surface : " + e.message);
    } finally {
      console.log("Fin de la tentative de calcul de la surface.");
    }
  }
}

// Création de trois instances de Rectangle avec des cas différents

// Instance 1 : dimensions valides
try {
  const monRectangle1 = new Rectangle(5, 3);
  monRectangle1.essayerCalculSurface(); // Surface : 15
} catch (e) {
  console.error(e.message); // Affiche l'erreur si la longueur ou la largeur est invalide
}

// Instance 2 : longueur négative
try {
  const monRectangle2 = new Rectangle(-5, 3); // Cette ligne générera une erreur
  monRectangle2.essayerCalculSurface();
} catch (e) {
  console.error(e.message); // Affiche l'erreur concernant les dimensions invalides
}

// Instance 3 : largeur nulle
try {
  const monRectangle3 = new Rectangle(5, 0); // Cette ligne générera une erreur
  monRectangle3.essayerCalculSurface();
} catch (e) {
  console.error(e.message); // Affiche l'erreur concernant les dimensions invalides
}
