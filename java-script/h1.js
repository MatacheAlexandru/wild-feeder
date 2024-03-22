document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menuButton");
  const dropdownContent = document.getElementById("dropdownContent");

  menuButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Oprim propagarea evenimentului pentru a preveni închiderea meniului când se face clic pe buton
    menuButton.classList.toggle("rotate");
    dropdownContent.classList.toggle("show");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    } else {
      dropdownContent.style.maxHeight = "0";
    }
  });

  document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove("show");
      dropdownContent.style.maxHeight = "0";
    }
  });
});
