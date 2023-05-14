
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



const triggers = document.querySelectorAll('.overlay-trigger');
const overlays = document.querySelectorAll('.overlay');

for (const trigger of triggers) {
  trigger.addEventListener('click', showOverlay);
}

function showOverlay(event) {
  const selector = event.target.value;
  const overlay = document.getElementById(selector);
  if (overlay !== null) {
    overlay.style.display = "flex";
  }
}

for (const overlay of overlays) {
  overlay.addEventListener('click', closeOverlay);
}

function closeOverlay(event) {
  const overlay = event.currentTarget;
  overlay.style.display = "none";
}



// const infoIcons = document.querySelectorAll('.info-ico');
// const helperText = document.querySelectorAll('.helper-text');

// for (const infoIcon of infoIcons) {
//   infoIcon.addEventListener('mouseover', showInfoText);
// }
// function showInfoText(e) {
//   const helperText = e.currentTarget;
//   helperText.style.display = "block";
// }