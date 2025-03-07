function loadHeader() {
    fetch('/header.html').then(response => response.text())
    .then(html => document.getElementById('header-container').innerHTML = html);
}

function loadFooter() {
    fetch('/footer.html').then(response => response.text())
    .then(html => document.getElementById('footer-container').innerHTML = html);
}

window.onload = function() {
    loadHeader();
    loadFooter();
};
