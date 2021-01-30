import ICreateProduct from '@modules/products/dtos/IProductDTO';
import Product from '@modules/products/infra/typeorm/entities/Product';
import { uuid } from 'uuidv4';
import IProductsRepository from '../IProductsRepository';

class FakeProductsRepository implements IProductsRepository {
  private productsRepository: Product[] = [];

  public async ListProducts(): Promise<Product[] | []> {
    return this.productsRepository;
  }

  public async CreateProduct({
    cost,
    title,
    quantity,
  }: ICreateProduct): Promise<Product> {
    const product = {
      id: uuid(),
      title,
      cost,
      quantity,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.productsRepository.push(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    return product;
  }
}

export default FakeProductsRepository;
