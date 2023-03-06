// Your code here
let chosenColor = "red";
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();

let addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow);

table.addEventListener("click", colorize);
function colorize(event) {
  const target = event.target;
  if (event.target.tagName === "TD") {
    if (target.className === chosenColor) {
      target.className = "";
    } else {
      target.className = chosenColor;
    }
  }
}

let colorSelector = document.querySelector("select");
colorSelector.addEventListener("change", (event) => {
  chosenColor = event.target.value;
});
