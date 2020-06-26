<template>
  <a-card title="Cron Tool">
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="秒">
        <cron-second />
      </a-tab-pane>
      <a-tab-pane key="2" tab="分钟">
        <cron-minute />
      </a-tab-pane>
      <a-tab-pane key="3" tab="小时">
        <cron-hour />
      </a-tab-pane>
      <a-tab-pane key="4" tab="日">
        <cron-day />
      </a-tab-pane>
      <a-tab-pane key="5" tab="月">
        <cron-month />
      </a-tab-pane>
      <a-tab-pane key="6" tab="周">
        <cron-week />
      </a-tab-pane>
      <a-tab-pane key="7" tab="年">
        <cron-year />
      </a-tab-pane>
    </a-tabs>

    <a-divider />

    <div>
      <a-form layout="inline">
        <a-form-item label="Cron Expression">
          <a-input style="width:500px">
            <a-icon slot="addonAfter" type="copy" style="cursor: pointer;" />
          </a-input>
        </a-form-item>
      </a-form>
    </div>
  </a-card>
</template>
<script>
import CronSecond from '@/components/cron/Second';
import CronMinute from '@/components/cron/Minute';
import CronHour from '@/components/cron/Hour';
import CronDay from '@/components/cron/Day';
import CronMonth from '@/components/cron/Month';
import CronWeek from '@/components/cron/Week';
import CronYear from '@/components/cron/Year';

export default {
  name: 'CronView',
  components: {
    CronSecond,
    CronMinute,
    CronHour,
    CronDay,
    CronMonth,
    CronWeek,
    CronYear
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      //   this.$message.info(`Tabs change, current tab is ${key}`);
    }
  }
};
</script>
