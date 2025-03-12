// 1. Aktuelles Jahr
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// 2. Datum der letzten Änderung
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

// 3. Funktion zur Berechnung des Windchill
function calculateWindChill(tempC, speedKmh) {
  // Prüfen, ob die Bedingungen für die Berechnung erfüllt sind:
  // Temperatur <= 10°C und Wind >= 4,8 km/h
  if (tempC <= 10 && speedKmh >= 4.8) {
    // Formel (metrische Version):
    // Windchill = 13,12 + 0,6215*T - 11,37*v^0,16 + 0,3965*T*v^0,16
    let windChill =
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16);

    // Auf eine Nachkommastelle runden (z.B. 11.2°C)
    return windChill.toFixed(1);
  } else {
    // Wenn Bedingungen nicht erfüllt sind
    return "N/A";
  }
}

// 4. Werte aus dem HTML holen und das Ergebnis ins Dokument schreiben
// Achtung: Die IDs müssen mit denen im HTML übereinstimmen
const tempValue = parseFloat(document.getElementById("tempValue").textContent);
const windValue = parseFloat(document.getElementById("windValue").textContent);

// Windchill berechnen
const chill = calculateWindChill(tempValue, windValue);

// Ergebnis in <span id="chillValue"> ... </span> schreiben
document.getElementById("chillValue").textContent = chill;
