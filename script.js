
const texareas = document.getElementsByTagName("textarea");
for (let i = 0; i < texareas.length; i++) {

  texareas[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

// Function to GeneratePdf
function GeneratePdf() {
  window.print();
}


// const overlays = document.querySelectorAll(".overlay");
// for (let i = 0; i < overlays.length; i++) {

//   overlays[i].addEventListener("input", OnInput, false);
// }

function on() {
  document.querySelector(".overlay").style.display = "flex";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}