import { Category } from '@/models/category';

const list: Category[] = [];

export const state = () => ({
  list,
});

export const getters = {
  get(state: any) {
    return state.list;
  },
};

export const mutations = {
  SET_LIST(state: any, data: Category[]) {
    state.list = data;
  },
  RESET_LIST(state: any) {
    state.list = [];
  },
};
