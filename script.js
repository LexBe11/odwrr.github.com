document.addEventListener('DOMContentLoaded', () => {
    // Signal Button Handling
    const signalButtons = document.querySelectorAll('.signal-button');
    signalButtons.forEach(button => {
        button.addEventListener('click', () => {
            openSignalModal(button);
        });
    });

    // Toggle Employees Only Section
    const employeesOnlyBtn = document.getElementById('employees-only-btn');
    const employeesSection = document.getElementById('employees-section');
    employeesOnlyBtn.addEventListener('click', () => {
        if (employeesSection.style.display === 'none') {
            employeesSection.style.display = 'block';
        } else {
            employeesSection.style.display = 'none';
        }
    });

    // Start Train Button
    const startTrainBtn = document.getElementById('start-train-btn');
    startTrainBtn.addEventListener('click', () => {
        const track = prompt('Enter the track number:');
        const type = prompt('Enter the train type (intermodal, coal, grain hopper, etc.):');
        const id = prompt('Enter the train ID:');
        if (track && type && id) {
            alert(`Train Started:\nTrack: ${track}\nType: ${type}\nID: ${id}`);
            // Implement train start logic here
        }
    });

    // Add Train Button
    const addTrainBtn = document.getElementById('add-train-btn');
    addTrainBtn.addEventListener('click', () => {
        const id = prompt('Enter the train ID:');
        if (id) {
            alert(`Train Added with ID: ${id}`);
            // Implement add train logic here
        }
    });

    // Modal Close Handling
    const modalCloseBtn = document.getElementById('modal-close-btn');
    modalCloseBtn.addEventListener('click', () => {
        closeSignalModal();
    });

    // Modal Signal Button Handling
    const modalSignalButtons = document.querySelectorAll('.modal-signal-button');
    modalSignalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            updateSignals(color);
            closeSignalModal();
        });
    });
});

function openSignalModal(button) {
    const color = button.getAttribute('data-color');
    document.getElementById('modal').style.display = 'flex';
