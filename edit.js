let foto = document.getElementById('foto');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let img = new Image();

foto.addEventListener('change', function() {
  let file = this.files[0];
  let reader = new FileReader();
  reader.onload = function(e) {
    img.src = e.target.result;
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    }
  }
  reader.readAsDataURL(file);
});

document.getElementById('grayscale').addEventListener('click', function() {
  ctx.filter = 'grayscale(100%)';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('sepia').addEventListener('click', function() {
  ctx.filter = 'sepia(100%)';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('invert').addEventListener('click', function() {
  ctx.filter = 'invert(100%)';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('reset').addEventListener('click', function() {
  ctx.filter = 'none';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('blur').addEventListener('click', function() {
  ctx.filter = 'blur(5px)';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('hd').addEventListener('click', function() {
  ctx.filter = 'none';
  ctx.imageSmoothingQuality =  'high';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('anime').addEventListener('click', function() {
  ctx.filter = 'contrast(150%) brightness(120%) saturate(150%)';
  ctx.drawImage(img, 0, 0);
});

document.getElementById('kartun').addEventListener('click', function() {
  ctx.filter = 'contrast(200%) saturate(150%) brightness(120%)';
  ctx.drawImage(img, 0, 0);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  for (let i = 0; i < canvas.width; i += 10) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
  }
  for (let i = 0; i < canvas.height; i += 10) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
  }
  ctx.stroke();
});

document.getElementById('iphone').addEventListener('click', function() {
  ctx.filter = 'contrast(150%) brightness(110%) saturate(120%)';
  ctx.drawImage(img, 0, 0);
  ctx.filter = 'blur(2px)';
  ctx.drawImage(img, 2, 2);
  ctx.filter = 'none';
  ctx.drawImage(img, -2, -2);
});

document.getElementById('dua-warna1').addEventListener('click', function() {
  ctx.filter = 'hue-rotate(60deg) saturate(150%) contrast(120%)';
  ctx.drawImage(img, 0, 0);
});  

document.getElementById('dua-warna2').addEventListener('click', function() {
  ctx.filter = 'hue-rotate(120deg) saturate(150%) contrast(120%)';
  ctx.drawImage(img, 0, 0);
});
  
document.getElementById('dua-warna3').addEventListener('click', function() {
  ctx.filter = 'hue-rotate(180deg) saturate(150%) contrast(120%)';
  ctx.drawImage(img, 0, 0);
});  

