window.onload = function () {
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

    // Inicializuojame FamilyTree.js
    var family = new FamilyTree(document.getElementById("tree"), {
        mouseScrol: FamilyTree.none,
        mode: 'dark',
        nodeBinding: {
            field_0: "name",
            img_0: "img"
        },
        nodes: familyData
    });
};

// Mobiliojo meniu valdymas
const mobileBtn = document.getElementById('mobile-cta');
const navMenu = document.getElementById('nav-menu');

mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Uždaryti meniu paspaudus nuorodą
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});