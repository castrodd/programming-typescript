// 2. Private vs. public
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
// 4. Typesafe builder pattern
// Not typesafe
class RequestBuilder {
    constructor() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    send() {
        console.log(`RequestBuilder: ${this.method} / ${this.data} / ${this.url}`);
    }
}
new RequestBuilder()
    .setURL('/users')
    .send();
// Typesafe
class SafeRequestBuilder {
    constructor(url = null, method = null, data = null) {
        this.url = null;
        this.method = null;
        this.data = null;
        this.url = url,
            this.method = method,
            this.data = data;
    }
    setURL(url) {
        this.url = url;
        if (url) {
            return new SafeRequestBuilder(url);
        }
        return new SafeRequestBuilder();
    }
    setMethod(method) {
        if (!this.url) {
            new Error('setURL must be called first.');
        }
        this.method = method;
        if (method) {
            return new SafeRequestBuilder(this.url, method);
        }
        return new SafeRequestBuilder();
    }
    setData(data) {
        if (!this.url) {
            return new SafeRequestBuilder();
        }
        if (!this.method) {
            return new SafeRequestBuilder();
        }
        this.data = data;
        return new SafeRequestBuilder(this.url, this.method, this.data);
    }
    send() {
        if (this.method && this.url) {
            console.log(`SafeRequestBuilder: ${this.method} : ${this.data} : ${this.url}`);
        }
        else {
            return new Error('Missing method or url!');
        }
    }
}
new SafeRequestBuilder()
    .setURL('/users')
    .send();
