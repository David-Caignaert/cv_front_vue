<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  font-size: 62.5%;
  width: 120rem;
  margin: auto;
  background: white;
}

body {
  font-family: var(--font-family);
  color: var(--colorGrey);
  background: var(--colorBlue);
}
div {
  margin: 0px;
}
p {
  margin: 1rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1rem 0 2rem 0;
}
a {
  color: --colorGrey;
  text-decoration: none;
}
img {
  max-width: 100%;
}
</style>
