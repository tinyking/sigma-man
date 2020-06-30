import { CronState } from './types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<CronState> = {
  changeSecond(state: CronState, second: string) {
    state.second = second;
  },
  changeMinute(state: CronState, minute: string) {
    state.minute = minute;
  },
  changeHour(state: CronState, hour: string) {
    state.hour = hour;
  },
  changeDay(state: CronState, day: string) {
    state.day = day;
  },
  changeMonth(state: CronState, month: string) {
    state.month = month;
  },
  changeWeek(state: CronState, week: string) {
    state.week = week;
  },
  changeYear(state: CronState, year: string) {
    state.year = year;
  },
  changeCron(state: CronState, payload: CronState) {
    state = Object.assign({}, payload);
  }
};
