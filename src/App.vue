<template>
  <v-app>
    <v-btn class="hidden-xs-and-down">Click Me</v-btn>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
