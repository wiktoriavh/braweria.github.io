let secHand = document.querySelector(".sec");
let minHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");
let hand = document.querySelectorAll("div.hand");



function deg90() { // Problem: smooth transition needed when changing into a new min
	hand.forEach(hand => { hand.style.transition = "none"; })
	secHand.style.transform = `rotate(90deg)`;
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

	stop(true, true);

	setInterval(setDate, 1000);
}

setDate();