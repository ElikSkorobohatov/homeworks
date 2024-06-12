function newAcount (name, age, location, number, email){
    this.name = name;
    this.age = age;
    this.location = location;
    this.number = number;
    this.email = email;

    this.showCards = function () {
        console.log("My name is " + this.name + "! I " + this.age + " years old and living in " + this.location +
            "! Write my leter -> "+ this.email + " or call me -> "+ this.number + '!');
    }
}

let acount1 = new newAcount('Jams', 18, 'Odesa', '+380 12 345 678', 'text@gmail.com');
let acount2 = new newAcount('Anna', 25, 'Lviv', '+380 98 765 432', 'txet@gmail.com');

acount1.showCards();
acount2.showCards();