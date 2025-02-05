// slå dig løs her... 

// eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

// ---------------- this is the hero ------------------ // 

let heroSection = document.querySelector(".hero");
let newHeroSection = document.createElement("section");
let heroDiv = document.createElement("div");

let heroHeadline = document.createElement("h2");
heroHeadline.textContent = hero.headline;

let heroBtn = document.createElement("button");
heroBtn.textContent = hero.button;

let heroCopy = document.createElement("p");
heroCopy.textContent = hero.copy;

// let heroIcon = document.createElement("img");
// heroIcon.src = hero.icon;

// heroDiv.appendChild(heroIcon);
heroDiv.appendChild(heroHeadline);
heroDiv.appendChild(heroCopy);
heroDiv.appendChild(heroBtn)
newHeroSection.appendChild(heroDiv);

let heroImage = document.createElement("img");
heroImage.src = hero.image;
newHeroSection.appendChild(heroImage);

heroSection.appendChild(newHeroSection);

// ---------------- this is services ------------------ // 

let servicesSection = document.querySelector(".services");

services.forEach(services => {
  let newService = document.createElement("article");
  newService.classList.add("service");

  let newIllustration = document.createElement("img");
  newIllustration.src = services.illustration;
  newService.append(newIllustration);

  let serviceHeadline = document.createElement("h3");
  serviceHeadline.textContent = services.headline;
  newService.append(serviceHeadline);

  let serviceText = document.createElement("p");
  serviceText.textContent = services.text;
  newService.append(serviceText);

  let serviceLink = document.createElement("a");
  serviceLink.textContent = services.linktext;
  newService.append(serviceLink);

  servicesSection.append(newService);
});

// ---------------- this is facilities ------------------ // 

let facilityDiv = document.createElement("div");
let facilitySection = document.querySelector(".facilities");
facilitySection.append(facilityDiv); 

let facilityHeadline = document.createElement("h2");
facilityHeadline.textContent = facilities.headline;
facilityDiv.append(facilityHeadline);

let facilitiesContainer = document.createElement("div"); 

facilities.options.forEach(option => {
    let newFacility = document.createElement("section"); 
    newFacility.classList.add("facilities"); 

    newFacility.innerHTML = `
        <img src="${option.icon}">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>  
    `; 

    facilitiesContainer.append(newFacility); 
}); 

facilityDiv.append(facilitiesContainer); 

// ---------------- this is sites ------------------ // 

let sitesSection = document.querySelector(".sites");
let newSitesSection = document.createElement("section");
let sitesDiv = document.createElement("div");

let sitesHeadline = document.createElement("h2");
sitesHeadline.textContent = sites.headline;

let sitesText = document.createElement("p");
sitesText.textContent = sites.text;

let sitesLink = document.createElement("button");
sitesLink.classList.add("sitesbtn");
sitesLink.innerHTML = `
<img src="${sites.btnicon}">
<p>Start</p>
`;

sitesDiv.appendChild(sitesHeadline);
sitesDiv.appendChild(sitesText);
sitesDiv.appendChild(sitesLink);

sitesSection.appendChild(sitesDiv);

sites.places.forEach(place => {
    let newSites = document.createElement("section");
    newSites.classList.add("site"); 
    newSites.innerHTML = `
        <img src="${place.img}">
        <h2>${place.name}</h2>
        <p>${place.city}</p>
        <a href="#">View the site</a>
    `;

    sitesSection.append(newSites);
});

// ---------------- this is advantages ------------------ // 

let advantagesSection = document.querySelector(".advantages");

let advantagesHeadline = document.createElement("h1");
advantagesHeadline.textContent = ("Our Advantages");

advantages.forEach(advantage => {
    let newAdvantages = document.createElement("section");
    newAdvantages.classList.add("advantages"); 
    newAdvantages.innerHTML = `
        <img src="${advantage.icon}">
        <h2>${advantage.headline}</h2>
        <p>${advantage.text}</p> 
    `;

    advantagesSection.append(newAdvantages);
});

// ---------------- this is footer ------------------ // 

let footerSection = document.querySelector(".footer");
let footerHeadline = document.createElement("h1");
footerHeadline.textContent = footer.headline;

let footerText = document.createElement("p");
footerText.textContent = footer.text;

footerSection.append(footerHeadline, footerText); 

footer.info.forEach(foot => {
    let newFooter = document.createElement("section");
    newFooter.classList.add("footer-section");

    let footerHeadline = document.createElement("h2");
    footerHeadline.textContent = foot.headline;

    let ul = document.createElement("ul"); 

    foot.li.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item; 
        ul.appendChild(li);
    });
    
    footerSection.append(newFooter, footerHeadline, ul); 
});
