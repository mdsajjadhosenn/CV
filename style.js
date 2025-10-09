function draktheme(){
	document.body.classList.toggle("black");
}
function greentheme(){
  document.body.classList.toggle("green");
}

function mobilemenu(){
	let nav= document.getElementById("mobile-menu");
	if (nav.style.display=="block") {
		nav.style.display="none"
	}else{
		nav.style.display="block"
	}
}
let menu=document.getElementById("menu");
menu.addEventListener("click",mobilemenu);



