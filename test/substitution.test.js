// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution: False conditions",()=>{
        it("should return false if no input is provided", ()=> {
            expected = false;
            actual = substitution();
            expect(actual).to.equal(expected);
        });
        it("should return false if the input is not a string", ()=> {
            const text = 3435;
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
        it("should return false while decoding if the number of characters of alphabet is fewer than 26.", ()=> {
            const text = "thinkful";
            const alphabet = "rukswafln"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
          it("should return false if the alphabet contains dublicate characters", () => {
            const text = "welcome";
            const alphabet = "xoyxoygrukgruglnthdjpzibev"
            expected = false;
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });
                  
});

describe("substitution:Encoding",()=>{
        it("should encode a string of letters substituting with new alphabet", ()=> {
            const text = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            expected = "jrufscpw";
            actual = substitution(text, alphabet);
            expect(actual).to.equal(expected);
        });
        it("should encode even if input is all uppercase letters", () => {
            expected = "jrufscpw"
            actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")
            expect(actual).to.equal(expected);
          })
        it("should maintain spaces in encoded messages and handle uppercase letters ", ()=> {
            const text = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            expected = "elp xhm xf mbymwwmfj dne";
            actual = substitution(text,alphabet);
            expect(actual).to.equal(expected);
        });        
             
});

describe("substitution:Decoding",()=>{
        it("should decode a string of random alphabet to a string of letters", ()=> {
            const text = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            expected = "thinkful";
            actual = substitution(text,alphabet,0);
            expect(actual).to.equal(expected)
        });
        it("should decode special characters maintaining spaces", ()=> {
            const text = "yp y&ii$r&";;
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            expected = "my message";
            actual = substitution(text,alphabet,0);
            expect(actual).to.equal(expected)
        });
                
});