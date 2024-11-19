
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        window.location.href = "subjects.html";
    } else {
        alert("Please enter both username and password.");
    }
}
