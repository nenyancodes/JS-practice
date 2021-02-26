const cardButtons = document.querySelectorAll(".card");
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

  const docFragmLi = document.createRange().createContextualFragment(li)
    .firstElementChild;
  ul.appendChild(docFragmLi);

  oddNumber = oddNumber + 2;
};

const btn = document.querySelector("button");
btn.addEventListener("click", addLi);
