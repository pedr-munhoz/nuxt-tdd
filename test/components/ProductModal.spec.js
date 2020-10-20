import { createLocalVue, mount } from '@vue/test-utils';
import ProductModal from '@/components/ProductModal';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify;

let wrapper = null;
let nameField = null;
let descriptionField = null;
let priceField = null;
let imageField = null;
let confirmButton = null;

const title = 'Product';
const product = {
  name: 'TV',
  description: 'A television',
  price: '1500',
  image: 'link',
};

const build = () => {
  const wrapper = mount(ProductModal, {
    localVue,
    vuetify,
  });

  return {
    wrapper,
    nameField: () => wrapper.find('#nameInput'),
    descriptionField: () => wrapper.find('#descriptionInput'),
    priceField: () => wrapper.find('#priceInput'),
    imageField: () => wrapper.find('#imageInput'),
    confirmButton: () => wrapper.find('#confirmButton'),
  };
};

beforeEach(() => {
  vuetify = new Vuetify();
  ({
    wrapper,
    nameField,
    descriptionField,
    priceField,
    imageField,
    confirmButton,
  } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProductModal component', () => {
  it('Has a title', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Contains a name field', () => {
    expect(nameField().exists()).toBe(true);
  });

  it('Contains a description field', () => {
    expect(descriptionField().exists()).toBe(true);
  });

  it('Contains a price field', () => {
    expect(priceField().exists()).toBe(true);
  });

  it('Contains a image field', () => {
    expect(imageField().exists()).toBe(true);
  });

  it('Contains a confirm button', () => {
    expect(confirmButton().exists()).toBe(true);
  });

  it('Clicking the confirm button emitts an event', () => {
    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm).toBeTruthy();
  });

  it('The event returns object containing the expected input', async () => {
    await nameField().setValue(product.name);
    await descriptionField().setValue(product.description);
    await priceField().setValue(product.price);
    await imageField().setValue(product.image);

    confirmButton().trigger('click');

    expect(wrapper.emitted().confirm[0]).toContainEqual(product);
  });
});
