/** -- change css --*/

const changeMode = document.querySelector("#dark");

changeMode.onclick = function getMode() {
  let linkCss = document.getElementById("link-css");
  let linkDCss = document.getElementById("linkD-css");
  let mode = linkCss.href.endsWith("style.css");

  if (mode === true) {
    linkCss.setAttribute("href", "style2.css");
    changeMode.textContent = "Mode clair";
    changeMode.classList.add("navD");
  } else {
    linkDCss.setAttribute("href", "style.css");
    changeMode.textContent = "Mode sombre";
    window.location.reload();
  }
};

/** -- mouseNav --*/

const moveNav = document.querySelectorAll(".nav");

for (const itemNav of moveNav) {
  itemNav.addEventListener(`mouseover`, function () {
    itemNav.classList.add("navJS");
  });
  itemNav.addEventListener(`mouseleave`, function () {
    itemNav.classList.remove("navJS");
  });
}

/*-- modal 1 ---*/

const myPhoto = document.querySelector("#my-photo");
const modalS = document.querySelector(".modalS");
const closeButtonS = document.querySelector(".close-buttonS");
const modalContentS = document.querySelector(".modalS-content");

function toggleModalS() {
  modalS.classList.toggle("showModalS");
}
myPhoto.addEventListener("click", toggleModalS);

function hideModalS() {
  modalS.classList.remove("showModalS");
}
closeButtonS.addEventListener("click", hideModalS);

/*-- like --*/

const like = document.querySelector(".like");

like.addEventListener(`click`, function () {
  like.innerHTML = "Merci pour votre Like <3";
  like.classList.add("style");
});

/*-- modal 2 --*/

const identity2 = document.querySelector("#firstName");
const modal = document.querySelector(".modal");
const submit = document.querySelector("#submit");
const closeButton = document.querySelector(".close-button");
const modalContent = document.querySelector(`.modal-content`);

function toggleModal() {
  modal.classList.toggle("show-modal");
}
submit.addEventListener("click", toggleModal);

function hideModal() {
  modal.classList.remove("show-modal");
}
closeButton.addEventListener("click", hideModal);
