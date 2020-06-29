<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <router-link slot="extra" :to="item.link">查看</router-link>Card content
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const DATA = [
  {
    title: 'Cron Tool',
    link: '/tools/cron'
  },
  {
    title: 'Title 2',
    link: ''
  },
  {
    title: 'Title 3',
    link: ''
  },
  {
    title: 'Title 4',
    link: ''
  }
];

@Component
export default class Home extends Vue {
  data = DATA;
}
</script>

<style></style>
