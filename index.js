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
        this.name = name;
        this.age = age;
        this.height = height;
    }
    introduce() {
        console.log("Hi, my name is " + this.name + "!");
    }
    snooze() {
        console.log("Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    }
    birthday() {
        this.age++;
        console.log("Hooray! I'm " + this.age + " years old!");
    }
}

class PostalWorker extends Person {
    constructor(name, age, height, zip) {
        super(name, age, height);
        this.zip = zip;
    }
    deliver() {
        console.log("Here's your mail!");
    }
    drive() {
        console.log("Vroom");
    }
    snooze() {
        console.log("Can't fall asleep at the wheel!");
    }
}

class Chef extends Person {
    constructor(name, age, height, restaurant) {
        super(name, age, height);
        this.restaurant = restaurant;
    }
    introduce() {
        super.introduce();
        console.log("I work at " + this.restaurant + "!");
    }
    cook() {
        console.log("Sizzle Sizzle");
    }
}

const postman = new PostalWorker("Johnny", 25, "6'7\"", 12345);
const postman2 = new PostalWorker("Bonny", 27, "10'2\"", 67890);
const chef1 = new Chef("Bill", 87, "4'3\"", "Big Buffalo");
const chef2 = new Chef("Gracie", 40, "5'6\"", "Basement Burger Bar");

postman.introduce();
postman.birthday();
postman.snooze();
postman.deliver();
postman.drive();
postman2.introduce();
postman2.birthday();
postman2.snooze();
postman2.deliver();
postman2.drive();
chef1.introduce();
chef1.birthday();
chef1.snooze();
chef1.cook();
chef2.introduce();
chef2.birthday();
chef2.snooze();
chef2.cook();

class BankAccount {
    constructor(ownerName, balance = 0) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = Math.floor(Math.random()*10000);
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Your balance is now " + this.balance);
    }
    withdraw(amount) {
        if(this.balance - amount < 0) {
            console.log("Withdrawal Denied, not enough funds :(");
        }
        else {
            this.balance -= amount;
            console.log("Your balance is now " + this.balance);
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance = 0, overdraftEnabled = false) {
        super(ownerName, balance);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(amount) {
        if(this.balance - amount < 0 && !this.overdraftEnabled) {
            console.log("Withdrawal Denied, not enough funds and overdraft is not enabled");
        }
        else {
            this.balance -= amount;
            console.log("Your balance is now " + this.balance);
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance = 0) {
        super(ownerName, balance);
    }
    withdraw() {
        console.log("You can't withdraw from this account");
    }
}

const checkacct1 = new CheckingAccount("Jim", 2, true);
const checkacct2 = new CheckingAccount("Jessica", 200, false);
const saveacct1 = new SavingsAccount("John", 20000000000000);
const saveacct2 = new SavingsAccount("Beth", 50000);

console.log(checkacct1, checkacct2, saveacct1, saveacct2);

checkacct1.withdraw(500);
checkacct1.deposit(14000);
checkacct2.withdraw(500);
checkacct2.withdraw(199);
checkacct2.deposit(10);
saveacct1.withdraw(500);
saveacct1.deposit(1);
saveacct2.withdraw(500);
saveacct2.deposit(1000000000000000);