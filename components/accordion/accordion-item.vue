<template>
  <li class="accordion__item" @click="open">
    <div class="accordion__trigger" :class="{'accordion__trigger_active': visible}">
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>

      <div class="accordion__arrow">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6224 16.3427L11.7424 10.4803L17.8624 16.3427L19.7424 14.5379L11.7424 6.85791L3.7424 14.5379L5.6224 16.3427Z" fill="#003058"/>
        </svg>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">

      <div v-show="visible" class="accordion__content">
        <!-- This slot will handle all the content that is passed to the accordion -->
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  inject: ["accordion"],
  props: {},
  data () {
    return {
      index: null
    }
  },
  computed: {
    visible () {
      return this.index === this.accordion.active
    }
  },
  created () {
    this.index = this.accordion.count++
  },
  methods: {
    open () {
      if (this.visible) {
        this.accordion.active = null
      } else {
        this.accordion.active = this.index
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + "px"
    },
    end (el) {
      el.style.height = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
  position: relative;
  padding: 20px;
  &:hover {
    //background: #f9f9f9;
  }
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  h5 {
    margin: 0;
    font-weight: bold;
  }
  .accordion__arrow {
    transform: rotate(180deg);
  }
  &_active {
    .accordion__arrow {
      transform: rotate(0deg);
    }
  }
}
.accordion__content::v-deep {
  p {
    margin: 0;
    padding-top: 20px;
    color: #858585;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
