import { Product } from '@/models/product';

const list: Product[] = [];

export const state = () => ({
  list,
});

export const getters = {
  get(state: any) {
    return state.list;
  },
};

export const mutations = {
  SET_LIST(state: any, data: Product[]) {
    state.list = data;
  },
  RESET_LIST(state: any) {
    state.list = [];
  },
};
