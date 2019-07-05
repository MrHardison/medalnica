<template>
  <div class="input-wrapper">
    <input
      class="input"
      :type="type"
      :id="'email'"
      required>
    <label
      :for="'email'"
      class="placeholder">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'input'
    },
    placeholder: {
      type: String,
      default: 'Type any text'
    }
  }
}
</script>

<style scoped lang="sass">
@import './vInput.sass'
</style>
