import { Category } from '@/models/category';

const category = new Category();

describe('CategoryModel', () => {
  it('Must contain a id: number', () => {
    expect(typeof category.id).toBe('number');
  });

  it('Must contain a name: string', () => {
    expect(typeof category.name).toBe('string');
  });

  it('Must contain a description: string', () => {
    expect(typeof category.description).toBe('string');
  });

  it('Must contain a status: boolean', () => {
    expect(typeof category.status).toBe('boolean');
  });
});
