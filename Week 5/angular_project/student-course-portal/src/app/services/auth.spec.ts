import { AuthService } from './auth';

describe('AuthService', () => {
  it('should create an instance', () => {
    const service = new AuthService();

    expect(service).toBeTruthy();
  });
});