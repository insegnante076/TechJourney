// Function to load and display the vocabulary from the CSV file
function loadVocabulary() {
    fetch('../vocabulary.csv')
        .then(response => response.text())
        .then(csvData => {
            const vocabularyList = parseCSV(csvData);
            const vocabularyContainer = document.querySelector('#vocabulary-list');
            
            vocabularyList.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${item.term}:</strong> ${item.description}`;
                vocabularyContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading vocabulary:', error));
}

// Function to parse the CSV data into an array of objects
function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const vocabularyList = [];
    
    // Skip the header row
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(',');
        if (cells.length === 2) {
            vocabularyList.push({
                term: cells[0].trim(),
                description: cells[1].trim()
            });
        }
    }
    
    return vocabularyList;
}

window.onload = function() {
    loadVocabulary();
};