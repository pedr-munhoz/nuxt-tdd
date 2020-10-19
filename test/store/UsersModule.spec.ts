import { mutations } from '@/store/users';
import { User } from '@/models/user';

const { SET_LIST } = mutations;
const { RESET_LIST } = mutations;

const emptyList: User[] = [];
const filledList: User[] = [new User(), new User(), new User()];

describe('User $store module', () => {
  it('Sets the list of users', () => {
    const state = { list: emptyList };

    SET_LIST(state, filledList);

    expect(state.list).toEqual(filledList);
  });

  it('Resets the list of users', () => {
    const state = { list: filledList };

    RESET_LIST(state);

    expect(state.list).toEqual(emptyList);
  });
});
