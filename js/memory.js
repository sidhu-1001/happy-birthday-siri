/* ==========================================
   memory.js
========================================== */


const loader = document.getElementById("memory-loader");
const list = document.getElementById("memory-list");
const arrow = document.querySelector("#memory-screen .continue");

const memories=[

"Friendship",

"Care",

"Late Night Talks",

"Laughs",

"Support",

"Trust",

"One Special Person"

];

let finished=false;

/* ==========================================
START
========================================== */
const screen = document.getElementById("memory-screen");

screen.scrollTop = 0;

window.scrollTo(0,0);

export function startMemory(){

    finished=false;

    loader.innerHTML="";

    list.innerHTML="";

    arrow.style.opacity="0";

    const line=document.createElement("div");

    line.className="scan-line";

    line.textContent="Scanning Memory Database...";

    loader.appendChild(line);

    const progress=document.createElement("div");

    progress.className="scan-progress";

    const bar=document.createElement("span");

    progress.appendChild(bar);

    loader.appendChild(progress);

    requestAnimationFrame(()=>{

        bar.style.width="100%";

    });

    setTimeout(()=>{

        const done=document.createElement("div");

        done.className="scan-line";

        done.innerHTML="Memory Database Verified ✓";

        loader.appendChild(done);

        showItems();

    },1800);

}

/* ==========================================
SHOW ITEMS
========================================== */

function showItems(){

    let i=0;

    function next(){

        if(i>=memories.length){

            finished=true;

            setTimeout(()=>{

                arrow.style.opacity="1";

            },600);

            return;

        }

        const row=document.createElement("div");

        row.className="memory-item";

        row.innerHTML=`

            <span>${memories[i]}</span>

            <strong>✓</strong>

        `;

        list.appendChild(row);

        requestAnimationFrame(()=>{

            row.style.opacity="1";

            row.style.transform="translateY(0)";

        });

        i++;

        setTimeout(next,350);

    }

    next();

}

/* ==========================================
NEXT
========================================== */

arrow.onclick=()=>{

    if(!finished){

        return;

    }

    window.nextScreen();

};