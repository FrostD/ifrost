<template>
    <FamilyLayout description="vue server side render" keywords="egg, vue, webpack, server side render">
        <div class="home container">
            <carousel-photos></carousel-photos>
            <el-row :gutter="20">
                <el-col :span="18">
                    <family-story v-if="family" :data="family"></family-story>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <card-news data-title="家风家训"></card-news>
                        </el-col>
                        <el-col :span="12">
                            <card-news data-title="老辈故事"></card-news>
                        </el-col>
                        <el-col :span="6"></el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <news-list></news-list>
                </el-col>
            </el-row>
        </div>
    </FamilyLayout>
</template>
<style lang="less" scoped>
    .home {
        padding-bottom: 100px;
    }
</style>
<script type="text/babel">
  import { formatDate } from 'framework/utils/utils.js';
  import carouselPhotos from './component/carousel-photos';
  import familyStory from './component/family-story';
  import newsList from './component/list-news';
  import cardNews from './component/card-news'

  export default {
    components: {
      carouselPhotos, familyStory, newsList, cardNews
    },
    data() {
      return {
        isFinish: false,
        isLoading: false,
      }
    },
    computed: {
      lists() {
        return this.list;
      }
    },
    methods: {
      fetch() {
        this.$http.get(`${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res => {
          console.log('res', res);
          if (res.data.list && res.data.list.length) {
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          } else {
            this.isFinish = true;
          }
          this.isLoading = false;
        });
      },
      loadPage() {
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(() => {
            this.fetch();
          }, 1500);
        }
      }
    },
    mounted() {
      console.log(this.family);
    }
  }
</script>

