const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const body = document.body;

function enableDarkMode() {
    body.classList.add('dark-mode');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
}

function toggleDarkMode() {
    if (darkModeCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

darkModeCheckbox.addEventListener('change', toggleDarkMode);
