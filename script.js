
const picker = document.getElementById("colorPicker");
picker.addEventListener("input", e => {
    document.documentElement.style.setProperty("--primary", e.target.value);
});
