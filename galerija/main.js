document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: '../images/apie_sentikybe.jpg', title: 'Senelių sodyba' },
        { src: '../images/pirmieji_sentikiai.jpg', title: 'Šventė kaime' },
        { src: '../images/apie_sentikybe.jpg', title: '1945-ųjų vasara' },
        { src: '../images/pirmieji_sentikiai.jpg', title: 'Prosenelio portretas' },
        { src: '../images/apie_sentikybe.jpg', title: 'Giminės medis' },
        { src: '../images/pirmieji_sentikiai.jpg', title: 'Krikštynos' },
        // Pridėkite visas savo nuotraukas čia
    ];

    const grid = document.getElementById('dynamic-gallery');
    const sizes = ['', 'tall', 'short']; // Klasės skirtingiems aukščiams

    images.forEach((imgData, index) => {
        const item = document.createElement('div');
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        
        item.className = `gallery-item ${randomSize}`;
        item.innerHTML = `
            <img src="${imgData.src}" alt="${imgData.title}">
            <p>${imgData.title}</p>
        `;

        // Atidarymas modale (naudojant jūsų jau sukurtą modalą)
        item.onclick = () => {
            // Galite čia iškviesti tą pačią modal funkciją kaip index puslapyje
            alert("Čia atsidarys didelė foto: " + imgData.title);
        };

        grid.appendChild(item);
    });
});