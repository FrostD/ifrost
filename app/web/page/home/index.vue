<template>
    <BlogLayout>
        <div class="blog">
            <div class="banner">
                <div>
                    <div class="title">
                        <p>MY</p>
                        <p>BLOG</p>
                        <p class="small">well-balanced heart</p>
                    </div>
                    <div class="amount">
                        <p><span class="text">访问量</span><span class="access">1000</span></p>
                        <p><span class="text">日志</span><span class="daily-record">1000</span></p>
                    </div>
                </div>
            </div>
            <div class="content">
                <ul class="sub-menu">
                    <li class="active">设计文章</li>
                    <li class="split">|</li>
                    <li>前端文章</li>
                    <li class="split">|</li>
                    <li>旅游杂记</li>
                </ul>
                <div class="list-article">
                    <el-row v-for="(a, index) in articles" :key="index">
                        <el-col :span="10">
                            <img :src="require(`../../asset/images/blog/sy_img${index+1}.jpg`)">
                        </el-col>
                        <el-col :span="14">
                            <h3 class="title">{{a.title}}</h3>
                            <div class="tag"><span>设计文章</span></div>
                            <div class="content">{{a.content}}</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </BlogLayout>
</template>

<script>
  export default {
    data: function () {
      return {
        articles: [
          { id: 1, title: '空间立体效果图，完美呈现最终效果', content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，生产活动的室内进行安排布置'},
          { id: 2, title: '空间立体效果图，完美呈现最终效果', content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，生产活动的室内进行安排布置'},
          { id: 3, title: '空间立体效果图，完美呈现最终效果', content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，生产活动的室内进行安排布置'},
          { id: 4, title: '空间立体效果图，完美呈现最终效果', content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，生产活动的室内进行安排布置'},
          { id: 5, title: '空间立体效果图，完美呈现最终效果', content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，生产活动的室内进行安排布置'},
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
    .blog {
        >.banner {
            height: 600px;
            width: 100%;
            background-image: url("../../asset/images/blog/bg-banner.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: auto 600px;
            div {
                max-width: 1000px !important;
                margin: 0 auto;
                position: relative;
                .title {
                    position: absolute;
                    top: 152px;
                    p {
                        color: #ffffff;
                        font-size: 80px;
                        &.small {
                            font-size: 46px;
                        }
                    }
                }
            }
            .amount {
                position: absolute;
                top: 290px;
                right: 20px;
                font-size: 18px;
                line-height: 50px;
                color: #ff7f21;
                .text {
                    position: relative;
                    width: 80px;
                    display: inline-block;
                    &::before {
                        position: absolute;
                        right: -5px;
                        content: '\FF1A';
                    }
                }
            }
        }
        >.content {
            max-width: 1300px;
            margin: 0 auto;
            .sub-menu {
                overflow: hidden;
                margin: 50px 0;
                li {
                    float: left;
                    padding: 0 10px;
                    &.split {
                        font-size: 12px;
                    }
                    &.active {
                        color: #ff7f21;
                        font-weight: bold;
                    }
                }
            }
            .list-article {
                .el-row {
                    margin-bottom: 50px;
                    .el-col-10 {
                        padding: 0 10px;
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                    .el-col-14 {

                    }
                }
            }
        }
    }
</style>