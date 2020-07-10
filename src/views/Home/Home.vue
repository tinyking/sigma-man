<template>
  <div class="home-wrapper">
    <banner />
    <page1 />
  </div>
</template>

<script lang="ts">
import Banner from '@/views/Home/Banner.vue';
import Page1 from '@/views/Home/Page1.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({ components: { Page1, Banner } })
export default class Home extends Vue {}
</script>
