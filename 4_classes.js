var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
// class Car {
// 	readonly model: string
// 	readonly wheels: number = 4
// 	constructor(theModel: string) {
// 		this.model = theModel
// 	}
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.wheels = 4;
    }
    return Car;
}());
var car = new Car('toyota');
console.log(car);
