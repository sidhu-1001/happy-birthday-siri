/* ==================================================
   PERSONAL LETTER
   birthday.exe v6.0
================================================== */

import { letterPages } from "../data/letter.js";
import { nextScreen } from "./app.js";

/* ==================================================
   ELEMENTS
================================================== */

const content = document.getElementById("letter-content");
const button = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");
const screen = document.getElementById("letter-screen");

let currentPage = 0;

/* ==================================================
   RENDER PAGE
================================================== */

function renderPage() {

    if (!content) return;

    const page = letterPages[currentPage];

    content.classList.remove("show");

    content.innerHTML = `

        ${page.title ? `<h1 class="letter-title">${page.title}</h1>` : ""}

        <div class="letter-text">

            ${page.text}

        </div>

    `;

    requestAnimationFrame(() => {

        /* Reset ALL scroll positions */

        content.scrollTop = 0;

        if (screen) {
            screen.scrollTop = 0;
        }

        window.scrollTo(0, 0);

        content.classList.add("show");

    });

    if (pageNumber) {

        pageNumber.textContent =
            `${currentPage + 1} / ${letterPages.length}`;

    }

    if (button) {

        if (currentPage === letterPages.length - 1) {

            button.textContent = "Finish ❤️";
            button.classList.add("finish");

        } else {

            button.textContent = "Continue ❤️";
            button.classList.remove("finish");

        }

    }

}

/* ==================================================
   START
================================================== */

export function startPersonalLetter() {

    currentPage = 0;

    renderPage();

}

/* ==================================================
   BUTTON
================================================== */

if (button) {

    button.addEventListener("click", () => {

        if (currentPage < letterPages.length - 1) {

            currentPage++;

            renderPage();

        } else {

            nextScreen();

        }

    });

}