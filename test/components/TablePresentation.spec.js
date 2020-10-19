import { createLocalVue, mount } from '@vue/test-utils';
import TablePresentation from '@/components/TablePresentation';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify;
let wrapper = null;

const title = 'Test';
const headers = [
  { title: 'Id', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Status', value: 'status' },
];
const items = [
  { id: '5', name: 'Marcus', status: true },
  { id: '7', name: 'Mary', status: true },
  { id: '9', name: 'John', status: false },
  { id: '14', name: 'Liz', status: true },
];
const modal = 'UserModal';

const build = () => {
  const wrapper = mount(TablePresentation, {
    localVue,
    vuetify,
    propsData: { title, headers, items, modal },
  });

  return {
    wrapper,
    dataTable: () => wrapper.find('.v-data-table'),
    modalButton: () => wrapper.find('#modalButton'),
  };
};

beforeEach(() => {
  vuetify = new Vuetify();
  ({ wrapper } = build());
});

afterEach(() => {
  wrapper.destroy();
});

describe('TablePresentation component', () => {
  it('Recieves a title prop', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('Contains a data table', () => {
    const { dataTable } = build();

    expect(dataTable().exists()).toBe(true);
  });

  it('Table Headers are recieved via props correctly', () => {
    const { dataTable } = build();

    expect(dataTable().vm.headers).toEqual(headers);
  });

  it('Table Items are recieved via props correctly', () => {
    const { dataTable } = build();

    expect(dataTable().vm.items).toEqual(items);
  });

  it('Has a activating button to call the creation modal', () => {
    const { wrapper, modalButton } = build();

    modalButton().trigger('click');

    expect(wrapper.emitted().activateModal).toBeTruthy();
  });
});
