<?php
echo "<head><title>Pesan Anda </head></title>";
$fp = fopen("pesan.txt","a+");
$nama = $_POST['nama'];
$komentar = $_POST['komentar'];
fputs($fp, "$nama|$komentar\n");
fclose($fp);

echo "<br><br><br><br><br><br><br><br><br><br><br><br><center><a href=index.html> Kembali Ke Website </a><br></center><br>";
echo "<center><a href=lihatpesan.php> Lihat Pesan Anda </a><br></center>";
?>