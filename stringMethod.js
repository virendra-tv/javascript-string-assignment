//1.	Capitalizing Words
function ToUpperCase(str){
let new_str = "";
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i=0; i<=str.length-1;i++){
    let char=str[i];
    for (let j=0; j<=lower.length-1;j++){
        if(char===lower[j]){
            new_str=new_str+upper[j];
        }
    
    } 
}
return new_str;
}

//2.	Word Existence Check
function checkWord(str, ToSearch) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ToSearch) {
            return true; 
        }
    }
    return false; 
}


//3.	Word Occurrence Count
function checkOccurences(string, word) {
    return string.split(word).length - 1;
}

//4 Word Density Calculation



// 5 File Extension Extraction
function fileExtension(str){
    return str.split(".").pop();
}


//6.	Removing Whitespace
function removeWhitespace(text){
    text = text.trim();
    text = text.replace(/\s+/g, ' ');

    return text;
}
//7 Reversing Words
function reverseString(str){

    return str.split("").reverse().join("");
}
//Counting Vowels

function vowelString(str) {
    const reg = /[aeiou]/gi;
    var chars = str.match(reg);
    return {
        count: chars ? chars.length : 0, // Count of vowels
        vowels: chars ? chars.join(',') : "" // String of vowels joined by commas
    };
}


//9 String Palindrome Check
function palindromeString(str){
    const reversedStr = str.split("").reverse().join("");
    if(str === reversedStr){
        return "Palindrome";
    }
    else{
        return " Not Palindrome"
    }
}

// 10 String Truncation
function truncationString(str, maxLength){
    if (str.length > maxLength){
        return str.slice(0,maxLength)+ "...";
    }
    else{
        return str;
    }

}

//11.	String Masking
function maskingString(str) {
    var lastDigit = str.slice(-4);
    var masked_str = "******" + lastDigit;

    return masked_str;
}

//Email Validation
function emailValidation(str){
    var regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if (regex.test(str)) {
        return str;
    }
    else{
        return "error";
    }
}




export { ToUpperCase, checkWord , checkOccurences, fileExtension, removeWhitespace, reverseString ,vowelString ,palindromeString , truncationString , maskingString,emailValidation};

