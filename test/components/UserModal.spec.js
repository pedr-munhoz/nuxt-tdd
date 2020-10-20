import { createLocalVue, mount } from '@vue/test-utils';
import UserModal from '@/components/UserModal';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify;

let wrapper = null;
let nameField = null;
let emailField = null;
let genderField = null;
let confirmButton = null;

const title = 'User';
const user = {
  name: 'Mary',
  email: 'mary@test.com',
  gender: 'female',
};

const build = () => {
  const wrapper = mount(UserModal, {
    localVue,
    vuetify,
  });

  return {
    wrapper,
    nameField: () => wrapper.find('#nameInput'),
    emailField: () => wrapper.find('#emailInput'),
    genderField: () => wrapper.find('#genderInput'),
    confirmButton: () => wrapper.find('#confirmButton'),
  };
};

beforeEach(() => {
  vuetify = new Vuetify();
  ({ wrapper, nameField, emailField, genderField, confirmButton } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('UserModal component', () => {
  it('Has a title', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Contains a name text field', () => {
    expect(nameField().exists()).toBe(true);
  });

  it('Contains a email text field', () => {
    expect(emailField().exists()).toBe(true);
  });

  it('Contains a gender field', () => {
    expect(genderField().exists()).toBe(true);
  });

  it('Contains a confirm button', () => {
    expect(confirmButton().exists()).toBe(true);
  });

  it('Clicking the confirm button emitts an event', () => {
    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('The event returns object containing the expected input', async () => {
    await nameField().setValue(user.name);
    await emailField().setValue(user.email);
    await genderField().setValue(user.gender);

    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm[0]).toContainEqual(user);
  });
});
