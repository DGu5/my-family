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

    // 2. Patobulintas nuotraukų apdorojimas - prisitaikantis prie ekrano
    document.querySelectorAll('.timeline-img-mini img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = function() {
            const imgSrc = this.getAttribute('src');
            const imgAlt = this.getAttribute('alt') || "Nuotrauka";

            modalTitle.innerText = imgAlt;
            
            modalBody.innerHTML = `
                <div style="text-align:center; display: flex; justify-content: center; align-items: center; min-height: 200px;">
                    <img src="${imgSrc}" alt="${imgAlt}" 
                         style="
                            width: auto;            /* Leidžia išlaikyti proporcijas */
                            max-width: 100%;        /* Neleidžia išlipti iš ekrano rėmų */
                            min-width: 300px;        /* Minimalus dydis mažiems ekranams */
                            height: auto; 
                            max-height: 75vh;       /* Neleidžia būti aukštesnei nei ekranas */
                            object-fit: contain;
                            border-radius: 4px; 
                            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                         ">
                </div>`;
            
            // Papildoma CSS taisyklė kompiuteriams (tik jei ekranas didelis)
            const modalImg = modalBody.querySelector('img');
            if (window.innerWidth > 600) {
                modalImg.style.width = '900px'; // Padidinta iki 1000px
                modalImg.style.maxHeight = '85vh'; // Leidžiame būti aukštesnei
            }

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