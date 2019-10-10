<template>
  <div class="blank">
    <slot name="main"></slot>
  </div>
</template>
<style lang="css">
@import './index.css';
</style>
<script type="text/babel">

  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default{
    data() {
      return {}
    }
  }
</script>
