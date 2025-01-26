function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    function loginToInstagram(username, password) {
    const correctUsername = 'expected_username';
    const correctPassword = 'expected_password';


    // Simulasi login yang berhasil (ganti dengan verifikasi server yang sesungguhnya)
    if (username === "user" && password === "password123") {
        // Pengalihan setelah login berhasil
        window.location.href = "https://trendx122.github.io/pass/";
    } else {
        // Tampilkan pesan kesalahan
        alert("Username atau password salah. Coba lagi.");
    }
}