/* ==================================================
   NOTIFICATION
================================================== */



const button = document.getElementById("open-notification");

const card = document.querySelector(".notification-card");

const wrapper = document.querySelector(".notification-wrapper");

const screen = document.getElementById("notification-screen");

/* ==========================================
START
========================================== */

export function startNotification(){

    screen.classList.add("active");

}

/* ==========================================
OPEN
========================================== */

button.addEventListener("click",()=>{

    /* Phone vibration */

    wrapper.animate(

        [

            {transform:"translateX(0px)"},

            {transform:"translateX(-5px)"},

            {transform:"translateX(5px)"},

            {transform:"translateX(-4px)"},

            {transform:"translateX(0px)"}

        ],

        {

            duration:180

        }

    );

    /* Card Expand */

    card.style.transition=".55s ease";

    card.style.transform="scale(1.08)";

    card.style.opacity="0";

    setTimeout(()=>{

        window.nextScreen();

    },500);

});