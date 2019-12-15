<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  middleware: ['check-auth', 'auth']
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
