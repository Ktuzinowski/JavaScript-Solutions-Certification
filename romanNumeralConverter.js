function convertToRoman(num) {
    const letters = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1}
    var string = "";
    for (var elem in letters) {
      while (letters[elem] <= num) {
        num -= letters[elem];
        string += elem;
      }
    }
   return string;
  }
  
  console.log(convertToRoman(36));