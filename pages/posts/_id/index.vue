<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPost.updateDate }}</div>
        <div class="post-detail">{{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        <span>Lem me know what you think about the post</span>
        <a href>Mail Me</a>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(new Error(), {
        loadedPost: {
          id: '1',
          // This is like this.$route.params.id
          title: 'this is title (ID: ' + context.params.id + ')',
          text: 'this is text',
          author: 'Mustafa',
          updateDate: new Date(),
          content:
            'asdasjfasdibgasdfiobgasduifbsdpodfasiodbhasfbha sjfasj fjvhd ilas djhas fjkdashi d',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BDkL6J4W-cbvRZgYmf6r3tYNWyY3jhpIZbHQRv_LW9WkHt5a&s'
        }
      })
    }, 1900)
  }
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
