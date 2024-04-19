import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));

const saveCurrentTime = () => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', time);
  });
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const resumePlayback = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime)).then(() => {
      player.play();
    });
  }
};

player.ready().then(resumePlayback);
