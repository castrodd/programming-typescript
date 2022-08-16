function withDebug(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        debug() {
            let name = Class.name;
            let value = this.getDebugValue();
            return `((${name}) (${JSON.stringify(value)}))`;
        }
    };
}
class DebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: `${this.firstName} ${this.lastName}`
        };
    }
}
let User = withDebug(DebugUser);
let user = new User(3, 'Lorenzo', "Delaurentis");
console.log(user.debug());
