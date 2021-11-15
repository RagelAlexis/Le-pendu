const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const petName = document.getElementById("petName");
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

const arrayPet = pet.split("");

arrayPet.forEach((element, index) => {
    let myIndex = index;
    let myCase = `<div class="myLetter border border-dark col-lg-1 col-1 rounded text-center" id="indexLetter${myIndex}">_</div>`;
    petName.innerHTML += myCase;
});


alphabet.forEach(element => {
    let myKey = element;
    myKey = myKey.toUpperCase();
    let myKeyButton = `<button class="m-2 btn btn-outline-primary col-2" id="myKey${myKey}">${myKey}</button>`;
    myKeyboard.innerHTML += myKeyButton;
});

function aleaNb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

myKeyboard.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        console.log(e.target.textContent);
    }
});


function manger(dennis) {
    document.getElementById(`indexLetterTest${dennis}`).innerText = "z";
};

manger(0);
manger(1);
manger(2);




































// function compare(word, caractere) {
//     let myCar = caractere.toLowerCase()
//     let indexChar = []
//     word.forEach((element, index) => {
//         if (myCar === element) {
//             indexChar.push(index)
//         }
//     })
//     return indexChar.length == 0 ? -1 : indexChar
// }

// myPet.forEach(element => {
//     let myLetterPet = element;
//     myLetterPet = myLetterPet.toUpperCase();
//     let myKeyName = `<span id="myKeyName${myLetterPet}">_ </span>`;
//     petName.innerHTML += (myKeyName);
// });

// myKeyboard.addEventListener("click", (e) => {
//     if (e.target.nodeName == "BUTTON") {
//         let myLetter = e.target.id
//         console.log(compare(myPet, myLetter));
//     }

// })