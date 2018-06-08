const changeNavColours = () => {
	let bgColourEle = document.querySelector(".nav-container");
	if (document.body.scrollTop > 610 || document.documentElement.scrollTop > 610) {
		bgColourEle.classList.add("change-bg-colour");
	} else {
	bgColourEle.classList.remove("change-bg-colour");
	}
}

window.onscroll = () => changeNavColours();