<template>
  <div class="home">
    <div class="header">
      <div class="header-placeholder"></div>
      <Header />
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Header, Footer }
})
export default class Layout extends Vue {}
</script>
