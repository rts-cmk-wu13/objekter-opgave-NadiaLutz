// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))


// ---------------- this is the hero ------------------ // 

let heroSection = document.querySelector(".hero");
let newHeroSection = document.createElement("section");

let heroHeadline = document.createElement("h2");
heroHeadline.textContent = hero.headline;
newHeroSection.appendChild(heroHeadline);


let heroCopy = document.createElement("p");
heroCopy.textContent = hero.copy;
newHeroSection.appendChild(heroCopy);


let heroImage = document.createElement("img");
heroImage.src = hero.image;
newHeroSection.appendChild(heroImage);

let heroIcon = document.createElement("img");
heroIcon.src = hero.icon;
newHeroSection.appendChild(heroIcon);

heroSection.appendChild(newHeroSection);



// ---------------- this is services ------------------ // 


let servicesSection = document.querySelector(".services")

services.forEach(services => {
  let newService = document.createElement("article")
  newService.classList.add("service");

    let newIllustration = document.createElement("img")
    newIllustration.src = services.illustration;
    newService.append(newIllustration)

    let serviceHeadline = document.createElement("h3")
    serviceHeadline.textContent = services.headline;
    newService.append(serviceHeadline)

    let serviceText = document.createElement("p")
    serviceText.textContent = services.text;
    newService.append(serviceText)

    let serviceLink = document.createElement("a")
    serviceLink.textContent = services.linktext;
    newService.append(serviceLink)

    servicesSection.append(newService);
 });

// ---------------- this is facilities ------------------ // 


let facilitySection = document.querySelector(".facilities");

let facilityHeadline = document.createElement("h2")
facilityHeadline.textContent = facilities.headline;
facilitySection.append(facilityHeadline) 

facilities.options.forEach(option => {
    let newFacility = document.createElement("section"); 
    newFacility.classList.add("facilites"); 
    newFacility.innerHTML = `
        <img src="${option.icon}">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>  
        `; 

    facilitySection.append(newFacility); 
});



// ---------------- this is sites ------------------ // 


let sitesSection = document.querySelector(".sites");

let sitesHeadline = document.createElement("h2");
sitesHeadline.textContent = sites.headline;

let sitesText = document.createElement("p");
sitesText.textContent = sites.text;


let sitesLink = document.createElement("button");
sitesLink.innerHTML = `
<img src="${sites.btnicon}">
<p>Start</p>
`

sitesSection.append(sitesHeadline, sitesText, sitesLink);




sites.places.forEach(place => {
    let newSites = document.createElement("section");
    newSites.classList.add("site"); 
    newSites.innerHTML = `
        <img src="${place.img}">
        <p>${place.city}</p>
        <h2>${place.name}</h2>
        <a href="#">View the site</a>
    `;

    sitesSection.append(newSites);
});


// ---------------- this is advantages ------------------ // 


let advantagesSection = document.querySelector(".advantages");

let advantagesHeadline = document.createElement("h1")
 advantagesHeadline.textContent = ("Our Advantages")


advantages.forEach(advantage => {
    let newAdvantages = document.createElement("section");
    newAdvantages.classList.add("advantages"); 
    newAdvantages.innerHTML = `
        <img src="${advantage.icon}">
        <h2>${advantage.headline}</h2>
         <p>${advantage.text}</p> 
    `;

    advantagesSection.append(newAdvantages, advantagesHeadline);
});