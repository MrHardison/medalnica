<template>
  <progress class="progress" :max="target" :value="current"> {{ current }} </progress>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    current: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="sass">
@import './progressBar.sass'
</style>
