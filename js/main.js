// NOTE: this file must be loaded as a module. In your HTML, replace your old
// <script src="js/main.js"></script> tag with:
//   <link rel="stylesheet" href="https://unpkg.com/family-chart@latest/dist/styles/family-chart.css">
//   <script type="module" src="js/main.js"></script>
// esm.sh resolves family-chart's d3 dependency automatically — no separate d3 <script> needed,
// which avoids the "d3.create is not a function" global-conflict issue.
import * as f3 from "https://esm.sh/family-chart@latest";
import * as d3 from "https://esm.sh/d3@7";

window.onload = function () {
  const treeElement = document.getElementById("tree");

  if (treeElement) {
    // Sukuriamas šeimos medžio objektas su 20 narių
    // (SAME familyData structure as before — untouched)
    const familyData = [
    { id: 1, name: "Foma Gusarovas", gender: "male" },

    {
      id: 2,
      pids: [3],
      fid: 1,
      name: "Ivanas Gusarovas",
      gender: "male"
    },
    {
      id: 3,
      pids: [2],
      name: "Ekaterina Stelmakova",
      gender: "female"
    },

    {
      id: 4,
      mid: 3,
      fid: 2,
      pids: [5],
      name: "Markas Gusarovas",
      gender: "male"
    },
    {
      id: 5,
      pids: [4],
      name: "Eugenija",
      gender: "female"
    },

    {
      id: 6,
      mid: 3,
      fid: 2,
      pids: [7],
      name: "Petras Gusarovas",
      gender: "male"
    },
    {
      id: 7,
      pids: [6],
      name: "Anastasija Mundinaitė",
      gender: "female"
    },

    {
      id: 8,
      mid: 3,
      fid: 2,
      pids: [9],
      name: "Fiodoras Gusarovas",
      gender: "male"
    },
    {
      id: 9,
      pids: [8],
      name: "Liubov Kravčenko",
      gender: "female"
    },

    {
      id: 10,
      mid: 3,
      fid: 2,
      pids: [11],
      name: "Stepanida Gusarova",
      gender: "female"
    },
    {
      id: 11,
      pids: [10],
      name: "Egoras Vasilevskis",
      gender: "male"
    },

    {
      id: 12,
      mid: 3,
      fid: 2,
      name: "Michailas Gusarovas",
      gender: "male"
    },

    {
      id: 13,
      mid: 3,
      fid: 2,
      name: "Ekaterina Gusarova",
      gender: "female"
    },

    {
      id: 14,
      mid: 3,
      fid: 2,
      pids: [15],
      name: "Endokėja Gusarova",
      gender: "female"
    },
    {
      id: 15,
      pids: [14],
      name: "Kuzma Gardejevas",
      gender: "male"
    },

    {
      id: 16,
      mid: 3,
      fid: 2,
      pids: [17],
      name: "Nikolajus Gusarovas",
      gender: "male"
    },
    {
      id: 17,
      pids: [16],
      name: "Marija",
      gender: "female"
    },

    // Children of Markas Gusarovas & Eugenija
    {
      id: 18,
      mid: 5,
      fid: 4,
      pids: [19],
      name: "Petras Gusarovas",
      gender: "male"
    },
    {
      id: 19,
      pids: [18],
      name: "Marija Mundinaitė",
      gender: "female"
    },

    {
      id: 20,
      mid: 5,
      fid: 4,
      name: "Grigorijus Gusarovas",
      gender: "male"
    },
    {
      id: 21,
      mid: 5,
      fid: 4,
      pids: [22],
      name: "Sergejus Gusarovas",
      gender: "male"
    },
    {
      id: 22,
      pids: [21],
      name: "Liubov Drizgaitė",
      gender: "female"
    },

    {
      id: 23,
      mid: 5,
      fid: 4,
      name: "Eidjonas Gusarovas",
      gender: "male"
    },
    {
      id: 24,
      mid: 5,
      fid: 4,
      name: "Akvilina Gusarova",
      gender: "female"
    },
    {
      id: 25,
      mid: 5,
      fid: 4,
      name: "Klaudijus Gusarovas",
      gender: "male"
    },
    {
      id: 26,
      mid: 5,
      fid: 4,
      name: "Petrė Gusarova",
      gender: "female"
    },
    {
      id: 27,
      mid: 5,
      fid: 4,
      name: "Zenonas Gusarovas",
      gender: "male"
    },
    {
      id: 28,
      mid: 5,
      fid: 4,
      name: "Birutė Gusarovaitė",
      gender: "female"
    },
    {
      id: 29,
      mid: 5,
      fid: 4,
      name: "Kęstutis Gusarovas",
      gender: "male"
    },
    {
      id: 30,
      mid: 5,
      fid: 4,
      name: "Dalia Gusarovaitė",
      gender: "female"
    },

    // Children of Petras Gusarovas & Anastasija Mundinaitė
    {
      id: 31,
      mid: 7,
      fid: 6,
      pids: [32],
      name: "Afanasas Gusarovas",
      gender: "male"
    },
    {
      id: 32,
      pids: [31],
      name: "Nina Šamchova",
      gender: "female"
    },

    {
      id: 33,
      mid: 7,
      fid: 6,
      pids: [34],
      name: "Anastasija Gusarova",
      gender: "female"
    },
    {
      id: 34,
      pids: [33],
      name: "Aleksandras Mundinas",
      gender: "male"
    },

    {
      id: 35,
      mid: 7,
      fid: 6,
      pids: [36],
      name: "Anna Gusarova",
      gender: "female"
    },
    {
      id: 36,
      pids: [35],
      name: "Vasiljus Jurčianas",
      gender: "male"
    },

    {
      id: 37,
      mid: 7,
      fid: 6,
      pids: [38],
      name: "Lukerija Gusarova",
      gender: "female"
    },
    {
      id: 38,
      pids: [37],
      name: "Vaclovas Gaudiešius",
      gender: "male"
    },

    {
      id: 39,
      mid: 7,
      fid: 6,
      name: "Andrejus Gusarovas",
      gender: "male"
    },

    {
      id: 40,
      mid: 7,
      fid: 6,
      pids: [41],
      name: "Kostas Gusarovas",
      gender: "male"
    },
    {
      id: 41,
      pids: [40],
      name: "Zinaida",
      gender: "female"
    },

    // Uncertain branch
    {
      id: 42,
      name: "Petras Gusarovas",
      gender: "male"
    },

    // Children of Afanasas Gusarovas & Nina
    {
      id: 43,
      mid: 32,
      fid: 31,
      pids: [44],
      name: "Vladas Gusarovas",
      gender: "male"
    },
    {
      id: 44,
      pids: [43],
      name: "Brinislava Dargenytė",
      gender: "female"
    },

    {
      id: 45,
      mid: 32,
      fid: 31,
      pids: [46],
      name: "Michailas Gusarovas",
      gender: "male"
    },
    {
      id: 46,
      pids: [45],
      name: "Zofija Pašytė",
      gender: "female"
    },

    {
      id: 47,
      mid: 32,
      fid: 31,
      pids: [48],
      name: "Lida Gusarovaitė",
      gender: "female"
    },
    {
      id: 48,
      pids: [47],
      name: "Vytas Karaciejus",
      gender: "male"
    },

    {
      id: 49,
      mid: 32,
      fid: 31,
      name: "Elytė Gusarovaitė",
      gender: "female"
    },

    // Uncertain parentage
    {
      id: 50,
      name: "Nikolajus Gusarovas",
      gender: "male"
    },
    {
      id: 51,
      pids: [52],
      name: "Vida Gusarovaitė",
      gender: "female"
    },
    {
      id: 52,
      pids: [51],
      name: "Alvydas Rimonis",
      gender: "male"
    },
    {
      id: 53,
      name: "Aldutė Gusarovaitė",
      gender: "female"
    },
    {
      id: 54,
      pids: [55],
      name: "Rima Gusarovaitė",
      gender: "female"
    },
    {
      id: 55,
      pids: [54],
      name: "Alvydas Leliuga",
      gender: "male"
    }
  ];

    // ---- Adapter: FamilyTreeJS-style familyData -> family-chart data format ----
    function convertToF3Format(data) {
      const byId = new Map(data.map(p => [p.id, p]));

      // build children lookup: for each node, find who lists it as mid/fid
      const childrenOf = new Map();
      data.forEach(p => {
        [p.mid, p.fid].forEach(parentId => {
          if (parentId === undefined) return;
          if (!childrenOf.has(parentId)) childrenOf.set(parentId, []);
          childrenOf.get(parentId).push(p.id);
        });
      });

      return data.map(p => {
        const nameParts = p.name.trim().split(" ");
        const lastName = nameParts.length > 1 ? nameParts.pop() : "";
        const firstName = nameParts.join(" ");

        const parents = [];
        if (p.fid !== undefined && byId.has(p.fid)) parents.push(String(p.fid));
        if (p.mid !== undefined && byId.has(p.mid)) parents.push(String(p.mid));

        const spouses = (p.pids || [])
          .filter(id => byId.has(id))
          .map(id => String(id));

        const children = (childrenOf.get(p.id) || [])
          .filter(id => byId.has(id))
          .map(id => String(id));

        return {
          id: String(p.id),
          data: {
            "first name": firstName,
            "last name": lastName,
            gender: p.gender === "male" ? "M" : "F",
            avatar: p.img || ""
          },
          rels: {
            ...(parents.length ? { parents } : {}),
            ...(spouses.length ? { spouses } : {}),
            ...(children.length ? { children } : {})
          }
        };
      });
    }

    const f3Data = convertToF3Format(familyData);

    const f3Chart = f3
      .createChart(treeElement, f3Data)
      .setTransitionTime(1000)
      .setCardXSpacing(250)
      .setCardYSpacing(150);

    f3Chart
      .setCardHtml()
      .setCardDisplay([["first name", "last name"]])
      .setMiniTree(true)
      .setStyle("imageRect")
      .setOnHoverPathToMain();

    // Label the horizontal line between spouses. sp1/sp2 are tree nodes;
    // sp1.data.data / sp2.data.data give you each person's full data object
    // (first name, last name, gender, avatar, etc.) if you want a fancier label.
    //f3Chart.setLinkSpouseText(() => "sutuoktiniai");

    f3Chart.updateTree({ initial: true });

    // family-chart always force-fits the tree to the container on the very first
    // render (there's no public option to skip this), so a custom initial
    // zoom/pan has to be applied a moment after that auto-fit finishes, or it
    // gets immediately overwritten.
    setTimeout(() => {
      setInitialView(treeElement, { x: 799.786, y: 169.722, k: 0.446512 });
    }, 100);
  }
};

// Applies a specific pan/zoom as the tree's starting view. Values are in the
// same {x, y, k} shape you'd read off `transform: translate(x, y) scale(k)`
// in devtools — grab fresh numbers any time you manually pan/zoom to a view
// you like, then paste them in here.
function setInitialView(container, { x, y, k }) {
  const svgEl = container.querySelector("svg.main_svg");
  if (!svgEl) return;
  const f3Canvas = svgEl.parentNode; // family-chart binds its zoom behavior here
  const zoom = f3Canvas.__zoomObj;
  if (!zoom) return;
  d3.select(f3Canvas).call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(k));
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
        const randomLeft = leftArray[index];
        const randomY = (index + 1) * 14;
        polaroidDiv.style.top = `${randomY}px`;
        polaroidDiv.style.left = `${randomLeft}%`;
        polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
        polaroidDiv.style.zIndex = index;
      } else {
        polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
      }

      polaroidDiv.innerHTML = `
        <img src="${photo.src}" alt="${photo.desc}">
        <p style="text-align:center; font-family: 'Playfair Display'; margin-top: 10px; font-size: 0.8rem; color: #555;">
          ${photo.desc}
        </p>
      `;

      polaroidDiv.onclick = function() {
        window.location.href = 'galerija';
      };

      galleryContainer.appendChild(polaroidDiv);
    });
  }
});