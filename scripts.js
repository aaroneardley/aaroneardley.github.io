function openLink(url) {
    window.open(url, '_blank');
}

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;