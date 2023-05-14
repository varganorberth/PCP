
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

  console.log(overlay.childNodes[1])



  // overlay.childNodes[1].getAttribute('src', overlay.childNodes[1].getAttribute('src'))


  // overlay.childNodes[1].muted = true;
  // console.log(overlay.childNodes[1])
  // const iframe = overlay.childNodes[1]
  // iframe.contentDocument.getElementById("video-one").checked = true;
  // iframe.contentWindow.speaker[0].muted = true
  // iframe.contentWindow.speaker[1].muted = true
}

