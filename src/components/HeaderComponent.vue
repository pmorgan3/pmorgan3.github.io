<template>
  <div class="hello">
    <h1>{{myName}}</h1>
    <h2> {{myTitle}} </h2>
    <h3>{{myAddress}}</h3>
    <h3 class="contactHead"> {{myEmail}} </h3>
    <h3 class="contactHead"> {{myNumber}} </h3>
    <h3 class="contactHead"> {{myGit}} </h3>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      myName: "Paul Morgan III",
      myTitle: "Developer Extraordinaire",
      myAddress: "1565 Steeplechase Ct, Libertyville, IL",
      myEmail: "pmorgan3@gmail.com",
      myNumber: "1-847-313-5894",
      myGit: "https://github.com/pmorgan3"

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contactHead {
    display: inline;
    padding: 5px
  }
</style>
