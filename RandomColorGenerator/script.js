const containerEle = document.querySelector(".container");
const colorContainers = [];

function createColorContainers() {
  for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerEle.appendChild(colorContainer);
    colorContainers.push(colorContainer);
  }
}

function updateColor() {
  colorContainers.forEach((cc) => {
    const newColor = randomColorGenerator();
    cc.style.backgroundColor = newColor;
    cc.innerHTML = `<span>${newColor}</span>`;
    const spanCopyEle = cc.querySelector("span");
    spanCopyEle.addEventListener("click", () => {
      const range = document.createRange();
      range.selectNodeContents(spanCopyEle);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand("copy");
      alert("Code Copied To Clipboard");
      sel.removeAllRanges();
    });
  });
}

function randomColorGenerator() {
  const chars = "0123456789abcdef";
  let randomColor = "#";
  for (let i = 0; i < 6; ++i) {
    randomColor += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomColor;
}

// Initialize color containers
createColorContainers();

// Update colors on page load
window.addEventListener("load", updateColor);

// Update colors when reload button is clicked
document.getElementById("reloadId").addEventListener("click", updateColor);
