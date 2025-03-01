const button = document.querySelector('button'); // Adjust the selector as needed
const input = document.querySelector('input'); // Adjust the selector as needed
const list = document.querySelector('ul'); // Adjust the selector as needed

button.addEventListener('click', function () {
  // Ensure input isn't empty before creating a list item
  const trimmedValue = input.value.trim();
  if (trimmedValue !== '') {
    // Create new elements for the list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Set text contents for li and delete button
    li.textContent = trimmedValue;
    deleteButton.textContent = '❌';
    
    // Append delete button to li and li to the list
    li.append(deleteButton);
    list.append(li);
    
    // Add an event listener to the delete button to remove the li when clicked
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    
    // Example additional code modifying an element's ariaLabel
    let el = document.getElementById("close-button");
    if (el) {
      console.log(el.ariaLabel); // "Close"
      el.ariaLabel = "Remove " + input.value;
      console.log(el.ariaLabel); // Updated ariaLabel
    }
  }
  
  // Clear input field and refocus
  input.value = '';
  input.focus();
});
  