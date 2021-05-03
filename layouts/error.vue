<template>
  <div class="hero flex middle error">
    <div class="contanier flex column middle">
      <h2 v-if="error.statusCode === 404">Page not found</h2>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss">
.error {
  height: 100vh;
}
.error .container {
  height: 100vh;
  height: 100%;
}
.error a {
  color: $main-orange !important;
}
</style>