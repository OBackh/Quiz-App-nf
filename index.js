// phew… not a lot going on here. Please add some code!
console.clear();

const bmToggle = document.querySelector('[data-js="bookmark"]');

bmToggle.addEventListener("click", () => {
  bmToggle.classList.toggle("bookmark--active");
  console.log("toggled between dark-/light");
});
