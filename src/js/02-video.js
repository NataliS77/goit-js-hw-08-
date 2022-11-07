import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player)

const iframe = document.querySelector('iframe')
const player = new Player(iframe)
const key = "videoplayer-current-time"

player.on('play', function() {
   console.log('played the video!');
 });
    
player.getVideoTitle().then(function(title) {
     console.log('title:', title);
   
});

player.setCurrentTime(localStorage.getItem('key') || 0);

function onPlay(data) { 
    localStorage.setItem('key', JSON.stringify(data))
   }  
    console.log(localStorage);

    player.on('timeupdate', throttle(onPlay, 1000));

