<template>
  <div>
    <router-link to="/news" class="stretched-link">
      <p>{{title}}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['title', 'url'],
}

</script>