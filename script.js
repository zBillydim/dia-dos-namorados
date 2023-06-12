
  function checkInput(event) {
    event.preventDefault();
    
    var inputText = document.getElementById("textbox").value;
    var errorMessage = "";
    var maxAttempts = 5; 
    var attemptCounter = parseInt(localStorage.getItem("attemptCounter")) || 0;
    
    if (attemptCounter >= maxAttempts) {
      localStorage.removeItem("attemptCounter");
      errorMessage = "Você excedeu o número máximo de tentativas. Por favor, tente novamente mais tarde.";
    }

    else if (inputText.toLowerCase() === "vontade de dar") {
      localStorage.removeItem("attemptCounter");
      window.location.href = "index.html";
    } 
    else if (inputText.toLowerCase() === "amor") {
      localStorage.removeItem("attemptCounter");
      window.location.href = "index.html";
    } 
    else {
      attemptCounter++; 
      localStorage.setItem("attemptCounter", attemptCounter); 
      switch (attemptCounter) {
        case 1:
          errorMessage = "Ok, essa vai passar..";
          break;
        case 2:
          errorMessage = "Segunda tentativa incorreta ta de sacanagem?";
          break;
        case 3:
          errorMessage = "Você só pode ta de brincadeira";
          break;
        case 4:
          errorMessage = "Meudeus do céu, você me ama mesmo?";
          break;
        default:
          errorMessage = "EU TE ODEIO!!!";
          break;
      }
    }
    
    if (errorMessage) {
      alert(errorMessage);
    }
  }

  const player = document.querySelector("#player");
  const musicName = document.querySelector("#musicName");
  const playPauseButton = document.querySelector("#playPauseButton");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");
  const currentTime = document.querySelector("#currentTime");
  const duration = document.querySelector("#duration");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  
  import songs from "./songs.js";
  
  const textButtonPlay = "<i class='bx bx-caret-right'></i>";
  const textButtonPause = "<i class='bx bx-pause'></i>";
  
  let index = 0;
  
  prevButton.onclick = () => prevNextMusic("prev");
  nextButton.onclick = () => prevNextMusic();
  
  playPauseButton.onclick = () => playPause();
  
  const playPause = () => {
    if (player.paused) {
      player.play();
      playPauseButton.innerHTML = textButtonPause;
    } else {
      player.pause();
      playPauseButton.innerHTML = textButtonPlay;
    }
  };
  
  player.ontimeupdate = () => updateTime();
  
  const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);
    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);
  
    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);
    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);
  
    const progressWidth = durationFormatted
      ? (player.currentTime / durationFormatted) * 100
      : 0;
  
    progress.style.width = progressWidth + "%";
  };
  
  const formatZero = (n) => (n < 10 ? "0" + n : n);
  
  progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
    player.currentTime = newTime;
  };
  
  const prevNextMusic = (type = "next") => {
    if ((type == "next" && index + 1 === songs.length) || type === "init") {
      index = 0;
    } else if (type == "prev" && index === 0) {
      index = songs.length;
    } else {
      index = type === "prev" && index ? index - 1 : index + 1;
    }
  
    player.src = songs[index].src;
    musicName.innerHTML = songs[index].name;
    if (type !== "init") playPause();
  
    updateTime();
  };
  
  prevNextMusic("init");

  var slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function showSlide(index) {
  var slides = document.getElementsByClassName("slide");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

window.addEventListener("load", function() {
    showSlide(slideIndex);
  });
