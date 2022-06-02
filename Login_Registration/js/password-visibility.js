function passwordVisibility() {
	const field = document.getElementById("password");
	const showPass = document.getElementById("showPass");
	const hidePass = document.getElementById("hidePass");
	
	hidePass.classList.remove("d-none");
	
	if (field.type === "password") {
		field.type = "text";
		showPass.style.display = "none";
		hidePass.style.display = "block";
	} else {
		field.type = "password";
		showPass.style.display = "block";
		hidePass.style.display = "none";
	}
}