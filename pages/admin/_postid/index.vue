<template class="admin-post-page">
  <section class="update-form">
    <AdminPostForm :post="loadedPost"></AdminPostForm>
  </section>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Mustafa',
        title: 'Title Post',
        thumbnailLink: '~assets/images/background-image.jpeg'
      }
    }
  }
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
