<template>
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

export default {
  name: 'Card',
  props: ['post'],
}

</script>