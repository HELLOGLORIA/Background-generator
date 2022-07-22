var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
let randomButton = document.querySelector("button");
var body = document.getElementById("gradient");

body.style.background = "linear-gradient(to right, " 
	+ color1.value        
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background;	

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value        
	+ ", " 
	+ color2.value 
	+ ")"; 
	css.textContent = body.style.background + ";";
}

const pressButton = () => {
	let left = "#" + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6)
	let right = "#" + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6)
	color1.value = left
	color2.value = right
	setGradient()
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", pressButton)

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

