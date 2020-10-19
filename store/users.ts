import { User } from '@/models/user';

const list: User[] = [];

export const state = () => ({
  list,
});

export const getters = {
  get(state: any) {
    return state.list;
  },
};

export const mutations = {
  SET_LIST(state: any, data: User[]) {
    state.list = data;
  },
  RESET_LIST(state: any) {
    state.list = [];
  },
};
