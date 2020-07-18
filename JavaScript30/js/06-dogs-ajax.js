const list = "https://dog.ceo/api/breeds/list";
const breedsMenu = document.querySelector("#breeds");


const breeds = [];

fetch(list)
	.then(blob => blob.json())
	.then(data => {
		breeds.push(...data.message)
		addBreeds(breeds);

		change;

		//const btn = document.querySelector("#btn");
		//btn.addEventListener("click", function (e) {
		//	change;
		//	console.log(e);
		//})

	});

function addBreeds(breeds) {

	breeds.forEach(breed => {
		breedsMenu.innerHTML += "<option value='" + breed + "'>" + breed + "</option>"
	});
}







const change = breedsMenu.addEventListener("change", function (e) {
	const index = e.target.selectedIndex;
	const breed = breeds[index];
	const img = document.querySelector(".dog")
	const url = "https://dog.ceo/api/breed/" + breed + "/images/random"

	fetch(url)
		.then(blob => blob.json())
		.then(data => {
			const dogPic = data.message;
			img.src = dogPic;
		});

})