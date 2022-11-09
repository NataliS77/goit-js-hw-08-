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
function onPlay(data) { 
    localStorage.setItem("key", data.seconds)
   }  
    console.log(localStorage);

    player.on('timeupdate', throttle(onPlay, 1000));

    const timeVideoData = localStorage.getItem('key');

    player.setCurrentTime(timeVideoData) || 0;


//     player.setCurrentTime(timeVideoData).then(function(seconds){ })
//      .catch(function(error){
//           switch(error.name){
//                case "RangerError":
//                     break;
//                     default:
//                          break;

//           }
//      })



