// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("quoteModal");
    const spans = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.service-category ul li, .service-category p').forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });

    spans.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
