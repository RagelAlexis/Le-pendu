const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const petList = [
    "crevette",
    "pingouin",
    "ecureuil",
    "babouin",
    "galinette",
    "sanglier"
];

let pet = petList[aleaNb(0, petList.length)];
console.log(pet);

alphabet.forEach(element => {
    let myLetter = element;
    myLetter = myLetter.toUpperCase();
    let myKey = `<button class="m-2 btn btn-outline-primary col-2" id="myKey${myLetter}">${myLetter}</button>`;
    myKeyboard.innerHTML += (myKey);
});

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};