<template>
  <h1>Home</h1>
  <q-card style="max-width: 250px" v-for="post in posts">
    <q-card-section>
      <div class="text-h6">{{post.title.rendered}}</div>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section>
      <p><span v-html="post.content.rendered"></span></p>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const posts = ref('')
    const getPosts = async () => {
      const {data} = await axios.get('/')
      posts.value = data
    }

    onMounted(() => {
      getPosts()
    })

    return {
      posts
    }
  }
}
</script>