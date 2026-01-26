document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("historyModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-modal");

    const openModal = () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    // 1. Apdorojame tekstinius failus (Skaityti daugiau)
    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.onclick = async function() {
            const fileName = this.getAttribute('data-file');
            const title = this.getAttribute('data-title');
            modalTitle.innerText = title;
            modalBody.innerHTML = `<div class="loader-container"><div class="spinner"></div></div>`;
            openModal();
            try {
                const response = await fetch(`./${fileName}`);
                if (!response.ok) throw new Error('Nepavyko užkrauti');
                const htmlContent = await response.text();
                modalBody.innerHTML = htmlContent;
            } catch (error) {
                modalBody.innerHTML = "<p style='color:red;'>Klaida.</p>";
            }
        }
    });

    // 2. Patobulintas nuotraukų apdorojimas su dydžio logika
    document.querySelectorAll('.timeline-img-mini img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = function() {
            const imgSrc = this.getAttribute('src');
            const imgAlt = this.getAttribute('alt') || "Nuotrauka";

            modalTitle.innerText = imgAlt;
            
            // Logika: 
            // - Jei nuotrauka maža, ištempiame iki 520px (min-width).
            // - Jei nuotrauka didelė, ji užima 100% modalinio lango (bet ne daugiau nei savo tikrą dydį).
            // - max-height apsaugo, kad nuotrauka neišlįstų per ekrano apačią.
            modalBody.innerHTML = `
                <div style="text-align:center; display: flex; justify-content: center;">
                    <img src="${imgSrc}" alt="${imgAlt}" 
                         style="
                            width: 100%; 
                            min-width: 520px; 
                            max-width: 100%; 
                            height: auto; 
                            max-height: 75vh; 
                            object-fit: contain;
                            border-radius: 4px; 
                            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                         ">
                </div>`;
            openModal();
        };
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
    closeBtn.onclick = closeModal;
    window.onclick = (event) => { if (event.target == modal) closeModal(); };
});