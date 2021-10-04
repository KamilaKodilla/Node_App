
const fs = require('fs');

const genders = ['F', 'M'];
const femaleNames = ['Kamila', 'Wiktoria', 'Anna','Ewa', 'Patrycja', 'Aleksandra'];
const maleNames = ['Kamil', 'Wiktor', 'Artur', 'Adam', 'Patryk', 'Aleksander', ];
const lastNames = ['Nowak', 'Strzelczyk', 'Matejko', 'Sienkiewicz', 'Mickiewicz', 'Prus'];

const randChoice = (arr) => {
    const randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice];
};

const people = [];

for (let i=1; i<20; i++) {
    const person = {}
    person.gender = randChoice(genders);
    if (person.gender === 'F') {
        person.firstName = randChoice(femaleNames);
    } else {
        person.firstName = randChoice(maleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * 60 + 18);

    person.email = person.firstName + "." + person.lastName + "@gmail.com";

    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });