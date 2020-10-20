import { createLocalVue, mount } from '@vue/test-utils';
import CategoryModal from '@/components/CategoryModal';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify;

let wrapper = null;
let nameField = null;
let descriptionField = null;
let confirmButton = null;

const title = 'Category';
const category = {
  name: 'Games',
  description: 'Eletronic games and acessories',
};

const build = () => {
  const wrapper = mount(CategoryModal, {
    localVue,
    vuetify,
  });

  return {
    wrapper,
    nameField: () => wrapper.find('#nameInput'),
    descriptionField: () => wrapper.find('#descriptionInput'),
    confirmButton: () => wrapper.find('#confirmButton'),
  };
};

beforeEach(() => {
  vuetify = new Vuetify();
  ({ wrapper, nameField, descriptionField, confirmButton } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('CategoryModal component', () => {
  it('Has a title', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Contains a name field', () => {
    expect(nameField().exists()).toBe(true);
  });

  it('Contains a description field', () => {
    expect(descriptionField().exists()).toBe(true);
  });

  it('Contains a confirm button', () => {
    expect(confirmButton().exists()).toBe(true);
  });

  it('Clicking the confirm button emitts an event', () => {
    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('The event returns a user object', async () => {
    await nameField().setValue(category.name);
    await descriptionField().setValue(category.description);

    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm[0][0]).toEqual(category);
  });
});
