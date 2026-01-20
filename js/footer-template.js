const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="social-links">
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="mailto:pastas@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
            <p>&copy; 2026 Gusarovai. Visos teisės saugomos.</p>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    const footerElement = document.getElementById("common-footer");
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});