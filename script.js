async function fetchTrainIds() {
    const response = await fetch('train-ids.html');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const ids = {};
    doc.querySelectorAll('h2').forEach(categoryHeader => {
        const category = categoryHeader.textContent.toLowerCase();
        ids[category] = [];
        const items = categoryHeader.nextElementSibling.querySelectorAll('li');
        items.forEach(item => ids[category].push(item.textContent.trim()));
    });

    return ids;
}

let trainIds = {};

async function initializeTrainIds() {
    trainIds = await fetchTrainIds();
}

function addTrain() {
    const id = document.getElementById('train-id').value.trim();
    const name = document.getElementById('train-name').value.trim();
    const category = document.getElementById('train-category').value.toLowerCase();

    if (id && name) {
        if (trainIds[category] && trainIds[category].includes(id)) {
            const trainList = document.getElementById('train-list');
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${id}, Name: ${name}, Category: ${category}`;
            trainList.appendChild(listItem);

            // Clear form inputs
            document.getElementById('train-id').value = '';
            document.getElementById('train-name').value = '';
            document.getElementById('train-category').value = 'intermodal'; // Default category
        } else {
            alert('Invalid Train ID for the selected category.');
        }
    } else {
        alert('Please enter both Train ID and Train Name.');
    }
}

function changeSignals() {
    // Change signal colors
    document.getElementById('signal1').style.backgroundColor = 'green';
    document.getElementById('signal2').style.backgroundColor = 'red';
}

function changeLines() {
    // Change track colors to represent different states
    document.getElementById('track1').style.backgroundColor = 'grey'; // Dead
    document.getElementById('track2').style.backgroundColor = 'green'; // Active
}

function toggleVisibility() {
    // Toggle visibility of the employees-only section
    const section = document.getElementById('employees-only');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

// Initialize train IDs on page load
window.onload = function() {
    initializeTrainIds();

    // Default track colors
    document.getElementById('track1').style.backgroundColor = 'green';
    document.getElementById('track2').style.backgroundColor = 'red';
    
    // Default signal colors
    document.getElementById('signal1').style.backgroundColor = 'grey'; // Dead
    document.getElementById('signal2').style.backgroundColor = 'grey'; // Dead
};
