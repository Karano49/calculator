const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".display").textContent = button.textContent;
  });
});
