const moveNav = document.querySelectorAll(".nav");

for (const itemNav of moveNav) {
  itemNav.addEventListener(`mouseover`, function () {
    itemNav.classList.add("navJS");
  });
  itemNav.addEventListener(`mouseleave`, function () {
    itemNav.classList.remove("navJS");
  });
}

const like = document.querySelector("#like");

like.addEventListener(`click`, function () {
  like.innerHTML = "Merci pour votre Like";
  like.style.color = "var(--text2-color)";
  like.style.fontSize = "90%";
});

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
