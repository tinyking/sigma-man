import { ActionTree } from 'vuex';
import { CronState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<CronState, RootState> = {
  initCron({ commit }) {
    let state: CronState = {
      second: '*',
      minute: '*',
      hour: '*',
      day: '*',
      month: '*',
      week: '*',
      year: '*'
    };

    commit('changeCron', state);
  }
};
