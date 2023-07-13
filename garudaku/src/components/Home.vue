<template>
  <div>
    <h1>Home Page</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <div class="post-buttons">
          <router-link :to="`/detail/${post.id}`" class="read-more"
            >Read More</router-link
          >
          <button @click="editPost(post.id)">Edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", content: "Content of Post 1" },
        { id: 2, title: "Post 2", content: "Content of Post 2" },
        { id: 3, title: "Post 3", content: "Content of Post 3" },
        // Add more posts as needed
      ],
    };
  },
  methods: {
    editPost(postId) {
      // Logic to handle the edit button click
      console.log(`Edit post with ID ${postId}`);
    },
  },
};
</script>

<style lang="scss">
.post-list {
  list-style-type: none;
  padding: 0;

  .post-item {
    margin-bottom: 20px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    p {
      color: #666;
    }

    .post-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .read-more {
        background-color: #3498db;
        color: #fff;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 4px;

        &:hover {
          background-color: #2980b9;
        }
      }

      button {
        background-color: #e74c3c;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;

        &:hover {
          background-color: #c0392b;
        }
      }
    }
  }
}
</style>
