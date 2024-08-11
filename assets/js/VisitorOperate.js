let navIn = document.getElementById("nav-Info");
let navButtonIn = document.getElementById("nav-button-Info");
let punchIn = document.getElementById("punch-Info");

let anchorElIn=navIn.children[1].children[0];
let navIconElIn=navIn.children[0];


function onPageScroll() {
    if (window.scrollY > 160) {
        navIn.classList.add("w-100", "bg-light", "position-fixed", "top-0", "start-50", "translate-middle-x", "nav-Config");
        navButtonIn.classList.add("btn-outline-dark");
        punchIn.classList.add("punch-region-Config");

        for(let i=0; i<anchorElIn.childElementCount; i++){
            anchorElIn.children[i].children[0].classList.add("anchor-head-Config1");
        }

        for(let i=0; i<navIconElIn.childElementCount; i++){
            navIconElIn.children[i].children[0].classList.add("anchor-head-Config1");
        }
    } else {
        navIn.classList.remove("w-100", "bg-light", "position-fixed", "top-0", "start-50", "translate-middle-x", "nav-Config");
        navButtonIn.classList.remove("btn-outline-dark");
        punchIn.classList.remove("punch-region-Config");

        for(let i=0; i<navIn.children[1].children[0].childElementCount; i++){
            anchorElIn.children[i].children[0].classList.remove("anchor-head-Config1");
        }

        for(let i=0; i<navIconElIn.childElementCount; i++){
            navIconElIn.children[i].children[0].classList.remove("anchor-head-Config1");
        }
    }
}

window.addEventListener("scroll", onPageScroll);