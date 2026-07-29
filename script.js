/*=========================================================
            NUESTRO PRIMER MES ❤️
            script.js
=========================================================*/


/*=========================================================
                BIENVENIDA
=========================================================*/

const welcomeScreen = document.getElementById("welcome-screen");
const openGift = document.getElementById("openGift");

openGift.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.display = "none";

    }, 1200);

});


/*=========================================================
                MÚSICA
=========================================================*/

const music = document.getElementById("backgroundMusic");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const volume = document.getElementById("volume");
const manualPlay = document.getElementById("manualPlay");


music.volume = .5;


/* Play */

playBtn.onclick = () => {

    music.play();

    manualPlay.style.display = "none";

};


/* Pause */

pauseBtn.onclick = () => {

    music.pause();

};


/* Volumen */

volume.oninput = () => {

    music.volume = volume.value;

};


/* Intentar autoplay */

window.addEventListener("load", () => {

    music.play()

    .then(() => {

        manualPlay.style.display = "none";

    })

    .catch(() => {

        manualPlay.style.display = "block";

    });

});


manualPlay.onclick = () => {

    music.play();

    manualPlay.style.display = "none";

};



/*=========================================================
                CONTADOR
=========================================================*/

/*

    CAMBIAR AQUÍ LA FECHA

*/

const relationshipDate = new Date(

    "2026-06-29T07:30:00"

);



function updateCounter(){


    const now = new Date();

    let diff = now - relationshipDate;


    const seconds = Math.floor(diff/1000);

    const minutes = Math.floor(seconds/60);

    const hours = Math.floor(minutes/60);

    const days = Math.floor(hours/24);

    const months = Math.floor(days/30.4375);


    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days % 30;

    document.getElementById("hours").textContent =
        hours % 24;

    document.getElementById("minutes").textContent =
        minutes % 60;

    document.getElementById("seconds").textContent =
        seconds % 60;

}


updateCounter();

setInterval(updateCounter,1000);




/*=========================================================
                GALERÍA
=========================================================*/

const images = document.querySelectorAll(".gallery-image");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");


images.forEach(img=>{

    img.onclick=()=>{

        lightbox.style.display="flex";

        lightboxImage.src=img.src;

    }

});


closeLightbox.onclick=()=>{

    lightbox.style.display="none";

}


lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}




/*=========================================================
                MENSAJES SORPRESA
=========================================================*/


const surpriseMessages=[

"Eres el mejor regalo que la vida me dio ❤️",

"Cada día contigo vale más que mil días sin ti.",

"Gracias por existir.",

"Mi lugar favorito siempre será contigo.",

"Me enamoras incluso cuando no lo intentas.",

"Eres mi casualidad favorita.",

"Quiero celebrar miles de meses más contigo.",

"Tu sonrisa ilumina mi mundo.",

"Siempre serás mi persona favorita.",

"Te elegiría una y otra vez.",

"Gracias por hacerme tan feliz.",

"Eres la razón de muchas de mis sonrisas.",

"Mi corazón encontró su hogar contigo.",

"Eres mi tranquilidad.",

"Me haces creer en el amor todos los días.",

"Cada abrazo tuyo cura cualquier tristeza.",

"Nuestro primer mes es solo el comienzo.",

"Eres mi sueño hecho realidad.",

"Siempre voy a cuidar de ti.",

"Te amo infinitamente ❤️"

];



const buttons=

document.querySelectorAll(".surprise-btn");


const messageBox=

document.getElementById("surpriseMessage");


buttons.forEach(btn=>{


    btn.onclick=()=>{


        const random=

        surpriseMessages[

            Math.floor(

                Math.random()

                *surpriseMessages.length

            )

        ];


        messageBox.innerHTML=

        `<h3>${random}</h3>`;


        messageBox.animate([

            {

                transform:"scale(.8)",

                opacity:0

            },

            {

                transform:"scale(1)",

                opacity:1

            }

        ],{

            duration:500

        });


    };


});
/*=========================================================
            CARRUSEL DE FRASES
=========================================================*/

const quotes = document.querySelectorAll(".quote");

let currentQuote = 0;

function changeQuote() {

    quotes[currentQuote].classList.remove("active");

    currentQuote++;

    if (currentQuote >= quotes.length) {

        currentQuote = 0;

    }

    quotes[currentQuote].classList.add("active");

}

setInterval(changeQuote, 5000);



/*=========================================================
            ANIMACIONES AL HACER SCROLL
=========================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/*=========================================================
            LLUVIA DE CORAZONES
=========================================================*/

const rain = document.getElementById("heart-rain");

const rainIcons = [

    "❤️",
    "💖",
    "💕",
    "💗",
    "🌸",
    "✨"

];


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =

        rainIcons[
            Math.floor(
                Math.random() * rainIcons.length
            )
        ];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =

        (18 + Math.random() * 25) + "px";

    heart.style.animationDuration =

        (6 + Math.random() * 6) + "s";

    heart.style.opacity =

        (.4 + Math.random() * .6);

    rain.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 350);



/*=========================================================
            PARTÍCULAS
=========================================================*/

const particles =

document.getElementById("background-particles");


function createParticle() {

    const particle =

        document.createElement("div");

    particle.className = "particle";

    const size =

        Math.random() * 6 + 2;

    particle.style.width = size + "px";

    particle.style.height = size + "px";

    particle.style.left =

        Math.random() * 100 + "%";

    particle.style.animationDuration =

        (10 + Math.random() * 15) + "s";

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 26000);

}


for (let i = 0; i < 40; i++) {

    createParticle();

}

setInterval(createParticle, 1200);



/*=========================================================
            BRILLOS
=========================================================*/

const sparkleContainer =

document.getElementById("sparkles");


function createSparkle() {

    const sparkle =

        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =

        Math.random() * 100 + "%";

    sparkle.style.top =

        Math.random() * 100 + "%";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 400);



/*=========================================================
            BOTÓN ESPECIAL
=========================================================*/

const loveButton =

document.getElementById("loveButton");

const loveResult =

document.getElementById("loveResult");

loveButton.onclick = () => {

    loveResult.style.display = "block";

    loveResult.animate([

        {

            opacity: 0,

            transform: "scale(.6)"

        },

        {

            opacity: 1,

            transform: "scale(1)"

        }

    ], {

        duration: 900

    });

    createExplosion();

};



/*=========================================================
            EXPLOSIÓN DE CORAZONES
=========================================================*/

function createExplosion() {

    const emojis = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "🌸",
        "✨"

    ];

    for (let i = 0; i < 120; i++) {

        const heart =

            document.createElement("div");

        heart.className =

            "explosion-heart";

        heart.innerHTML =

            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.setProperty(

            "--x",

            (Math.random() * 900 - 450) + "px"

        );

        heart.style.setProperty(

            "--y",

            (Math.random() * 700 - 350) + "px"

        );

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2800);

    }

}



/*=========================================================
            EFECTO EXTRA
=========================================================*/

document.querySelectorAll(

".reason-card,.gallery-image,.time-box"

).forEach(item => {

    item.addEventListener(

        "mouseenter",

        () => {

            item.animate([

                {

                    transform: "scale(1)"

                },

                {

                    transform: "scale(1.05)"

                },

                {

                    transform: "scale(1)"

                }

            ], {

                duration: 500

            });

        }

    );

});
/*=========================================================
            APERTURA DE SOBRES AL HACER CLIC
=========================================================*/

document.querySelectorAll(".envelope").forEach(envelope => {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

});


/*=========================================================
            ICONOS PLAY / PAUSE
=========================================================*/

music.addEventListener("play", () => {

    playBtn.innerHTML = "🎵";
    pauseBtn.innerHTML = "⏸";

});

music.addEventListener("pause", () => {

    playBtn.innerHTML = "▶";
    pauseBtn.innerHTML = "⏸";

});


/*=========================================================
            CORAZONES SIGUIENDO EL CURSOR
=========================================================*/

if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        if (Math.random() > 0.92) {

            const heart = document.createElement("div");

            heart.innerHTML = "💖";

            heart.style.position = "fixed";
            heart.style.left = e.clientX + "px";
            heart.style.top = e.clientY + "px";

            heart.style.pointerEvents = "none";
            heart.style.fontSize = "18px";
            heart.style.zIndex = "99999";

            heart.animate([

                {
                    opacity:1,
                    transform:"translateY(0) scale(1)"
                },

                {
                    opacity:0,
                    transform:"translateY(-60px) scale(1.8)"
                }

            ],{

                duration:1200

            });

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },1200);

        }

    });

}


/*=========================================================
            CONFETI
=========================================================*/

const canvas = document.getElementById("confettiCanvas");

const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let confetti = [];

function createConfetti(){

    confetti = [];

    const colors = [

        "#ff6b9d",
        "#ffd166",
        "#ffffff",
        "#ff8fab",
        "#ffe066"

    ];

    for(let i=0;i<220;i++){

        confetti.push({

            x:Math.random()*canvas.width,

            y:-20,

            w:6+Math.random()*8,

            h:6+Math.random()*10,

            color:colors[Math.floor(Math.random()*colors.length)],

            speed:2+Math.random()*5,

            swing:Math.random()*4

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(piece=>{

        ctx.fillStyle=piece.color;

        ctx.fillRect(

            piece.x,

            piece.y,

            piece.w,

            piece.h

        );

        piece.y += piece.speed;

        piece.x += Math.sin(piece.y*0.05)*piece.swing;

    });

    confetti = confetti.filter(

        p=>p.y<canvas.height+30

    );

    if(confetti.length){

        requestAnimationFrame(drawConfetti);

    }

}


/*=========================================================
            BOTÓN ESPECIAL
=========================================================*/

loveButton.addEventListener("click",()=>{

    createConfetti();

    drawConfetti();

});


/*=========================================================
            ANIMACIÓN INICIAL
=========================================================*/

window.addEventListener("load",()=>{

    document.body.animate([

        {

            opacity:0

        },

        {

            opacity:1

        }

    ],{

        duration:1400,

        fill:"forwards"

    });

});


/*=========================================================
            EFECTO PARALLAX SUAVE
=========================================================*/

window.addEventListener("scroll",()=>{

    const value = window.scrollY;

    document.body.style.backgroundPositionY =

        value*0.15+"px";

});


/*=========================================================
            PERRITOS FLOTANTES
=========================================================*/

document.querySelectorAll(".puppy").forEach((dog,index)=>{

    setInterval(()=>{

        dog.animate([

            {

                transform:"translateY(0)"

            },

            {

                transform:"translateY(-10px)"

            },

            {

                transform:"translateY(0)"

            }

        ],{

            duration:1800+(index*500)

        });

    },2200);

});


/*=========================================================
            SALUDO FINAL
=========================================================*/

console.log(`

❤️=============================================❤️

        Feliz Primer Mes ❤️

Este sitio fue creado con muchísimo amor.

Espero que cada sección te saque una sonrisa.

❤️=============================================❤️

`);