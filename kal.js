const angka1 = document.getElementById('angka1');
const operator = document.getElementById('operator');
const angka2 = document.getElementById('angka2');
const hitung = document.getElementById('hitung');
const hasil = document.getElementById('hasil');

hitung.addEventListener('click', () => {
 const num1 = parseFloat(angka1.value);
 const num2 = parseFloat(angka2.value);
 const oper = operator.value;

 if (isNaN(num1) || isNaN(num2)) {
 alert('Masukkan angka yang valid!');
 return;
 }

 let result;

 switch (oper) {
 case '+':
 result = num1 + num2;
 break;
 case '-':
 result = num1 - num2;
 break;
 case '*':
 result = num1 * num2;
 break;
 case '/':
 if (num2 === 0) {
 alert('Tidak bisa dibagi dengan nol!');
 return;
 }
 result = num1 / num2;
 break;
 default:
 alert('Operator tidak valid!');
 return;
 }

 hasil.innerText = `Hasil: ${result}`;
});