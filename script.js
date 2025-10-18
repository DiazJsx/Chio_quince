 function updateCountdown() {
            const targetDate = new Date('2025-11-22T20:00:00').getTime();
            
            function update() {
                const now = new Date().getTime();
                const difference = targetDate - now;

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;

                if (difference < 0) {
                    clearInterval(interval);
                    document.querySelector('.countdown-container').innerHTML = '<h2 class="countdown-title">¡El gran día ha llegado! 🎉</h2>';
                }
            }

            update();
            const interval = setInterval(update, 1000);
        }

        updateCountdown();