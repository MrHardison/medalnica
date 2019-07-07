<template>
  <div class="input-wrapper">
    <input
      class="input"
      :type="type"
      :id="name"
      required>
    <label
      :for="name"
      class="placeholder">{{ placeholder }}</label>
    <p class="description">{{ description }}</p>
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
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="sass">
@import './vInput.sass'
</style>
