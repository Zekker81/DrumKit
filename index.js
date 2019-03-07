var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var key = this.innerHTML;
    getSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keypress", function(event) {
  getSound(event.key);
  buttonAnimation(event.key);
});

function getSound(key) {
  switch (key) {
    case "w":
      var audio;
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(buttonPressed) {
  var btn = document.querySelector("." + buttonPressed);
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
  }, 100);
}
