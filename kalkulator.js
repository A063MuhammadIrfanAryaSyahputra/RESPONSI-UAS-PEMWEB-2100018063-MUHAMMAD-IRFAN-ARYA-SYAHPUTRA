let tampilan = document.getElementById("tampilan");

let tomboll = Array.from(document.getElementsByClassName("tombol"));

tomboll.map((tombol) => {
  tombol.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        tampilan.innerText = "";
        break;
      case "=":
        try {
          tampilan.innerText = eval(tampilan.innerText);
        } catch {
          tampilan.innerText = "Error";
        }
        break;
      case "←":
        if (tampilan.innerText) {
          tampilan.innerText = tampilan.innerText.slice(0, -1);
        }
        break;
      default:
        tampilan.innerText += e.target.innerText;
    }
  });
});
