<template>
  <div>
    <p>State : {{ this.$store.state.counter }}</p>
    <p>About Me</p>
    <button @click="increment()" class="bounce">Up</button>
  </div>
</template>
<script>
  export default{
    methods: {
      increment () {
        this.$store.dispatch('increment')
      }
    }
  }
</script>
