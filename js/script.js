  let buyOpen = document.querySelectorAll(".button-buy");


  for (var i = 0; i < buyOpen.length; i++) {
    let btns = buyOpen[i];
    btns.addEventListener("click", modalShow);

    function modalShow(evt) {
      let modalBuy = document.querySelector(".modal-buy");
      let modalBuyClose = modalBuy.querySelector(".modal-close");
      evt.preventDefault();
      modalBuy.classList.add("modal-show");

      modalBuyClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalBuy.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (modalBuy.classList.contains("modal-show")) {
            evt.preventDefault();
            modalBuy.classList.remove("modal-show");
          }
        }
      });
    }
  };



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
  let formWrite = modalWrite.querySelector(".form-write");
  let enterLogin = modalWrite.querySelector(".write-login");
  let enterEmail = modalWrite.querySelector(".write-email");



  writeOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWrite.classList.add("modal-show");
    enterLogin.focus();
  });



  formWrite.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!enterEmail.value) {
      modalWrite.classList.add("modal-error");
    }
  });


  modalWriteClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWrite.classList.remove("modal-show");
    modalWrite.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (modalWrite.classList.contains("modal-show")) {
        evt.preventDefault();
        modalWrite.classList.remove("modal-show");
        modalWrite.classList.remove("modal-error");
      }
    }
  });


const sliderBtnNext = document.querySelector('.slider-button-next');
const sliderBtnPrev = document.querySelector('.slider-button-back');
const firstSlide = document.querySelector('.slider-item-1');
const secondSlide = document.querySelector('.slider-item-2');
const firstDot = document.querySelector('.slider-dot-1');
const secondDot = document.querySelector('.slider-dot-2')

sliderBtnNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('slide-current');
  secondSlide.classList.add('slide-current');
  firstDot.classList.remove('slider-dot-current');
  secondDot.classList.add('slider-dot-current');
})

sliderBtnPrev.addEventListener('click', function (evt) {
  evt.preventDefault();
  secondSlide.classList.remove('slide-current');
  firstSlide.classList.add('slide-current');
  secondDot.classList.remove('slider-dot-current');
  firstDot.classList.add('slider-dot-current');
})