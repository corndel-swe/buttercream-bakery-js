import fs from 'fs/promises'

/**
 * Exercise 1(a): Read a diary entry
 * @returns {string} - The contents of diary-entry.txt
 */
export async function readDiaryEntry() {
  const uri = new URL('../data/diary-entry.txt', import.meta.url)
  // code here
}

/**
 * Exercise 1(b): Write a diary entry
 * Overwrites diary-entry.txt with the value of diaryText
 * @param {string} diaryTxt
 * @returns {undefined}
 */
export async function writeDiaryEntry(diaryTxt) {
  // code here
}

/**
 * Exercise 2(a): Read bakery info
 * @returns {object} - The parsed contents of bakery-info.json
 */
export async function readBakeryInfo() {
  const uri = new URL('../data/bakery-info.json', import.meta.url)
  // code here
}

/**
 * Exercise 2(b): Write bakery info
 * Overwrites bakery-info.json with the stringified value of bakeryData
 * @param {object} bakeryData
 * @returns {undefined}
 */
export async function writeBakeryInfo(bakeryData) {
  // code here
}

/*
Exercise 3(a): Add try/catch blocks

Add a try/catch block to the writeDiaryEntry function in
Exercise 1(b).

In case there is an error, log it with console.error
*/

/*
Exercise 3(b): Handle no owner error

Add more granular error handling to the writeBakeryInfo function.

If bakeryData does not contain an "owner" key, throw an error
with the message "Owner is required"
*/
