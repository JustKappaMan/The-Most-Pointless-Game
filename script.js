(() => {
  const scoreboard = document.querySelector('span'),
        button = document.querySelector('div'),
        sounds = document.querySelectorAll('audio');

  let score = 0;

  button.addEventListener('click', () => {
    scoreboard.innerText = `Score: ${++score}`;
    
    switch (score) {
      case 25:
        sounds[0].play();
        break;
      case 50:
        sounds[1].play();
        break;
      case 100:
        sounds[2].play();
        scoreboard.innerText = `Score: ${score = 0}`;
        break;
    }
  });
})();