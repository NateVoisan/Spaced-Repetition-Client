import jwt from 'jsonwebtoken'

export function makeLoginToken() {
  const loginUser = {
    user_id: 1,
    name: 'Dunder Mifflin Admin',
  }
  return jwt.sign(loginUser, 'test-secret', {
    subject: 'test-username',
    expiresIn: '2m',
    algorithm: 'HS256',
  })
}
