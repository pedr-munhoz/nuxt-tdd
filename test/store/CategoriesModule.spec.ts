import { mutations } from '@/store/categories';
import { Category } from '@/models/category';

const { SET_LIST } = mutations;
const { RESET_LIST } = mutations;

const emptyList: Category[] = [];
const filledList: Category[] = [new Category(), new Category(), new Category()];

describe('Categories $store module', () => {
  it('Sets the list of categories', () => {
    const state = { list: emptyList };

    SET_LIST(state, filledList);

    expect(state.list).toEqual(filledList);
  });

  it('Resets the list of categories', () => {
    const state = { list: filledList };

    RESET_LIST(state);

    expect(state.list).toEqual(emptyList);
  });
});
