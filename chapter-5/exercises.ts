class Exercise {
    private constructor() {}
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
    protected constructor() {console.log("parent")}
}

class ExerciseThree extends MoreExercise {
    constructor() {
        super()
        console.log("child")
    }
}

// Constructor of class 'MoreExercise' is protected 
// and only accessible within the class declaration.
//
// new MoreExercise()

new ExerciseThree()


// Factory pattern
type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose: string = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose: string = 'walking'
}

type Create = {
    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker')
      : BalletFlat | Boot | Sneaker {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

let a = Shoe.create('balletFlat')
let b = Shoe.create('boot')
let c = Shoe.create('sneaker')

console.log(a.constructor.name, a.purpose)
console.log(b.constructor.name, b.purpose)
console.log(c.constructor.name, c.purpose)