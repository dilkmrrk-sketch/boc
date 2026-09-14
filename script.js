/* =========================================
   BOOKOFCA.ONLINE
   INTRO SLIDE SYSTEM
========================================= */

const introScreen = document.getElementById("introScreen");
const slideArea = document.getElementById("slideArea");

let startY = 0;
let currentY = 0;
let dragging = false;


/* =========================================
   COMPLETE THE SLIDE
========================================= */

function openWebsite() {

    introScreen.classList.add("hide");

    document.body.style.overflowY = "auto";

}


/* =========================================
   MOUSE
========================================= */

slideArea.addEventListener("mousedown", function (event) {

    dragging = true;

    startY = event.clientY;

});


document.addEventListener("mousemove", function (event) {

    if (!dragging) return;

    currentY = event.clientY;

    const distance = startY - currentY;

    if (distance > 80) {

        dragging = false;

        openWebsite();

    }

});


document.addEventListener("mouseup", function () {

    dragging = false;

});


/* =========================================
   TOUCH / MOBILE
========================================= */

slideArea.addEventListener("touchstart", function (event) {

    startY = event.touches[0].clientY;

}, { passive: true });


slideArea.addEventListener("touchmove", function (event) {

    currentY = event.touches[0].clientY;

    const distance = startY - currentY;

    if (distance > 70) {

        openWebsite();

    }

}, { passive: true });


/* =========================================
   ALSO ALLOW CLICK
========================================= */

slideArea.addEventListener("click", function () {

    openWebsite();

});


/* =========================================
   START LOCKED
========================================= */

document.body.style.overflow = "hidden";