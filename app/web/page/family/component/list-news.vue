<template>
    <div class="news-list">
        <h3>最新动态</h3>
        <el-table :data="tableData"
                  style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    component: {
      //someComponent
    }
  }
</script>

<style lang="less" scoped>
    .news-list {
        padding-top: 20px;
        h3 {
            font-size: 24px;
            margin: 8px;
        }
    }
</style>