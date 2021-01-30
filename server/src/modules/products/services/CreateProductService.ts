import { ICreateProduct } from '../dtos/IProductDTO';
import Product from '../infra/typeorm/entities/Product';
import { IProductsRepository } from '../repositories/IProductsRepository';

class CreateProductService {
  constructor(private productRepository: IProductsRepository) {}

  public async execute({
    quantity,
    cost,
    title,
  }: ICreateProduct): Promise<Product> {
    const product = await this.productRepository.CreateProduct({
      title,
      cost,
      quantity,
    });

    return product;
  }
}

export default CreateProductService;
