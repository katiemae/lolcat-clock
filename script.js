var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
    var timeMessage = document.getElementById("timeEvent");
    var timeImage = document.getElementById("lolcat");

    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME...";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
    } else if (time > evening) {
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }

    timeMessage.innerText = messageText;
    timeImage.src = image;

    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }

        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };
showCurrentTime();
}
updateClock();
setInterval(updateClock, 1000);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
 
var partyEvent = function() {
   
   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundcolor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER!";
      partyTimeButton.style.backgroundcolor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener("click", partyEvent);