// 2. Private vs. public

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


// 3. Factory pattern

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


// 4. Typesafe builder pattern

// Not typesafe
class RequestBuilder {
    private data: object | null = null
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setData(data: object): this {
        this.data = data
        return this
    }

    setURL(url: string): this {
        this.url = url
        return this
    }

    send() {
        console.log(`RequestBuilder: ${this.method} / ${this.data} / ${this.url}`)
    }
}

new RequestBuilder()
    .setURL('/users')
    .send()

// Typesafe
class SafeRequestBuilder {
    private url: string | null = null
    private method: 'get' | 'post' | null = null
    private data: object | null = null

    constructor(
        url: string | null = null,
        method: 'get' | 'post' | null = null,
        data: object | null = null) {
            this.url = url,
            this.method = method,
            this.data = data
        }

    setURL(url: string | null): SafeRequestBuilder {
        this.url = url
        if (url) {
            return new SafeRequestBuilder(url)
        }
        return new SafeRequestBuilder()
    }

    setMethod(method: 'get' | 'post'): SafeRequestBuilder | null {
        if (!this.url) {
            new Error('setURL must be called first.')
        }
        
        this.method = method
        if (method) {
            return new SafeRequestBuilder(this.url, method)
        }
        return new SafeRequestBuilder()
    }

    setData(data: object): SafeRequestBuilder {
        if (!this.url) {
            return new SafeRequestBuilder()
        }

        if (!this.method) {
            return new SafeRequestBuilder()
        }

        this.data = data
        return new SafeRequestBuilder(
            this.url,
            this.method,
            this.data
        )
    }

    send() {
        if (this.method && this.url) {
            console.log(`SafeRequestBuilder: ${this.method} : ${this.data} : ${this.url}`)
        } else {
            return new Error('Missing method or url!')
        }
    }
}

new SafeRequestBuilder()
    .setURL('/users')
    .send()