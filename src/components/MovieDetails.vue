<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="movie.posterUrl" alt="Movie Poster">
      </div>
      <div class="col-md-8">
        <h1>{{ movie.name }}</h1>
        <p>{{ movie.description }}</p>
        <ul>
          <li><strong>Director:</strong> {{ movie.director }}</li>
          <li><strong>Actor:</strong> {{ movie.actor }}</li>
          <li><strong>Type:</strong> {{ movie.type }}</li>
          <li><strong>Area:</strong> {{ movie.area }}</li>
          <li><strong>Language:</strong> {{ movie.language }}</li>
          <li><strong>StartTime:</strong> {{ movie.startTime }}</li>
          <li><strong>TimeLength:</strong> {{ movie.timeLength }}</li>
          <li><strong>Score:</strong> {{ movie.score }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-details',
  data() {
    return {
      movie: {}
    }
  },
  mounted() {
    this.$http.get(`/movie/${this.$route.params.id}`)
        .then(response => {
          this.movie = response.data
        })
        .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
