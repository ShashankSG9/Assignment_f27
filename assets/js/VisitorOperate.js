let navIn = document.getElementById("nav-Info");
let navButtonIn = document.getElementById("nav-button-Info");
let punchIn = document.getElementById("punch-Info");

function onPageScroll() {
    if (window.scrollY > 160) {
        navIn.classList.add("w-100", "bg-light", "position-fixed", "top-0", "start-50", "translate-middle-x", "nav-Config");
        navButtonIn.classList.add("btn-outline-dark");
        punchIn.classList.add("punch-region-Config");
    } else {
        navIn.classList.remove("w-100", "bg-light", "position-fixed", "top-0", "start-50", "translate-middle-x", "nav-Config");
        navButtonIn.classList.remove("btn-outline-dark");
        punchIn.classList.remove("punch-region-Config");
    }
}

window.addEventListener("scroll", onPageScroll);