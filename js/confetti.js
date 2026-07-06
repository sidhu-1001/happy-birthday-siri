/* ==========================================
   confetti.js
========================================== */

const canvas=document.getElementById("confetti-canvas");

const ctx=canvas.getContext("2d");

let particles=[];

let animationId=null;

const colors=[

"#FF5E9C",

"#FFC46B",

"#FFFFFF",

"#59F28E"

];

/* ==========================================
RESIZE
========================================== */

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

/* ==========================================
CREATE
========================================== */

function createConfetti(){

particles=[];

for(let i=0;i<180;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*-canvas.height,

w:Math.random()*6+4,

h:Math.random()*10+6,

dx:(Math.random()-0.5)*3,

dy:Math.random()*3+2,

gravity:0.04+Math.random()*0.03,

rotation:Math.random()*360,

rotationSpeed:(Math.random()-0.5)*0.25,

color:colors[Math.floor(Math.random()*colors.length)]

});

}

}

/* ==========================================
DRAW
========================================== */

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.save();

ctx.translate(p.x,p.y);

ctx.rotate(p.rotation);

ctx.fillStyle=p.color;

ctx.fillRect(

-p.w/2,

-p.h/2,

p.w,

p.h

);

ctx.restore();

});

}

/* ==========================================
UPDATE
========================================== */

function update(){

particles.forEach(p=>{

p.x+=p.dx;

p.dy+=p.gravity;

p.y+=p.dy;

p.rotation+=p.rotationSpeed;

});

particles=particles.filter(

p=>p.y<canvas.height+50

);

}

/* ==========================================
LOOP
========================================== */

function animate(){

draw();

update();

if(particles.length===0){

cancelAnimationFrame(animationId);

animationId=null;

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

return;

}

animationId=requestAnimationFrame(animate);

}

/* ==========================================
START
========================================== */

export function startConfetti(){

if(animationId){

cancelAnimationFrame(animationId);

animationId=null;

}

createConfetti();

animate();

}