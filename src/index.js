class PassEntropyThermostat {
  measurePassword(password) {
    return 0.8
  }
}

module.exports = new PassEntropyThermostat()