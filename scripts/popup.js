// Funktion, um das Popup beim Laden der Seite anzuzeigen
window.onload = function() {
    document.getElementById("popupOverlay").classList.add("show-popup");
};

// Funktion, um das Popup zu schließen
function closePopup() {
    document.getElementById("popupOverlay").classList.remove("show-popup");
}

