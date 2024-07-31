document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.track');
    const startTrainBtn = document.getElementById('startTrainBtn');
    let trainInterval;
    let redLineInterval;

    function scheduleTrain() {
        if (trainInterval) clearInterval(trainInterval); // Clear previous interval
        trainInterval = setInterval(() => {
            tracks.forEach(track => {
                const trains = track.querySelectorAll('.train');
                trains.forEach(train => {
                    moveTrain(train, track);
                });
            });
        }, 5 * 60 * 1000); // Move every 5 minutes
    }

    function moveTrain(train, track) {
        const trackWidth = track.offsetWidth;
        const trainWidth = Math.floor(Math.random() * (trackWidth / 2)) + 50; // Random width between 50 and half the track width

        // Set the train width and start the animation
        train.style.width = `${trainWidth}px`;
        train.style.transition = 'none'; // Disable transition to set initial position
        train.style.transform = `translateX(-${trainWidth}px)`;

        // Trigger reflow to apply the transform immediately
        train.offsetHeight; 

        train.style.transition = `transform ${trackWidth / 200}s linear`; // Adjust duration based on track width
        train.style.transform = `translateX(${trackWidth}px)`;

        // Reset the train position and width after it leaves the track
        setTimeout(() => {
            train.style.width = '0';
            train.style.transform = `translateX(-100%)`;
        }, (trackWidth / 200) * 1000); // Match the animation duration
    }

    function moveRedLine() {
        tracks.forEach(track => {
            const trackWidth = track.offsetWidth;
            const redLine = track.querySelector('.red-line');
            let movedDistance = 0;
            
            // Calculate movement step based on 18% of track width
            const movementStep = trackWidth * 0.18;
            
            if (redLineInterval) clearInterval(redLineInterval); // Clear previous interval

            redLineInterval = setInterval(() => {
                movedDistance += movementStep;
                if (movedDistance >= trackWidth) {
                    movedDistance = 0; // Reset to start position if end is reached
                }
                redLine.style.transform = `translateX(${movedDistance}px)`;
            }, 15 * 60 * 1000); // Move every 15 minutes
        });
    }

    // Handle button click to start trains and red line movement
    startTrainBtn.addEventListener('click', () => {
        scheduleTrain();
        moveRedLine();
    });
});
