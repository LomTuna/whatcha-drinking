//  Variable Declarations //
const coldCoff = document.querySelector('.coldCoffee');
const hotCoff = document.querySelector('.hotCoffee');
const coldNon = document.querySelector('.coldNonCoffee');
const hotNon = document.querySelector('.hotNonCoffee');

// Linking YouTube iFrame API and loading videos //
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var playerInfoList = [{id:'player1',height:'390',width:'640',videoId:'M7lc1UVf-VE'}, {id:'player2',height:'390',width:'640',videoId:'M7lc1UVf-VE'}, {id:'player3',height:'390',width:'640',videoId:'M7lc1UVf-VE'}]

      function onYouTubeIframeAPIReady() {
        if(typeof playerInfoList === 'undefined')
          return;
        
        for(var i = 0; i < playerInfoList.length; i++) {
          var makePlayer = makePlayer(playerInfoList[i]);
        }
      }
      function makePlayer(playerInfo) {
        return new YT.Player(playerInfo.id, {
          height: playerInfo.height,
          width: playerInfo.width,
          videoId: playerInfo.videoId,
          playerVars: {
            'rel':0
          },
        });
      }

coldCoff.addEventListener('click', Video1)
function Video1() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  var V5 = document.getElementById('player5');
  var V6 = document.getElementById('player6');
  V1.style.display = "block";
  V2.style.display = "none";
  V3.style.display = "none";
  V4.style.display = "none";
  V5.style.display = "none";
  V6.style.display = "none";
}

hotCoff.addEventListener('click', Video2)
function Video2() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  var V5 = document.getElementById('player5');
  var V6 = document.getElementById('player6');
  V1.style.display = "none";
  V2.style.display = "block";
  V3.style.display = "none";
  V4.style.display = "none";
  V5.style.display = "none";
  V6.style.display = "none";
}