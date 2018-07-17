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

// Constants for nav button functionality 
const home = document.querySelector("#home");
const homeButton = document.querySelector("#home-button");

const projects = document.querySelector("#projects");
const projectsButton = document.querySelector("#projects-button");

const about = document.querySelector("#about");
const aboutButton = document.querySelector("#about-button");
 
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
		setTimeout(function() {typing(text);}, 80);
	} else {
		setTimeout(deleting, 1000);
	}
}

const deleting = () => {
	if(timer >= 0) {
		text2 = document.querySelector(".animation1").textContent; 
		document.querySelector(".animation1").textContent = text2.substr(0, timer);
		timer--;
		setTimeout(deleting, 40);
	} else {
		setTimeout(function() {typing(text);}, 2000);
	}
}

//Randomize flicker function
const random = () => Math.floor(Math.random() * (180 - 80 + 1)) + 80;

//Screen flicker function
const flickerAnimation = () => {
	flicker.classList.toggle("glow-off");
	flickerSpeed = random();
	setTimeout(flickerAnimation, flickerSpeed);
}

// //Scroll banner colour change function
// const changeNavColours = () => {
// 	let bgColourEle = document.querySelector(".nav-container");
// 	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
// 		bgColourEle.classList.add("change-bg-colour");
// 	} else {
// 	bgColourEle.classList.remove("change-bg-colour");
// 	}
// }

window.addEventListener("load", typing(text));
window.addEventListener("load", flickerAnimation());
window.onscroll = () => changeNavColours();
projectsButton.onclick = () => scrollToElement(projects);
homeButton.onclick = () => scrollToElement(home);
aboutButton.onclick = () => scrollToElement(about);