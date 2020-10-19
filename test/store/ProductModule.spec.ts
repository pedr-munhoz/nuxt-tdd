import { mutations } from '@/store/products';
import { Product } from '@/models/product';

const { SET_LIST } = mutations;
const { RESET_LIST } = mutations;

const emptyList: Product[] = [];
const filledList: Product[] = [new Product(), new Product(), new Product()];

describe('Products $store module', () => {
  it('Sets the list of products', () => {
    const state = { list: emptyList };

    SET_LIST(state, filledList);

    expect(state.list).toEqual(filledList);
  });

  it('Resets the list of products', () => {
    const state = { list: filledList };

    RESET_LIST(state);

    expect(state.list).toEqual(emptyList);
  });
});
