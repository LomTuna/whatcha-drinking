//var finBtn = document.querySelector('.finishQuiz')
//finBtn.addEventListener('click', Video)
//function Video() {
    
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
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
//    };