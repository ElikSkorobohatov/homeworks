let myPhone = {
    contact: [
        {
            name: 'James',
            phone: '+1 (23) 456 789',
            email: 'james@james.com',
        },
        {
            name: 'Anna',
            phone: '+9 (87) 654 321',
            email: 'anna@james.com',
        },
        {
            name: 'Kostia',
            phone: '+9 (87) 656 789',
            email: 'kostia@james.com',
        }
    ],

    addContact: function (name, phone, email){
        this.contact.push({name, phone, email});
    },

    findContact: function(name) {
        return this.contact.find(contact => contact.name === name);

    },
};

myPhone.addContact('John', '+2 (34) 567 890', 'john@james.com');
console.log(myPhone.contact);

console.log(myPhone.findContact('John'));