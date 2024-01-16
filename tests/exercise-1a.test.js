import { jest } from '@jest/globals'
import fs from 'fs/promises'
import { readDiaryEntry } from '../src/utils/fileIo'

const uri = new URL('../src/data/diary-entry.txt', import.meta.url)

describe('Exercise 1(a): Read a diary entry', () => {
  let expected
  let actual

  beforeAll(async () => {
    expected = await fs.readFile(uri, 'utf-8')
    actual = await readDiaryEntry()
  })

  it('returns a string', () => {
    expect(typeof actual).toEqual('string')
  })

  it('returns the contents of diary-entry.txt', () => {
    expect(actual).toEqual(expected)
  })
})
