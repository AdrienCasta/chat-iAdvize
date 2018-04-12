import Vue from 'vue';
import Vuex from 'vuex';

import message from './modules/message';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const storeOptions = {
  modules: {
    message,
  },
  strict: debug,
};

export default new Vuex.Store(storeOptions);
