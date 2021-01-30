// import AppError from '@shared/errors/AppError';

import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
// import CreateProductService from './CreateProductService';

import ListProductsService from './ListProductsService';

let fakeProductsRepository: FakeProductsRepository;
let ListProducts: ListProductsService;
// let createProduct: CreateProductService;

describe('ListProducts', (): void => {
  beforeEach(
    async (): Promise<void> => {
      fakeProductsRepository = new FakeProductsRepository();

      // createProduct = new CreateProductService(fakeProductsRepository);

      ListProducts = new ListProductsService(fakeProductsRepository);
    },
  );

  it('should de able to ListProducts', async () => {
    const products = await ListProducts.execute();

    expect(products).toEqual([]);
  });
});
