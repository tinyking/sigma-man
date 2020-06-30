import { CronState } from './types';
import { Module } from 'vuex';
import { RootState } from '../types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const state: CronState = {
  second: '*',
  minute: '*',
  hour: '*',
  day: '*',
  month: '*',
  week: '*',
  year: '*'
};

const namespaced = true;

const cron: Module<CronState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};

export default cron;
