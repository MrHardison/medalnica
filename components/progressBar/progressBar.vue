<template>
  <div class="progress">
    <span
      class="line"
      :style="{width: progressCount + '%'}" />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progressCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="sass">
@import './progressBar.sass'
</style>
