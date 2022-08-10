var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function withDebug(Class) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, args) || this;
        }
        class_1.prototype.debug = function () {
            var Name = Class.constructor.name;
            var value = this.getDebugValue();
            return Name + " (" + JSON.stringify(value) + ")";
        };
        return class_1;
    }(Class));
}
var DebugUser = /** @class */ (function () {
    function DebugUser(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    DebugUser.prototype.getDebugValue = function () {
        return {
            id: this.id,
            name: this.firstName + " " + this.lastName
        };
    };
    return DebugUser;
}());
var User = withDebug(DebugUser);
var user = new User(3, 'Lorenzo', "Delaurentis");
console.log(user.debug());
