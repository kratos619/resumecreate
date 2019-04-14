<template>
  <v-app>
    <NavBar></NavBar>
    <v-container class="mainContainer">
      <v-layout row wrap>
        <v-flex xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.mainContainer {
  margin-top: 80px;
}
</style>
