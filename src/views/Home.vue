<template>
  <div>
    {{ fullName }}

    {{ mobile }}
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.title">
          <router-link slot="extra" :to="item.link">查看</router-link>
          <div>Card content</div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Mutation, Getter, State } from 'vuex-class';

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

const namespace = 'user';

@Component
export default class Home extends Vue {
  data = DATA;

  @Action('fetchData', { namespace }) public fetchData!: Function;
  @Mutation('changeMobile', { namespace }) public changeMobile!: Function;
  @Getter('fullName', { namespace }) public fullName!: string;
  @State('firstName', { namespace }) public firstName!: string;
  @State('mobile', { namespace }) public mobile!: string;

  public created() {
    this.fetchData();
    this.changeMobile('123456');
    setTimeout(() => {
      this.fetchData();
    }, 10000);
    // this.$store.dispatch('fetchData');

    console.log(this.$store.dispatch('fetchData'));
  }
}
</script>

<style></style>
