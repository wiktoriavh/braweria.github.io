function playSoundKey(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) { return; } // mach nichts, wenn keine richtige Taste gespielt wird

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
	if (e.propertyName !== "transform") { return; }
	this.classList.remove("clap");
}

let rythm;

window.addEventListener("click", function(b) {
	const bpm = b.target.dataset.bpm;
	const btn = b.target
	const btns = document.querySelectorAll(".btn"); // NodeList
	const tap = document.querySelector("audio.tap");

	if (bpm == undefined) {
		return;
	}

	if (b.target === document.getElementsByTagName("body")) { return; }

	btns.forEach(element => element.classList.remove("active")); // entfernt die Klasse active von allen
	btn.classList.add("active");
	
	clearInterval(rythm);
	if (bpm == 00) {
		return tap.pause();
	}
	

	console.log(bpm);
	
	
	rythm = setInterval(function() {
		tap.currentTime = 0;
		tap.play(); 
	}, 60000/bpm);


	console.log(rythm);

});

window.addEventListener("keydown", playSoundKey);
window.addEventListener("click", playSoundClick);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
