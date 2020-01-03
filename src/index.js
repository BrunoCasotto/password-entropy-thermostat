class PassEntropyThermostat {
  measurePassword(password) {
    if(!password || typeof password !== 'string' || password.length < 1) {
      throw 'password is required'
    }

    return 0.8
  }
}

module.exports = new PassEntropyThermostat()