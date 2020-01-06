import {
  minLength,
  hasNumber,
  hasSpecialChar,
  hasCapitalLetter,
  hasSmallLetter,
  hasLetter,
  containPatterns,
} from './basicRules'

class PassEntropyThermostat {
  constructor() {
    this.config = {
      minLength: 6
    }

    this.hasNumberAndLetter = 0.2
    this.minLengthWeight = 0.1
    this.patternsWeight = 0.1
    this.lengthWeight = 0.2
    this.especialCharWeight = 0.2
    this.capitalAndSmallChar = 0.2
  }

  /**
   * Method to calculate length value based on length wheigt(min: 0, max: minLength)
   */
  calculateLengthValue(password) {
    const passLength = password.length

    if(passLength < this.config.minLength) {
      return 0
    } else if (passLength == this.config.minLength) {
      return this.lengthWeight / 2
    } else {
      return this.lengthWeight
    }
  }

  /**
   * Method to calculate min length of word
   */
  calculateMinLengthValue(password) {
    const hasMinLength = minLength(password, 6)
    return hasMinLength ? this.minLengthWeight : 0
  }

  /**
   * calculate if numbers and letters togheter
   */
  calculateHasNumberValue(password) {
    const existNumber = hasNumber(password)
    const existLetter = hasLetter(password)

    if(existNumber && existLetter) {
      return this.hasNumberAndLetter
    }

    return 0
  }

  /**
   * calculate if has especial char on password
   */
  calculateHasSpecialChar(password) {
    const existNumber = hasSpecialChar(password)

    if(existNumber) {
      return this.especialCharWeight
    }

    return 0
  }

  /**
   * calculate if exists capital and small letters on password
   */
  calculateHasCapitalAndSmallLetters(password) {
    const capitalLetter = hasCapitalLetter(password)
    const smallLetter = hasSmallLetter(password)

    if (capitalLetter && smallLetter) {
      return this.capitalAndSmallChar
    }

    return 0
  }

  /**
   * calculate if exists patterns like char sequence
   */
  calculateContainPatterns(password) {
    const hasPatterns = containPatterns(password)

    if (hasPatterns) {
      return 0
    }

    return this.patternsWeight
  }

  calculateLevel(results) {
    let value = 0
    results.forEach(result => value = value + result.value)

    return value
  }

  getPasswordLevel(password) {
    const results = [
      {
        method: 'minLengthValue',
        value: this.calculateMinLengthValue(password)
      },
      {
        method: 'lengthValue',
        value: this.calculateLengthValue(password)
      },
      {
        method: 'hasNumberAndLetter',
        value: this.calculateHasNumberValue(password)
      },
      {
        method: 'hasSpecialChar',
        value: this.calculateHasSpecialChar(password)
      },
      {
        method: 'capitalAndSmallChar',
        value: this.calculateHasCapitalAndSmallLetters(password)
      },
      {
        method: 'sequenceAndPatterns',
        value: this.calculateContainPatterns(password)
      }
    ]

    const value = this.calculateLevel(results)

    return {
      results,
      value: parseFloat(value.toFixed(2))
    }
  }

  measurePassword(password) {
    if(!password || typeof password !== 'string' || password.length < 1) {
      throw 'password is required'
    }

    return this.getPasswordLevel(password)
  }
}

export default new PassEntropyThermostat()