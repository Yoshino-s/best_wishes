<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <footer id="footer">
      Powered by <a href="https://cn.vuejs.org/">Vuejs.</a>
      <br/>
      Programmed by <a href="https://github.com/yoshino-s/">Yoshino-s.</a>
      <br/>
      Source code hosted on <a href="https://github.com/yoshino-s/best_wishes/">Github</a>
    </footer>
  </div>
</template>

<style lang="less">
#app {
  background-image: url(assets/bg.jpg);
}

#footer {
  color: rgb(255, 255, 255);
  background-color: #2196f3;
  bottom: 0;
  position: relative;
  width: 100%;
  max-height: 200px;
  padding: 20px;
  text-align: center;
}

#content {
  min-height: 80vh;
  padding: 10px;
  margin: 0 auto;
  width: 33%;
  min-width: calc( 100% - 20px );
}
</style>
