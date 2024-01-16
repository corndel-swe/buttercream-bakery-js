import { jest } from '@jest/globals'
import fs from 'fs/promises'
import { readBakeryInfo } from '../src/utils/fileIo'

const uri = new URL('../src/data/bakery-info.json', import.meta.url)

describe('Exercise 2(a): Read bakery info', () => {
  let expected
  let actual

  beforeAll(async () => {
    expected = JSON.parse(await fs.readFile(uri, 'utf-8'))
    actual = await readBakeryInfo()
  })

  it('returns an object', () => {
    expect(typeof actual).toBe('object')
  })

  it('returns the contents of bakery-info.json', () => {
    expect(actual).toEqual(expected)
  })
})
