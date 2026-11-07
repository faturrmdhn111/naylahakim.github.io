
const tombol = document.querySelector(".theme-toggle");

if (localStorage.getItem("tema-portofolio") === "gelap") {
    document.body.classList.add("dark-mode");
}

function updateTombol() {
    if (tombol) {
        tombol.textContent = document.body.classList.contains("dark-mode")
            ? "☀ Mode Terang"
            : "☾ Mode Gelap";
    }
}

updateTombol();

if (tombol) {
    tombol.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "tema-portofolio",
            document.body.classList.contains("dark-mode")
                ? "gelap"
                : "terang"
        );

        updateTombol();
    });
}
