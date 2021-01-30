import { ICreateProduct } from '../dtos/IproductDTO';
import Product from '../infra/typeorm/entities/Product';

export interface IProductsRepository {
  CreateProduct(data: ICreateProduct): Promise<Product>;
}
