// Sélectionner l'élément h4 et la section
const toggleHeader = document.getElementById("toggleHeader");
const maSection = document.getElementById("maSection");

// Ajouter un écouteur d'événement au clic sur l'élément h4
toggleHeader.addEventListener("click", function () {
  // Vérifier si la section est visible ou masquée
  if (maSection.style.display === "none") {
    // Si la section est masquée, l'afficher
    maSection.style.display = "block";
  } else {
    // Sinon, la masquer
    maSection.style.display = "none";
  }
});
