const container = document.querySelector(".container");
const gameBoard = document.querySelector(".game-board");
const game = document.querySelector(".game");
const guessInput = document.querySelector(".guess-input");
const submitBtn = document.querySelector(".submit-btn");
const chances = document.querySelector(".chances");
const resultScreen = document.querySelector(".result-screen");
const congra = document.querySelector(".result-screen h1");
const was = document.querySelector(".was");

const countSpan2 = document.querySelector(".count2");
const countSpan3 = document.querySelector(".count3");
const countSpan4 = document.querySelector(".count4");

const annous1 = document.querySelector(".annous1");
const annous2 = document.querySelector(".annous2");
const annous3 = document.querySelector(".annous3");
const annous4 = document.querySelector(".annous4");

const chance2 = document.querySelector("#chances-player2");
const chance3 = document.querySelector("#chances-player3");
const chance4 = document.querySelector("#chances-player4");

const error1 = document.querySelector("#error-player1");
const error2 = document.querySelector("#error-player2");
const error3 = document.querySelector("#error-player3");
const error4 = document.querySelector("#error-player4");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player3 = document.querySelector("#player3");
const player4 = document.querySelector("#player4");

const input1 = document.querySelector("#input-player1");
const input2 = document.querySelector("#input-player2");
const input3 = document.querySelector("#input-player3");
const input4 = document.querySelector("#input-player4");

const btn1 = document.querySelector("#submit-player1");
const btn2 = document.querySelector("#submit-player2");
const btn3 = document.querySelector("#submit-player3");
const btn4 = document.querySelector("#submit-player4");

const check = document.querySelector("#check-winner");

// console.log(annous1);


let oneVal;
let twoVal;
let threeVal;
let fourVal;

let oneValStored;
let twoValStored;
let threeValStored;
let fourValStored;


let count = 5;

btn1.addEventListener("click", () => {
    
    oneVal = input1.value;
    valueChk("oneVal");
    input1.value = "";
    
});

btn2.addEventListener("click", () => {
    
    twoVal = input2.value;
    valueChk("twoVal");
    input2.value = "";
    
});

btn3.addEventListener("click", () => {
    
    threeVal = input3.value;    
    valueChk("threeVal");
    input3.value = "";
    
});

btn4.addEventListener("click", () => {
    
    fourVal = input4.value;
    valueChk("fourVal");
    input4.value = "";
    
});


check.addEventListener("click", () => {

    container.style.background = "transparent"
    console.log(oneValStored);
    console.log(twoValStored);
    console.log(threeValStored);
    console.log(fourValStored);
    game.style.display = "none";
    resultScreen.style.display = "block";
    was.innerHTML = oneValStored;
    checkResult("r2");
    checkResult("r3");
    checkResult("r4");
    checkResult("allChk");

})

// function valueChk Start ======================== fx

function valueChk (players) {
    
    if (players == "oneVal") {
        
        if (oneVal > 9) {
            
            error1.style.visibility = "visible";
            error1.innerHTML = "You must enter a number here between 1-9";
            
        }
        else if ( Number(oneVal) ) {

            oneValStored = oneVal;
            console.log(oneValStored);
            player2.style.outline = "#ff6b6b46 1px solid";
            player1.style.outline = "none";
            error1.style.visibility = "hidden";
            input1.setAttribute('disabled', '');
            btn1.setAttribute('disabled', '');
            input2.removeAttribute('disabled');
            btn2.removeAttribute('disabled');
            
        }
        else {

            error1.style.visibility = "visible";
            error1.innerHTML = "You must enter a number here";
            
        };

    }

    // =============== twoVal ===============
    else if (players == "twoVal") {

        if (twoVal > 9) {

            error2.style.visibility = "visible";
            error2.innerHTML = "You must enter a number here between 1-9";
            
        }
        else if ( Number(twoVal) ) {

            error2.style.visibility = "hidden";
            passCheckk("v2");
            
        }
        else {

            error2.style.visibility = "visible";
            error2.innerHTML = "You must enter a number here";
            
        };

    }

    // =============== threeVal ===============
    else if (players == "threeVal") {

        if (threeVal > 9) {

            error3.style.visibility = "visible";
            error3.innerHTML = "You must enter a number here between 1-9";
            
        }
        else if ( Number(threeVal) ) {

            error3.style.visibility = "hidden";
            passCheckk("v3");
            
        }
        else {
            
            error3.style.visibility = "visible";
            error3.innerHTML = "You must enter a number here";
            
        };

    }
    
    // =============== fourVal ===============
    else if (players == "fourVal") {

        if (fourVal > 9) {

            error4.style.visibility = "visible";
            error4.innerHTML = "You must enter a number here between 1-9";
            
        }
        else if ( Number(fourVal) ) {

            error4.style.visibility = "hidden";
            passCheckk("v4");
            
        }
        else {
            
            error4.style.visibility = "visible";
            error4.innerHTML = "You must enter a number here";
            
        };

    }

};

// function passCheckk Start ======================== fx

function passCheckk (item) {

    if (item == "v2") {

        if (twoVal == oneValStored) {

            twoValStored = twoVal;
            chance2.innerHTML = "Amazing!";
            console.log(twoValStored);
            btn2.setAttribute('disabled', '');
            input2.setAttribute('disabled', '');
            input3.removeAttribute('disabled');
            btn3.removeAttribute('disabled');
            player3.style.outline = "#ff6b6b46 1px solid";
            player2.style.outline = "none";
            count = 5;
            
        }
        else if (twoVal != oneValStored) {
            
    
            if (count > 1) {  

                count--;
                countSpan2.innerHTML = count;
                
            }
            else if (count == 1) {
                
                twoValStored = twoVal;
                input2.setAttribute('disabled', '');
                btn2.setAttribute('disabled', '');
                input3.removeAttribute('disabled');
                btn3.removeAttribute('disabled');
                player3.style.outline = "#ff6b6b46 1px solid";
                player2.style.outline = "none";
                chance2.innerHTML = "Better luck next time!";
                count = 5;
                console.log(twoValStored);
                
            }
    
        }

    }
    else if (item == "v3") {

        if (threeVal == oneValStored) {

            threeValStored = threeVal;
            chance3.innerHTML = "Amazing!";
            console.log(threeValStored);
            input3.setAttribute('disabled', '');
            btn3.setAttribute('disabled', '');
            input4.removeAttribute('disabled');
            btn4.removeAttribute('disabled');
            player4.style.outline = "#ff6b6b46 1px solid";
            player3.style.outline = "none";
            count = 5;
            
        }
        else if (threeVal != oneValStored) {
            
    
            if (count > 1) {  

                count--;
                countSpan3.innerHTML = count;
                
            }
            else if (count == 1) {
                
                threeValStored = threeVal;
                input3.setAttribute('disabled', '');
                btn3.setAttribute('disabled', '');
                input4.removeAttribute('disabled');
                btn4.removeAttribute('disabled');
                player4.style.outline = "#ff6b6b46 1px solid";
                player3.style.outline = "none";
                chance3.innerHTML = "Better luck next time!";
                count = 5;
                console.log(threeValStored);
                
            };
    
        };

    }
    else if (item == "v4") {

        if (fourVal == oneValStored) {

            fourValStored = fourVal;
            chance4.innerHTML = "Amazing!";
            console.log(fourValStored);
            input4.setAttribute('disabled', '');
            btn4.setAttribute('disabled', '');
            check.removeAttribute('disabled');
            player4.style.outline = "none";
            check.style.outline = "#157f41 1.5px solid";
            count = 5;
            
        }
        else if (fourVal != oneValStored) {
            
            if (count > 1) {  

                count--;
                countSpan4.innerHTML = count;
                
            }
            else if (count == 1) {
                
                fourValStored = fourVal;
                input4.setAttribute('disabled', '');
                btn4.setAttribute('disabled', '');
                check.removeAttribute('disabled');
                player4.style.outline = "none";
                check.style.outline = "#157f41 1.5px solid";
                chance4.innerHTML = "Better luck next time!";
                console.log(fourValStored);
                count = 5;
                
            };
    
        };

    };

};


// function checkResult Start ======================== fx

function checkResult (result) {

    if (result == "r2") {

        if (oneValStored == twoValStored) {
            
            annous2.innerHTML = "Player 2 Wins!";
            annous1.innerHTML = "Player 1 Looses!";
            
        }
        else if (oneValStored != twoValStored) {

            annous2.innerHTML = "Player 2 Looses!";
    
        }

    }
    else if (result == "r3") {

        if (oneValStored == threeValStored) {
            
            annous3.innerHTML = "Player 3 Wins!";
            annous1.innerHTML = "Player 1 Looses!";
    
        }
        else if (oneValStored != threeValStored) {
            
            annous3.innerHTML = "Player 3 Looses!";
    
        }

    }
    else if (result == "r4") {

        if (oneValStored == fourValStored) {
            
            annous4.innerHTML = "Player 4 Wins!";
            annous1.innerHTML = "Player 1 Looses!";
    
        }
        else if (oneValStored != fourValStored) {
            
            annous4.innerHTML = "Player 4 Looses!";
    
        }

    }
    else if (result == "allChk") {
        if (
            oneValStored == twoValStored || oneValStored == threeValStored || oneValStored == fourValStored
        ) {

            congra.innerHTML = "🎉 Congratulations! 🎉";
            annous1.innerHTML = "Player 1 Looses!"
            
        }
        else {

            congra.innerHTML = "😒 Try Again! 😒";
            annous1.innerHTML = "Player 1 Wins!"

        }

    }

}































