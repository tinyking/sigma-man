<template>
  <a-row type="flex" justify="start" align="middle" style="margin-bottom: 8px">
    <a-col>
      <slot></slot>
    </a-col>
    <a-col>
      <slot name="text"></slot>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Row extends Vue {}
</script>

<style></style>
