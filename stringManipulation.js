import { ToUpperCase, checkWord, checkOccurences, fileExtension, removeWhitespace, reverseString, vowelString , palindromeString , truncationString ,maskingString, emailValidation } from './ToUpperCase.js';
//1.	Capitalizing Words
let string = "virendra";
let UpperCasestring = ToUpperCase(string);
console.log(UpperCasestring);//VIRENDRA

//2.	Word Existence Check
let str = "virendra";
let ToSearch = "n";
let word= checkWord(string, ToSearch);
console.log(word);//True

//3.	Word Occurrence Count
const text="hey   my   name   is   virendra    pal"; 
const count=checkOccurences(text," my"); 
console.log(count);// 1

//4 Word Density Calculation

// 5 File Extension Extraction
const fileName = "virendra.png";
const fileExtend = fileExtension(fileName);
console.log(fileExtend);

//6.	Removing Whitespace
let exampletext = " heyy how    are   you   virendrs   ";
let cleanedtext = removeWhitespace(exampletext);
console.log(cleanedtext);

// 7 Reversing Words

const strOne = "virendra pal";
const reversed = reverseString(strOne);
console.log(reversed); 

//8 Counting Vowels
var result = vowelString("Virendra");
console.log(result);// 3

//9 String Palindrome Check
const strSecond = "Virendra";
const resultSecond = palindromeString(strSecond);
console.log(resultSecond);

//10 String Truncation
const orignalString = " hello how are you virendra pall";
const truncatedString = truncationString( orignalString, 12);
console.log (truncatedString)

//11.	String Masking
var strmask = "9111277366";
var masked = maskingString(strmask);
console.log(masked);

// 12 Email Validation
var strEamil = "virendrapal2205@gmail.com";
var validat = emailValidation(strEamil);
console.log(validat);