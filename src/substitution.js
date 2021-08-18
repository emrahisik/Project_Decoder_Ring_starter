// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //create an array of letters
  const cipher = ["a","b","c","d","e",
                  "f","g","h","i","j",
                  "k","l","m","n","o",
                  "p","q","r","s","t",
                  "u","v","w","x","y","z"]
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    // check input and alphabet types, alphabet length and if alphabet exists
    if( typeof(input) !== "string" || !alphabet || alphabet.length !==26 || typeof(alphabet) !== "string") return false;
    //create an alphabet array
    const alphabetArr = alphabet.split('');
    //check for dublicate elements
    const dublicate = alphabetArr.some((el, i) => alphabetArr.indexOf(el) !== i);
    if(dublicate) return false;
    
    
    let result = ""
    for(let i=0; i<input.length; i++){
      if (encode){
        //encode
        //loop through input, find the index in cipher array
        //use same index to pull the character from alphabet array and assign to a variable         
        input = input.toLowerCase();
        const codeLttr = alphabetArr[cipher.indexOf(input[i])]
        //if codeLttr exists add on to an empth string, else add a space
        if(codeLttr){
          result += codeLttr;
        }else{
          result += " ";
        }
      }else{
        //decode
        //use encode code, manipulate codeLttr
        input = input.toLowerCase();
        const codeLttr = cipher[alphabetArr.indexOf(input[i])]
        if(codeLttr){
          result += codeLttr;
        }else{
          result += " ";
        }
      }
    }
  return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
