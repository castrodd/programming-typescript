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
var Exercise = /** @class */ (function () {
    function Exercise() {
    }
    return Exercise;
}());
// Cannot extend a class 'Exercise'. 
// Class constructor is marked as private.
//
// class ExerciseTwo extends Exercise {}
// Constructor of class 'Exercise' is private 
// and only accessible within the class declaration.
//
// new Exercise()
var MoreExercise = /** @class */ (function () {
    function MoreExercise() {
        console.log("parent");
    }
    return MoreExercise;
}());
var ExerciseThree = /** @class */ (function (_super) {
    __extends(ExerciseThree, _super);
    function ExerciseThree() {
        var _this = _super.call(this) || this;
        console.log("child");
        return _this;
    }
    return ExerciseThree;
}(MoreExercise));
// Constructor of class 'MoreExercise' is protected 
// and only accessible within the class declaration.
//
// new MoreExercise()
new ExerciseThree();
