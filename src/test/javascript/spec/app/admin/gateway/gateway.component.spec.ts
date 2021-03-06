import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import * as config from '@/shared/config/config';
import GatewayComponent from '@/admin/gateway/gateway.vue';
import GatewayClass from '@/admin/gateway/gateway.component';
import GatewayService from '@/admin/gateway/gateway.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('Gateway Component', () => {
  let wrapper: Wrapper<GatewayClass>;
  let comp: GatewayClass;

  beforeEach(() => {
    wrapper = shallowMount<GatewayClass>(GatewayComponent, { store, localVue, provide: { gatewayService: () => new GatewayService() } });
    comp = wrapper.vm;
  });

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
