let buyOpen=document.querySelectorAll(".button-buy");for(var i=0;i<buyOpen.length;i++){function modalShow(e){let t=document.querySelector(".modal-buy"),o=t.querySelector(".modal-close");e.preventDefault(),t.classList.add("modal-show"),o.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&t.classList.contains("modal-show")&&(e.preventDefault(),t.classList.remove("modal-show"))})}buyOpen[i].addEventListener("click",modalShow)}let mapOpen=document.querySelector(".contacts-map"),modalMap=document.querySelector(".modal-map"),modalMapClose=modalMap.querySelector(".modal-close");mapOpen.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),modalMapClose.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMap.classList.contains("modal-show")&&(e.preventDefault(),modalMap.classList.remove("modal-show"))});let writeOpen=document.querySelector(".button-map"),modalWrite=document.querySelector(".modal-write"),modalWriteClose=modalWrite.querySelector(".modal-close"),formWrite=modalWrite.querySelector(".form-write"),enterLogin=modalWrite.querySelector(".write-login"),enterEmail=modalWrite.querySelector(".write-email");writeOpen.addEventListener("click",function(e){e.preventDefault(),modalWrite.classList.add("modal-show"),enterLogin.focus()}),formWrite.addEventListener("submit",function(e){e.preventDefault(),enterEmail.value||modalWrite.classList.add("modal-error")}),modalWriteClose.addEventListener("click",function(e){e.preventDefault(),modalWrite.classList.remove("modal-show"),modalWrite.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalWrite.classList.contains("modal-show")&&(e.preventDefault(),modalWrite.classList.remove("modal-show"),modalWrite.classList.remove("modal-error"))});const sliderBtnNext=document.querySelector(".slider-button-next"),sliderBtnPrev=document.querySelector(".slider-button-back"),firstSlide=document.querySelector(".slider-item-1"),secondSlide=document.querySelector(".slider-item-2"),firstDot=document.querySelector(".slider-dot-1"),secondDot=document.querySelector(".slider-dot-2");sliderBtnNext.addEventListener("click",function(e){e.preventDefault(),firstSlide.classList.remove("slide-current"),secondSlide.classList.add("slide-current"),firstDot.classList.remove("slider-dot-current"),secondDot.classList.add("slider-dot-current")}),sliderBtnPrev.addEventListener("click",function(e){e.preventDefault(),secondSlide.classList.remove("slide-current"),firstSlide.classList.add("slide-current"),secondDot.classList.remove("slider-dot-current"),firstDot.classList.add("slider-dot-current")});