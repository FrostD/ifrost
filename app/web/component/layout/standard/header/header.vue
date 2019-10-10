<template>
    <header class="header">
        <div class="container">
            <div class="float-left">
                <img class="logo" src="../../../../page/family/images/logo-deng.png">
                <span class="family-name"><span class="red">邓</span>氏家族</span>
            </div>
            <div class="float-right">
                <el-link type="primary" href="/login">登录/注册</el-link>
                <el-link type="primary" class="present" :underline="false"
                         icon="el-icon-present" title="打赏一下"></el-link>
            </div>
        </div>
        <div class="container">
            <el-menu :default-active="activeIndex" class="el-menu-main" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><i class="el-icon-s-home"></i><span>主页</span></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">家风故事</template>
                    <el-menu-item index="2-1">善良</el-menu-item>
                    <el-menu-item index="2-2">节俭</el-menu-item>
                    <el-menu-item index="2-3">团结</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">其他</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3"><a href="/clansman" target="_blank">族谱</a></el-menu-item>
                <el-menu-item index="4" disabled>后台管理</el-menu-item>
            </el-menu>
        </div>
    </header>
</template>
<style lang="less" scoped>
    .header {
        background: url(../../../../page/family/images/bg-abstract.png) no-repeat -20% top;
        border-top: solid 5px #464646;
        .container {
            .float-left {
                padding: 20px 0;
                * {
                    float: left;
                }
                .logo {
                    width: 100px;
                    height: 100px;
                }
                .family-name {
                    font-size: 48px;
                    margin-left: 20px;
                    display: inline-block;
                    height: 48px;
                    padding: 26px 0;
                }
            }
            .float-right {
                padding: 58px 0;
                * {
                    float: left;
                    line-height: 24px;
                    font-size: 16px;
                }
                .present {
                    margin-left: 10px;
                    font-size: 24px;
                }
            }
            .el-menu-main {
                .el-menu-item.is-active {
                    color: #409EFF;
                }
            }
        }
    }
</style>
<script type="text/babel">

  export default {
    components: {},
    data() {
      return {
        activeIndex: '1',
        selectedMenu: '/'
      }
    },
    computed: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>
