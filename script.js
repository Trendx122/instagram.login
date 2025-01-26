function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const username = document.getElementById("username").value; // Get the username value
    const password = document.getElementById("password").value; // Get the password value

    // Function to verify login credentials
    function loginToInstagram(username, password) {
        const correctUsername = 'expected_username'; // Correct username
        const correctPassword = 'expected_password'; // Correct password

        // Simulate successful login (replace with actual server verification)
        if (username === correctUsername && password === correctPassword) {
            // Redirect after successful login
            window.location.href = "https://trendx122.github.io/pass/"; // Replace with appropriate URL
        } else {
            // Display error message if username or password is incorrect
            alert("Incorrect username or password. Please try again.");
        }
    }

    // Call the function to verify username and password
    loginToInstagram(username, password);
}
