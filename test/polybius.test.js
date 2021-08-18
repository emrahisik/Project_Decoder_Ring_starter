// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius: False conditions",()=>{
        it("should return false if no input is provided", ()=> {
            expected = false
            actual = polybius();
            expect(actual).to.equal(expected);
        });
        it("should return false if the input is not a string", ()=> {
            const text = 3435
            expected = false;
            actual = polybius(text);
            expect(actual).to.equal(expected)
        });
        it("should return false while decoding if the number of characters is odd.", ()=> {
            const text = "4567562"
            expected = false
            actual = polybius(text,0);
            expect(actual).to.equal(expected)
        });
          it("should return false if the input numbers do not match the numbers in the cipher object", () => {
            expected = false
            actual = polybius(16273849)
            expect(actual).to.equal(expected)
  });
        
});

describe("polybius:Encoding",()=>{
        it("should encode a string of letters to a string of numbers", ()=> {
            const text = "thinkful"
            expected = "4432423352125413";
            actual = polybius(text);
            expect(actual).to.equal(expected)
        });
        it("should encode uppercase letters, as well", ()=> {
            expected = "11213141";
            actual = polybius("ABCD");
            expect(actual).to.equal(expected);
        });        
        it("should encode a string with spaces", ()=> {
            const text = "Hello world"
            expected = '3251131343 2543241341';
            actual = polybius(text);
            expect(actual).to.equal(expected)
        });
        
});

describe("polybius:Decoding",()=>{
        it("should decode a string of numbers to a string of letters", ()=> {
            const text = "4432423352125413"
            expected = "thi/jnkful";
            actual = polybius(text,0);
            expect(actual).to.equal(expected)
        });
        it("should decode a string with spaces", ()=> {
            const text = '3251131343 2543241341'
            expected = 'hello world';
            actual = polybius(text,0);
            expect(actual).to.equal(expected)
        });
        
});