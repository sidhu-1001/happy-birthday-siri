/* ==========================================
   ending.js
   birthday.exe v7.0
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

export function startEnding() {

    if (!message) return;

    // Reset everything
    message.innerHTML = "";

    if (terminal) terminal.innerHTML = "";

    if (replay) replay.classList.remove("show");

    if (ps) {
        ps.innerHTML = "";
        ps.style.opacity = "0";
    }

    // Scroll screen to top
    const screen = document.getElementById("ending-screen");

    if (screen) {

        screen.scrollTo({
            top: 0,
            behavior: "auto"
        });

    }

    typeMessage();

}

/* ==========================================
   TYPE MESSAGE
========================================== */

function typeMessage() {

    const lines = endingMessage
        .trim()
        .split("\n")
        .filter(line => line.trim() !== "");

    let index = 0;

    function next() {

        if (index >= lines.length) {

            setTimeout(typeTerminal, 800);

            return;

        }

        const p = document.createElement("p");

        p.textContent = lines[index];

        p.style.opacity = "0";
        p.style.transform = "translateY(20px)";
        p.style.transition = ".45s ease";

        message.appendChild(p);

        requestAnimationFrame(() => {

            p.style.opacity = "1";
            p.style.transform = "translateY(0)";

        });

        index++;

        setTimeout(next, 260);

    }

    next();

}

/* ==========================================
   TERMINAL
========================================== */

function typeTerminal() {

    if (!terminal) {

        finish();

        return;

    }

    let i = 0;

    function next() {

        if (i >= terminalLines.length) {

            setTimeout(finish, 800);

            return;

        }

        const line = document.createElement("div");

        line.className = "terminal-line";

        line.textContent = "> " + terminalLines[i];

        terminal.appendChild(line);

        terminal.scrollTop = terminal.scrollHeight;

        i++;

        setTimeout(next, 450);

    }

    next();

}

/* ==========================================
   FINISH
========================================== */

function finish() {

    if (ps) {

        ps.innerHTML = `

            <br>

            PS...

            <br><br>

            You'll always have a special place
            in one person's memories. ❤️

        `;

        ps.style.opacity = "1";

    }

    if (replay) {

        replay.classList.add("show");

    }

}

/* ==========================================
   REPLAY
========================================== */

if (replay) {

    replay.addEventListener("click", () => {

        location.reload();

    });

}