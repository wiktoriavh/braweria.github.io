let secHand = document.querySelector(".sec");
let minHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");
let hand = document.querySelectorAll("div.hand");
let bg = document.querySelector(".bg");
let credits = document.querySelector(".credit");





function deg90() { // Problem: smooth transition needed when changing into a new min
	hand.forEach(hand => { hand.style.transition = "none"; })
	secHand.style.transform = `rotate(90deg)`;
}

function timeChange() {
	const now = new Date();
	const hours = now.getHours();




	if (hours >= 18 && hours <= 22) {
		// evening
		bg.style.backgroundImage = 'url("img/ernest-brillo-Qi8CvonsYnM-unsplash.jpg")';
		document.documentElement.style.setProperty("--clock", "#AB5788");
		credits.innerHTML = 'Photo by <a href="https://unsplash.com/@ernest_brillo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ernest Brillo</a> on <a href="https://unsplash.com/s/photos/evening?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';

	} else if (hours >= 13 && hours <= 17) {
		// midday
		bg.style.backgroundImage = 'url("img/humberto-arellano-vh_gSEGcbhk-unsplash.jpg")';
		document.documentElement.style.setProperty("--clock", "#87ceeb");
		credits.innerHTML = 'Photo by <a href="https://unsplash.com/@bto16180?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Humberto Arellano</a> on <a href="https://unsplash.com/s/photos/midday?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';

	} else if (hours >= 5 && hours <= 12) {
		// morning
		bg.style.backgroundImage = 'url("img/jake-givens-landscape-sunrise-unsplash.jpg")';
		document.documentElement.style.setProperty("--clock", "#bf9d43");
		credits.innerHTML = 'Photo by <a href="https://unsplash.com/@jakegivens?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jake Givens</a> on <a href="https://unsplash.com/s/photos/sun?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';

	} else {
		// night
		bg.style.backgroundImage = 'url("img/gabriele-motter-q3rUTmpZB-Q-unsplash.jpg")';
		document.documentElement.style.setProperty("--clock", "#131862");
		credits.innerHTML = 'Photo by <a href="https://unsplash.com/@wide_leaf?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gabriele Motter</a> on <a href="https://unsplash.com/s/photos/night?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a';
	}
}



function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secDeg = ((seconds / 60) * 360) + 90;
	const minDeg = ((minutes / 60) * 360) + 90;
	const hourDeg = ((hours / 12) * 360) + 90;




	if (secDeg === 90) {
		secHand.style.transform = `rotate(450deg)`;
		deg90();
	} else {
		hand.forEach(hand => { hand.style.transition = "all .5s cubic-bezier(0, 1.38, 0.54, 0.83)" });
		secHand.style.transform = `rotate(${secDeg}deg)`;
	}


	minHand.style.transform = `rotate(${minDeg}deg)`;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;


}

timeChange();

document.addEventListener('DOMContentLoaded', () => {

	setInterval(setDate, 1000);
	setDate();
});