<template>
  <v-app id="app">
    <v-main>
      <div class="wrapper">
        <h1 class="title-color">ShiYu's Self-introduction-site</h1>
        <my-header class="header" />
        <router-view class="content-1" />
        <my-footer class="footer" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

export default {
  name: "app",
  props: {
    msg: String,
  },
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(rgb(187, 0, 234), rgb(38, 0, 255));
}

.wrapper {
  font-size: 20px;
  line-height: 1.5;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.title-color {
  color: rgb(245, 245, 245);
}

header {
  height: 50px;
}

.content-1 {
  flex: 3;
}

footer {
  height: 30px;
  background: linear-gradient(rgb(187, 0, 234), rgb(38, 0, 255));
}
</style>
