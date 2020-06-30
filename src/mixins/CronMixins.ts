import { Component, Vue } from 'vue-property-decorator';

import { Mutation } from 'vuex-class';

const TIMES: number[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59
];

const HOURS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

const DAYS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const MONTHS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const WEEKS: number[] = [1, 2, 3, 4, 5, 6, 7];

@Component
export class CronMixins extends Vue {
  type = 1;

  times = TIMES;
  hours = HOURS;
  days = DAYS;
  months = MONTHS;
  weeks = WEEKS;

  @Mutation('changeSecond', { namespace: 'cron' })
  public changeSecond!: Function;

  @Mutation('changeMinute', { namespace: 'cron' })
  public changeMinute!: Function;

  @Mutation('changeHour', { namespace: 'cron' })
  public changeHour!: Function;

  @Mutation('changeDay', { namespace: 'cron' })
  public changeDay!: Function;

  @Mutation('changeMonth', { namespace: 'cron' })
  public changeMonth!: Function;

  @Mutation('changeWeek', { namespace: 'cron' })
  public changeWeek!: Function;

  @Mutation('changeYear', { namespace: 'cron' })
  public changeYear!: Function;
}
