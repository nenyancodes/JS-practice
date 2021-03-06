////// TASK 03: TABS

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role='tabpanel']"));

function showTab(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // mark all tabs as unselected
  tabButtons.forEach((button) => {
    // button.ariaSelected = false; - won't work on aria attributes and custom attrs
    button.setAttribute("aria-selected", false);
  });
  // mark clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);
  // show clicked tab panel
  const { id } = event.currentTarget;

  // first solution
  // const clickedTabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);
  // clickedTabPanel.hidden = false;

  // second solution - remember that find() works only on arrays not on NodeLists!
  const clickedTabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") == id
  );
  clickedTabPanel.hidden = false;
}
tabButtons.forEach((button) => button.addEventListener("click", showTab));

///// TASK 02: INTERSECTION OBSERVER

const terms = document.querySelector(".terms");
const acceptBtn = document.querySelector(".accept-btn");

const enableAcceptButton = function (payload) {
  console.log(payload);
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio >= 0.9) {
    acceptBtn.disabled = false;
  }
};

const observer = new IntersectionObserver(enableAcceptButton, {
  root: terms,
  threshold: [0.5, 0.9],
});

observer.observe(terms.lastElementChild);

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
