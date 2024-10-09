const container = document.getElementById('container');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Dummy credentials
    if (username === "user123" && password === "password123") {
        // Successful login; redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password!";
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername && regEmail && regPassword) {
        alert("Registration successful!");
        container.classList.remove("right-panel-active");
    } else {
        alert("Please fill all the fields.");
    }
});
