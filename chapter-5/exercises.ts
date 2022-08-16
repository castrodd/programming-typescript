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