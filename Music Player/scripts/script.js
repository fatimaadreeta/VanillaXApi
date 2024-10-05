let audio = document.getElementById("audio-file");
let playbar = document.getElementById("playbar");
let toggle = document.getElementById("playicon");
let progress = document.getElementById("progress-time");
let interval;


function pause_play() {
  if (toggle.classList.contains("fa-play")) {
    audio.play();
    toggle.classList.remove("fa-play");
    toggle.classList.add("fa-pause");
  }
  else {
    audio.pause();
    toggle.classList.remove("fa-pause");
    toggle.classList.add("fa-play");
  }
}

audio.addEventListener("play", () => {
  interval = setInterval(() => {
    playbar.value = audio.currentTime;
    updateProgress();
  }, 250)
});

audio.addEventListener("pause", () => {
  clearInterval(interval);
});



function updateProgress() {
  let min = Math.trunc(audio.currentTime/60)
  let sec = Math.trunc(audio.currentTime - min*60)
  progress.innerHTML = min + ":" + sec
  if (sec < 10) {
    progress.innerHTML = min + ":0" + sec
  }
}



//<i class="fa-solid fa-pause"></i>
//<i class="fa-solid fa-play">