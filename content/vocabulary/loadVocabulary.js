document.addEventListener('DOMContentLoaded', () => {
    const vocabularyList = document.getElementById('vocabulary-list');
    const perPage = 5; // Number of terms per page
    let currentPage = 1;
    let vocabularyData = [];

    // Load and parse CSV
    Papa.parse('vocabulary.csv', {
        download: true,
        header: true,  // Change this to true
        dynamicTyping: true,
        complete: function (results) {
            vocabularyData = results.data.map(row => ({
                word: row.word,  // Use header names here
                meaning: row.meaning,
                skill_level: row.skill_level,
                image_path: row.image_path
            }));
            renderPage(currentPage);
        }
    });
    

    // Render vocabulary terms for the current page
    function renderPage(page) {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const pageData = vocabularyData.slice(startIndex, endIndex);
        
        vocabularyList.innerHTML = ''; // Clear existing content

        pageData.forEach(term => {
            const termCard = document.createElement('li');
            termCard.classList.add('vocabulary-card');
            termCard.innerHTML = `
                <div class="card-content">
                    <h2>${term.word}</h2>
                    <img src="${term.image_path}" alt="${term.word}">
                    <p> ${term.meaning}</p>
                </div>
            `;
            vocabularyList.appendChild(termCard);
        });

        renderPagination();
    }

    // Render pagination buttons
    function renderPagination() {
        const totalPages = Math.ceil(vocabularyData.length / perPage);
        let paginationHTML = '';

        if (currentPage > 1) {
            paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
        }

        paginationHTML += `<span>Page ${currentPage} of ${totalPages}</span>`;

        if (currentPage < totalPages) {
            paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
        }

        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');
        paginationContainer.innerHTML = paginationHTML;

        document.body.appendChild(paginationContainer);
    }

    // Change the current page
    window.changePage = function(page) {
        if (page >= 1 && page <= Math.ceil(vocabularyData.length / perPage)) {
            currentPage = page;
            renderPage(currentPage);
        }
    };
});
