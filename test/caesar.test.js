// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar: False conditions",()=>{
        it("should return false if the shift is 0", ()=> {
            const text = "fhjh"
            expected = false;
            actual = caesar(text,0);
            expect(actual).to.equal(expected)
        });
        it("should return false if the shift is greater than 25", ()=> {
            const text = "fhjh"
            expected = false
            actual = caesar(text,43);
            expect(actual).to.equal(expected)
        });
        it("should return false if the shift is less than -25", ()=> {
            const text = "fhjh"
            expected = false
            actual = caesar(text,-43,true);
            expect(actual).to.equal(expected);
        });
        it("should return false if the shift is not given", ()=> {
            const text = "fhjh"
            expected = false
            actual = caesar(text);
            expect(actual).to.equal(expected);
        });
        
});


describe("caesar:Encoding",()=>{
        it("should encode each letter with shift value 3", ()=> {
            expected = 'wklqnixo';
            actual = caesar("thinkful", 3);
            expect(actual).to.equal(expected)
        });
        it("should encode each letter with shift value -3", ()=> {
            expected = 'qefkhcri';
            actual = caesar("thinkful", -3);
            expect(actual).to.equal(expected)
        });
        it("should encode even if original message is all UpperCase letters", ()=> {
            expected = "wklqnixo"
            actual = caesar("THINKFUL", 3, true);
            expect(actual).to.equal(expected)
})
        it("should keep spaces and special characters while encoding", ()=> {
            expected = 'bpqa qa i amkzmb umaaiom!';
            actual = caesar("This is a secret message!", 8);
            expect(actual).to.equal(expected)
        });
});

describe("caesar:Decoding",()=>{
        it("should decode each letter with shift value 3", ()=> {
            expected = "thinkful";
            actual = caesar('wklqnixo', 3, false);
            expect(actual).to.equal(expected)
        });
        it("should keep spaces and special characters while decoding", ()=> {
            expected = 'this is a secret message!';
            actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            expect(actual).to.equal(expected)
        });
});

