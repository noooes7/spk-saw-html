<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Ranking SAW</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>Hasil Ranking SAW</h1>
</header>

<nav>
  <a href="index.html">Home</a>
  <a href="siswa.html">Input Siswa</a>
  <a href="ranking.html">Ranking SAW</a>
</nav>

<div class="container card">
  <h2>Perhitungan SAW</h2>
  <p>Bobot: W = [10, 8, 6, 2, 4]</p>

  <button onclick="hitungSAW()">Hitung Ranking</button>

  <div id="outputRanking"></div>
</div>

<script src="script.js"></script>
</body>
</html>
