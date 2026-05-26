document.addEventListener('DOMContentLoaded', () => {
    
    // Captura de elementos de la interfaz
    const searchInput = document.getElementById('search-input');
    const catalogGrid = document.getElementById('catalog-grid');
    const cards = catalogGrid.getElementsByClassName('card');
    const noResults = document.getElementById('no-results');
    const themeToggle = document.getElementById('theme-toggle');

    // ==========================================
    // FILTRO DINÁMICO DE BÚSQUEDA
    // ==========================================
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();
        let activeCardsCount = 0;

        // Analizamos cada tarjeta de casa de forma independiente
        Array.from(cards).forEach((card) => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const location = card.querySelector('.location').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();

            // Comprobamos si la palabra buscada está en el título, ubicación o descripción
            if (title.includes(query) || location.includes(query) || description.includes(query)) {
                card.classList.remove('hidden');
                activeCardsCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Alternancia del mensaje amigable si el contador queda en cero
        if (activeCardsCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    });

    // ==========================================
    // INTERRUPTOR DE MODO OSCURO / CLARO
    // ==========================================
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Modificamos el contenido visual del botón según el estado del Body
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Modo Claro';
        } else {
            themeToggle.textContent = '🌙 Modo Oscuro';
        }
    });
});