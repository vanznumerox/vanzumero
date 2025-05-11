const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');
const submit = document.getElementById('submit');
const hasil = document.getElementById('hasil');
const skor = document.getElementById('skor');

let soal =  [
{ pertanyaan: "Apa nama negara terbesar di Asia?", jawaban: "Rusia" },
{ pertanyaan: "Apa nama kota terbesar di Afrika?", jawaban: "Kairo" },
{ pertanyaan: "Apa nama sungai terpanjang di Eropa?", jawaban: "Sungai Volga" },
{ pertanyaan: "Apa nama danau terbesar di Amerika?", jawaban: "Danau Superior" },
{ pertanyaan: "Apa nama gunung tertinggi di Asia?", jawaban: "Mount Everest" },
{ pertanyaan: "Apa nama bahasa terbanyak digunakan di dunia?", jawaban: "Bahasa Inggris" },
{ pertanyaan: "Apa nama mata uang terkuat di dunia?", jawaban: "Dolar AS" },
{ pertanyaan: "Apa nama ibukota Jepang?", jawaban: "Tokyo" },
{ pertanyaan: "Apa nama negara terkecil di dunia?", jawaban: "Vatikan" },
{ pertanyaan: "Apa nama kota terbesar di Eropa?", jawaban: "Istanbul" },
{ pertanyaan: "Apa nama sungai terpanjang di dunia?", jawaban: "Sungai Nil" },
{ pertanyaan: "Apa nama danau terbesar di dunia?", jawaban: "Danau Kaspi" },
{ pertanyaan: "Apa nama planet terdekat dengan matahari?", jawaban: "Merkurius" },
{ pertanyaan: "Apa nama unsur kimia dengan simbol 'O'?", jawaban: "Oksigen" },
{ pertanyaan: "Apa nama proses perubahan air menjadi es?", jawaban: "Pembekuan" },
{ pertanyaan: "Apa nama bagian tubuh manusia yang berfungsi sebagai pengatur suhu?", jawaban: "Hypotalamus" },
{ pertanyaan: "Apa nama jenis energi yang dihasilkan dari angin?", jawaban: "Energi angin" },
{ pertanyaan: "Apa nama ibukota Jawa Barat?", jawaban: "Bandung" },
{ pertanyaan: "Siapa penulis novel 'Bumi Manusia'?", jawaban: "Pramoedya Ananta Toer" },
{ pertanyaan: "Apa nama gunung tertinggi di Asia?", jawaban: "Mount Everest" },
{ pertanyaan: "Apa nama sungai terpanjang di dunia?", jawaban: "Sungai Nil" },
{ pertanyaan: "Apa nama danau terbesar di dunia?", jawaban: "Danau Kaspi" },
{ pertanyaan: "Apa nama planet terjauh dari matahari?", jawaban: "Neptunus" },
{ pertanyaan: "Apa nama unsur kimia dengan simbol 'O'?", jawaban: "Oksigen" },
{ pertanyaan: "Apa nama proses perubahan air menjadi es?", jawaban: "Pembekuan" },
{ pertanyaan: "Apa nama bagian tubuh manusia yang berfungsi sebagai pengatur suhu?", jawaban: "Hypotalamus" },
{ pertanyaan: "Apa nama jenis energi yang dihasilkan dari angin?", jawaban: "Energi angin" },
{ pertanyaan: "Apa nama konsep dasar fisika?", jawaban: "Mekanika" },
{ pertanyaan: "Apa nama jenis reaksi kimia?", jawaban: "Reaksi oksidasi" },
{ pertanyaan: "Apa nama konsep dasar biologi?", jawaban: "Sel" },
{ pertanyaan: "Apa nama proses perubahan air menjadi uap?", jawaban: "Evaporasi" },
{ pertanyaan: "Apa nama jenis batuan?", jawaban: "Igneus, Sedimen, dan Metamorf" },
{ pertanyaan: "Apa nama negara terbesar di Eropa?", jawaban: "Rusia" },
{ pertanyaan: "Apa nama kota terbesar di Amerika?", jawaban: "New York" },
{ pertanyaan: "Apa nama sungai terpanjang di Asia?", jawaban: "Sungai Yangtze" },
{ pertanyaan: "Apa nama danau terbesar di Eropa?", jawaban: "Danau Ladoqa" },
{ pertanyaan: "Apa nama gunung tertinggi di Afrika?", jawaban: "Gunung Kilimanjaro" },
{ pertanyaan: "Apa nama bahasa terbanyak digunakan di dunia?", jawaban: "Bahasa Inggris" },
{ pertanyaan: "Apa nama mata uang terkuat di dunia?", jawaban: "Dolar AS" },
  { pertanyaan: "Apa warna langit?", jawaban: "Biru" },
  { pertanyaan: "Apa nama planet kita?", jawaban: "Bumi" },
  { pertanyaan: "Apa nama hewan yang bisa terbang?", jawaban: "Burung" }
];

let nomorSoal = 0;
let skorValue = 0;

pertanyaan.innerText = soal[nomorSoal].pertanyaan;

submit.addEventListener('click', () => {
  const jawabanUser = jawaban.value;
  if (jawabanUser.toLowerCase() === soal[nomorSoal].jawaban.toLowerCase()) {
    hasil.innerText = "Jawaban benar!";
    skorValue++;
  } else {
    hasil.innerText = `Jawaban salah! Jawaban benar: ${soal[nomorSoal].jawaban}`;
  }
  skor.innerText = `Skor: ${skorValue}/${nomorSoal + 1}`;
  nomorSoal++;
  if (nomorSoal < soal.length) {
    pertanyaan.innerText = soal[nomorSoal].pertanyaan;
    jawaban.value = "";
  } else {
    pertanyaan.innerText = "Game selesai!";
    submit.disabled = true;
  }
});