/* ==========================================
   ending.js
   birthday.exe v6.0
========================================== */

import { endingMessage, terminalLines } from "../data/ending.js";

/* ==========================================
   ELEMENTS
========================================== */

const message = document.getElementById("ending-message");
const terminal = document.getElementById("terminal-ending");
const replay = document.getElementById("replay");
const ps = document.getElementById("ending-ps");

/* ==========================================
   START
========================================== */

export function startEnding(){

    if(!message) return;

    replay.classList.remove("show");

    terminal.innerHTML = "";

    ps.textContent = "";

    message.innerHTML = "";

    typeMessage();

}

/* ==========================================
   TYPE MAIN MESSAGE
========================================== */

function typeMessage(){

    const lines = endingMessage.trim().split("\n");

    let index = 0;

    function next(){

        if(index >= lines.length){

            typeTerminal();

            return;

        }

        const p = document.createElement("p");

        p.textContent = lines[index];

        p.style.opacity = "0";

        p.style.transform = "translateY(12px)";

        p.style.transition = ".45s";

        message.appendChild(p);

        requestAnimationFrame(()=>{

            p.style.opacity = "1";

            p.style.transform = "translateY(0px)";

        });

        index++;

        setTimeout(next,260);

    }

    next();

}

/* ==========================================
   TERMINAL
========================================== */

function typeTerminal(){

    let i = 0;

    function next(){

        if(i >= terminalLines.length){

            finish();

            return;

        }

        const line = document.createElement("div");

        line.textContent = "> " + terminalLines[i];

        line.className = "terminal-line";

        terminal.appendChild(line);

        terminal.scrollTop = terminal.scrollHeight;

        i++;

        setTimeout(next,450);

    }

    next();

}

/* ==========================================
   FINISH
========================================== */

function finish(){

    replay.classList.add("show");

    ps.innerHTML = `
        PS...
        <br><br>
        You'll always have a special place
        in one person's memories. ❤️
    `;

    ps.style.opacity = "1";

}

/* ==========================================
   REPLAY
========================================== */

if(replay){

    replay.addEventListener("click",()=>{

        location.reload();

    });

}