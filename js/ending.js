/* ==========================================
   ending.js
   birthday.exe v8.0
========================================== */

import { endingMessage, terminalLines } from "../data/ending.js";

/* ==========================================
   ELEMENTS
========================================== */

const screen = document.getElementById("ending-screen");

const message = document.getElementById("ending-message");

const terminal = document.getElementById("terminal-ending");

const replay = document.getElementById("replay");

const ps = document.getElementById("ending-ps");

const hint = document.querySelector(".scroll-hint");

/* ==========================================
   START
========================================== */

export function startEnding(){

    if(!message) return;

    message.innerHTML = "";

    if(terminal) terminal.innerHTML = "";

    if(ps){

        ps.innerHTML = "";

        ps.style.opacity = "0";

    }

    if(replay){

        replay.classList.remove("show");

    }

    if(hint){

        hint.style.opacity = "1";

        hint.style.pointerEvents = "auto";

    }

    if(screen){

        screen.scrollTo({

            top:0,

            behavior:"auto"

        });

    }

    typeMessage();

}

/* ==========================================
   TYPE LETTER
========================================== */

function typeMessage(){

    const lines = endingMessage

        .trim()

        .split("\n")

        .filter(line=>line.trim()!="");

    let index = 0;

    function next(){

        if(index >= lines.length){

            setTimeout(typeTerminal,800);

            return;

        }

        const p = document.createElement("p");

        p.textContent = lines[index];

        p.style.opacity = "0";

        p.style.transform = "translateY(18px)";

        p.style.transition = ".45s ease";

        message.appendChild(p);

        requestAnimationFrame(()=>{

            p.style.opacity = "1";

            p.style.transform = "translateY(0)";

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

    if(!terminal){

        finish();

        return;

    }

    let i = 0;

    function next(){

        if(i >= terminalLines.length){

            setTimeout(finish,700);

            return;

        }

        const line = document.createElement("div");

        line.className = "terminal-line";

        line.textContent = "> " + terminalLines[i];

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

    if(ps){

        ps.innerHTML = `
        No matter where life takes us...

        You'll always have a special place
        in one person's memories. ❤️
        `;

        ps.style.opacity = "1";

    }

    if(replay){

        replay.classList.add("show");

    }

}

/* ==========================================
   HIDE SCROLL HINT
========================================== */

if(screen && hint){

    screen.addEventListener("scroll",()=>{

        if(screen.scrollTop > 30){

            hint.style.opacity = "0";

            hint.style.transform = "translateY(-10px)";

            hint.style.pointerEvents = "none";

        }

    });

}

/* ==========================================
   REPLAY
========================================== */

if(replay){

    replay.onclick = ()=>{

        location.reload();

    };

}