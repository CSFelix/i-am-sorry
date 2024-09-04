function forgive() {
  alert("UHUL! :)");
  location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function teleportButton(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

function dodge(btn) {
  btn.style.position = "absolute";
  btn.style.bottom = teleportButton(10, 90);
  btn.style.left = teleportButton(10, 90);
}