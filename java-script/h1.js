document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.getElementById("dropdownContent");
    const menuButton = document.getElementById("menuButton");

    // Funcție pentru a deschide/câștiga dropdown-ul principal
    function toggleDropdown() {
        dropdownContent.classList.toggle("show");
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            menuButton.classList.add("rotate");
        } else {
            dropdownContent.style.maxHeight = "0";
            menuButton.classList.remove("rotate");
        }
    }

    // Deschiderea/câștigarea dropdown-ului principal la clic pe butonul meniului
    menuButton.addEventListener("click", function(event) {
        toggleDropdown();
        event.stopPropagation();
    });

    // Deschiderea/câștigarea dropdown-ului pentru fiecare rând la clic pe acesta
    const rows = dropdownContent.querySelectorAll(".row");
    rows.forEach(function(row) {
        row.addEventListener("click", function(event) {
            const dropdownForRow = row.querySelector(".dropdown-for-row");
            if (dropdownForRow) {
                dropdownForRow.classList.toggle("show");
            }
            event.stopPropagation();
        });
    });

    // Ascunderea dropdown-ului principal la clic în afara lui
    document.addEventListener("click", function() {
        dropdownContent.classList.remove("show");
        dropdownContent.style.maxHeight = "0";
        menuButton.classList.remove("rotate");

        // Ascunderea tuturor dropdown-urilor pentru rânduri
        const allDropdowns = dropdownContent.querySelectorAll(".dropdown-for-row");
        allDropdowns.forEach(function(dropdown) {
            dropdown.classList.remove("show");
        });
    });

    // Oprirea propagării evenimentului pentru dropdown-ul principal și dropdown-urile pentru rânduri
    dropdownContent.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});







  