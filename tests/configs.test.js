import PassEntropyThermostat from './../src/index'
import {
  minLenghtPassword,
} from './password.mock'

describe('Password Entropy configs', () => {
  test('set weight parameter should be a method', () => {
    expect(typeof PassEntropyThermostat.setWeight).toBe('function')
  })

  test('set weight should throw error when config isnt a object', () => {
    expect(() => PassEntropyThermostat.setWeight()).toThrow()
    expect(() => PassEntropyThermostat.setWeight(null)).toThrow()
    expect(() => PassEntropyThermostat.setWeight('')).toThrow()
  })

  test('set weight should throw error when sum of configs is greather than 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 0,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    expect(() => PassEntropyThermostat.setWeight(config)).toThrow()
  })


  test('A simple password greather than min length should result 1', () => {
    const config = {
      minLengthValue: 1,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 0,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword(minLenghtPassword)

    expect(value).toBe(1)
  })

  test('A simple password using capital and small char should be 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 0,
      capitalAndSmallChar: 1,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword('CaSmall')

    expect(value).toBe(1)
  })

  test('A simple password no using sequence patterns should be 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 0,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 1
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword('nopattern')

    expect(value).toBe(1)
  })

  test('A simple password using special char should be 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 1,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword('$#')

    expect(value).toBe(1)
  })

  test('A simple password using number and letters should be 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 1,
      hasSpecialChar: 0,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword('a1')

    expect(value).toBe(1)
  })

  test('A simple password containing min length should be 1', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 1,
      hasNumberAndLetter: 0,
      hasSpecialChar: 0,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword(minLenghtPassword)

    expect(value).toBe(1)
  })

  test('A simple password containing min length should be 0.5', () => {
    const config = {
      minLengthValue: 0.5,
      lengthValue: 0,
      hasNumberAndLetter: 0.1,
      hasSpecialChar: 0.1,
      capitalAndSmallChar: 0.3,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword(minLenghtPassword)

    expect(value).toBe(0.5)
  })
})