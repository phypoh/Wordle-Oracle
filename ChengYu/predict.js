// Link: https://www.powerlanguage.co.uk/wordle/

var wordlist = [""]
// UNFINISHED

// Na()
function getDateDifference(e, a) {
  var s = new Date(e)
  , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.floor(t / 864e5)
}

// Ha
var baseDate = new Date(2022,0,27,0,0,0,0);

// Ga()
function callGetDateDifference(todaysDate) {
  return getDateDifference(baseDate, todaysDate)
}

// Da()
function getWordOfTheDay(today) {
  var a, s = callGetDateDifference(today);
  return a = s % wordlist.length,
    wordlist[a]
}
// e.today
var today = new Date();
today.setDate(today.getDate()+1)
console.log(getWordOfTheDay(today))
