<template>
  <div class="theAside">
    <div class="candidat_contenu">
      <h1>Information personnel</h1>
      <hr />
      <div class="candidat">
        <p>{{ ageCandidat() }} ans</p>
        <p>{{ candidat.numTel }}</p>
        <p>
          {{ candidat.adresse }} {{ candidat.codePostal }} {{ candidat.ville }}
        </p>
        <p>{{ candidat.mail }}</p>
        <p>{{ candidat.info }}</p>
      </div>
    </div>
    <div>
      <h1>Compétence programmation</h1>
      <hr />
      <ul>
        <li
          v-for="langPro in candidat.lesLanguagesDeProgrammations"
          :key="langPro"
        >
          {{ langPro.logo }} {{ langPro.nom }}
        </li>
      </ul>
    </div>
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
      .then((response) => (this.candidat = response.data));
  },
  methods: {
    ageCandidat() {
      let diff = Date.now() - Date.parse(this.candidat.dateNaissance);
      let ageCand = new Date(diff);
      return Math.abs(ageCand.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style>
.theAside {
  grid-area: theAside;
  background-color: brown;
  height: 100vh;
}
</style>
