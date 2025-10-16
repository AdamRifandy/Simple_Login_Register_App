const header = document.getElementById("changeable");
const username = document.getElementById("username");
const password = document.getElementById("pw");
const submitButton = document.getElementById("submitBtn");
const changeMode = document.getElementById("registerText");

// array
let array_container = [];

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (header.textContent == "Login") {
        if (!username.value) {
            alert("Login Gagal\nUsername tidak boleh kosong!");
            return;
        } else if (!password.value) {
            alert("Login Gagal\nPassword tidak boleh kosong!");
        } else if (!username.value && !password.value) {
            alert("Login Gagal\nUsername dan Password tidak boleh kosong!");
        }

        let found = array_container.find(v => v.nama_pengguna == username.value)
        if (found) {
            if (found.kata_sandi == password.value) {
                alert("Login Berhasil\nSelamat datang " + username.value);
            } else {
                alert("Login Gagal\nPassword salah!");
                return;
            }
        } else {
            alert("Login Gagal\nUser dengan nama " + username.value + " tidak ditemukan!");
            return;
        }
    } else {
        if (!username.value) {
            alert("Register Gagal\nUsername tidak boleh kosong!");
            return;
        } else if (!password.value) {
            alert("Register Gagal\nPassword tidak boleh kosong!");
        } else if (!username.value && !password.value) {
            alert("Register Gagal\nUsername dan Password tidak boleh kosong!");
        }

        let foundReg = array_container.find(v => v.nama_pengguna == username.value);
        if (!foundReg) {
            const data = {
                nama_pengguna: username.value,
                kata_sandi: password.value
            };
            array_container.push(data);
            alert("Register Berhasil\nSilahkan login dengan akun tersebut.");
        } else {
            alert("Register Gagal\nSudah ada yang menggunakan username tersebut!");
            return;
        }
    }
});

changeMode.addEventListener("click", (e) => {
    e.preventDefault();

    if (header.textContent == "Login") {
        header.textContent = "Register";
        submitButton.value = "Register";
        changeMode.textContent = "Login";
    } else {
        header.textContent = "Login";
        submitButton.value = "Login";
        changeMode.textContent = "Register";
    }
})