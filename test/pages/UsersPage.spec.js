import { shallowMount } from '@vue/test-utils';
import UsersPage from '@/pages/index';
import TablePresentation from '@/components/TablePresentation';

let wrapper = null;

const build = () => {
  const wrapper = shallowMount(UsersPage);

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

describe('UsersPage (index)', () => {
  it('Contains a TablePresentation component.', () => {
    const { TablePresentation } = build();

    expect(TablePresentation().exists()).toBe(true);
  });

  it('Set the appropriate title to the table component.', () => {
    const { TablePresentation } = build();

    expect(TablePresentation().vm.title).toEqual('Users');
  });
});
