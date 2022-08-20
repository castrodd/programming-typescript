class Animal {}

class Bird extends Animal {
    chirp() {}
}

class Crow extends Bird {
    caw() {}
}

function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
}

// Argument of type 'Animal' is not assignable to parameter of type 'Bird'.
// Property 'chirp' is missing in type 'Animal' but required in type 'Bird'
chirp(new Animal)

chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {}
function birdToBird(b: Bird): Bird { return new Bird }
clone(birdToBird)

function birdToCrow(b: Bird): Crow { return new Crow }
clone(birdToCrow)

function birdToAnimal(b: Bird): Animal { return new Animal}
// Type 'Animal' is not assignable to type 'Bird'.
clone(birdToAnimal)

function animalToBird(a: Animal): Bird { return new Bird}
clone(animalToBird)

function crowToBird(c: Crow): Bird { return new Bird }
// Types of parameters 'c' and 'b' are incompatible.
// Property 'caw' is missing in type 'Bird' but required in type 'Crow'.
clone(crowToBird)


