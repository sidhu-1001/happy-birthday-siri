/* ==========================================
   boot.js
   birthday.exe v3.0
========================================== */



const terminal = document.getElementById("terminal");

let finished = false;
let index = 0;

/* ==========================================
   LOGS
========================================== */

const logs = [

{
    type:"command",
    text:"C:\\Users\\Siri> launch birthday.exe"
},

{
    type:"normal",
    text:"Loading Birthday Engine..."
},

{
    type:"progress"
},

{
    type:"normal",
    text:"Initializing Emotional AI..."
},

{
    type:"progress"
},

{
    type:"normal",
    text:"Scanning Shared Memories..."
},

{
    type:"progress"
},

{
    type:"normal",
    text:"Finding Perfect Words..."
},

{
    type:"error",
    text:"No perfect words found."
},

{
    type:"heart",
    text:"❤️ Switching To Heart Mode..."
},

{
    type:"normal",
    text:"Preparing Birthday Experience..."
},

{
    type:"progress"
},

{
    type:"success",
    text:"✔ Heart Successfully Loaded"
}

];

/* ==========================================
   TERMINAL HEADER
========================================== */

function createHeader(){

    return `

    <div class="terminal-header">

        <div class="terminal-dots">

            <span></span>

            <span></span>

            <span></span>

        </div>

        <div class="terminal-name">

            Terminal

        </div>

    </div>

    <div class="terminal-body" id="terminal-body"></div>

    `;

}

/* ==========================================
   PROGRESS BAR
========================================== */

function createProgress(){

    const progress=document.createElement("div");

    progress.className="progress";

    const span=document.createElement("span");

    progress.appendChild(span);

    requestAnimationFrame(()=>{

        span.style.width="100%";

    });

    return progress;

}

/* ==========================================
   ADD LINE
========================================== */

function addLine(){

    const body=document.getElementById("terminal-body");

    if(index>=logs.length){

        setTimeout(showReady,700);

        return;

    }

    const item=logs[index];

    if(item.type==="progress"){

        body.appendChild(createProgress());

        body.scrollTop=body.scrollHeight;

        index++;

        setTimeout(addLine,900);

        return;

    }

    const line=document.createElement("div");

    line.className="terminal-line";

    switch(item.type){

        case"command":

            line.classList.add("terminal-command");

            break;

        case"success":

            line.classList.add("terminal-success");

            break;

        case"error":

            line.classList.add("terminal-error");

            break;

        case"heart":

            line.classList.add("terminal-heart");

            break;

    }

    line.textContent=item.text;

    body.appendChild(line);

    body.scrollTop=body.scrollHeight;

    index++;

    setTimeout(addLine,650);

}

/* ==========================================
   READY CARD
========================================== */

function showReady(){

    finished = true;

    const terminal = document.getElementById("terminal");

    terminal.style.opacity = "0";

    terminal.style.transform = "translateY(30px)";

    setTimeout(()=>{

        terminal.innerHTML = `

            <div class="boot-ready">

                <div class="ready-heart">
                    ❤️
                </div>

                <h2>System Ready</h2>

                <p>Tap Anywhere To Continue</p>

                <div class="version">
                    birthday.exe v3.0
                </div>

            </div>

        `;

        terminal.style.opacity = "1";

        terminal.style.transform = "translateY(0)";

    },500);

}

/* ==========================================
   START BOOT
========================================== */

export function startBoot(){

    finished=false;

    index=0;

    terminal.innerHTML=createHeader();

    setTimeout(addLine,700);

}

/* ==========================================
   TAP TO CONTINUE
========================================== */

document
.getElementById("boot-screen")
.addEventListener("click",()=>{

    if(!finished){

        return;

    }

    window.nextScreen();

});