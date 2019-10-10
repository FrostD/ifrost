<template>
    <header class="header">
        <div class="logo">
            <p>MY</p>
            <p>BLOG</p>
        </div>
        <div class="nav">
            <a :class="{active: crtPath === m.href}" v-for="(m, index) in menus" :key="index"
               :href="m.href">{{m.text}}</a>
        </div>
        <div class="welcome">欢迎来到FrostD的博客～</div>
    </header>
</template>
<script type="text/babel">

  export default {
    components: {},
    data() {
      return {
        crtPath: '/blog',
        menus: [
          { href: '/blog', text: '文章' },
          { href: '/blog/chronicle', text: '微语' },
          { href: '/blog/message', text: '留言' },
          { href: '/blog/photo', text: '相册' },
          { href: '/blog/about', text: '关于' }
        ]
      }
    },
    computed: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      console.log(location.pathname);
      this.crtPath = location.pathname;
    }
  }
</script>
<style lang="less">
    .header {
        height: 120px;
        line-height: 120px;
        font-size: 16px;
        padding: 0 65px;
        min-width: 990px;
        .logo {
            margin-top: 30px;
            float: left;
            p {
                color: #3f2862;
                font-size: 32px;
                line-height: 1;
            }
        }
        .nav {
            margin-left: 65px;
            float: left;
            a {
                float: left;
                width: 100px;
                display: inline-block;
                text-align: center;
                color: #3f2863;
                &.active {
                    color: #ff7f21;
                    font-weight: bold;
                }
            }
        }
        .welcome {
            float: right;
        }
    }
</style>