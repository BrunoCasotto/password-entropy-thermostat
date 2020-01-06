import PassEntropyThermostat from './../src/index'
import {
  basicPassword,
  minLenghtPassword,
  numberPassword,
  specialNumberPassword,
  upperCasePassword,
} from './password.mock'

describe('Password Entropy logic', () => {
  // test('', () => {
  //   const basicPasswordLevel = PassEntropyThermostat.measurePassword(basicPassword)
  //   const minLenghtPasswordLevel = PassEntropyThermostat.measurePassword(minLenghtPassword)
  //   const numberPasswordLevel = PassEntropyThermostat.measurePassword(numberPassword)
  //   const specialNumberPasswordLevel = PassEntropyThermostat.measurePassword(specialNumberPassword)
  //   const upperCasePasswordLevel = PassEntropyThermostat.measurePassword(upperCasePassword)
  //   const bestPassword = PassEntropyThermostat.measurePassword('sC$&w1ybVa49')


  //   console.log(basicPassword, basicPasswordLevel.value)
  //   console.log(minLenghtPassword, minLenghtPasswordLevel.value)
  //   console.log(numberPassword, numberPasswordLevel.value)
  //   console.log(specialNumberPassword, specialNumberPasswordLevel.value)
  //   console.log(upperCasePassword, upperCasePasswordLevel.value)
  //   console.log('sC$&w1ybVa49', bestPassword.value)
  // })

  test('measurePassword method should return different results when length is enough', () => {
    const basicPasswordLevel = PassEntropyThermostat.measurePassword(basicPassword)
    const minLenghtPasswordLevel = PassEntropyThermostat.measurePassword(minLenghtPassword)

    expect(basicPasswordLevel.value).toBeLessThan(minLenghtPasswordLevel.value)
  })

  test('measurePassword password contains number should be greather than not', () => {
    const minLenghtPasswordLevel = PassEntropyThermostat.measurePassword(minLenghtPassword)
    const numberPasswordLevel = PassEntropyThermostat.measurePassword(numberPassword)

    expect(minLenghtPasswordLevel.value).toBeLessThan(numberPasswordLevel.value)
  })

  test('measurePassword password contains especial char should be greather than not', () => {
    const numberPasswordLevel = PassEntropyThermostat.measurePassword(numberPassword)
    const specialNumberPasswordLevel = PassEntropyThermostat.measurePassword(specialNumberPassword)

    expect(numberPasswordLevel.value).toBeLessThan(specialNumberPasswordLevel.value)
  })

  test('measurePassword password contains upper case letters', () => {
    const specialNumberPasswordLevel = PassEntropyThermostat.measurePassword(specialNumberPassword)
    const upperCasePasswordLevel = PassEntropyThermostat.measurePassword(upperCasePassword)

    expect(specialNumberPasswordLevel.value).toBeLessThan(upperCasePasswordLevel.value)
  })

  test('measurePassword password contains number and letters to be greather than number or letters only', () => {
    const letterOnly = PassEntropyThermostat.measurePassword('pass')
    const numberOnly = PassEntropyThermostat.measurePassword('123')
    const letterAndNumber = PassEntropyThermostat.measurePassword('pass1')

    expect(letterOnly.value).toBeLessThan(letterAndNumber.value)
    expect(numberOnly.value).toBeLessThan(letterAndNumber.value)
  })

  test('measurePassword password contains sequence should be less value than not contains', () => {
    const sequencePasswordResult = PassEntropyThermostat.measurePassword('password123')
    const noSequencePasswordResult = PassEntropyThermostat.measurePassword('password145')

    expect(sequencePasswordResult.value).toBeLessThan(noSequencePasswordResult.value)
  })
})