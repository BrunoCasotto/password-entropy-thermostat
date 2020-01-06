
export const minLength = (password, length) => {
  return password.length >= length
}

export const hasNumber = (password) => {
  return password.search(/\d/) != -1
}

export const hasSpecialChar = (password) => {
  return password.search(/[!@#$%^&*(),.?":{}|<>]/) != -1
}

export const hasCapitalLetter =  (password) => {
  return password.search(/[A-Z]/) != -1
}

export const hasSmallLetter =  (password) => {
  return password.search(/[A-Z]/) != -1
}

export const hasLetter =  (password) => {
  return password.search(/[a-z, A-Z]/) != -1
}

export const containPatterns =  (password) => {
  const patterns = [
    'abc',
    'abcd',
    'abcde',
    '123',
    '1234',
    '12345',
    '123456',
    'qwe',
    'qwer',
    'asd',
    'asdf',
    'zxcv',
  ]

  let containPattern = false
  patterns.forEach(pattern => {
    if(password.search(pattern) !== -1) {
      containPattern = true
      return
    }
  })

  return containPattern
}
