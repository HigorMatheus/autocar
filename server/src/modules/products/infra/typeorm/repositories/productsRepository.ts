import ICreateProduct from '@modules/products/dtos/IProductDTO';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import { getRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async ListProducts(): Promise<Product[] | []> {
    return this.ormRepository.find();
  }

  public async CreateProduct({
    title,
    cost,
    quantity,
  }: ICreateProduct): Promise<Product> {
    const productCreated = this.ormRepository.create({
      title,
      cost,
      quantity,
    });

    return productCreated;
  }

  public async save(product: Product): Promise<Product> {
    const productsave = this.ormRepository.save(product);

    return productsave;
  }
}

export default ProductsRepository;
