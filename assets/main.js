document.getElementById("mainButton").addEventListener("click", function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const link = selectedOption.value;
        const input = document.getElementById("search-input").value;
        if (input != "" && input != null) {
            window.location.href = link + encodeURIComponent(input);
        } else {
            alert("Please enter a search query.");
        }
    } else {
        alert("Please select a search engine.");
    }
});

document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        const selectedOption = document.querySelector('input[name="option"]:checked');

        if (selectedOption) {
            const link = selectedOption.value;
            const input = document.getElementById("search-input").value;
            if (input != "" && input != null) {
                window.location.href = link + encodeURIComponent(input);
            } else {
                alert("Please enter a search query.");
            }
        } else {
            alert("Please select a search engine.");
        }
    }
});


/* Light/Dark Mode Function

// JavaScript to handle day/dark mode toggle
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode is activated
        document.body.classList.add("dark-mode");
    } else {
        // Day mode is activated
        document.body.classList.remove("dark-mode");
    }
});


function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);

*/
