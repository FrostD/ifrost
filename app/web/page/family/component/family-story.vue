<template>
    <div class="family-story">
        <h1 class="card-header">我们从哪里来</h1>
        <div class="card-content">{{data.desc}}</div>
        <div class="card-footer">
            上传于2018年8月 口述：邓树田
        </div>
    </div>
</template>

<script>
  export default {
    name: "",
    props: ['data'],
    data() {
      return {
      }
    },
    component: {
      //someComponent
    }
  }
</script>

<style lang="less" scoped>
.family-story {
    min-height: 400px;
    .card-content {
        line-height: 24px;
        text-indent: 32px;
    }
    .card-footer {
        margin-top: 10px;
        text-align: right;
    }
}
</style>