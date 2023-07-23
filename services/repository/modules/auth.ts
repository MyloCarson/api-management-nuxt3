import HttpRepository from '..';
import { ICreateAccountInput, ICreateAccountResponse, ILoginInput, ILoginResponse } from 'types';

class AuthModule extends HttpRepository {
  private RESOURCE = '/auth';

  async login(credentials: ILoginInput): Promise<ILoginResponse> {
    const res = await this.call<ILoginResponse>('POST', `${this.RESOURCE}/login`, credentials);
    return res;
  }

  async create(account: ICreateAccountInput): Promise<ICreateAccountResponse> {
    const res = await this.call<ICreateAccountResponse>('POST', `${this.RESOURCE}/register`, account);
    return res;
  }
}

export default AuthModule;
