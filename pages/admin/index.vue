<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin></PostList>
    </section>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin'
}
</script>
<style scoped>
</style>
