<template>
  <video controls :src="path"></video>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Video',
  props: {
    path: {
      type: String
    }
  },
  setup(props) {
    const path = ref('')
    path.value = props.path
    return {
      path,
    }
  }
}

</script>