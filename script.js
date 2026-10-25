// script.js
const elemenPesan = document.getElementById("pesan");
const hasilSwitch = document.getElementById("hasilSwitch");

// Menampilkan Hello World
elemenPesan.textContent = "Hello World";
console.log("Hello World");

// Menampilkan pesan di Console
console.log("Pesan di Console");
alert("Selamat belajar JavaScript!");

// Meminta nama pengguna
const nama = prompt("Siapa nama Anda?", "Rani");

// Membuat variabel
let umur = 20;
const mahasiswaAktif = true;

// Menampilkan hasil ke Console
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Mahasiswa aktif:", mahasiswaAktif);

// Operasi matematika
const a = 12;
const b = 5;

console.log("Penjumlahan:", a + b);
console.log("Perkalian:", a * b);
console.log("Sisa bagi:", a % b);
console.log("Apakah a lebih besar?", a > b);

// Mengubah teks HTML
if (elemenPesan) {
  elemenPesan.textContent = "Halo, JavaScript!";
}

// Menghitung luas
function hitungLuas(panjang, lebar) {
  return panjang * lebar;
}

// Menampilkan hasil luas
console.log("Luas:", hitungLuas(8, 4));

// Percabangan if else
const nilai = 76;

if (nilai >= 60) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}

// Percabangan switch
const pilihan = "2";

switch (pilihan) {
  case "1":
    console.log("Pilihan satu");
    hasilSwitch.textContent = "Pilihan satu";
    break;

  case "2":
    console.log("Pilihan dua");
    hasilSwitch.textContent = "Pilihan dua";
    break;

  default:
    console.log("Pilihan tidak tersedia");
    hasilSwitch.textContent = "Pilihan tidak tersedia";
}

for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}
let angka = 3;
while (angka > 0) {
  console.log(angka);
  angka--;
}

function ubahTampilan() {
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("pesan").style.color = "blue";
  document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}