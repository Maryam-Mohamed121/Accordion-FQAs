let accordionBtns = document.querySelectorAll(".plus");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let answer = btn.parentElement.nextElementSibling;

    if (answer.classList.contains("accordion-show")) {
      answer.classList.remove("accordion-show");
      btn.querySelector("img").src = "/assets/images/icon-plus.svg";
    } else {
      answer.classList.add("accordion-show");
      btn.querySelector("img").src = "/assets/images/icon-minus.svg";
    }
  });
});
