document.addEventListener('DOMContentLoaded', () => {
   
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;
  
   
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', function() {
    
      navMenu.classList.toggle('active');
      
 
      if (navMenu.classList.contains('active')) {
        hamburger.innerHTML = '&times;';
      } else {
        hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
      }
    });
  

    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/accra-ghana-temple/photographs/#Gallery-1"
      },
      {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "2005, September, 4",
        area: 18691,
        imageUrl:
        "https://churchofjesuschristtemples.org/apia-samoa-temple/photographs/#Official-9"
      },
      {
        templeName: "McAllen Texas",
        location: "McAllen, Texasa, United States",
        dedicated: "2023, October, 8",
        area: 27897,
        imageUrl:
        "https://churchofjesuschristtemples.org/mcallen-texas-temple/photographs/#Official-1"
      },
    ];
  
  
    function createtempleCard(templesArray) {
      const templeCardsContainer = document.querySelector('.res-grid');
   
      templeCardsContainer.innerHTML = '';
  
      templesArray.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');
  
        card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Total Area: ${temple.area} sq ft</p>
        `;
  
        templeCardsContainer.appendChild(card);
      });
    }
  

    function filterTemples(filterType) {
      let filteredTemples;
      switch (filterType) {
        case 'old':
    
          filteredTemples = temples.filter(temple => parseInt(temple.dedicated) < 1900);
          break;
        case 'new':
   
          filteredTemples = temples.filter(temple => parseInt(temple.dedicated) > 2000);
          break;
        case 'large':
       
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case 'small':
      
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        default:
   
          filteredTemples = temples;
      }
      return filteredTemples;
    }
  

    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        const filterType = link.textContent.toLowerCase();
        const filteredTemples = filterTemples(filterType);
        createtempleCard(filteredTemples);
      });
    });
  
 
    createtempleCard(temples);
  });
  