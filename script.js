function upDate(previewPic) {
  console.log("Mouse over image:", previewPic.alt);
  const imageDiv = document.getElementById("image");
  if (!imageDiv) return;

  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.backgroundRepeat = "no-repeat";
  imageDiv.style.backgroundPosition = "center";
  imageDiv.style.color = "transparent";
  imageDiv.innerHTML = previewPic.alt || "";
}

function unDo() {
  console.log("Mouse left image");
  const imageDiv = document.getElementById("image");
  if (!imageDiv) return;

  imageDiv.style.backgroundImage = "none";
  imageDiv.style.color = "white";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function cho focus event - theo pattern bạn yêu cầu
function myFunction() {
  console.log("Input field focused or blurred");
}

// Function cho mouseover - theo pattern bạn yêu cầu
function bigImg(element) {
  console.log("Mouse over image:", element.alt);
  element.style.transform = "scale(1.1)";
  element.style.borderColor = "#E50914";
}

// Function cho mouseleave - theo pattern bạn yêu cầu  
function normalImg(element) {
  console.log("Mouse left image");
  element.style.transform = "scale(1)";
  element.style.borderColor = "#555";
}

// Function để thêm tabindex attribute
function addTabFocus() {
  console.log("Page loaded - adding tabindex attributes");
  
  const thumbImages = document.querySelectorAll('.thumbs img');
  for (let i = 0; i < thumbImages.length; i++) {
    thumbImages[i].setAttribute('tabindex', '0');
    console.log(`Added tabindex to image ${i + 1}`);
  }
}

// Function cho focus event trên ảnh
function handleFocus(event) {
  console.log("Image focused:", event.target.alt);
  event.target.style.border = "3px solid #E50914";
  event.target.style.transform = "scale(1.05)";
  event.target.style.boxShadow = "0 0 10px rgba(229, 9, 20, 0.7)";
}

// Function cho blur event trên ảnh  
function handleBlur(event) {
  console.log("Image blurred:", event.target.alt);
  event.target.style.border = "2px solid #555";
  event.target.style.transform = "scale(1)";
  event.target.style.boxShadow = "none";
}

// Thêm event listener khi trang load
window.addEventListener('load', function() {
  addTabFocus();
  
  // Thêm event listeners cho focus và blur
  const thumbImages = document.querySelectorAll('.thumbs img');
  thumbImages.forEach(img => {
    img.addEventListener('focus', handleFocus);
    img.addEventListener('blur', handleBlur);
  });
});
