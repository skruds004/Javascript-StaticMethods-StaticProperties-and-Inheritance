//I have a better understanding of static methods and properties than of governors!
class Governor {
    static country = "MURICA";
    static states = ["Michigan", "Arizona", "Washington", "California", "Texas"];

    static election() {
        console.log("Still governor huzzah!");
    }
    static speech() {
        console.log("I love " + this.country + "!");
    }
}

Governor.speech();
Governor.election();

class Person{
    constructor (name, age, height) {
    }
}