async function trackPackage() {
  const resi = document.getElementById('waybill').value;
  const resultDiv = document.getElementById('result');
  if (!resi) return resultDiv.innerHTML = "Nomor resi tidak boleh kosong.";

  resultDiv.innerHTML = "Sedang mencari data...";

  try {
    const response = await fetch(`https://api.binderbyte.com/v1/track?api_key=9c8e171b3384e8ba502e7ad62aca9c781ea11d70cbfa5eb109afc21919aa0f13&courier=jnt&awb=${resi}`);
    const result = await response.json();

    if (result.status !== 200) {
      resultDiv.innerHTML = `Gagal melacak paket: ${result.message}`;
      return;
    }

    const data = result.data;
    let html = `<h3>Status: ${data.summary.status}</h3>`;
    html += `<p><strong>No. Resi:</strong> ${data.summary.awb}</p>`;
    html += `<p><strong>Pengirim:</strong> ${data.summary.sender}</p>`;
    html += `<p><strong>Penerima:</strong> ${data.summary.receiver}</p>`;
    html += `<p><strong>Tanggal:</strong> ${data.summary.date}</p>`;
    html += `<h4>Riwayat:</h4><ul>`;
    data.history.forEach(item => {
      html += `<li>${item.date} - ${item.desc} (${item.location})</li>`;
    });
    html += `</ul>`;
    resultDiv.innerHTML = html;
  } catch (err) {
    resultDiv.innerHTML = "Terjadi kesalahan saat mengambil data.";
    console.error(err);
  }
}
