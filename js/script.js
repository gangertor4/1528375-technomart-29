let mapOpen = document.querySelector(".contacts-map");
let modalMap = document.querySelector(".modal-map");
let modalMapClose = modalMap.querySelector(".modal-close");

mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});


let writeOpen = document.querySelector(".button-map");
let modalWrite = document.querySelector(".modal-write");
let modalWriteClose = modalWrite.querySelector(".modal-close");
let enterLogin = modalWrite.querySelector(".write-input");

writeOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWrite.classList.add("modal-show");
  enterLogin.focus();
});


modalWriteClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWrite.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalWrite.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWrite.classList.remove("modal-show");
    }
  }
});
