function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return; //stops function from runnin;
  audio.currentTime = 0; //rewinds to the start and allows us to spam audio
  audio.play();
  key.classList.add('playing');
}
window.addEventListener('keydown', playSound);

function removeTransition(e) {
  if (e.propertyName != 'transform') return; //skip if not a transform
  //'this' is equal to whatever gets called against it,
  // in this case, it is the event listener calling this, so the key
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
