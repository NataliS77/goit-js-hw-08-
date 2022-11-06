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
player.setCurrentTime(30.456).then(function(seconds) {
   // console.log(setCurrentTime)
})
  
// .catch(function(error) {
//    switch (error.name) {
//        case 'RangeError':
//            // the time was less than 0 or greater than the video’s duration
//            break;

//        default:
//            // some other error occurred
//            break;
//    }
// })
function onPlay(data) { 
    localStorage.setItem('key', JSON.stringify(data))
   }  
    console.log(localStorage);

    player.on('timeupdate', throttle(onPlay, 1000));
// player.setCurrentTime(Number(localStorage.getItem(key)))
