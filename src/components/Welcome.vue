
<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <h1>选电影</h1>
      <el-dropdown>
      <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

        <div class="line"></div>

        <div class="row">
          <div v-for="movie in movies" :key="movie.id" class="col-md-4 mb-5">
            <div class="card h-100">
              <img class="card-img-top" :src="movie.posterUrl" alt="Movie Poster">
              <div class="card-body">
                <h2 class="card-title">{{ movie.name }}</h2>
                <p class="card-text">{{ movie.type }}</p>
                <router-link class="btn btn-primary" :to="{ name: 'details', params: { id: movie.id }}">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
    </el-card>


</div>
</template>
<script>

export default {
  name: 'movies',
  data () {
    return {
      movies: [],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
    this.$http.post('movieInfo/list',this.queryInfo)
        .then(response => {
          this.movies = response.data.data.rows
          console.log(this.movies)
        })
        .catch(error => console.log(error))
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
