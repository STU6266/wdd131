const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Use ID here

const PI = 3.14159;
const radius = 10;

let area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
