var Calculatrice = /** @class */ (function () {
    function Calculatrice() {
    }
    Calculatrice.prototype.diviser = function (a, b) {
        if (b === 0) {
            throw new Error("Division par zéro n'est pas autorisée");
        }
        return a / b;
    };
    Calculatrice.prototype.essayerDivision = function (a, b) {
        try {
            console.log(this.diviser(a, b));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("Fin de la tentative de division.");
        }
    };
    return Calculatrice;
}());
var calc = new Calculatrice();
calc.essayerDivision(10, 0);
//deuxième exemple
var Convertisseur = /** @class */ (function () {
    function Convertisseur() {
    }
    Convertisseur.prototype.convertirEnNombre = function (input) {
        var resultat = Number(input);
        if (isNaN(resultat)) {
            throw new Error("'".concat(input, "' ne peut pas \u00EAtre converti en nombre"));
        }
        return resultat;
    };
    Convertisseur.prototype.essayerConversion = function () {
        try {
            console.log(this.convertirEnNombre("123"));
            console.log(this.convertirEnNombre("abc"));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("Fin de la tentative de conversion.");
        }
    };
    return Convertisseur;
}());
var convertisseur = new Convertisseur();
convertisseur.essayerConversion();
//exercie 1
var Rectangle = /** @class */ (function () {
    function Rectangle(longueur, largeur) {
        // Vérification des valeurs des propriétés
        if (longueur <= 0 || largeur <= 0) {
            throw new Error("La longueur et la largeur doivent être des valeurs positives.");
        }
        this.longueur = longueur;
        this.largeur = largeur;
    }
    // Méthode pour calculer l'aire du rectangle
    Rectangle.prototype.aire = function () {
        return this.longueur * this.largeur;
    };
    // Méthode pour calculer le périmètre du rectangle
    Rectangle.prototype.perimetre = function () {
        return 2 * (this.longueur + this.largeur);
    };
    // Méthode pour calculer la surface du rectangle
    Rectangle.prototype.calculerSurface = function () {
        return this.aire(); // L'aire et la surface sont équivalentes pour un rectangle
    };
    // Méthode pour essayer de calculer la surface, avec gestion des erreurs
    Rectangle.prototype.essayerCalculSurface = function () {
        try {
            console.log("Surface du rectangle : " + this.calculerSurface());
        }
        catch (e) {
            console.error("Erreur lors du calcul de la surface : " + e.message);
        }
        finally {
            console.log("Fin de la tentative de calcul de la surface.");
        }
    };
    return Rectangle;
}());
// Création de trois instances de Rectangle avec des cas différents
// Instance 1 : dimensions valides
try {
    var monRectangle1 = new Rectangle(5, 3);
    monRectangle1.essayerCalculSurface(); // Surface : 15
}
catch (e) {
    console.error(e.message); // Affiche l'erreur si la longueur ou la largeur est invalide
}
// Instance 2 : longueur négative
try {
    var monRectangle2 = new Rectangle(-5, 3); // Cette ligne générera une erreur
    monRectangle2.essayerCalculSurface();
}
catch (e) {
    console.error(e.message); // Affiche l'erreur concernant les dimensions invalides
}
// Instance 3 : largeur nulle
try {
    var monRectangle3 = new Rectangle(5, 0); // Cette ligne générera une erreur
    monRectangle3.essayerCalculSurface();
}
catch (e) {
    console.error(e.message); // Affiche l'erreur concernant les dimensions invalides
}
