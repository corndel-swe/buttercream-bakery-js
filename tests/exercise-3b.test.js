import { jest } from '@jest/globals'
import { writeBakeryInfo } from '../src/utils/fileIo'

describe('Exercise 3(b): Handle no owner error in writeBakeryInfo', () => {
  it('throws an error if bakeryData does not contain an "owner" key', async () => {
    const bakeryDataWithoutOwner = {
      name: 'Sweet Treats',
      location: 'Main Street'
    }

    // Async function errors should be tested with a promise rejection
    await expect(writeBakeryInfo(bakeryDataWithoutOwner)).rejects.toThrow(
      'Owner is required'
    )
  })
})
