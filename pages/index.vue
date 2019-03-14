<template>
  <div>
    <p>This is Top Page</p>
    <bookCard />
  </div>
</template>
<script>
  import bookCard from '~/components/Card/card.vue'
  export default{
    components: {
      bookCard
    }
  }
</script>
