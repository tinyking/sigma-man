import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { UserState } from './types';

export const actions: ActionTree<UserState, RootState> = {
  fetchData({ commit }): void {
    const userInfo: UserState = {
      firstName: 'Heelo',
      lastName: 'workd',
      mobile: 'fds'
    };

    commit('saveUserInfo', userInfo);
  }
};
