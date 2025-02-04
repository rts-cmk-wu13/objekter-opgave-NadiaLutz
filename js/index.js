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


let sitesSection = document.querySelector(".sites")

let sitesHeadline = document.createElement("h2")
sitesHeadline.textContent = sites.headline;
sitesSection.append(sitesHeadline)

let sitesText = document.createElement("p")
sitesText.textContent = sites.text;
sitesSection.append(sitesText)

let sitesImage = document.createElement("img")
sitesImage.src = sites.image;
sitesSection.append(sitesImage)

let sitesLink = document.createElement("a")
sitesLink.textContent = sites.btnicon
sitesSection.apppend(sitesLink)

sites.options.forEach(option => {
    let newSitesocument.createElement("section");
    newFacility.classList.add("facilites"); 
    newFacility.innerHTML = `
        <img src="${option.icon}">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>  
        `; 

    facilitySection.append(newFacility); 
});