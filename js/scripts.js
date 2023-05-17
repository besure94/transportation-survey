function handleForm(event) {
	event.preventDefault();
	const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
}

window.addEventListener("load", function() {
	document.querySelector("form#transportation-survey").addEventListener("submit", handleForm);
});