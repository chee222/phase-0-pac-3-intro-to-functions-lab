const { spyOn } = require("expect");

//root.js
function shout(string) {
    return string. toUpperCase();
  }
 
  console.log ("HELLO!".toUpperCase()); 
  // 'HELLO!'

function whisper(string) {
    return string. toLowerCase();
  }

  console.log ("Hello!".toLowerCase()); 
  // 'Hello!'

function logShout(string) {
  console.log(string. toUpperCase());
}

function logWhisper(string) {
  console.log(string. toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  var cantUnswer = "I can\'t hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I would love to!";
  if(string. toLowerCase(string) === string) {
    return cantUnswer;
  }
  else if(string.toUpperCase(string) === string) {
    return yesUnswer;
  }
  else if("Let's have dinner together!" === string) {
    return lovUnswer;
  }
}