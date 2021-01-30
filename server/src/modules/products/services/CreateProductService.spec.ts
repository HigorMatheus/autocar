// import AppError from '@shared/errors/AppError';

import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';

import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', (): void => {
  beforeEach(async () => {
    fakeProductsRepository = new FakeProductsRepository();

    createProduct = new CreateProductService(fakeProductsRepository);
  });

  it('should de able to createProduct', async () => {
    const product = await createProduct.execute({
      title: 'Macbook',

      cost: '10.600',

      quantity: '25',
    });
    expect(product).toHaveProperty('id');
  });
});
