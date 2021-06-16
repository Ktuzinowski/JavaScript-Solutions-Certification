function palindrome(str) {
    str = str.replace(/\s|_|\.|,|\/|-|:|\(/g,'');
    str = str.split('').map(elem => elem.toLowerCase()).join('');
    var newstr = "";
    for (let i=str.length-1;i>-1;i--) {
      newstr += str[i];
    }
    newstr = newstr.split('').map(elem => elem.toLowerCase()).join('');
    console.log(newstr);
    console.log(str);
    return newstr === str ? true : false;
  }
  
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"))