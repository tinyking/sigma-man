import {Component, Vue} from 'vue-property-decorator';

import { Mutation } from 'vuex-class';

@Component
export class CronMixins extends Vue {
  type = 1;

  @Mutation('changeSecond', { namespace: 'cron' })
  public changeSecond!: Function;
}