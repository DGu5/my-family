// 1. Žemėlapio inicializacija - kiek toliau (zoom 5), kad matytųsi visa Europa
var map = L.map('map').setView([52.0, 20.0], 5); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// 2. Apibrėžiame zonas pagal tavo PNG (koordinatės, spalva, spindulys metrais)
const zones = [
    { 
        name: "Lietuva ir Latvija (Lopšys)", 
        coords: [56.0, 24.0], 
        color: "#e67e22", // Oranžinė/Ruda
        radius: 250000 
    },
    { 
        name: "Vakarų kryptis (Vokietija/Nyderlandai)", 
        coords: [51.5, 10.0], 
        color: "#3498db", // Melsva
        radius: 400000 
    },
    { 
        name: "Pietų kryptis (Balkanai/Vengrija)", 
        coords: [47.0, 19.0], 
        color: "#f1c40f", // Gelsva
        radius: 450000 
    },
    { 
        name: "Rytų kryptis (Baltarusija/Ukraina)", 
        coords: [50.0, 30.0], 
        color: "#e74c3c", // Raudona
        radius: 500000 
    },
    { 
        name: "Lenkijos regionas", 
        coords: [52.0, 20.0], 
        color: "#2d3e30", // Tavo akcentinė žalia
        radius: 300000 
    }
];

// 3. Ciklas, kuris sudeda visas zonas į žemėlapį
zones.forEach(zone => {
    L.circle(zone.coords, {
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.3, // Padidinau skaidrumą, kad persidengimai gražiai susilietų
        weight: 1,       // Plona linija aplink
        radius: zone.radius
    })
    .addTo(map)
    .bindPopup(`<b>${zone.name}</b><br>Giminės bendruomenės dalis.`);
});