function validateForm() {

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Get error spans
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    // Clear old errors
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    }

    // Phone validation
    if (phone.length !== 10) {
        phoneError.innerText = "Phone Number must be 10 digits";
        isValid = false;
    }

    return isValid;
}