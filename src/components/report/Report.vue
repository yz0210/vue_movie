<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
      <div id="myChart" style="width: 750px;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      // 需要合并的数据
      options: {
        title: {
          text: '用户来源'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  created() {},
  // 此时，页面上的元素，已经被渲染完毕了！
  async mounted() {
    // 3. 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('myChart'));
    /*const { data: res } = await this.$http.get('reports/')
    if (res.status !== 200) {
      return this.$message.error('获取折线图数据失败！')
    }*/

    // 4. 准备数据和配置项
   //  const result = _.merge(res.data, this.options)
    // 5. 展示数据
   //  myChart.setOption(result)
    // 配置图表参数
    const option = {
      title: {
        text: '各电影类型数量对比'
      },
      tooltip: {},
      legend: {
        data: ['type']
      },
      xAxis: {
        data: ["Family", "Horror", "Science Fiction", "Crime", "Adventure","Romance","Action","Thriller","Comedy","Drama"]
      },
      yAxis: {},
      series: [{
        name: 'number',
        type: 'bar',
        data: [513, 519, 535, 696, 790,894,1154,1274,1722,2297]
      }]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
