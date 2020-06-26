<template>
  <a-row type="flex" justify="start" style="margin-bottom: 8px">
    <a-col>
      <slot></slot>
    </a-col>
    <a-col>
      <slot name="text"></slot>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Row'
};
</script>

<style></style>
