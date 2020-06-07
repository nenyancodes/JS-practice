let oddNumber = 1;
const ul = document.querySelector("ul");

const addLi = function () {
  let li;
  if (oddNumber % 3 == 0) {
    li = `<li class="big">${oddNumber}</li>`;
  } else {
    li = `<li>${oddNumber}</li>`;
  }

  const docFragmLi = document.createRange().createContextualFragment(li)
    .firstElementChild;
  ul.appendChild(docFragmLi);

  oddNumber = oddNumber + 2;
};

const btn = document.querySelector("button");
btn.addEventListener("click", addLi);
