<template>
  <div>
    <h1>Template Two</h1>
    <p>Name:{{name}}</p>
    <p>
      <span v-for="(item, index) in skills" :key="index" class="badge badge-primary">{{item}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["name", "skills"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
