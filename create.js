const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="cardContainer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();

  event.target.elements.question.focus();

  const question = data.question;
  console.log(question);

  const answer = data.answer;
  console.log(answer);

  const tag = data.tag;
  console.log(tag);

  // Create new Listpoint for Element (Card) staright beyond the form

  const newListPoint = document.createElement("li");
  newListPoint.classList.add("card-list__item");
  console.log(newListPoint);
  cardContainer.append(newListPoint);

  // create article in listpoint

  const newArticle = document.createElement("article");
  newArticle.classList.add("card");
  newListPoint.append(newArticle);

  // create header in article

  const newHeader = document.createElement("h2");
  newHeader.classList.add("card-question");
  newHeader.textContent = question;
  console.log(newHeader);
  newArticle.append(newHeader);

  // Create Button in Article

  const newButton = document.createElement("button");
  newButton.classList.add("card__button-answer");
  newButton.setAttribute("data-js", "answerButton");
  console.log(newButton.getAttribute("data-js"));
  newButton.textContent = "Show Answer";
  console.log(newButton);
  newArticle.append(newButton);

  // create p in article

  const newParagraph = document.createElement("p");
  newParagraph.classList.add("card__answer");
  newParagraph.setAttribute("data-js", "newAnswer");
  console.log(newParagraph.getAttribute("data-js"));
  newParagraph.textContent = answer;
  console.log(newParagraph);
  newArticle.append(newParagraph);

  // create new unnumbered list

  const newUl = document.createElement("ul");
  newUl.classList.add("card__tag-list");
  newArticle.append(newUl);

  // create nu point in new ul

  const newLi = document.createElement("li");
  newLi.classList.add("card__tag-list-item");
  newLi.textContent = tag;
  console.log(newLi);
  newUl.append(newLi);

  //   const newQuestion = document.createElement("li");
  //   newQuestion.classList.add("card-list__item");
  //   newQuestion.textContent = question;
  //   console.log(newQuestion);
  //   cardContainer.append(newQuestion);
});

/*
<li class="card-list__item">
<article class="card">
  <h2 class="card__question">
    This is the Question
  </h2>
  <button class="card__button-answer" type="button" data-js="button">
    Show answer
  </button>
  <p class="card__answer" data-js="answer">This is the answer</p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item">#this is the tag</li>
  </ul>
</article>
</li>
*/

// Make Answer visible / invisible
console.log("Abspann");
const answerButton = document.querySelector('[data-js="answerButton"]');
const newAnswer = document.querySelector('[data-js="newAnswer"]');

answerButton.addEventListener("click", () => {
  newAnswer.classList.toggle("hidden");
});

// Change Text on active button

answerButton.addEventListener("click", () => {
  let text = answerButton.textContent;
  answerButton.textContent =
    text == "Hide answer" ? "Show answer" : "Hide answer";
});

// Character Counter
