<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-2by2">
        <img :src="src" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
          <p class="subtitle is-6">{{texts}}</p>
        </div>
      </div>

      <div class="content">
        <p>{{texts}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      title: String,
      texts: String,
      src: String
    }
  }
</script>
<style>
  .card{
    max-width: 400px;
    height:400px;
  }
</style>
