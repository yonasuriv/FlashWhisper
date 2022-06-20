let searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        solarSearch();
    }
});

function solarSearch() {
    const input = searchInput.value;
    if (input != "" && input != null) {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(input);
    }
}

function shadowSearch() {
    const input = searchInput.value;
    if (input != "" && input != null) {
        window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(input);
    }
}

document.getElementById("solarSearch").onclick = function () {
    solarSearch();
};

document.getElementById("shadowSearch").onclick = function () {
    shadowSearch();
};