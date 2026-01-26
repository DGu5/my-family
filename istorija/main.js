document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("historyModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.onclick = async function() {
            const fileName = this.getAttribute('data-file');
            const title = this.getAttribute('data-title');

            modalTitle.innerText = title;
            modalBody.innerHTML = `
                <div class="loader-container">
                    <div class="spinner"></div>
                </div>`;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            try {
                const response = await fetch(`./${fileName}`);
                if (!response.ok) throw new Error('Nepavyko užkrauti failo');
                
                const htmlContent = await response.text();
                modalBody.innerHTML = htmlContent; // Įdedame visą HTML turinį
            } catch (error) {
                modalBody.innerHTML = "<p style='color:red;'>Klaida: nepavyko užkrauti istorijos.</p>";
                console.error(error);
            }
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});