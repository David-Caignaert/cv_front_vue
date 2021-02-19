<template>
  <div class="home">
    <the-picture></the-picture>
    <the-header></the-header>
    <the-aside></the-aside>
    <the-main></the-main>
  </div>
</template>

<script>
import ThePicture from "../components/ThePicture/ThePicture.vue";
import TheHeader from "../components/TheHeader/TheHeader.vue";
import TheAside from "../components/TheAside/TheAside.vue";
import TheMain from "../components/TheMain/TheMain.vue";

export default {
  components: {
    ThePicture,
    TheHeader,
    TheAside,
    TheMain,
  },
};
</script>

<style>
.home {
  display: grid;
  grid:
    "thePicture theHeader" auto
    "theAside theMain" 1fr
    / 1fr 2fr;

  height: 100vh;
}
</style>
