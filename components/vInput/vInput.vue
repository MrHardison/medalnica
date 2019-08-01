<template>
  <div class="input-wrapper">
    <input
      :class="{error: error}"
      :type="type"
      :id="name"
      class="input"
      v-model="value"
      @blur="validation"
      required>
    <label
      :for="name"
      class="placeholder">{{ placeholder }}</label>
    <p
      :class="{error: error}"
      class="description">{{ error ? errorText : description }}</p>
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
    },
    errorText: {
      type: String,
      default: 'Поле заполнено неверно!'
    }
  },
  data() {
    return {
      value: '',
       pattern: {
        email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        year: /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{2}$/,
      },
      error: false
    }
  },
  watch: {
    value: {
      handler(data) {
        this.$emit('update', this.value)
      }
    },
    error: {
      handler(data) {
        this.$emit('error', data)
      }
    }
  },
  methods: {
    validation() {
      if (!this.value.length) {
        this.error = false
      }
      if (this.value.length && this.pattern[this.name]) {
        const result = this.pattern[this.name].test(this.value)
        if (!result) {
          if (this.error === false) {
            this.error = true
          }
        } else {
          this.error = false
        }
      }
    },

  }
}
</script>

<style scoped lang="sass">
@import './vInput.sass'
</style>
