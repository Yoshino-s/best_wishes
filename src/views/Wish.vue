<template>
  <mu-card id="wish-card">
    <mu-card-media :title="'For you.My friend.'">
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
import data from '../assets/data.json';

export default {
  computed: {
    wish() {
      return marked(data[this.$route.params.token][2]);
    },
  },
};
</script>
