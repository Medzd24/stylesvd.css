function showCountdown(seconds) {
      const countdown = document.getElementById("countdown");
      countdown.innerHTML = seconds;

      if (seconds === 0) {
        countdown.style.display = "none"; 
        showSkipButton(); 
      } else {
        setTimeout(() => showCountdown(seconds - 1), 1000);
      }
    }

    
    function showSkipButton() {
      const skipButton = document.getElementById("skip-button");
      skipButton.style.display = "block";
    }

    
    function skipAd() {
      const adContainer = document.getElementById("ad-container");
      adContainer.style.display = "none";
    }

    
    showCountdown(10);
