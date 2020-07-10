<template>
  <div id="header" class="header page-wrapper">
    <a-row class="page">
      <a-col :sm="24" :md="6">
        <a class="logo" href="/">
          <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" />
          <span>LANDING</span>
        </a>
      </a-col>
      <a-col :sm="0" :md="18">
        <div class="menu">
          <a-menu mode="horizontal">
            <a-menu-item key="mail">
              <router-link to="/">首页</router-link>
            </a-menu-item>
            <a-menu-item key="mail2">
              <router-link to="/">博客</router-link>
            </a-menu-item>
            <a-menu-item key="mail23">
              <router-link to="/">工具</router-link>
            </a-menu-item>
          </a-menu>
          <a href="https://github.com/tinyking" target="_blank" class="gitbtn">Github</a>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped></style>
