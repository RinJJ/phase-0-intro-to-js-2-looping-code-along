// Code your solutions in this file

const names = [
    "Guadalupe,",
    "Ollie",
    "Aki",
];

function writeCards(names) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    };
    return cards
};

function countDown(num) {
    let count = num
    while (count > -1) {
        console.log(count--);
    }
}