
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
