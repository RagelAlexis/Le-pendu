let play = true;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const myKeyboard = document.getElementById("myKeyboard");
const petName = document.getElementById("petName");
const petList = [
    "hippopotame",
    "girafe",
    "buffle",
    "canard",
    "cochon",
    "poule",
    "hippocampe"
];

let pet = petList[aleaNb(0, petList.length)];


const arrayPet = pet.split("");
//? console log pour tricher
// console.log(arrayPet);
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

let nbLetter = 0;
let life = 8;



myKeyboard.addEventListener("click", (e) => {
    // console.log(e);
    if (e.target.nodeName == "BUTTON" && play === true) {
        let myScore = nbLetter
        console.log(e.target.innerText);
        e.target.className = "m-2 btn btn-primary col-2";
        e.target.disabled = true;
        arrayPet.forEach((element, index) => {
            if (e.target.innerText.toLowerCase() == element) {
                document.getElementById(`indexLetter${index}`).innerText = element;
                nbLetter++;
            }
        })

        if (nbLetter == arrayPet.length) {
            if (confirm("Gagné, voulez-vous rejouer ?")) {
                location.reload();
            }
            play = false;
        }

        if (myScore == nbLetter) {
            life--;
        }
        switch (life) {
            case 0:
                document.getElementById("myLife").innerHTML = ""
                if (confirm("Gros noob, voulez-vous rejouer ?")) {
                    location.reload();
                };
                play = false;
                break;
            case 7:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️❤️❤️"
                break;
            case 6:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️❤️"
                break;
            case 5:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️❤️"
                break;
            case 4:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️❤️"
                break;
            case 3:
                document.getElementById("myLife").innerHTML = "❤️❤️❤️"
                break;
            case 2:
                document.getElementById("myLife").innerHTML = "❤️❤️"
                break;
            case 1:
                document.getElementById("myLife").innerHTML = "❤️"
                break;
            default:
                break;
        }
    }
});





































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