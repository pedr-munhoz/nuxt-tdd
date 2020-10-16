import { createLocalVue, mount } from '@vue/test-utils';
import DefaultLayout from '@/layouts/default';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify;

let wrapper = null;

const title = 'Nuxt - TDD';
const pages = ['/', '/categories', '/products'];

const build = () => {
  const wrapper = mount(DefaultLayout, {
    localVue,
    vuetify,
    stubs: ['nuxt', 'router-link'],
  });

  return {
    wrapper,
    navigationLinks: () => wrapper.findAll('.navigationListItem'),
  };
};

beforeEach(() => {
  vuetify = new Vuetify();
  ({ wrapper } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('DefaultLayout', () => {
  it('Has the appropriate title.', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Has links to the right number of pages.', () => {
    const { navigationLinks } = build();

    expect(navigationLinks().length).toBe(pages.length);
  });
});
