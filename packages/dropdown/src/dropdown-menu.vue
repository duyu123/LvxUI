<template>
  <transition :name="$clsPrefix+'-zoom-in-top'" @after-leave="doDestroy">
    <ul :class="[`${$clsPrefix}-dropdown-menu ${$clsPrefix}-popper`, size && `${$clsPrefix}-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from '~/src/utils/vue-popper';

  export default {
    name: 'DropdownMenu',

    componentName: 'DropdownMenu',

    mixins: [Popper],

    props: {
      visibleArrow: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        size: this.dropdown.dropdownSize
      };
    },

    inject: ['dropdown'],

    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      'dropdown.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        }
      }
    }
  };
</script>
