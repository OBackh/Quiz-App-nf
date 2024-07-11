// phew… not a lot going on here. Please add some code!
console.clear();

// Toggle Bookmark

const bmToggle = document.querySelector('[data-js="bookmark"]');

bmToggle.addEventListener("click", () => {
  bmToggle.classList.toggle("bookmark--active");
  console.log("toggled between dark-/light");
});

// Make Answer visible / invisible

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

button.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  console.log("toggled between answer is visible/invisible");
});

// Change Text on active button

button.addEventListener("click", () => {
  button.textContent("hidden");
  console.log("Changed Text on active button");
});
