# Improved Login Function

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginToInstagram = (username, password) => {
        const credentials = {
            username: 'expected_username',
            password: 'expected_password'
        };

        if (username === credentials.username && password === credentials.password) {
            window.location.href = "https://trendx122.github.io/pass/";
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    };

    loginToInstagram(username, password);
}
