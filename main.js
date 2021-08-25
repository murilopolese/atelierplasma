window.onload = function() {
  // Main element
  var main = document.querySelector('main')
  // Wrap letters in spans
  var menuItems = document.querySelectorAll('a')
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i]
    var content = item.innerText
    var newContent = ''
    for (var j = 0; j < content.length; j++) {
      newContent += "<span>"+content[j]+"</span>"
    }
    item.innerHTML = newContent
  }
  main.style.opacity = 1
  // Reveal letters
  function revealLetter(n) {
    return function() {
      var letter = letters[n]
      letter.style.opacity = 1
    }
  }
  var letters = document.querySelectorAll('a span')
  for (var i = 0; i < letters.length; i++) {
    setTimeout(revealLetter(i), i*100)
  }
}
