// JavaScript Document

function dropDownSuk() {
	closeDropDowns();
  document.getElementById("navbtn-sukkulenten").classList.toggle("show");
}

function dropDownAcs() {
	closeDropDowns();
  document.getElementById("navbtn-accessoires").classList.toggle("show");
}

function closeDropDowns() {
	    document.querySelectorAll(".dropdown-content.show")
.forEach(function(dropDown) {
	dropDown.classList.remove("show")
})
}
  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    closeDropDowns()
      }
    }



function sepaOpen() {
  document.getElementById("sepa-form").classList.toggle("open");
}

function visaOpen() {
  document.getElementById("visa-form").classList.toggle("open");
}

function mcOpen() {
  document.getElementById("mc-form").classList.toggle("open");
}
