/* ==================================================
   PERSONAL LETTER
   birthday.exe v5.0
================================================== */

import { letterPages } from "../data/letter.js";
import { nextScreen } from "./app.js";

/* ==================================================
   ELEMENTS
================================================== */

const content = document.getElementById("letter-content");
const button = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");

let currentPage = 0;

/* ==================================================
   RENDER PAGE
================================================== */

function renderPage(){

    if(!content) return;

    content.classList.remove("show");

    setTimeout(()=>{

        const page = letterPages[currentPage];

        content.scrollTop = 0;

        content.innerHTML = `

            ${page.title
                ? `<h1 class="letter-title">${page.title}</h1>`
                : ""
            }

            <div class="letter-text" style="text-align:left;">

                ${page.text}

            </div>

        `;

        requestAnimationFrame(()=>{

            content.classList.add("show");

        });

        if(pageNumber){

            pageNumber.textContent =
                `${currentPage + 1} / ${letterPages.length}`;

        }

        if(button){

            if(currentPage === letterPages.length - 1){

                button.textContent = "Finish ❤️";

                button.classList.add("finish");

            }
            else{

                button.textContent = "Continue ❤️";

                button.classList.remove("finish");

            }

        }

    },200);

}

/* ==================================================
   START
================================================== */

export function startPersonalLetter(){

    currentPage = 0;

    renderPage();

}

/* ==================================================
   NEXT PAGE
================================================== */

/* ==================================================
   NEXT PAGE
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


