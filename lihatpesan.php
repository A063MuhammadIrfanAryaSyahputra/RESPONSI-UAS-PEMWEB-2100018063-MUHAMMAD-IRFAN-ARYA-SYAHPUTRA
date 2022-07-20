<?php 
echo "<head><title>My Guest Book</title></head>";
$fp = fopen("pesan.txt", "r");

echo("<center><h1>Pesan Anda</h1>");
echo "<table border='1' width='70%' style='text-align: center;'>";
echo("<tr><td>Nama</td><td>Komentar</td></tr>");

$tanggal=date("d-m-Y");  

while ($isi = fgets($fp)) {
    $pisah = explode('|', $isi);
    echo("<tr><td>$pisah[0]</td><td>$pisah[1]</td></tr>");
}
echo "</table></center>";
echo "<br><br><br><br><br><br><br><center><a href=index.html> Kembali Ke Website </a></center><br>";
?>