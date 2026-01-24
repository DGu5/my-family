// Žemėlapio inicializacija fokusuojant į Lietuvą
    var map = L.map('map').setView([55.1694, 23.8813], 7); 

    // Naudojame šviesų žemėlapio pagrindą, kad tiktų prie jūsų kreminio fono
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Sukuriame žalią apskritimą virš Lietuvos
    var circle = L.circle([55.1694, 23.8813], {
        color: '#2d3e30',      /* Jūsų --accent-color */
        fillColor: '#2d3e30',  /* Jūsų --accent-color */
        fillOpacity: 0.2,      /* Skaidrumas */
        radius: 150000         /* Spindulys metrais (apima beveik visą Lietuvą) */
    }).addTo(map);

    // Pridedame informacinį langelį paspaudus
    circle.bindPopup("Gusarovų giminės lopšys.");