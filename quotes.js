$( document ).ready(function() {
  generate();
  
function generate(){
   var quotes = ["When they discover the center of the universe, a lot of people will be disappointed to discover they are not it. @Bernard Bailey","If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.@Rene Descartes(1596 -1650)","If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.@Rene Descartes (1596 - 1650)","Love truth, and pardon error.@Voltaire (1694 - 1778)","Art, like morality, consists of drawing the line somewhere.@G. K. Chesterton (1874 - 1936)","Well, spring sprang. We've had our state of grace and our little gift of sanctioned madness, courtesy of Mother Nature. Thanks, Gaia. Much obliged. I guess it's time to get back to that daily routine of living we like to call normal.@David Assael, Northern Exposure, Spring Break, 1991","We are none of us infallible--not even the youngest of us.@W. H. Thompson","My passions were all gathered together like fingers that made a fist. Drive is considered aggression today; I knew it then as purpose.@Bette Davis (1908 - 1989), The Lonely Life, 1962","His lack of education is more than compensated for by his keenly developed moral bankruptcy.@Woody Allen (1935 - )","Each handicap is like a hurdle in a steeplechase, and when you ride up to it, if you throw your heart over, the horse will go along, too.@Lawrence Bixby","We could have bought a small yacht with what we spent on our dog an dall the things he destroyed. Then again, how many yachts wait by the door all day for your return?@John Grogan, Marley and Me, 2005","Honesty pays, but it doesn't seem to pay enough to suit some people.@Kin Hubbard (1868 - 1930)","Traditions are the guideposts driven deep in our subconscious minds. The most powerful ones are those we can't even describe, aren't even aware of.@Ellen Goodman (1941 - )","Courage is the art of being the only one who knows you're scared to death.@Harold Wilson (1916 - 1995)","Never miss a chance to keep your mouth shut.@Robert Newton Peck","For three days after death hair and fingernails continue to grow but phone calls taper off.@Johnny Carson (1925 - 2005)","Nothing is as irritating as the fellow who chats pleasantly while he's overcharging you.@Kin Hubbard (1868 - 1930)","There is absolutely no inevitability as long as there is a willingness to contemplate what is happening.@Marshall McLuhan (1911 - 1980)","We didn't think much in the air corps of a fellow who wangled a cushy job out of his C.O. by buttering him up. It was hard for me to believe that God thought much of a man who tried to wangle salvation by fulsome flattery. I should have thought the worship most pleasing to him was to do your best according to your lights.@W. Somerset Maugham (1874 - 1965)","What are riches - grandeur - health itself, to the luxury of a pure conscience, the health of the soul; - and what the sufferings of poverty, disappointment, despair - to the anguish of an afflicted one@Ann Radcliffe (1764 - 1823)","While the fates permit, live happily; life speeds on with hurried step, and with winged days the wheel of the headlong year is turned.@Seneca (5 BC - 65 AD)","To find fulfillment...don't exist with life - embrace it.@Jim Beggs","Anger is a signal, and one worth listening to.@Harriet Lerner","If the fans don't wanna come out to the ballpark, no one can stop 'em.@Yogi Berra (1925 - )","Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.@Benjamin Franklin (1706 - 1790)","Only the hand that erases can write the true thing.@Meister Eckhart"
];


    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
var count=-1;
var flowers=function() { 
count++;
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



 

   
