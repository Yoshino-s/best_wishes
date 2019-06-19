<template>
  <div>
  <mu-card id="search-card" raised>
    <mu-card-media title="Best wishes for you." sub-title="From yoshino-s.">
      <img :src="require('../assets/search_head.jpg')"/>
    </mu-card-media>
    <mu-card-actions>
      <mu-text-field label="name" label-float full-width v-model="name"></mu-text-field>
      <mu-text-field label="password" label-float full-width v-model="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"/>
      <mu-button @click="submit" color="primary" full-width>GO</mu-button>
    </mu-card-actions>
  </mu-card>
  <mu-snackbar color="error" :open.sync="errorOpen">
    <mu-icon left value="warning"/>
    Error name or password.
  </mu-snackbar>
  </div>
</template>

<style>
</style>

<script>
import MD5 from 'md5.js';
import dat from '../assets/data.json';

export default {
  data() {
    return {
      name: '',
      password: '',
      visibility: false,
      errorOpen: false,
      timer: null,
    };
  },
  methods: {
    submit() {
      const p = (new MD5()).update(this.password).digest('hex');
      const n = (new MD5()).update(this.name).digest('hex');
      const t = dat.findIndex(i => i[0] === n && i[1] === p);
      if (t === -1) {
        this.errorOpen = true;
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => { this.errorOpen = false; }, 1000);
      } else {
        this.$router.push(`/wish/${t}`);
      }
    },
  },
};
</script>
