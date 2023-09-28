import { checkPassword } from '../src/main';

describe('Password validator', () => {
  test("Correct password", () => {
    expect(checkPassword('Password_1')).toBe(true)
  })

  test('Short password', () => {
    expect(checkPassword('Pass_1')).toBe(false)
  })

  test('One uppercase', () => {
    expect(checkPassword('password_1')).toBe(false)
  })

  test("Upper Case", () => {
    expect(checkPassword('PASSWORD_1')).toBe(false)
  })
  test("Without underscore", () => {
    expect(checkPassword('PASSWORD1')).toBe(false)
  })

  test("Without number", () => {
    expect(checkPassword('PASSword_')).toBe(false)
  })

  test("Only numbers", () => {
    expect(checkPassword('012345678')).toBe(false)
  })
});

