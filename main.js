let tab = [];
function setItem(e) {
  tab.push(e);
  document.getElementById("screen").innerHTML = tab.join("");
}
function calcul() {
  document.getElementById("screen").innerHTML = eval(
    document.getElementById("screen").textContent
  );
  tab = [];
}
function correct() {
  tab = [];
  document.getElementById("screen").innerHTML = "";
}
