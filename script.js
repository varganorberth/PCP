
// Function to GeneratePdf
function GeneratePdf() {
  window.print();
}

const sectionsTitles = document.querySelectorAll('.section-title');
for (let i = 0; i < sectionsTitles.length; i++) {
  sectionsTitles[i].addEventListener("click", openSection, false);
}
function openSection() {
  this.parentElement.classList.toggle('open');
}


const texareas = document.getElementsByTagName("textarea");
for (let i = 0; i < texareas.length; i++) {
  texareas[i].addEventListener("input", OnInput, false);
}
function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
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

  const src = overlay.childNodes[1].getAttribute('src');
  overlay.childNodes[1].src = ""; //stop audio when modal is closed
  overlay.childNodes[1].src = src; // bring bak the source of the video
}

