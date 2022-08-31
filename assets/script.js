//  Variable Declarations
const coldCoff = document.querySelector('.coldCoffee');
const hotCoff = document.querySelector('.hotCoffee');
const coldNon = document.querySelector('.coldNonCoffee');
const hotNon = document.querySelector('.hotNonCoffee');

//  Linking YouTube iFrame API and loading videos
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      //  array with each video's info
      var playerInfoList = [
        {id:'player1',height:'300',width:'492.307692308',videoId:'An6LvWQuj_8'}, 
        {id:'player2',height:'300',width:'492.307692308',videoId:'KUEIayDKzOk'}, 
        {id:'player3',height:'300',width:'492.307692308',videoId:'PVv20GDSIeY'}, 
        {id:'player4',height:'300',width:'492.307692308',videoId:'q1da9oHD_6Q'},
      ]

      //  by using array.length it cycles through the arrays values, allowing me to load multiple videos with minimal code
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

//  Functions to unhide one coffee card and hide the rest depending on button clicked
coldCoff.addEventListener('click', Card1)
function Card1() {
  var C1 = document.getElementById('coldCoffee');
  C1.style.display = "inline-block";
  var C2 = document.getElementById('hotCoffee');
  C2.style.display = "none";
  var C3 = document.getElementById('ColdNonCoffee');
  C3.style.display = "none";
  var C4 = document.getElementById('HotNonCoffee');
  C4.style.display = "none";
  var Img = document.getElementById('coldCoffCircle');
  Img.style.display = "block";
}

hotCoff.addEventListener('click', Card2)
function Card2() {
  var C1 = document.getElementById('coldCoffee');
  C1.style.display = "none";
  var C2 = document.getElementById('hotCoffee');
  C2.style.display = "inline-block";
  var C3 = document.getElementById('ColdNonCoffee');
  C3.style.display = "none";
  var C4 = document.getElementById('HotNonCoffee');
  C4.style.display = "none"; 
  var Img = document.getElementById('hotCoffCircle');
  Img.style.display = "block"

}

coldNon.addEventListener('click', Card3)
function Card3() {
  var C1 = document.getElementById('coldCoffee');
  C1.style.display = "none";
  var C2 = document.getElementById('hotCoffee');
  C2.style.display = "none";
  var C3 = document.getElementById('ColdNonCoffee');
  C3.style.display = "inline-block";
  var C4 = document.getElementById('HotNonCoffee');
  C4.style.display = "none";
  var Img = document.getElementById('coldNonCoffCircle');
  Img.style.display = "block";
}

hotNon.addEventListener('click', Card4)
function Card4() {
  var C1 = document.getElementById('coldCoffee');
  C1.style.display = "none";  
  var C2 = document.getElementById('hotCoffee');
  C2.style.display = "none";  
  var C3 = document.getElementById('ColdNonCoffee');
  C3.style.display = "none";  
  var C4 = document.getElementById('HotNonCoffee');
  C4.style.display = "inline-block";
  var Img = document.getElementById('hotNonCoffCircle');
  Img.style.display = "block";
}
// Declare nav button as variable
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}