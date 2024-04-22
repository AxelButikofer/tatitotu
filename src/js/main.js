const toggleHeaders = document.querySelectorAll(".toggleHeader");

toggleHeaders.forEach((toggleHeader) => {
  toggleHeader.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");

    const targetSection = document.getElementById(targetId);

    if (
      targetSection.style.display === "none" ||
      !targetSection.style.display
    ) {
      targetSection.style.display = "block";
    } else {
      targetSection.style.display = "none";
    }
  });
});
