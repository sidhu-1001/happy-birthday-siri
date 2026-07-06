/* ==================================================
   birthday.exe v3.0
   Main Screen Manager
================================================== */
console.log("APP LOADED");

import { startNotification } from "./notification.js";
import { startBoot } from "./boot.js";
import { startBirthday } from "./birthday.js";
import { startMemory } from "./memory.js";
import { startLetterIntro } from "./letter-intro.js";
import { startPersonalLetter } from "./personal-letter.js";
import { startEnding } from "./ending.js";

/* ==================================================
   SCREENS
================================================== */

const screens = document.querySelectorAll(".screen");

const order = [

    "notification-screen",

    "boot-screen",

    "birthday-screen",

    "memory-screen",

    "letter-intro",

    "letter-screen",

    "ending-screen"

];

let currentScreen = 0;

let locked = false;

/* ==================================================
   SHOW SCREEN
================================================== */

export function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList.add("active");

}

/* ==================================================
   NEXT SCREEN
================================================== */

export function nextScreen(){

    if(locked) return;

    if(currentScreen >= order.length-1) return;

    locked = true;

    currentScreen++;

    showScreen(order[currentScreen]);

    switch(order[currentScreen]){

        case "boot-screen":

            startBoot();

            break;

        case "birthday-screen":

            startBirthday();

            break;

        case "memory-screen":

            startMemory();

            break;

        case "letter-intro":
            startLetterIntro();

            break;
   

        case "letter-screen":
            startPersonalLetter();

            break;


        case "ending-screen":

            startEnding();

            break;

    }

    setTimeout(()=>{

        locked = false;

    },500);

}
window.nextScreen = nextScreen;

/* ==================================================
   START
================================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("Calling startNotification");

    currentScreen = 0;

    showScreen(order[0]);

    startNotification();

});

/* ==================================================
   OPEN APP
================================================== */

const openButton = document.getElementById("open-app");

if(openButton){

    openButton.addEventListener("click",()=>{

        nextScreen();

    });

}