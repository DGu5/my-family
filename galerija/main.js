document.addEventListener('DOMContentLoaded', function() {
    // 1. Surandame modalinio lango elementus
    const modal = document.getElementById("historyModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-modal");

    // 2. Nuotraukų sąrašas
    const images = [
        { src: '../images/apie_sentikybe.jpg', title: 'Sentikiai' },
        { src: '../images/pirmieji_sentikiai.jpg', title: 'Sentikių migracija' },
        { src: '../images/pirmieji_sentikiai2.jpg', title: 'Pirmieji sentikiai' },
        { src: '../images/fedojizmas.jpg', title: 'Fedosėjizmas' },
        { src: '../images/sentikiu_vienuolynas.jpg', title: 'Sentikių vienuolynas' },
        { src: '../images/sentikiu_bendruomene.jpg', title: 'Sentikių gyvenvietė' },
        { src: '../images/neturtingi_sentikiai.jpg', title: 'Neturtingi sentikiai' },
        { src: '../images/turtingi_sentikiai.jpg', title: 'Pasiturinčių sentikių pirklių šeima' },
        { src: '../images/sentikiai_tarpukariu.jpg', title: 'Sentikiai tarpukariu' },
        { src: '../images/pakupelkio_cerkve.JPG', title: 'Pakupelkio sentikių maldos namai' },
        { src: '../images/kolainiu_cerkve.jpg', title: 'Kolainių stačiatikių cerkvė' },
        { src: '../images/girgzdutes_piliakalniss.jpg', title: 'Pagirgždučio piliakalnis' },
        { src: '../images/kaimas_zemaitijoje.png', title: 'Kaimas Žemaitijoje' },
        { src: '../images/2025-degaiciai.JPEG', title: 'Giminės susitikimas 2025m.' },
    ];

    const grid = document.getElementById('dynamic-gallery');
    const sizes = ['', 'tall', 'short'];

    // 3. Generuojame galeriją
    images.forEach((imgData) => {
        const item = document.createElement('div');
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        
        item.className = `gallery-item ${randomSize}`;
        item.style.cursor = 'zoom-in'; // Indikacija, kad galima spausti
        
        item.innerHTML = `
            <img src="${imgData.src}" alt="${imgData.title}">
            <p>${imgData.title}</p>
        `;

        // 4. Modalinio lango atidarymo logika
        item.onclick = function() {
            modalTitle.innerText = imgData.title;
            
            // Įterpiame nuotrauką su tavo nurodytais stiliais
            modalBody.innerHTML = `
                <div style="text-align:center; display: flex; justify-content: center; align-items: center; min-height: 200px;">
                    <img src="${imgData.src}" alt="${imgData.title}" 
                         style="
                            width: auto;
                            max-width: 100%;
                            min-width: 300px;
                            height: auto; 
                            max-height: 75vh;
                            object-fit: contain;
                            border-radius: 4px; 
                            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                         ">
                </div>`;
            
            // Pritaikymas dideliems ekranams
            const modalImg = modalBody.querySelector('img');
            if (window.innerWidth > 600) {
                modalImg.style.width = '900px'; 
                modalImg.style.maxHeight = '85vh';
            }

            // Atidarome modalą
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Neleidžiame skrolinti fono
        };

        grid.appendChild(item);
    });

    // 5. Modalo uždarymo logika
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    // Uždarymas paspaudus už modalo turinio ribų
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };
});