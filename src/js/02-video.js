import Player from '@vimeo/player';

const player = new Player(document.getElementById('vimeo-player'));

player.on(
  'timeupdate',
  _.throttle(() => {
    player.getCurrentTime().then(time => {
      localStorage.setItem('videoplayer-current-time', time);
    });
  }, 1000)
);

player.on('play', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});
