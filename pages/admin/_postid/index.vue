<template class="admin-post-page">
  <section class="update-form">
    <AdminPostForm :post="loadedPost" @submit="onSubmitted"></AdminPostForm>
  </section>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',

  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        process.env.baseUrl +
          '/Nuxt-Blog/posts/' +
          context.params.postid +
          '.json'
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postid }
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
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
