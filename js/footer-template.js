const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="social-links">
                <a href="https://github.com/DGu5/my-family" target="_blank"><i class="fab fa-github"></i></a>
                <a href="dovydas.gs@gmail.com"><i class="fas fa-envelope"></i></a>
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

document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.createElement('a');
    backToTop.id = "back-to-top";
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.href = "#";
    document.body.appendChild(backToTop);

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    };
    
    // Nepamirškite pridėti sklandaus skrolinimo funkcijos
    backToTop.onclick = function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});