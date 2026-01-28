let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

// Tampilkan tabel otomatis
function tampilkanTabel() {
  let tabel = document.getElementById("tabelSiswa");
  if (!tabel) return;

  tabel.innerHTML = "";
  siswa.forEach(s => {
    tabel.innerHTML += `
      <tr>
        <td>${s.nama}</td>
        <td>${s.nilai[0]}</td>
        <td>${s.nilai[1]}</td>
        <td>${s.nilai[2]}</td>
        <td>${s.nilai[3]}</td>
        <td>${s.nilai[4]}</td>
      </tr>
    `;
  });
}

// Tambah siswa
function tambahSiswa() {
  let nama = document.getElementById("nama").value;
  let nilai = [
    parseFloat(document.getElementById("c1").value),
    parseFloat(document.getElementById("c2").value),
    parseFloat(document.getElementById("c3").value),
    parseFloat(document.getElementById("c4").value),
    parseFloat(document.getElementById("c5").value)
  ];

  siswa.push({ nama, nilai });
  localStorage.setItem("siswa", JSON.stringify(siswa));

  tampilkanTabel();
}

// Reset data
function resetData() {
  siswa = [];
  localStorage.removeItem("siswa");
  tampilkanTabel();
}

// Hitung SAW Ranking
function hitungSAW() {
  let bobot = [10, 8, 6, 2, 4];

  let max = [0, 0, 0, 0, 0];
  siswa.forEach(s => {
    s.nilai.forEach((val, i) => {
      if (val > max[i]) max[i] = val;
    });
  });

  let hasil = siswa.map(s => {
    let skor = 0;
    s.nilai.forEach((val, i) => {
      skor += (val / max[i]) * bobot[i];
    });
    return { nama: s.nama, skor };
  });

  hasil.sort((a, b) => b.skor - a.skor);

  let output = `
    <h3>Ranking Siswa</h3>
    <table>
      <tr><th>Rank</th><th>Nama</th><th>Skor</th></tr>
  `;

  hasil.forEach((r, i) => {
    output += `
      <tr>
        <td>${i + 1}</td>
        <td>${r.nama}</td>
        <td class="hasil">${r.skor.toFixed(2)}</td>
      </tr>
    `;
  });

  output += "</table>";

  document.getElementById("outputRanking").innerHTML = output;
}

// Jalankan saat halaman dibuka
document.addEventListener("DOMContentLoaded", tampilkanTabel);
