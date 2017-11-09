var lettersArray = [];
var lettersArray2 = [];

var leapYear = function(str) {
  var words = str.split(" ");
  words.forEach(function(word) {
    var checker = 0;
    // debugger;
    caps = word[0];
    var letters = word.split("");
    letters.forEach(function(letter) {
      checker +=1;
      // debugger;
      var wordLength = letters.length;
      if (letter != letters[0]) {
        lettersArray.push(letter);
      }
      console.log(checker);
      if (checker === wordLength) {
        lettersArray.push(caps);
        lettersArray.push("ay ");
      }
    });
    // var letters = res2.split("");
    // lettersArray.push(letters)

    // letters.forEach(function(letter) {
    //   if (letter === lettersArray[0]) {
    //     letter.toUpperCase();
    //     lettersArray2.push(letter)
    //   } else {
    //     lettersArray2.push(letter)
    //   }
    // });
    // if (letters === lettersArray[1]) {
    //   letters = letters.toUpperCase();
    // }

  });
  return lettersArray.join("");
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var str = $("input#year").val();
    var result = leapYear(str);
    $("#result").text(result);
  });
});
