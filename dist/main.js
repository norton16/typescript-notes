var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Can only reassign variable to same data type ////////////////////////////////////////////////////////////////
var hello = "world";
hello = "foo";
// Functions - specify parameter data types and what type must be returned ////////////////////////////////////////////////////////////////
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Brian", "N"));
// Objects - define properties and their types ////////////////////////////////////////////////////////////////
var user = {
    name: "Brian",
    age: 4
};
var user2 = {
    name: "Brian",
    age: 4,
    getMessage: function () {
        return "hello" + name;
    }
};
// Union operator - combine data types, check for null, custom interfaces ////////////////////////////////////////////////////////////////
var pageName = "1";
var errorMessage = null;
var unionUser = null;
var popularTags = ["dog", "ball"];
// Return types ////////////////////////////////////////////////////////////////
var doSomething = function () {
    console.log("Hello");
};
var doSomething2 = function () {
    // Function with never can't be executed to the end
    throw "never";
};
// Type assertion - Can't assign unknown directly in other types. Use "as" to make type assertion ////////////////////////////////////////////////////////////////
var vUnknown = 10;
var s1 = vUnknown;
var pageNum = "1";
var numericPageNum = pageNum;
// DOM - define DOM element types ////////////////////////////////////////////////////////////////
var someElement = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var newUser = new User("Brian", "Norton");
// Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Setters & getters
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
// Generics - allow for providing different data types. T is generic data type ////////////////////////////////////////////////////////////////
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user3 = {
    name: "Brian",
    data: {
        meta: "foo"
    },
    meta: "3"
};
// Enums - enumerables ////////////////////////////////////////////////////////////////
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
// Values increment from 0. Logging NotStarted would print 0
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
// Enums can be used as value and data type
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
