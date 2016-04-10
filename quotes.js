$( document ).ready(function() {
  generate();
  twitter();
  
  function generate(){
    var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.@Unknown","Because it's there.@George Mallory on climbing mountains","Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.@Winnie the Pooh's A-Z","For I know the plans that I have for you.@The Lord, Jer 29:11","The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins","Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown","The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein","We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot","One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb","It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN","Maps are a way of organizing wonder.@Edward Tufte","I have decided to make my life my argument.@Albert Schweitzer","Now it's a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking","Knowledge keeps about as well as fish.@Alfred North Whitehead","It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness","Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas","For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone, Gaudeamus Igitur"
];
  
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
var i=0;
    //console.log(saying);
  }
count=-1;
var flowers=function() { 
count++;
console.log(count);
var imgArray = new Array();

imgArray[0]= new Image();
imgArray[0].src = 'images/F1.gif';
imgArray[1]= new Image();
imgArray[1].src = 'images/F2.gif';
imgArray[2]= new Image();
imgArray[2].src = 'images/F3.gif';
imgArray[3]= new Image();
imgArray[3].src = 'images/F4.gif';
imgArray[4]= new Image();
imgArray[4].src = 'images/F5.gif';
imgArray[5]= new Image();
imgArray[5].src = 'images/F6.gif';
imgArray[6]= new Image();
imgArray[6].src = 'images/F7.gif';
imgArray[7]= new Image();
imgArray[7].src = 'images/F8.gif';
imgArray[8]= new Image();
imgArray[8].src = 'images/F9.gif';
imgArray[9]= new Image();
imgArray[9].src = 'images/F10.gif';
imgArray[10]= new Image();
imgArray[10].src = 'images/F11.gif';
imgArray[11]= new Image();
imgArray[11].src = 'images/F12.gif';
imgArray[12]= new Image();
imgArray[12].src = 'images/F13.gif';
imgArray[13]= new Image();
imgArray[13].src = 'images/F14.gif';
imgArray[14]= new Image();
imgArray[14].src = 'images/F15.gif';
imgArray[15]= new Image();
imgArray[15].src = 'images/F16.gif';
imgArray[16]= new Image();
imgArray[16].src = 'images/F17.gif';
imgArray[17]= new Image();
imgArray[17].src = 'images/F18.gif';
imgArray[18]= new Image();
imgArray[18].src = 'images/F19.gif';
imgArray[19]= new Image();
imgArray[19].src = 'images/F20.gif';
imgArray[20]= new Image();
imgArray[20].src = 'images/F21.gif';
imgArray[21]= new Image();
imgArray[21].src = 'images/F22.gif';
imgArray[22]= new Image();
imgArray[22].src = 'images/F23.gif';
imgArray[23]= new Image();
imgArray[23].src = 'images/F24.gif';
imgArray[24]= new Image();
imgArray[24].src = 'images/F25.gif';

for(i=0;i<imgArray.length - count;i++){
 $('.imgFlower').attr('src',imgArray[i].src);
   if(count===24){
    count=count-24;
   }
     
}

  
}

  function twitter(){

  var twitterQuote=quoteAuthor;
  var tweetLink='http://twitter.com/home?status= ' +encodeURIComponent(twitterQuote);
  window.open(tweetLink,'_blank');
}

  
$(".button").on( "click", function() {


    generate();
    flowers();
});  


$(".tweet").on( "click", function() {
    twitter();
});

});



 

   