let currentPosition = 0;
let movingLine = document.getElementById('moving-line');
let notifications = document.getElementById('notifications');
let interval;
let trainStarted = false; // Track if the train has started

// Existing functions

function startTrain() {
    clearInterval(interval); // Clear any previous intervals
    currentPosition = 0;
    movingLine.style.width = '5%';
    notifications.innerHTML = '';
    handleTrainMovement(); // Start the movement process
    interval = setInterval(updateTrainPosition, 30000); // Update every 30 seconds
}

function updateTrainPosition() {
    if (!trainStarted) return; // Ensure the train has started before updating position

    currentPosition += 5; // Move the line by 5%
    if (currentPosition >= 125) {
        currentPosition = 125; // Cap at 125%
        clearInterval(interval); // Stop when reaching end
        notifications.innerHTML += '<div>Train has reached the end of the subdivision.</div>';
        return;
    }
    movingLine.style.width = currentPosition + '%';
    
    // Trigger crossing signals and notifications
    if (currentPosition % 10 === 0) {
        setOffCrossingSignal(currentPosition);
    }
    
    // Notify every 5% movement
    if (currentPosition % 5 === 0) {
        sendNotification(`Crossing ${getCrossingId(currentPosition)} has been set off.`);
    }
}

function setOffCrossingSignal(position) {
    // Function to handle crossing signal logic
    sendNotification(`Crossing ${getCrossingId(position)} has been set off.`);
}

function getCrossingId(position) {
    // Generate crossing IDs based on position
    let prefix = position < 100 ? '522A' : '128B';
    return `${prefix}${position}`;
}

function sendNotification(message) {
    notifications.innerHTML += `<div>${message}</div>`;
}

// New functions

function handleTrainMovement() {
    setTimeout(() => {
        sendNotification('Train has started moving. Yellow signal will be on for 2 minutes.');
        movingLine.style.backgroundColor = 'yellow';
        trainStarted = true;

        setTimeout(() => {
            sendNotification('Yellow signal changed to Red. Train is now moving.');
            movingLine.style.backgroundColor = 'red';
        }, 120000); // After 2 minutes
    }, 0);
}

// Function to toggle signals and change track colors
function toggleSignals() {
    const signalsMenu = document.getElementById('signals-menu');
    signalsMenu.style.display = signalsMenu.style.display === 'none' ? 'block' : 'none';
}

// Function to update track colors
function changeTrackColor(color) {
    const track = document.getElementById('track');
    track.style.backgroundColor = color;
}

// Event listeners for buttons
document.getElementById('toggle-signals-btn').addEventListener('click', toggleSignals);

const signalButtons = document.querySelectorAll('.signal-button');
signalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeTrackColor(color);
    });
});

document.getElementById('employees-only-btn').addEventListener('click', () => {
    const employeesSection = document.getElementById('employees-section');
    employeesSection.style.display = employeesSection.style.display === 'none' ? 'block' : 'none';
});
