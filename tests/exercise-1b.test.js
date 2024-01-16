import { jest } from '@jest/globals'
import fs from 'fs/promises'
import { writeDiaryEntry } from '../src/utils/fileIo'

const uri = new URL('../src/data/diary-entry.txt', import.meta.url)
const txt = 'Ask Mary Berry!'

describe('Exercise 1(b): Write a diary entry', () => {
  let memo

  beforeAll(async () => {
    memo = await fs.readFile(uri)
  })

  afterAll(async () => {
    await fs.writeFile(uri, memo)
  })

  it('writes the given string to diary-entry.txt', async () => {
    await writeDiaryEntry(txt)
    const actual = await fs.readFile(uri, 'utf-8')
    expect(actual).toEqual(txt)
  })
})
