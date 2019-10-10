<template>
    <el-carousel class="carousel-photos"
            :interval="4000" type="card" height="300px">
        <el-carousel-item
                v-for="item in 5" :key="item"
                :style="{backgroundImage: `url(${require('../images/banner/photo-'+item+'.jpg')}`}">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
      }
    },
    component: {
    }
  }
</script>

<style lang="less" scoped>
    .carousel-photos {
        .el-carousel__item {
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
        }
    }
</style>