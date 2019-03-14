<template>
  <div class="header">
    <h1 class="appName">Search Books</h1>
    <ul id="headNav">
      <li><nuxt-link to="/"><span>Home</span></nuxt-link></li>
      <li><nuxt-link to="/login"><span>Search Books</span></nuxt-link></li>
      <li><nuxt-link to="/about"><span>About Me</span></nuxt-link></li>
      <li><nuxt-link to="/Content/15">Test</nuxt-link></li>
    </ul>
  </div>
</template>

<style>
.header{
  height: 100px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
#headNav{
  list-style: none;
  overflow: hidden;
  width:100%;
  float: left;
  text-align: center;

}

#headNav li {
  width: 15%;
  position: relative;
  float:left;
  margin-left : 1%;
  margin-right : 1%;
}

</style>
