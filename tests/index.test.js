import faker from 'faker'
import PassEntropyThermostat from './../src/index'

describe('Password Entropy basics', () => {
  test('measurePassword method', () => {
    expect(typeof PassEntropyThermostat.measurePassword).toBe('function')
  })

  test('measurePassword method returns a integer result', () => {
    const password = faker.random.word()
    const passwordLevel = PassEntropyThermostat.measurePassword(password)

    expect(typeof passwordLevel).toBe('object')
    expect(typeof passwordLevel.value).toBe('number')
  })

  test('measurePassword method returns a throw when password is null or empty', () => {
    expect(() => PassEntropyThermostat.measurePassword(null)).toThrow()
    expect(() => PassEntropyThermostat.measurePassword(1)).toThrow()
    expect(() => PassEntropyThermostat.measurePassword('')).toThrow()
  })
})