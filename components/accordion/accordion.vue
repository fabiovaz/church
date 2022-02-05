<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'TheAccordion',
  provide () {
    return { accordion: this.accordion }
  },
  props: {},
  data () {
    return {
      accordion: {
        count: 0,
        active: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
