function playSoundKey(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return; // mach nichts, wenn keine richtige Taste gespielt wird
	
	audio.currentTime = 0;
	audio.play();
	key.classList.add("clap");
}

function playSoundClick(c) {
	const click = c.toElement.dataset.key;

	const audio = document.querySelector(`audio[data-key="${click}"]`);
	const key = document.querySelector(`.key[data-key="${click}"]`);

	if (!audio) return; // mach nichts, wenn keine richtige Taste gespielt wird
	
	audio.currentTime = 0;
	audio.play();
	key.classList.add("clap");
}

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
	if(e.propertyName !== "transform") return;
	this.classList.remove("clap");
}

window.addEventListener("keydown", playSoundKey);
window.addEventListener("click", playSoundClick);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
