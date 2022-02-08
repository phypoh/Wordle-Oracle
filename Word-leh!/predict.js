var wordlist = ["dunno", "tekan", "stylo", "shiok", "walao", "chope", "kiasu", "bojio", "relak", "lepak", "aiyah", "cheem", "kacau", "dowan", "skali", "arrow", "tapao", "nabeh", "steam", "balik", "sibeh", "tuang", "manja", "kilat", "whack", "habis", "suaku", "shack", "tulan", "donch", "siong", "teruk", "bodoh", "cabut", "rabak", "buaya", "koyak", "macam", "tiong", "hoseh", "mafan", "tekan", "salah", "ngeow", "solid", "aiyoh", "botak", "drama", "boleh", "rojak", "tahan", "kenah", "gabra", "makan"]

// Na()
function getDateDifference(e, a) {
    var s = new Date(e)
    , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.floor(t / 864e5)
  }
  
  // Ha
  var baseDate = new Date(2022,00,30,0,0,0,0);
  
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
  