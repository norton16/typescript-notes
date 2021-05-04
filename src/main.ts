// Can only reassign variable to same data type ////////////////////////////////////////////////////////////////
let hello: string = "world";
hello = "foo";


// Functions - specify parameter data types and what type must be returned ////////////////////////////////////////////////////////////////
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}
console.log(getFullName("Brian", "N"))


// Objects - define properties and their types ////////////////////////////////////////////////////////////////
const user: {name: string, age: number} = {
    name: "Brian",
    age: 4
}


// Interfaces - help to describe entites & establish project architecture ////////////////////////////////////////////////////////////////
interface UserInterface {
    name: string;
    age: number;
    // ? means the any property is not mandatory
    any?: number;
    getMessage(): string; 
}

const user2: UserInterface = {
    name: "Brian",
    age: 4,
    getMessage() {
        return "hello" + name
    }
}


// Union operator - combine data types, check for null, custom interfaces ////////////////////////////////////////////////////////////////
let pageName: string | number = "1"
let errorMessage: string | null = null;

interface UnionInterface {
    name: string;
    surname: string;
}

let unionUser: UnionInterface | null = null;


// Type alias ////////////////////////////////////////////////////////////////
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

const popularTags: PopularTag[] = ["dog", "ball"];


// Return types ////////////////////////////////////////////////////////////////
const doSomething = (): void => {
    console.log("Hello");
}
const doSomething2 = (): never => {
    // Function with never can't be executed to the end
    throw "never";
}


// Type assertion - Can't assign unknown directly in other types. Use "as" to make type assertion ////////////////////////////////////////////////////////////////
let vUnknown: unknown = 10;
let s1: string = vUnknown as string;

let pageNum: string = "1";
let numericPageNum: number = (pageNum as unknown) as number;


// DOM - define DOM element types ////////////////////////////////////////////////////////////////
const someElement = document.querySelector(".foo");
someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
})


// Classes - modifiers determine accessibility of class members ////////////////////////////////////////////////////////////////
// public - accessible in class, children, & instances
// protected - accessible in class & class children
// private - accessible in class

// readonly - can't be changed
// static - accessible in class, but not instances

interface UserInterface2 {
    getFullName(): string;
}

class User implements UserInterface2{
    private firstName: string;
    protected lastName: string;
    readonly unchangeableName: string;
    static maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const newUser = new User("Brian", "Norton");
// Inheritance
class Admin extends User {
    private editor: string;
    // Setters & getters
    setEditor(editor: string): void {
        this.editor = editor;
    }
    getEditor(): string {
        return this.editor;
    }
}

// Generics - allow for providing different data types. T is generic data type ////////////////////////////////////////////////////////////////
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    }
}

interface UserInterface3<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user3: UserInterface3<{meta: string}, string> = {
    name: "Brian",
    data: {
        meta: "foo"
    },
    meta: "3"
}


// Enums - enumerables ////////////////////////////////////////////////////////////////
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};

// Values increment from 0. Logging NotStarted would print 0
enum StatusEnum {
    NotStarted,
    InProgress,
    Done
}

// Enums can be used as value and data type
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;

interface Task {
    id: string;
    status: StatusEnum;
}















