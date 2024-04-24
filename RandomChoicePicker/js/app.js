const textAreaEl = document.querySelector("textarea");
const resultCon = document.querySelector(".result-con");
textAreaEl.addEventListener("keyup", (e) => {
  let Choices = textAreaEl.value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  resultCon.innerHTML = "";
  Choices.forEach((choice) => {
    const spanEl = document.createElement("span");
    spanEl.innerText = choice;
    resultCon.appendChild(spanEl);
  });

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});
function randomSelect() {
  const times = 30;
  const picker = setInterval(() => {
    const randomTag = pickRandomTag();
    hightlightTag(randomTag);
    setTimeout(() => {
      unhightlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(picker);
    setTimeout(() => {
      const spanEls = resultCon.querySelectorAll("span");
      const randomIndex = Math.floor(Math.random() * spanEls.length);
      spanEls[randomIndex].classList.add("active");
    }, 100);
  }, times * 100);
}
function pickRandomTag() {
  const tags = resultCon.querySelectorAll("span");
  return tags[Math.floor(Math.random() * tags.length)];
}
function hightlightTag(tag) {
  tag.classList.add("active");
}
function unhightlightTag(tag) {
  tag.classList.remove("active");
}
