lettersArray = [];
lettersArray2 = [];

var leapYear = function(str) {
  var words = str.split(" ");
  words.forEach(function(word) {
    debugger;
    caps = word[0].toUpperCase();
    var letters = word.split("");
    letters.forEach(function(letter) {
      debugger;
      var wordLength = letters.length - 1;
      console.log(wordLength);
      if (letter != letters[0]) {
        lettersArray.push(letter);
        console.log(lettersArray);
      }
      if (letter === letters[wordLength]) {
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
