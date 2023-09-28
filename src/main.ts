
function checkPassword(password: string) {
  const greatherOrEqualThanEight = password.length >= 8
  const constainsUppercase = /[A-Z]/.test(password)
  const constainsLowercase = /[a-z]/.test(password)
  const constainsUnderscore = password.includes("_")
  const constainsNumber = /[0-9]/.test(password)

  return greatherOrEqualThanEight && constainsNumber && constainsUnderscore && constainsLowercase && constainsUppercase
}

export { checkPassword }
