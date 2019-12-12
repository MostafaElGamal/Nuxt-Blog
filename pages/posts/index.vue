<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
import { reject } from 'q'

export default {
  components: {
    PostList
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'this is title',
              text: 'this is text',
              thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BDkL6J4W-cbvRZgYmf6r3tYNWyY3jhpIZbHQRv_LW9WkHt5a&s'
            },
            {
              id: '2',
              title: 'Second this is title',
              text: 'Second this is text',
              thumbnail:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BDkL6J4W-cbvRZgYmf6r3tYNWyY3jhpIZbHQRv_LW9WkHt5a&s'
            }
          ]
        })
      }, 1800)
    })
      .then(res => {
        return res
      })
      .catch(e => {
        context.error(new Error())
      })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

