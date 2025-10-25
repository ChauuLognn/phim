function upDate(previewPic) {
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
  const imageDiv = document.getElementById("image");
  if (!imageDiv) return;

  imageDiv.style.backgroundImage = "none";
  imageDiv.style.color = "white";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
