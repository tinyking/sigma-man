import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './types';
import Vue from 'vue';
import cron from './cron/index';
import { user } from './user/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    user,
    cron
  }
};

export default new Vuex.Store<RootState>(store);
