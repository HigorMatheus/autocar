import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import { uuid } from 'uuidv4';
import { IUserTokensRepository } from '../IUserTokensRepository';

class FakeUserTokenRepository implements IUserTokensRepository {
  private usersToken: UserToken[] = [];

  public async GenerateToken(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    userToken.id = uuid();
    userToken.token = uuid();
    userToken.user_id = user_id;
    userToken.created_at = new Date();
    userToken.updated_at = new Date();

    this.usersToken.push(userToken);
    return userToken;
  }

  public async FindAnToken(token: string): Promise<UserToken | undefined> {
    const tokenIndex = this.usersToken.findIndex(
      userToken => userToken.token === token,
    );

    const existsToken = this.usersToken[tokenIndex];
    return existsToken;
  }
}

export default FakeUserTokenRepository;
