function countdown(targetDate) {
    const countDownDate = new Date(targetDate).getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60))/ 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerText = 'EXPIRED';
        }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
        
    }
    countdown('2025-01-01T00:00:00+04:00');
