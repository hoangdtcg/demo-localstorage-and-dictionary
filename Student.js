class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return "I am " + this.name + ", Im " + this.age + " year old";
    }
}