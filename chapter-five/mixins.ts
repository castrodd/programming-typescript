type ClassConstructor<T> = new(...args: any[]) => T

function withDebug<C extends ClassConstructor<{
    getDebugValue(): object
}>>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }

        debug() {
            let Name = Class.constructor.name
            let value = this.getDebugValue()
            return `${Name} (${JSON.stringify(value)})`
        }
    }
}

class DebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}

    getDebugValue() {
        return {
            id: this.id,
            name: `${this.firstName} ${this.lastName}`
        }
    }
}

let User = withDebug(DebugUser)
let user = new User(3, 'Lorenzo', "Delaurentis")
console.log(user.debug())