<template>
  <mu-card id="wish-card">
    <mu-card-media :title="'Best wishes for ' + name + '.'">
      <img :src="require('../assets/head.jpg')"/>
    </mu-card-media>
    <mu-card-text v-html="wish">
    </mu-card-text>
  </mu-card>
</template>

<style>
</style>

<script>
import marked from 'marked';
import wish from '../assets/wish.json';

export default {
  computed: {
    name() {
      return wish[this.$route.params.token].name;
    },
    wish() {
      return marked(wish[this.$route.params.token].wish);
    },
  },
};
</script>
