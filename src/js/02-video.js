import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('currentTime');
if (currentTime) {
  player.setCurrentTime(Number.parseFloat(currentTime));
}

player.on('timeupdate', data => {
  localStorage.setItem('currentTime', data.duration);
});
