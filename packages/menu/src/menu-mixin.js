export default {
  computed: {
    indexPath() {
      const path = [this.index];
      let parent = this.$parent;
      while (parent.$options.componentName !== 'Menu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu() {
      let parent = this.$parent;
      while (
        parent &&
        parent.$options.componentName !== 'Menu'
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ['Menu', 'Submenu'].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      let padding = 20;
      let parent = this.$parent;

      if (this.rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'Submenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return {paddingLeft: padding + 'px'};
    }
  }
};
