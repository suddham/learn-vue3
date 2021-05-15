<template>
  <label>Title</label>
  <input
      v-model="event.title"
      type="text"
      placeholder="Title"
      class="field"
  >
</template>


<script>
export default {
    name: "BaseInput",
};
</script>

<style scoped>

</style>
