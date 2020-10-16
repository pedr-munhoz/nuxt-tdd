import { shallowMount } from '@vue/test-utils';
import CategoriesPage from '@/pages/categories';
import TablePresentation from '@/components/TablePresentation';

let wrapper = null;

const build = () => {
  const wrapper = shallowMount(CategoriesPage);

  return {
    wrapper,
    TablePresentation: () => wrapper.findComponent(TablePresentation),
  };
};

beforeEach(() => {
  ({ wrapper } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('CategoriesPage (index)', () => {
  it('Contains a TablePresentation component.', () => {
    const { TablePresentation } = build();

    expect(TablePresentation().exists()).toBe(true);
  });

  it('Set the appropriate title to the table component.', () => {
    const { TablePresentation } = build();

    expect(TablePresentation().vm.title).toEqual('Categories');
  });
});
