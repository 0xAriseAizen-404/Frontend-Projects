const getTextBtn = document.querySelector(".get-text");
const getUsersBtn = document.querySelector(".get-users");
const getPostsBtn = document.querySelector(".get-posts");

getTextBtn.addEventListener("click", () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output-text").innerHTML = data;
    })
    .catch((err) => console.log(err));
});

getUsersBtn.addEventListener("click", async () => {
  let num = window.prompt("Enter How Many Users ?");
  await fetch(`https://randomuser.me/api/?results=${num}`)
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Users</h2>";
      data.results.forEach((user) => {
        // console.log(user);
        let { title, first, last } = user.name;
        output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">Username : ${
                      user.login.username
                    }</li>
                    <li class="list-group-item">Name : ${
                      title + " " + first + " " + last
                    }</li>
                    <li class="list-group-item">Email : ${user.email}</li>
                </ul>
            `;
      });
      document.getElementById("output-text").innerHTML = output;
    });
});

getPostsBtn.addEventListener("click", async () => {
  await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class='mb-3'>Posts</h2>";
      data.forEach((posts) => {
        //   console.log(posts);
        output += `
                <div class="card card-body-3 mb-2 p-2">
                    <h3 >${posts.title}</h3>
                    <p>${posts.body}</p>
                </div>
            `;
      });
      document.getElementById("output-text").innerHTML = output;
    });
});

document.getElementById("addPost").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/  plain, */*",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
