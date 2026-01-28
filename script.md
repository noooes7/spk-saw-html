let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

// tampil tabel siswa ringkas
function tampilkanTabel() {
  let tabel = document.getElementById("tabelSiswa");
  if (!tabel) return;

  tabel.innerHTML = "";

  siswa.forEach(s => {
    tabel.innerHTML += `
      <tr>
        <td>${s.nim}</td>
        <td>${s.nama}</td>
        <td>${s.kelas}</td>
        <td>${s.email}</td>
      </tr>
    `;
  });
}

// tambah siswa lengkap
function tambahSiswa() {
  let data = {
    nim: document.getElementById("nim").value,
    nama: document.getElementById("nama").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    kelas: document.getElementById("kelas").value,
    alamat: document.getElementById("alamat").value,
    ttl: document.getElementById("ttl").value,
    jk: document.getElementById("jk").value,
    agama: document.getElementById("agama").value,
    namaAyah: document.getElementById("namaAyah").value,
    namaIbu: document.getElementById("namaIbu").value,
    tahunMasuk: document.getElementById("tahunMasuk").value,
    email: document.getElementById("email").value,
    hp: document.getElementById("hp").value,

    nilai: [
      parseFloat(document.getElementById("c1").value),
      parseFloat(document.getElementById("c2").value),
      parseFloat(document.getElementById("c3").value),
      parseFloat(document.getElementById("c4").value),
      parseFloat(document.getElementById("c5").value)
    ]
  };

  siswa.push(data);
  localStorage.setItem("siswa", JSON.stringify(siswa));

  tampilkanTabel();
  alert("Data siswa berhasil ditambahkan!");
}

// reset semua
function resetData() {
  siswa = [];
  localStorage.removeItem("siswa");
  tampilkanTabel();
  document.getElementById("outputRanking").innerHTML = "";
}

// hitung ranking SAW
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
    <h3>Hasil Ranking</h3>
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

document.addEventListener("DOMContentLoaded", tampilkanTabel);
