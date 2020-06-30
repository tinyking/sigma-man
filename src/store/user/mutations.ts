import { MutationTree } from 'vuex';
import { UserState } from './types';

export const mutations: MutationTree<UserState> = {
  changeMobile(state: UserState, mobile: string) {
    state.mobile = mobile;
  },
  saveUserInfo(state: UserState, userInfo: UserState) {
    state = Object.assign(state, userInfo);
  }
};
