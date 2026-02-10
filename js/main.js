window.onload = function () {
    
    const treeElement = document.getElementById("tree");

    if (treeElement) {
    // Sukuriamas šeimos medžio objektas su 20 narių
        const familyData = [
            { id: 1, pids: [2], name: "Jonas Gusarovas", gender: "male", img: "https://balkan.app/content/img/photos/m60/2.png" },
            { id: 2, pids: [1], name: "Marija Gusarovienė", gender: "female", img: "https://balkan.app/content/img/photos/w60/1.png" },
            
            { id: 3, mid: 2, fid: 1, pids: [4], name: "Petras Gusarovas", gender: "male" },
            { id: 4, pids: [3], name: "Elena Gusarovienė", gender: "female" },
            
            { id: 5, mid: 2, fid: 1, pids: [6], name: "Anelė Gusarovaitė", gender: "female" },
            { id: 6, pids: [5], name: "Antanas Jonaitis", gender: "male" },

            { id: 7, mid: 4, fid: 3, pids: [8], name: "Tomas Gusarovas", gender: "male" },
            { id: 8, pids: [7], name: "Rūta Gusarovienė", gender: "female" },

            { id: 9, mid: 4, fid: 3, name: "Lina Gusarovaitė", gender: "female" },
            
            { id: 10, mid: 8, fid: 7, name: "Marius Gusarovas", gender: "male" },
            { id: 11, mid: 8, fid: 7, name: "Ieva Gusarovaitė", gender: "female" },

            { id: 12, mid: 5, fid: 6, name: "Saulius Jonaitis", gender: "male" },
            { id: 13, mid: 5, fid: 6, name: "Beata Jonaitė", gender: "female" },

            { id: 14, mid: 2, fid: 1, name: "Kazys Gusarovas", gender: "male" },
            { id: 15, mid: 2, fid: 1, name: "Ona Gusarovaitė", gender: "female" },

            { id: 16, mid: 4, fid: 3, name: "Vytas Gusarovas", gender: "male" },
            { id: 17, mid: 8, fid: 7, name: "Eglė Gusarovaitė", gender: "female" },

            { id: 18, mid: 5, fid: 6, name: "Darius Jonaitis", gender: "male" },
            { id: 19, mid: 4, fid: 3, name: "Gintaras Gusarovas", gender: "male" },
            { id: 20, mid: 8, fid: 7, name: "Aistė Gusarovaitė", gender: "female" }
        ];

        var family = new FamilyTree(treeElement, {
                mouseScrol: FamilyTree.none,
                mode: 'dark',
                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                },
                nodes: familyData
            });
        };
    }

    // Inicializuojame FamilyTree.js
    

// Mobiliojo meniu valdymas
const mobileBtn = document.getElementById('mobile-cta');
const navMenu = document.getElementById('nav-menu');

mobileBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileBtn.classList.toggle('open'); // Pridedame klasę mygtuko animacijai
});

// Uždaryti meniu paspaudus bet kurią nuorodą
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('open');
    });
});

// Uždaryti meniu paspaudus nuorodą
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const familyPhotos = [
        { src: '/images/sentikiu_bendruomene.jpg', desc: 'Sentikių gyvenvietė' },
        { src: '/images/pakupelkio_cerkve.JPG', desc: 'Pakupelkio sentikių maldos namai' },
        { src: '/images/neturtingi_sentikiai.jpg', desc: 'Neturtingi sentikiai' },
        { src: '/images/2025-degaiciai.JPEG', desc: 'Giminės susitikimas 2025m.' },
        { src: '/images/girgzdutes_piliakalniss.jpg', desc: 'Pagirgždučio piliakalnis' },
    ];

    const galleryContainer = document.getElementById('polaroid-gallery');

    if (galleryContainer) {
        const shuffled = familyPhotos.sort(() => 0.5 - Math.random());

        shuffled.slice(0, 5).forEach((photo, index) => {
            const polaroidDiv = document.createElement('div');
            const leftArray = [10, 28, 51, 48, 34];
            polaroidDiv.className = 'polaroid';
            
            const randomRotate = Math.floor(Math.random() * 20) - 10;
            
            if (window.innerWidth < 600) {
                // Horizontalus išmėtymas: nuo 10% iki 60% ekrano pločio
                // Tai užtikrins, kad nuotraukos nebus vienoje krūvoje
                const randomLeft = leftArray[index]; 
                
                // Vertikalus tarpas: didesnis žingsnis, kad jos nesidengtų per stipriai
                const randomY = (index +1) * 14; 

                polaroidDiv.style.top = `${randomY}px`;
                polaroidDiv.style.left = `${randomLeft}%`;
                polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
                polaroidDiv.style.zIndex = index;
            } else {
                // Kompiuteriams (jei wrapperis yra Flex, JS pozicionavimo nereikia)
                polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
            }
            
            // ... tavo innerHTML ir onclick dalis ...
            polaroidDiv.innerHTML = `
                <img src="${photo.src}" alt="${photo.desc}">
                <p style="text-align:center; font-family: 'Playfair Display'; margin-top: 10px; font-size: 0.8rem; color: #555;">
                    ${photo.desc}
                </p>
            `;

            // NUORODA: Paspaudus nukreipiame į galerijos puslapį
            polaroidDiv.onclick = function() {
                window.location.href = 'galerija'; // Pakeiskite į savo tikslų kelią
            };

            galleryContainer.appendChild(polaroidDiv);
        });
    }
});