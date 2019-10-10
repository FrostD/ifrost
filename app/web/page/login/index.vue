<template>
    <BlankLayout title="登录" description="vue server side render"
                 keywords="egg, vue, webpack, server side render">
        <div class="login">
            <div class="logo"></div>
            <el-form ref="formLogin" method="POST" :model="formData"
                     :action="`/login?_csrf=${csrfToken}`">
                <div class="form-item">
                    <el-input type="text" prefix-icon="el-icon-message"
                              autocomplete="off" v-model="formData.username"
                              name="username" placeholder="邮箱 或 用户名"></el-input>
                    <p class="tip">请输入合法的邮箱地址</p>
                </div>
                <div class="form-item">
                    <el-input type="password" prefix-icon="el-icon-lock"
                              autocomplete="off" v-model="formData.password"
                              name="password" placeholder="登录密码"></el-input>
                    <p class="tip">邮箱或密码不正确</p>
                </div>
                <div class="form-item">
                    <button type="submit">登 录</button>
                </div>
            </el-form>
            <div class="reg-bar">
                <a class="reg" href="/register">立即注册</a>
                <a class="forget" href="/resetPwd">忘记密码</a>
            </div>
        </div>
    </BlankLayout>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        csrfToken: '',
        formData: {
          username: 'dongshuang',
          password: 'wsjzcy'
        }
      }
    },
    methods: {

    },
    beforeMount() {
      this.csrfToken = this.csrf;
    }
  }
</script>

<style lang="less">
    .login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 430px;
        height: 550px;
        margin: -300px 0 0 -215px;
        border: 1px solid #fff;
        border-radius: 20px;
        overflow: hidden;
        .logo {
            width: 104px;
            height: 104px;
            margin: 50px auto 80px;
            background: url(./images/avatar-person.png) 0 0 no-repeat;
        }
        .form-item {
            position: relative;
            width: 360px;
            margin: 0 auto;
            padding-bottom: 30px;
            .el-input {
                input {
                    height: 48px;
                    padding-left: 80px;
                    border: solid 1px #ffffff;
                    border-radius: 24px;
                    background: transparent;
                    font-size: 18px;
                    color: #ffffff;
                    &::-webkit-input-placeholder {
                        color: #ffffff;
                    }
                    &:-moz-placeholder{
                        color: #ffffff;
                    }
                    &::-moz-placeholder {
                        color: #ffffff;
                    }
                    &:-ms-input-placeholder{
                        color: #ffffff;
                    }
                }
                .el-input__prefix {
                    left: 20px;
                    top: 5px;
                    height: 30px;
                    .el-input__icon {
                        font-size: 30px;
                        color: #ffffff;
                        width: 30px;
                    }
                }
            }
            .tip {
                display: none;
                position: absolute;
                left: 20px;
                top: 52px;
                font-size: 14px;
                color: #ff5500;
            }
            button {
                height: 48px;
                width: 100%;
                border-radius: 24px;
                background: #ffffff;
                color: #3678a9;
                font-size: 18px;
            }
        }
        .reg-bar {
            width: 360px;
            margin: 20px auto 0;
            font-size: 14px;
            overflow: hidden;
            a {
                color: #ffffff;
                text-decoration: none;
            }
            .reg {
                float: left;
            }
            .forget {
                float: right;
            }
        }
    }
</style>