// Auswahl der benötigten DOM-Elemente aus dem HTML-Dokument:
// 'button' referenziert den Button, der zum Hinzufügen eines neuen Kapitels verwendet wird.
// 'input' referenziert das Texteingabefeld, in das der Benutzer das Kapitel eingeben soll.
// 'list' referenziert die ungeordnete Liste (<ul>), in der die Kapitel angezeigt werden.
const button = document.querySelector('button');    // Wählt das erste Button-Element aus
const input = document.querySelector('input');      // Wählt das erste Input-Element aus
const list = document.querySelector('ul');          // Wählt das erste ul-Element aus

// chaptersArray wird deklariert und erhält den Rückgabewert der Funktion getChapterList().
// Falls getChapterList() keinen Wert zurückgibt (z.B. weil der Benutzer die Seite zum ersten Mal besucht oder der localStorage noch nicht gesetzt wurde),
// wird durch den OR-Operator (||) ein leeres Array zugewiesen.
let chaptersArray = getChapterList() || [];

// Für jedes Kapitel, das im chaptersArray gespeichert ist, wird die Funktion displayList aufgerufen.
// Dies sorgt dafür, dass beim Laden der Seite bereits vorhandene Kapitel im HTML angezeigt werden.
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Hier wird ein Event Listener an den Button gehängt, der beim Klick ausgeführt wird.
// Die Funktion überprüft zuerst, ob das Eingabefeld nicht leer ist (nachdem Leerzeichen entfernt wurden).
button.addEventListener('click', () => {
  // Überprüfen, ob der eingegebene Wert nicht leer ist (nachdem führende und nachfolgende Leerzeichen entfernt wurden)
  if (input.value.trim() !== '') {
    // displayList() wird aufgerufen, um das Kapitel in der Liste anzuzeigen.
    displayList(input.value);
    
    // Der neue Kapitelwert wird in das Array chaptersArray eingefügt.
    chaptersArray.push(input.value);
    
    // Die Funktion setChapterList() wird aufgerufen, um den aktualisierten Array-Inhalt im localStorage zu speichern.
    setChapterList();
    
    // Das Eingabefeld wird geleert, damit der Benutzer einen neuen Wert eingeben kann.
    input.value = '';
    
    // Der Fokus wird wieder auf das Eingabefeld gesetzt, um eine erneute Eingabe zu erleichtern.
    input.focus();
  }
});

// Die Funktion displayList erstellt und zeigt ein neues Listenelement (<li>) in der Liste an.
// Dabei wird ein Lösch-Button hinzugefügt, mit dem der Benutzer das Kapitel wieder entfernen kann.
function displayList(item) {
  // Erstellen eines neuen Listenelements und eines Lösch-Buttons
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  
  // Das Listenelement erhält den Text des übergebenen Kapitels.
  li.textContent = item;
  
  // Der Lösch-Button erhält als Text ein Symbol (❌).
  deleteButton.textContent = '❌';
  
  // Hinzufügen einer CSS-Klasse zum Lösch-Button, damit er gemäß den CSS-Regeln formatiert wird.
  deleteButton.classList.add('delete');
  
  // Der Lösch-Button wird dem Listenelement hinzugefügt.
  li.append(deleteButton);
  
  // Das Listenelement wird in die Liste (<ul>) eingefügt.
  list.append(li);
  
  // Event Listener für den Lösch-Button:
  // Beim Klick wird das Listenelement aus der Liste entfernt und 
  // die Funktion deleteChapter aufgerufen, um den entsprechenden Eintrag aus dem Array und dem localStorage zu löschen.
  deleteButton.addEventListener('click', function () {
    // Entfernt das Listenelement aus der Anzeige
    list.removeChild(li);
    
    // Ruft deleteChapter auf, um das Kapitel (ohne das ❌) aus dem Array zu entfernen
    deleteChapter(li.textContent);
    
    // Setzt den Fokus wieder auf das Eingabefeld
    input.focus();
  });
  
  // Loggt eine Nachricht in der Konsole (nur zu Demonstrationszwecken)
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// Die Funktion setChapterList speichert den aktuellen Zustand des chaptersArray im localStorage.
// Dabei wird das Array in einen JSON-String umgewandelt, da localStorage nur Strings speichern kann.
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Die Funktion getChapterList liest den JSON-String aus dem localStorage aus und wandelt ihn zurück in ein Array.
// Falls der localStorage-Eintrag nicht existiert, wird null zurückgegeben, was im oben deklarierten chaptersArray zu einem leeren Array führt.
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Die Funktion deleteChapter entfernt ein Kapitel aus dem chaptersArray und aktualisiert den localStorage.
// Da beim Aufruf von deleteChapter das Kapitel mit dem Lösch-Button-Symbol (❌) endet,
// wird mit slice() das letzte Zeichen entfernt, um nur den reinen Kapiteltext zu erhalten.
function deleteChapter(chapter) {
  // Entfernt das letzte Zeichen (❌) vom Kapitelstring.
  chapter = chapter.slice(0, chapter.length - 1);
  
  // Erzeugt ein neues Array ohne das zu löschende Kapitel mithilfe der filter()-Methode.
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  
  // Aktualisiert den localStorage, um die Änderungen im Array zu speichern.
  setChapterList();
}
