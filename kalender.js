const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const bulanHari = document.querySelector(".hari");

  const hariAkhir = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const hariAkhirSebelum = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const indexHariAwal = date.getDay();

  const indexHariAkhir = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const Besok = 7 - indexHariAkhir - 1;

  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  document.querySelector(".date h1").innerHTML = bulan[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let hari = "";

  for (let x = indexHariAwal; x > 0; x--) {
    hari += `<div class="prev-date">${hariAkhirSebelum - x + 1}</div>`;
  }

  for (let i = 1; i <= hariAkhir; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      hari += `<div class="hariini">${i}</div>`;
    } else {
      hari += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= Besok; j++) {
    hari += `<div class="next-date">${j}</div>`;
    bulanHari.innerHTML = hari;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
