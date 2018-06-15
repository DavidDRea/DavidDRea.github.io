// Variables for typing animation
let timer1 = 0;
let timer2 = 0;
const speed = 220;
const name = "David Rea";
const job = "Frontend Developer";

// Constants for nav button functionality 
const home = document.querySelector("#home");
const homeButton = document.querySelector("#home-button");

const projects = document.querySelector("#projects");
const projectsButton = document.querySelector("#projects-button");

const about = document.querySelector("#about");
const aboutButton = document.querySelector("#about-button");
 
const contactButton = document.querySelector("#contact-button");

const scrollToElement = (element) => {
	element.scrollIntoView({behavior: "smooth"});
}

// Typing animation function
const typing = (text, text2) => {
	if(timer1 < text.length) {
		const textNode = document.createTextNode(text.charAt(timer1));
		document.querySelector(".animation1").append(textNode);
		timer1++;
		setTimeout(function() {typing(name, job);}, speed);
	} 
	if(timer1 === text.length) {
		if(timer2 < text2.length) {
			const textNode = document.createTextNode(text2.charAt(timer2));
			document.querySelector(".animation2").append(textNode);
			timer2++;
			setTimeout(function() {typing(name, job);}, speed);
		} 
	}
}

//Scroll banner colour change function
const changeNavColours = () => {
	let bgColourEle = document.querySelector(".nav-container");
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		bgColourEle.classList.add("change-bg-colour");
	} else {
	bgColourEle.classList.remove("change-bg-colour");
	}
}

window.addEventListener("load", typing(name, job));
window.onscroll = () => changeNavColours();
projectsButton.onclick = () => scrollToElement(projects);
homeButton.onclick = () => scrollToElement(home);
aboutButton.onclick = () => scrollToElement(about);