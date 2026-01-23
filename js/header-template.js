class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <a href="/" class="logo">
                    <img src="../oak-tree.png" alt="Gusarovai logotipas" class="logo-icon">
                    Gusarovai
                    </a>
                <button class="mobile-menu-btn" id="mobile-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-links" id="nav-links">
                    <li><a href="/">Pradžia</a></li>
                    <li><a href="/#medis">Giminės medis</a></li>
                    <li><a href="/istorija">Istorija</a></li>
                    <li><a href="/#galerija">Galerija</a></li>
                    <li><a href="/#kontaktai">Kontaktai</a></li>
                </ul>
            </nav>
        </header>
        `;

        // Pridedame mobiliojo meniu logiką, kad ji veiktų visuose puslapiuose
        const btn = this.querySelector('#mobile-btn');
        const links = this.querySelector('#nav-links');

        btn.onclick = () => {
            btn.classList.toggle('open');
            links.classList.toggle('active');
        };

        // Uždaryti meniu paspaudus nuorodą (ypač svarbu mobiliems)
        this.querySelectorAll('.nav-links a').forEach(link => {
            link.onclick = () => {
                btn.classList.remove('open');
                links.classList.remove('active');
            };
        });
    }
}

customElements.define('main-header', MyHeader);