<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>
<script>
export default {
  // middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
