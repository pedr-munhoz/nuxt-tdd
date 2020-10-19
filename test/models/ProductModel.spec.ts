import { Product } from '@/models/product';

const product = new Product();

describe('ProductModel', () => {
  it('Must contain a id: number', () => {
    expect(typeof product.id).toBe('number');
  });

  it('Must contain a name: string', () => {
    expect(typeof product.name).toBe('string');
  });

  it('Must contain a description: string', () => {
    expect(typeof product.description).toBe('string');
  });

  it('Must contain a price: number', () => {
    expect(typeof product.price).toBe('number');
  });

  it('Must contain a status: boolean', () => {
    expect(typeof product.status).toBe('boolean');
  });

  it('Must contain a image: number', () => {
    expect(typeof product.image).toBe('string');
  });
});
