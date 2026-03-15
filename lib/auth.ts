const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123';

export function signToken(payload: any) {
  // Return a simple mock token that starts with a recognizable prefix
  return `mock-token-${payload.username}-${Date.now()}`;
}

export function verifyToken(token: string) {
  try {
    // Just check if it starts with the mock prefix
    if (token.startsWith('mock-token-')) {
      return { username: 'admin' };
    }
    return null;
  } catch (error) {
    return null;
  }
}
