import Player from '@vimeo/player';
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
//  player.on('timeupdate', function(data) {
//        localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds))
//     });   
