/**
 * Games Workshop Coding Challenge 
 * Deadline: 12th May 2023
 * Author: Alfred Costello (atcostello1@gmail.com)
 * Time spent: ~ 2 hours
 */
import { keyWords, numberDictionary } from "./numberDictionary";

/**
 * Convert a written word number into it's numerical counterpart. 
 * @param str The written number to convert e.g. One thousand and twenty seven.
 * @returns A number representation of the input string.
 */
export const numeralToNumber = (str: string): number => {
  return convertWordArrayIntoNumbers(splitStringIntoWords(str));
};

/**
 * Normalise the input string to an expected format.
 * Removes all capitalisation, any use of "and", "-" or "," and then replaces any white space with a single space.
 * @param inputStr The written word representation of the number to sanitise
 * @returns The sanitised version of the input
 */
const sanitiseString = (inputStr: string): string => {
  let sanitisedString: string = inputStr;

  sanitisedString = sanitisedString.toLowerCase()// remove capitalisations.
  sanitisedString = sanitisedString.replace(new RegExp(`\\band\\b`, 'g'), " "); // remove only whole words of "and"
  sanitisedString = sanitisedString.replace("-", " "); // replace "-"
  sanitisedString = sanitisedString.replace(",", " "); // remove commas
  sanitisedString = sanitisedString.replace(/\s\s+/g, ' '); // replace any extra spaces, tabs, new lines with a single space.

  return sanitisedString
}

/**
 * Split written numbers into their parts.
 * @param str The written number to split e.g. One thousand and twenty seven.
 * @returns A string array containing each word of the written number without the "and" included.
 */
const splitStringIntoWords = (str: string): string[] => {
  let words: string[];

  str = sanitiseString(str);
  words = str.split(" "); // split written string into seperate words

  return words;
}

/**
 * Calculate the numerical values for an array of words.
 * @param arr The string array containing the seperated words for the numeral.
 * @returns The corresponding number to the input array.
 */
const convertWordArrayIntoNumbers = (arr: string[]): number => {
  const dict = numberDictionary;
  let total: number = 0;
  let multiple: number = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentValue: number = dict[arr[i]];

    // If the current item is a keyword, then calculate the total by multiplying the current keyword by the calculate multiple.
    // Otherwise, add current value to total.
    if (keyWords.includes(arr[i])) {
      total -= multiple; // remove multiple from total
      total += (dict[arr[i]] * multiple); // multiply

      // Calculate the 'multiple' to multiply the "key words" e.g. Two "thousand" becomes 2 x 1000 and twenty two "thousand" becomes 22 x 1000
      // Check that the next item is not a keyword, used to accomodate for styles such as "nine hundred thousand". 
      if (!keyWords.includes(arr[i + 1])) {

        // Check the current "key word" is not "hundred", so that the multiple is reset correctly. Accomodates for styles such as "Seven hundred and forty nine thousand"
        if (arr[i] !== "hundred") {
          multiple = 0;
        } else {
          multiple = total;
        }

      } else {
        multiple = dict[arr[i]] * multiple
      }
    } else {
      total += currentValue;
      multiple += currentValue;
    }
  }

  return total
}