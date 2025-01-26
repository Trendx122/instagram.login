function handleLogin(event) {
    event.preventDefault(); // Mencegah form untuk submit dan reload halaman

    const username = document.getElementById("username").value; // Mendapatkan nilai username
    const password = document.getElementById("password").value; // Mendapatkan nilai password

    // Fungsi loginToInstagram yang akan dipanggil untuk memverifikasi login
    function loginToInstagram(username, password) {
        const correctUsername = 'expected_username'; // Username yang benar
        const correctPassword = 'expected_password'; // Password yang benar

        // Simulasi login yang berhasil (ganti dengan verifikasi server yang sesungguhnya)
        if (username === correctUsername && password === correctPassword) {
            // Pengalihan setelah login berhasil
            window.location.href = "https://trendx122.github.io/pass/"; // Ganti dengan URL yang sesuai
        } else {
            // Tampilkan pesan kesalahan jika username atau password salah
            alert("Username atau password salah. Coba lagi.");
        }
    }

    // Panggil fungsi loginToInstagram untuk memverifikasi username dan password
    loginToInstagram(username, password);
}
