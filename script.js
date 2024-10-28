const myslider = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');

let counter = 1;

let timer = setInterval(autoslides, 8000);

function autoslides() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentslide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslides, 8000);
}

function slidefun(n) {
    let i;
    for (i = 0; i < myslider.length; i++) {
        myslider[i].style.display = "none";
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active"); // Corrected syntax: Use parentheses () instead of equal sign = 
    }
   
    if (n < 1) {
        counter = myslider.length;
    }

    if (n > myslider.length) {
        counter = 1;
    }

    myslider[counter - 1].style.display = "block"; // Moved inside slidefun function
    dot[counter - 1].classList.add("active"); // Moved inside slidefun function
}
