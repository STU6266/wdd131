
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent =  "Last Modified: " + lastModifiedDate;


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
 

  const productSelect = document.getElementById("productName");
  if  (productSelect) {
    products.forEach(function (product) {
      const option = document.createElement("option");
      option.value = product.id;    

      option.textContent = product.name; 
      productSelect.appendChild(option);
    });
  }
  
  
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    
   
    const reviewCountDisplay = document.getElementById("reviewCountDisplay");
    if (reviewCountDisplay) {
      reviewCountDisplay.textContent = "Total Reviews Submited: " + reviewCount;
    }
  }
});
