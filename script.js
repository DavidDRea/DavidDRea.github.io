const changeNavColours = () => {
	let bgColourEle = document.querySelector(".nav-container");
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		bgColourEle.classList.add("change-bg-colour");
	} else {
	bgColourEle.classList.remove("change-bg-colour");
	}
}

window.onscroll = () => changeNavColours();