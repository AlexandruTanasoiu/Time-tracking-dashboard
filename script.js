const path = "./data.json";

function pushJsonData(data, freq) {
  let i = 0;
  while (i < data.length) {
    console.log(i);
    let idFirst = `current_${data[i].title}`;
    console.log(idFirst);
    let idLast = `last_${data[i].title}`;
    console.log(idLast);
    document.getElementById(idFirst).innerHTML =
      data[i].timeframes[freq].current;
    document.getElementById(idLast).innerHTML =
      data[i].timeframes[freq].previous;
    i++;
  }
}

function daily() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "daily"));
}

function weekly() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "weekly"));
}

function monthly() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "monthly"));
}

document.getElementById("daily").addEventListener("click", daily);
document.getElementById("weekly").addEventListener("click", weekly);
document.getElementById("monthly").addEventListener("click", monthly);

