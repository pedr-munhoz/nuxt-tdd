import { shallowMount } from '@vue/test-utils';
import LoginPage from '@/pages/login';

let wrapper = null;

const title = 'Login';

const build = () => {
  const wrapper = shallowMount(LoginPage);

  return {
    wrapper,
    emailField: () => wrapper.find('#emailInput'),
    passwordField: () => wrapper.find('#passwordInput'),
    loginButton: () => wrapper.find('#loginButton'),
  };
};

beforeEach(() => {
  ({ wrapper } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('LoginPage', () => {
  it('Contains a title', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Contains a email text field', () => {
    const { emailField } = build();

    expect(emailField().exists()).toBe(true);
  });

  it('Contains a password text field', () => {
    const { passwordField } = build();

    expect(passwordField().exists()).toBe(true);
  });

  it('Contains a login button', () => {
    const { loginButton } = build();

    expect(loginButton().exists()).toBe(true);
  });
});
