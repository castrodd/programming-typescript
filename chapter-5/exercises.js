class Exercise {
    constructor() { }
}
// Cannot extend a class 'Exercise'. 
// Class constructor is marked as private.
//
// class ExerciseTwo extends Exercise {}
// Constructor of class 'Exercise' is private 
// and only accessible within the class declaration.
//
// new Exercise()
class MoreExercise {
    constructor() { console.log("parent"); }
}
class ExerciseThree extends MoreExercise {
    constructor() {
        super();
        console.log("child");
    }
}
// Constructor of class 'MoreExercise' is protected 
// and only accessible within the class declaration.
//
// new MoreExercise()
new ExerciseThree();
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
// type Create = {
//     create(type: 'balletFlat'): BalletFlat
//     create(type: 'boot'): Boot
//     create(type: 'sneaker'): Sneaker
// }
let Shoe = {
    create(type) {
        switch (type) {
            case 'balletFlat': return new BalletFlat;
            case 'boot': return new Boot;
            case 'sneaker': return new Sneaker;
        }
    }
};
let a = Shoe.create('balletFlat');
let b = Shoe.create('boot');
let c = Shoe.create('sneaker');
console.log(a.constructor.name, a.purpose);
console.log(b.constructor.name, b.purpose);
console.log(c.constructor.name, c.purpose);
