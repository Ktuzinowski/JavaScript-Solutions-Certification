function rot13(str) {
    str = str.toLowerCase();
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    function replacer(word) {
      return word
        .split('')
        .map(x => alphabet.indexOf(x) >= 13 ? alphabet[13-(26-alphabet.indexOf(x))] : alphabet[alphabet.indexOf(x) + 13])
        .join('')
        .toUpperCase(); 
    }
    return str.replace(/[a-z]+/g,replacer)
  }
  
  console.log(rot13("SERR PBQR PNZC"));