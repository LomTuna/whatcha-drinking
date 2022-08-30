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

      //  array with each video's info //
      var playerInfoList = [{id:'player1',height:'390',width:'640',videoId:'M7lc1UVf-VE'}, {id:'player2',height:'390',width:'640',videoId:'M7lc1UVf-VE'}, {id:'player3',height:'390',width:'640',videoId:'M7lc1UVf-VE'}]

      function onYouTubeIframeAPIReady() {
        if(typeof playerInfoList === 'undefined')
          return;
        
        for(var i = 0; i < playerInfoList.length; i++) {
          var curplayer = createPlayer(playerInfoList[i]);
        }
      }
      function createPlayer(playerInfo) {
        return new YT.Player(playerInfo.id, {
          height: playerInfo.height,
          width: playerInfo.width,
          videoId: playerInfo.videoId,
          playerVars: {
            'rel':0
          }
        });
      }

//  Functions to unhide one YouTube video and hide the rest depending on button clicked  //

coldCoff.addEventListener('click', Video1)
function Video1() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  V1.style.display = "inline-block";
  V2.style.display = "none";
  V3.style.display = "none";
  V4.style.display = "none";
}

hotCoff.addEventListener('click', Video2)
function Video2() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  V1.style.display = "none";
  V2.style.display = "inline-block";
  V3.style.display = "none";
  V4.style.display = "none";
}

coldNon.addEventListener('click', Video3)
function Video3() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  V1.style.display = "none";
  V2.style.display = "none";
  V3.style.display = "inline-block";
  V4.style.display = "none";
}

hotNon.addEventListener('click', Video4)
function Video4() {
  var V1 = document.getElementById('player1');
  var V2 = document.getElementById('player2');
  var V3 = document.getElementById('player3');
  var V4 = document.getElementById('player4');
  V1.style.display = "none";
  V2.style.display = "none";
  V3.style.display = "none";
  V4.style.display = "inline-block";
}