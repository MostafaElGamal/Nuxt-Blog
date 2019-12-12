import background-image from '../assets/images/background-image.jpeg';
<template>
  <div class="homepage">
    <section class="intro">
      <h1>Get The latest tech new!</h1>
    </section>
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  asyncData(context, callback) {
    setTimeout(() => {
      console.log(context)
      callback(null, {
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
  }
}
</script>
<style  scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/background-image.jpeg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
