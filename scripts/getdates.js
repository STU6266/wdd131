
// Setzt das aktuelle Jahr in das Element mit der ID "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Setzt das Datum der letzten Änderung in das Element mit der ID "lastModified"
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;
