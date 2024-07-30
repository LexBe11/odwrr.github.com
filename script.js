document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.track');

    function scheduleTrain() {
        setInterval(() => {
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

    scheduleTrain();
});
