<template>
    <el-card class="news-list">
        <div slot="header" class="clearfix">
            <span>{{dataTitle}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'dataTitle ' + o }}
        </div>
    </el-card>
</template>

<script>
  export default {
    props: ['dataTitle', 'dataList'],
    data() {
      return {

      }
    },
    component: {
      //someComponent
    }
  }
</script>

<style scoped>

</style>