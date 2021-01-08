// import  {IUserTokensRepository} from '@modules/users/repositories/IUserTokensRepository';
// import { getRepository, Repository } from 'typeorm';
// import UserToken from '../entities/UserToken';

// class UserTokenRepository implements IUserTokensRepository {
//   private ormRepository: Repository<UserToken>;

//   constructor(){
//     this.ormRepository = getRepository(UserToken);
//   }

//   public async FindAnToken(token:string):Promise<UserToken| undefined> {
//    const tokenExists = await this.ormRepository.findOne({
//       where:{token }
//     })
//     return tokenExists
//   }

//   public async GenerateToken():Promise<UserToken> {},
// }

// export default UserTokenRepository;
