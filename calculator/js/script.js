// 1. FUNGSI UTAMA (AMBIL DATA & TAMPILKAN)
function ambilData() {
    let n1 = document.getElementById("angka1").value;
    let n2 = document.getElementById("angka2").value;
    return {
        a: Number(n1),
        b: Number(n2)
    };
}

function tampilkan(hasil) {
    document.getElementById("hasil").innerHTML = hasil;
}

// 2. FITUR HISTORY
function tambahHistory(teks) {
    let list = document.getElementById("history-list");
    if (!list) return; // Mencegah error jika elemen belum ada
    let itemBaru = document.createElement("li");
    itemBaru.innerHTML = teks;
    list.prepend(itemBaru);
}

// 3. OPERASI MATEMATIKA (HANYA SATU VERSI)
function tambah() {
    let data = ambilData();
    let hasil = data.a + data.b;
    tampilkan(hasil);
    tambahHistory(`${data.a} + ${data.b} = ${hasil}`);
}

function kurang() {
    let data = ambilData();
    let hasil = data.a - data.b;
    tampilkan(hasil);
    tambahHistory(`${data.a} - ${data.b} = ${hasil}`);
}

function kali() {
    let data = ambilData();
    let hasil = data.a * data.b;
    tampilkan(hasil);
    tambahHistory(`${data.a} × ${data.b} = ${hasil}`);
}

function bagi() {
    let data = ambilData();
    if (data.b === 0) {
        tampilkan("Gak bisa bagi 0!");
        tambahHistory(`Gagal: ${data.a} ÷ 0`);
    } else {
        let hasil = data.a / data.b;
        tampilkan(hasil);
        tambahHistory(`${data.a} ÷ ${data.b} = ${hasil}`);
    }
}

function hapusSemua() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    tampilkan(0);
}

// 4. DARK MODE LOGIC
function toggleDarkMode() {
    let isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("temaGelap", isDark); // Menyimpan true/false
    updateTombolDark(isDark);
}

function updateTombolDark(isDark) {
    let btn = document.getElementById("btn-dark");
    if (btn) {
        btn.innerHTML = isDark ? "Light" : "Dark";
    }
}

// 5. SAAT APLIKASI DIBUKA (ONLOAD)
window.onload = function() {
    let statusGelap = localStorage.getItem("temaGelap");
    // Cek jika statusnya adalah string "true"
    if (statusGelap === "true") {
        document.body.classList.add("dark-theme");
        updateTombolDark(true);
    } else {
        updateTombolDark(false);
    }
};

// 6. RIPPLE EFFECT (Pindahkan ke bawah agar rapi)
document.querySelectorAll(".btn-ac").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.className = "ripple-material";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
