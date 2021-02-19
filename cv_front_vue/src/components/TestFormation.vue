<template>
  <div>
    <ul>
      <li v-for="(test, index) in tests" :key="index">
        <pre>{{ test }}</pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["tests"],
};
</script>

<style></style>
