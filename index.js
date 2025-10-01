        // DOM Elements
        let timerDisplay = document.getElementById('timer');
        let startStopBtn = document.getElementById('startStopBtn');
        let resetBtn = document.getElementById('resetBtn');
        
        // Variables to track time and state
        let isRunning = false;
        let intervalId = null;
        let time = 0; // Time in seconds

        // Format time to HH:MM:SS
        function formatTime(seconds) {
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;
            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        // Update the timer display
        function updateTimer() {
            time++;
            timerDisplay.textContent = formatTime(time);
        }

        // Event Listeners to start/stop the timer
        startStopBtn.addEventListener('click', () => {
            if (!isRunning) {
                intervalId = setInterval(updateTimer, 1000);
                startStopBtn.textContent = 'Stop';
                startStopBtn.style.backgroundColor = 'rgba(255, 255, 0, 0.87)';
                startStopBtn.addEventListener('mouseover', () => {
                    startStopBtn.style.backgroundColor = 'rgba(221, 221, 14, 0.87)';
                });
                startStopBtn.addEventListener('mouseout', () => {
                    startStopBtn.style.backgroundColor = 'rgba(255, 255, 0, 0.87)';
                });
                isRunning = true;
            } else {
                clearInterval(intervalId);
                startStopBtn.textContent = 'Start';
                startStopBtn.style.backgroundColor = '#4CAF50';
                startStopBtn.addEventListener('mouseover', () => {
                    startStopBtn.style.backgroundColor = '#054708';
                });
                startStopBtn.addEventListener('mouseout', () => {
                    startStopBtn.style.backgroundColor = '#4CAF50';
                });
                isRunning = false;
            }
        });

        // Event Listeners to reset the timer
        resetBtn.addEventListener('click', () => {
            clearInterval(intervalId);
            time = 0;
            timerDisplay.textContent = '00:00:00';
            startStopBtn.textContent = 'Start';
            startStopBtn.style.backgroundColor = '#4CAF50';
            startStopBtn.addEventListener('mouseover', () => {
                startStopBtn.style.backgroundColor = '#054708';
            });
            startStopBtn.addEventListener('mouseout', () => {
                startStopBtn.style.backgroundColor = '#4CAF50';
            });
            isRunning = false;
        });
    