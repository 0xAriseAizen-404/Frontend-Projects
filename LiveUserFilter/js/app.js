const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

window.addEventListener("onload", getData);
getData();
async function getData() {
  console.log(1);
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  result.innerHTML = "";
  console.log(results);
  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-details">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;
    result.appendChild(li);
  });
}

filter.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value;
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
