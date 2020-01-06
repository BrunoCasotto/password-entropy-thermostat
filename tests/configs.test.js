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

  test('A simple password greather than min length should result 0', () => {
    const config = {
      minLengthValue: 0,
      lengthValue: 0,
      hasNumberAndLetter: 0,
      hasSpecialChar: 1,
      capitalAndSmallChar: 0,
      sequenceAndPatterns: 0
    }

    PassEntropyThermostat.setWeight(config)
    const { value } = PassEntropyThermostat.measurePassword(minLenghtPassword)

    expect(value).toBe(0)
  })
})