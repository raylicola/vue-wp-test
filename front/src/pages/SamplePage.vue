<template>
  <NewsItem :title="post.title.rendered" v-for="post in posts"></NewsItem>
  <Carousel :paths="caroucel_paths"></Carousel>
  <div class="q-pa-md" style="max-width: 400px">
    <Form></Form>
  </div>
  <!-- <Video path="@/assets/video/test.MOV"></Video> -->
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue';
import { Video, Carousel, Card, NewsItem, Form } from '@/components'

export default {
  name: 'Home',
  components: {
    Video,
    Carousel,
    Card,
    NewsItem,
    Form
},
  setup() {
    const posts = ref('')
    const caroucel_paths = ref([])

    caroucel_paths.value = [
      'https://cdn.quasar.dev/img/mountains.jpg',
      'https://cdn.quasar.dev/img/parallax1.jpg',
      'https://cdn.quasar.dev/img/parallax2.jpg',
      'https://cdn.quasar.dev/img/quasar.jpg',
    ]

    const getPosts = async () => {
      const {data} = await axios.get('wp-json/wp/v2/posts')
      posts.value = data
    }

    onMounted(() => {
      getPosts()
    })

    return {
      posts,
      caroucel_paths
    }
  }
}
</script>