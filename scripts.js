
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        if (
            (username === "nnm23cs293@nmamit.in" && password === "nnm23cs293") ||
            (username === "nnm23cs227@nmamit.in" && password === "nnm23cs227") ||
            (username === "nnm23is152@nmamit.in" && password === "nnm23is152") ||
            (username === "nnm23is212@nmamit.in" && password === "nnm23is212")
        ) {
            window.location.href = "subjects.html";
        } else {
            alert("Incorrect Username or Password");
        }
    } else {
        alert("Please Enter Both Username and Password");
    }
}

