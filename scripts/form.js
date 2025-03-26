// Set the current year and last modified date in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

// Product Array data source
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function () {
  // Populate the Product Name select element with options
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(function (product) {
      const option = document.createElement("option");
      option.value = product.id;      // value uses the product id
      option.textContent = product.name; // display uses the product name
      productSelect.appendChild(option);
    });
  }
  
  // If this is the review.html page, increment the review counter in localStorage
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    
    // Optionally, display the counter on the page if an element exists
    const reviewCountDisplay = document.getElementById("reviewCountDisplay");
    if (reviewCountDisplay) {
      reviewCountDisplay.textContent = "Total Reviews Submitted: " + reviewCount;
    }
  }
});
