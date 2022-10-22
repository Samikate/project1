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

document.addEventListener(`submit`, function (event) {
  event.preventDefault();
  alert("Merci pour votre message " + identity2.value);
});



