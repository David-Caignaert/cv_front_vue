<template>
  <div class="theHeader">
    <h1>{{ candidat.nom }} {{ candidat.prenom }}</h1>
    <h2>développeur web et web mobile</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidat: {},
    };
  },
  mounted() {
    this.$http
      .get("get/getCandidat.php?id=1")
      .then(
        (response) => (
          console.log("responseNom", response.data.nom),
          (this.candidat = response.data),
          console.log("candidat", this.candidat)
        )
      );
  },
};
</script>

<style>
.theHeader {
  grid-area: theHeader;
  min-height: 25rem;
  background: green;
  color: yellow;
}
.theHeader h1 {
  font-size: 5rem;
}
.theHeader h2 {
  font-size: 3rem;
}
.theHeader h1,
.theHeader h2 {
  text-transform: uppercase;
  text-align: center;
  padding-top: 3rem;
}
</style>
