function rot13(str) {
    var solved = "";
    for (let i=0;i<str.length;i++) {
      const asciiNum = str[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum < 78) {
        solved += String.fromCharCode(asciiNum + 13);
      } else if (asciiNum >= 78 && asciiNum <= 90) {
        solved += String.fromCharCode(asciiNum - 13)
      } else {
        solved += str[i];
      }
    }
    return solved;
  }
  
  console.log(rot13("SERR PBQR PNZC"));