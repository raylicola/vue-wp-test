<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="index" :img-src="path" v-for="(path, index) in paths"></q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Carousel',
  props: ['paths'],
  setup () {
    return {
      slide: ref(0)
    }
  }
}

</script>