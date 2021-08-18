// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // check if shift exists or not equal 0 or  less than -25 or greater than +25
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false ;
    //lowercase the input and convert it to an array 
    //loop through each letter and convert to its own character code.
    let cipherArr = input.toLowerCase().split('').map((letters) => {
      return letters.charCodeAt();
   });
  
    let nums = cipherArr.map((num) => {
      //encode
      if(encode){
      //if num is between 96 and 123 add shift to num else keep num as it is
      if (num > 96 && num < 123){
       num += shift;
        //if shifted num is greater than 122 subtract number of letters = 26
        //if shifted num is less than 97 add number of letters = 26, else return num
       if (num >= 123 ) return num -= 26;
       else if (num <= 96) return num += 26;
       else return num }
      else return num
   }
      //decode 
      //use encoding code, just subtract shift from num
      else{
     if (num > 96 && num < 123){
       num -= shift;
       if (num >= 123 ) return num -= 26;
       else if (num <= 96) return num += 26;
       else return num }
      else return num
   }});
   
    let convert =  String.fromCharCode(...nums)
    
    return convert.toString() 
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
