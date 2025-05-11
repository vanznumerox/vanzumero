let kotak = document.getElementById('kotak');
let skor = document.getElementById('skor');
let skorValue = 0;

function munculkanKotak() {
 kotak.style.top = Math.random() * 350 + 'px';
 kotak.style.left = Math.random() * 350 + 'px';
 kotak.style.display = 'block';
 setTimeout(hilangkanKotak, 1000);
}

function hilangkanKotak() {
 kotak.style.display = 'none';
 munculkanKotak();
}

kotak.addEventListener('click', function() {
 skorValue++;
 skor.textContent = skorValue;
});

munculkanKotak();