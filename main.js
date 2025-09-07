function playbg() {
  let song = document.getElementById("song");
  let container1 = document.getElementById("first");
  let btn = document.getElementById("btn");
  if (song.muted) {
    song.muted = false;
    song.play();
    container1.classList.add("rotate");
    container1.classList.remove("paused");
    btn.textContent = "Stop";
  }
  else {
    song.muted = true;
    btn.textContent = "Play"
    container1.classList.add("paused");
  }
}