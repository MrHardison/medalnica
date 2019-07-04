<template>
  <button class="btn btn_yellow"><slot/></button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {}
  },
}
</script>

<style lang="sass">
@import './btn.sass'
</style>
