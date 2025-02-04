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

