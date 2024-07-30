document.addEventListener('DOMContentLoaded', () => {
    // Signal Button Handling
    const signalButtons = document.querySelectorAll('.signal-button');
    signalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            updateSignals(color);
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
        alert('Train started!');
        // Implement train start logic here
    });
});

function updateSignals(color) {
    // Get all signal circles
    const signalCircles = document.querySelectorAll('.signal-circle');
    signalCircles.forEach(circle => {
        circle.style.backgroundColor = color;
    });
}
