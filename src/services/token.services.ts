import jwt from 'jsonwebtoken';

// const { JWT_SECRET } = process.env;

class TokenService {
  private static readonly SECRET_KEY = 'sua_chave_secreta_aqui';

  public static generateToken(userId: string): string {
    const payload = { userId };
    return jwt.sign(payload, TokenService.SECRET_KEY);
  }
}

export default TokenService;
