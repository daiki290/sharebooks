<template>
  <section class="container">
    <b-switch>switch</b-switch>
    <div class="columns">
      <div class="column is-one-third" v-for="i in prContents">
        <bookCard :texts="i.texts" :title="i.title" :src="i.src"/>
      </div>
    </div>
  </section>
</template>
<style>
  .container{
    width:80%;
    text-align:center;
  }
</style>
<script>
  import bookCard from '~/components/card.vue'
  export default{
    components:{
      bookCard
    },
    data(){
      return{
        prContents: [
          {
            texts:'Obama',
            title:'Yes, We Can',
            src:'https://bulma.io/images/placeholders/1280x960.png'
          },
          {
            texts:'',
            title:'',
            src:''
          }
        ]
      }
    }
  }
</script>
