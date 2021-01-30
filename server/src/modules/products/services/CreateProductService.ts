import { inject, injectable } from 'tsyringe';
import ICreateProduct from '../dtos/IProductDTO';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    quantity,
    cost,
    title,
  }: ICreateProduct): Promise<Product> {
    const product = await this.productsRepository.CreateProduct({
      title,
      cost,
      quantity,
    });

    const productCreated = this.productsRepository.save(product);

    return productCreated;
  }
}

export default CreateProductService;
