<template>
  <label v-if="label">{{label}}</label>
  <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      class="field"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>


<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        modelValue: {
            type: [String, Number],
            default: ""
        }
    }
};
</script>

<style scoped>

</style>
