////// TASK 01: CLICK OUTSIDE MODAL

const cardButtons = document.querySelectorAll("button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

/* Open Modal */
const handleButtonClick = function (event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const description = card.dataset.description;
  const name = card.querySelector("h2").textContent;

  modalInner.innerHTML = `<img src="${imgSrc}" alt="${name}"/>
  <h2>${name}</h2>
  <p>${description}</p>`;

  modalOuter.classList.add("open");
};

cardButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

/* Close Modal */

const closeModal = function (event) {
  modalOuter.classList.remove("open");
};

modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) =>
  event.key === "Escape" ? closeModal() : ""
);
