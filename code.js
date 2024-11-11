function imageExists(url, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;
}

document.querySelectorAll('img').forEach(img => {
  img.onerror = function() {
    this.onerror = null; // Prevent infinite loop
    imageExists("../images/image-replace.svg", exists => {
      if (exists) {
        this.src = "../images/image-replace.svg";
        this.alt = "Replacement image";
      }
    });
  };
});

function toggleIndividualResults() {
    const button = document.getElementById("individualResultsButton");
    const individualResultsContent = document.getElementById("individualResultsContent");
    individualResultsContent.style.display = individualResultsContent.style.display === "none" ? "block" : "none";
    button.classList.toggle("down");
    button.classList.toggle("up");
}

function toggleTeamResults() {
  const button = document.getElementById("teamResultsButton");
  const individualResultsContent = document.getElementById("teamResultsContent");
  individualResultsContent.style.display = individualResultsContent.style.display === "none" ? "block" : "none";
  button.classList.toggle("down");
  button.classList.toggle("up");
}


function toggleGallery() {
  const button = document.getElementById("galleryButton");
  const individualResultsContent = document.getElementById("galleryContent");
  individualResultsContent.style.display = individualResultsContent.style.display === "none" ? "block" : "none";
  button.classList.toggle("down");
  button.classList.toggle("up");
}