// Variables for typing animation
let timer = 0;
const text = `
 <html>
    <head>
	 <title></title>
    </head>
    <body>
         <h1>David Rea</h1>
         <h2>Web Developer</h2>
    </body>
 </html>`;

//Variables for screen flicker 
let flickerSpeed = 60;
const flicker = document.querySelector(".glow");

// Constants for nav button scroll functionality 
const home = document.querySelector("#home");
const homeButton = document.querySelector("#home-button");

const projects = document.querySelector("#projects");
const projectsButton = document.querySelector("#projects-button");

const about = document.querySelector("#about");
const aboutButton = document.querySelector("#about-button");
 
const contact = document.querySelector("#contact"); 
const contactButton = document.querySelector("#contact-button");

//Scoll to element function for buttons
const scrollToElement = (element) => {
	element.scrollIntoView({behavior: "smooth"});
}

// Typing animation functions

const typing = (text) => {
	if(timer < text.length) {
		document.querySelector(".animation1").textContent += text.charAt(timer);
		timer++;
		setTimeout(function() {typing(text);}, 60);
	} else {
		setTimeout(deleting, 1000);
	}
}

const deleting = () => {
	if(timer >= 0) {
		text2 = document.querySelector(".animation1").textContent; 
		document.querySelector(".animation1").textContent = text2.substr(0, timer);
		timer--;
		setTimeout(deleting, 50);
	} else {
		setTimeout(function() {typing(text);}, 2000);
	}
}

window.addEventListener("load", typing(text));
homeButton.onclick = () => scrollToElement(home);
aboutButton.onclick = () => scrollToElement(about);
projectsButton.onclick = () => scrollToElement(projects);
contactButton.onclick = () => scrollToElement(contact);
