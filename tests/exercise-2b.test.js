import { jest } from '@jest/globals'
import fs from 'fs/promises'
import { writeBakeryInfo } from '../src/utils/fileIo'

const uri = new URL('../src/data/bakery-info.json', import.meta.url)
const obj = { a: 1, b: 2, c: 3 }

describe('Exercise 2(b): Write bakery info', () => {
  let memo

  beforeAll(async () => {
    memo = await fs.readFile(uri)
  })

  afterAll(async () => {
    await fs.writeFile(uri, memo)
  })

  it('writes the given object to bakery-info.json', async () => {
    await writeBakeryInfo(obj)
    const actual = JSON.parse(await fs.readFile(uri))
    expect(actual).toEqual(obj)
  })
})
