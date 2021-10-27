<template>
  <span :class="spanClass">
    <i :class="iconClass"></i>
  </span>
</template>

<script lang="ts">
export default {
  name: 'BulmaIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: (value: undefined | string): boolean =>
        !value || ['info', 'success', 'warning', 'danger'].includes(value),
    },
    size: {
      type: String,
      validator: (value: undefined | string): boolean =>
        !value || ['small', 'medium', 'large'].includes(value),
    },
    position: {
      type: String,
      default: 'left',
      validator: (value: string): boolean => ['left', 'right'].includes(value),
    },
  },
  computed: {
    spanClass(): {
      [x: string]: string | boolean | undefined;
      icon: boolean;
    } {
      return {
        icon: true,
        [`has-text-${this.color}`]: this.color,
        [`is-${this.size}`]: this.size,
        [`is-${this.position}`]: this.position,
      };
    },
    iconClass(): string {
      return `fas fa-${this.icon}`;
    },
  },
};
</script>
