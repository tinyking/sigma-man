import { CronState } from './types';
import { GetterTree } from 'vuex';
import { RootState } from '../types';

export const getters: GetterTree<CronState, RootState> = {
  fullCron(state: CronState): string {
    return `${state.second} ${state.minute} ${state.hour} ${state.day} ${state.month} ${state.week} ${state.year}`;
  }
};
