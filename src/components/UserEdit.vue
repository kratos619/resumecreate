<template>
  <div class="component">
    <input v-model="datatxt" type="text">
    <p>{{datatxt}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datatxt: ""
    };
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
