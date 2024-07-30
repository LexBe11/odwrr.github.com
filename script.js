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
    document.getElementById('employees-only-btn').addEventListener('click', () => {
        const employeesSection = document.getElementById('employees-section');
        employeesSection.style.display = employeesSection.style.display === 'none' ? 'block' : 'none';
    });
});

function updateSignals(color) {
    // Get all signal circles
    const signalCircles = document.querySelectorAll('.signal-circle');
    signalCircles.forEach(circle => {
        circle.style.backgroundColor = color;
    });
}
