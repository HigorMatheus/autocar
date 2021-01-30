import ICreateProduct from '../dtos/IProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductsRepository {
  ListProducts(): Promise<Product[] | []>;
  CreateProduct(data: ICreateProduct): Promise<Product>;
  save(product: Product): Promise<Product>;
}
