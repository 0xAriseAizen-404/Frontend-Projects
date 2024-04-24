// const fetch = require("node-fetch");
const url = "http://worldtimeapi.org/api/timezone/Europe"
async function getData() {
  const res = await fetch(url).catch((err) => console.log(err));
  console.log(res);
}

getData();
