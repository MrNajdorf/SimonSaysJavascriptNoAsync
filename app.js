let userSeq = [];
let gameSeq = [];

let gameState = false;

let level = 0;
let userIdx = 0;

let displayLevel = document.querySelector("#level");
let redBtn = document.querySelector(".Rbox");
let greenBtn = document.querySelector(".Gbox");
let blueBtn = document.querySelector(".Bbox");
let yellowBtn = document.querySelector(".Ybox");
let switchBtn = document.querySelector(".switch-btn");
let fail = document.querySelector("audio");

switchBtn.addEventListener("click", () => {

    if (!gameState) {
        switchBtn.innerText = "STARTED";
        gameState = true;
        levelUp();
    }
})

redBtn.addEventListener("click", () => {

    userIdx++;
    userSeq[userIdx - 1] = 0;
    redBtn.classList.add("Rbright");
    setTimeout(()=>{redBtn.classList.remove("Rbright")},1000)

    if (userSeq[userIdx - 1] != gameSeq[userIdx - 1]) {

        fail.play();
        gameOver();
    } else if (userIdx == level) {

        userSeq = [];
        userIdx = 0;

        setTimeout(() => {

            levelUp();
        }, 1000)
    }

});

greenBtn.addEventListener("click", () => {

    userIdx++;
    userSeq[userIdx - 1] = 1;
    greenBtn.classList.add("Gbright");
    setTimeout(()=>{greenBtn.classList.remove("Gbright")},1000)

    if (userSeq[userIdx - 1] != gameSeq[userIdx - 1]) {

        fail.play();
        gameOver();
        
    } else if (userIdx == level) {

        userSeq = [];
        userIdx = 0;

        setTimeout(() => {

            levelUp();
        }, 1000)
    }

});

blueBtn.addEventListener("click", () => {

    userIdx++;
    userSeq[userIdx - 1] = 2;
    blueBtn.classList.add("Bbright");
    setTimeout(()=>{blueBtn.classList.remove("Bbright")},1000)

    if (userSeq[userIdx - 1] != gameSeq[userIdx - 1]) {

        fail.play();
        gameOver();
        
    } else if (userIdx == level) {

        userSeq = [];
        userIdx = 0;

        setTimeout(() => {

            levelUp();
        }, 1000)
    }

});

yellowBtn.addEventListener("click", () => {

    userIdx++;
    userSeq[userIdx - 1] = 3;
    yellowBtn.classList.add("Ybright");
    setTimeout(()=>{yellowBtn.classList.remove("Ybright")},1000)

    if (userSeq[userIdx - 1] != gameSeq[userIdx - 1]) {

        fail.play();
        gameOver();
        
    } else if (userIdx == level) {

        userSeq = [];
        userIdx = 0;

        setTimeout(() => {

            levelUp();
        }, 1000)
    }

});

function levelUp() {

    level++;

    displayLevel.innerText = `level ${level}`;

    gameSeq[level - 1] = Math.floor(Math.random() * 4);

    for (let i = 0; i < level; i++) {



        switch (gameSeq[i]) {

            case 0:
                flashBtn(redBtn, i + 1);
                break;
            case 1:
                flashBtn(greenBtn, i + 1);
                break;
            case 2:
                flashBtn(blueBtn, i + 1);
                break;
            case 3:
                flashBtn(yellowBtn, i + 1);
                break;
        }
    }
}

function flashBtn(btn, lay) {

    switch (btn) {

        case redBtn:
            setTimeout(() => { btn.classList.add("Rbright"); }, 1000 * lay);

            setTimeout(() => {

                btn.classList.remove("Rbright");
            }, 1000 * (lay + 1));
            break;

        case greenBtn:
            setTimeout(() => { btn.classList.add("Gbright"); }, 1000 * lay);

            setTimeout(() => {

                btn.classList.remove("Gbright");
            }, 1000 * (lay + 1));
            break;

        case blueBtn:
            setTimeout(() => { btn.classList.add("Bbright"); }, 1000 * lay);

            setTimeout(() => {

                btn.classList.remove("Bbright");
            }, 1000 * (lay + 1));
            break;

        case yellowBtn:
            setTimeout(() => { btn.classList.add("Ybright"); }, 1000 * lay);

            setTimeout(() => {

                btn.classList.remove("Ybright");
            }, 1000 * (lay + 1));
            break;
    }
}

function gameOver() {

    console.log("Game Over");
    gameState = false;
    switchBtn.innerText = "START AGAIN";
    gameSeq = [];
    userSeq = [];
    userIdx = 0;
    level = 0;
    displayLevel.innerText = "";
}