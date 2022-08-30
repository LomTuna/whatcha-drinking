const coldCoff = document.querySelector('.coldCoffee')
coldCoff.addEventListener('click', Video1)
function Video1() {

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'rel': 0
          },
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }

      function playVideo() {
        player.playVideo();
      }

      function stopVideo() {
        player.stopVideo();

      function getPlayerState() {
        return player.getPlayerState();
      }
    }
};

var hotCoff = document.querySelector('.hotCoffee')
hotCoff.addEventListener('click', Video2)
function Video2() {
    
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player2', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'rel': 0
          },
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }

      function playVideo() {
        player.playVideo();
      }

      function stopVideo() {
        player.stopVideo();

      function getPlayerState() {
        return player.getPlayerState();
      }
    }
    };
