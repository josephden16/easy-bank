// credit to sabe.io for the modal.
let modal = document.querySelector(".modal");
let hamburger = document.querySelector(".hamburger");
let open = false
function toggleModal() {
    modal.classList.toggle("show-modal");
    hamburger.classList.toggle("close");
    if (hamburger.classList.contains("close")) {
        hamburger.style.content = "url(../images/icon-close.svg)";
    } else {
        hamburger.style.content = "url(../images/icon-hamburger.svg)";
    }

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

hamburger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
