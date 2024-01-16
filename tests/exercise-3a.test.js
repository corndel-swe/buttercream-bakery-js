import { jest } from '@jest/globals'
import fs from 'fs/promises'
import { writeDiaryEntry } from '../src/utils/fileIo'

describe('Exercise 3(a): Error Handling in writeDiaryEntry', () => {
  let consoleSpy

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
    jest.restoreAllMocks() // Restore all mocks
  })

  it('logs an error if writing to the file fails', async () => {
    jest
      .spyOn(fs, 'writeFile')
      .mockRejectedValue(new Error('Failed to write to file'))

    await writeDiaryEntry('Some text') // Make sure to await this call

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error))
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
