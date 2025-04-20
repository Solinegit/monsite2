var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TV = /** @class */ (function () {
    function TV(price, voltage) {
        this.price = price;
        this.voltage = voltage;
    }
    TV.prototype.getVoltage = function () {
        return this.voltage;
    };
    TV.prototype.getPrice = function () {
        return this.price;
    };
    return TV;
}());
var Salad = /** @class */ (function () {
    function Salad(price) {
        this.price = price;
    }
    Salad.prototype.getPrice = function () {
        return this.price;
    };
    return Salad;
}());
var s1 = new Salad(2.3);
var s2 = new Salad(2.5);
var tv1 = new TV(1399, 220);
var tv2 = new TV(999, 220);
var tv3 = new TV(1499, 110);
var tabElectrical = [];
tabElectrical.push(tv1);
tabElectrical.forEach(function (e) {
    return console.log("electrical: " + e.getVoltage() + "V");
});
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age, occupation) {
        var _this = _super.call(this, name, age) || this;
        _this.occupation = occupation;
        return _this;
    }
    User.prototype.logPerson = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Occupation: ").concat(this.occupation));
    };
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, role) {
        var _this = _super.call(this, name, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.logPerson = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Role: ").concat(this.role));
    };
    return Admin;
}(Person));
//il vaut mieux toujours utiliser l'interface pour déclarer le type
//plutôt que la classe abstraite
var persons = [
    new User("Max", 30, "Frontend Developer"),
    new Admin("Max", 30, "Administrator"),
];
persons.forEach(function (person) { return person.logPerson(); });
console.log("Filter Users only");
//ici le as User est nécessaire pour dire à TypeScript que le filter
//retourne un tableau de User et non de Person ou de PersonInterface
var usersOnly = persons.filter(function (person) { return person instanceof User; });
usersOnly.forEach(function (person) { return person.logPerson(); });
// composition
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Vector = /** @class */ (function () {
    function Vector(start, end) {
        this.start = start;
        this.end = end;
    }
    Vector.prototype.distanceTo = function (Vector) {
        var dx = this.end.x - this.start.x;
        var dy = this.end.y - this.start.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Vector;
}());
var p1 = new Point(2, 3);
var p2 = new Point(5, 6);
var p3 = new Point(7, 9);
var p4 = new Point(10, 12);
var v1 = new Vector(p1, p2);
var v2 = new Vector(p3, p4);
console.log("Distance between v1 and v2", v1.distanceTo(v2));
//statisme 
var Numero = /** @class */ (function () {
    function Numero() {
        this.numero = 0;
        Numero.numeroStatique++;
        this.numero++;
    }
    Numero.prototype.getNumeroStatique = function () {
        return Numero.numeroStatique;
    };
    Numero.prototype.getNumero = function () {
        return this.numero;
    };
    Numero.numeroStatique = 0;
    return Numero;
}());
var n1 = new Numero();
var n2 = new Numero();
var n3 = new Numero();
console.log("n1", n1.getNumeroStatique(), n1.getNumero());
console.log("n2", n2.getNumeroStatique(), n2.getNumero());
console.log("n3", n3.getNumeroStatique(), n3.getNumero());
console.log("numeroStatique", Numero.numeroStatique);
//exercice 2
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving at ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
//exercice 3
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(speed) {
        return _super.call(this, speed) || this;
    }
    Car.prototype.honk = function () {
        console.log("Beep beep!");
    };
    return Car;
}(Vehicle));
var myCar = new Car(120);
myCar.drive(); // Affiche: Driving at 120 km/h
myCar.honk(); // Affiche: Beep beep!
//exercice 4
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(speed) {
        return _super.call(this, speed) || this;
    }
    Bicycle.prototype.honk = function () {
        console.log("Ring Ring");
    };
    return Bicycle;
}(Vehicle));
var myBike = new Bicycle(25);
myBike.drive(); // Affiche: Driving at 25 km/h
myBike.honk(); // Affiche: Ring Ring
//exercice 5
var car1 = new Car(120);
var car2 = new Car(140);
var bike1 = new Bicycle(20);
var bike2 = new Bicycle(25);
var bike3 = new Bicycle(18);
var vehicles = [car1, car2, bike1, bike2, bike3];
vehicles.forEach(function (vehicle) {
    vehicle.drive();
    vehicle.honk();
});
//exercice 6
for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
    var vehicle = vehicles_1[_i];
    vehicle.drive();
    vehicle.honk();
}
