let selectedSignal = null;

function openSignalMenu(signalId) {
    selectedSignal = signalId;
    document.getElementById('signal-menu').classList.remove('hidden');
}

function changeSignal(state) {
    if (!selectedSignal) return;
    const signal = document.getElementById(selectedSignal);
    
    switch (state) {
        case 'clear':
            signal.className = 'signal green';
            signal.textContent = 'Clear';
            break;
        case 'clear-to-stop':
            signal.className = 'signal red';
            signal.textContent = 'Clear to Stop';
            break;
        case 'stop':
            signal.className = 'signal red';
            signal.textContent = 'Stop';
            break;
        case 'slow':
            signal.className = 'signal yellow';
            signal.textContent = 'Slow';
            break;
        case 'clear-to-slow':
            signal.className = 'signal yellow';
            signal.textContent = 'Clear to Slow';
            break;
        case 'slow-down':
            signal.className = 'signal yellow';
            signal.textContent = 'Slow Down';
            break;
        default:
            signal.className = 'signal grey';
            signal.textContent = 'Dead';
            break;
    }
    
    document.getElementById('signal-menu').classList.add('hidden');
    selectedSignal = null;
}

function changeLines() {
    const track1 = document.getElementById('track1');
    const track2 = document.getElementById('track2');
    
    if (track1.style.backgroundColor === 'green') {
        track1.style.backgroundColor = 'grey';
    } else {
        track1.style.backgroundColor = 'green';
    }
    
    if (track2.style.backgroundColor === 'red') {
        track2.style.backgroundColor = 'grey';
    } else {
        track2.style.backgroundColor = 'red';
    }
}

function toggleVisibility() {
    const section = document.getElementById('employees-only');
    section.classList.toggle('hidden');
}

function addTrain() {
    const id = document.getElementById('train-id').value.trim();
    const name = document.getElementById('train-name').value.trim();
    const category = document.getElementById('train-category').value.trim();
    
    if (id && name && category) {
        console.log(`Train added: ID=${id}, Name=${name}, Category=${category}`);
        alert(`Train added: ID=${id}, Name=${name}, Category=${category}`);
    } else {
        alert('Please fill in all fields.');
    }
}
