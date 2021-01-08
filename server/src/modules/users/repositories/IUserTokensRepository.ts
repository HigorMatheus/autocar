import UserToken from '../infra/typeorm/entities/UserToken';

export interface IUserTokensRepository {
  GenerateToken(user_id: string): Promise<UserToken>;
  FindAnToken(token: string): Promise<UserToken | undefined>;
}
