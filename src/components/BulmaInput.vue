<template>
  <div class="field">
    <label v-if="label" class="label" key="InputLabel">{{ label }}</label>
    <div :class="classList" @click="click">
      <input
        ref="input"
        :class="inputClassList"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        @input="onInput"
        @blur="onBlur"
        @keyup="onKeyup"
        :required="required"
        :autofocus="autofocus"
      />
      <bulma-icon
        v-if="iconLeft"
        :size="size"
        position="left"
        :icon="iconLeft"
        :color="color"
        key="InputIconLeft"
      />
      <bulma-icon
        v-if="iconRight"
        :size="size"
        position="right"
        :icon="iconRight"
        :color="color"
        key="InputIconRight"
      />
      <p v-if="isError" class="help is-danger" key="InputError">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import BulmaIcon from '@/components/BulmaIcon.vue';

export default {
  name: 'BulmaInput',
  components: {
    'bulma-icon': BulmaIcon,
  },
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) =>
        !value || ['text', 'number', 'password', 'email', 'tel'].includes(value),
    },
    color: {
      type: String,
      validator: (value) =>
        !value || ['primary', 'info', 'success', 'warning', 'danger'].includes(value),
    },
    size: {
      type: String,
      validator: (value) => !value || ['small', 'medium', 'large'].includes(value),
    },
    rounded: Boolean,
    hovered: Boolean,
    focused: Boolean,
    loading: Boolean,
    name: String,
    iconLeft: String,
    iconRight: String,
    label: String,
    placeholder: String,
    autocomplete: String,
    hyper: String,
    id: String,
    disabled: Boolean,
    readonly: Boolean,
    error: String,
    pattern: String,
    required: Boolean,
    autofocus: Boolean,
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  computed: {
    classList() {
      return {
        control: true,
        'is-expanded': true,
        'has-icons-left': this.iconLeft,
        'has-icons-right': this.iconRight,
      };
    },
    inputClassList() {
      return {
        input: true,
        [`is-${this.color}`]: this.color,
        [`is-${this.size}`]: this.size,
        'is-rounded': this.rounded,
        'is-hovered': this.hovered,
        'is-focused': this.focused,
        'is-loading': this.loading,
      };
    },
    isError() {
      if (this.value !== '' && this.pattern) {
        const patt = new RegExp(this.pattern);
        return !patt.test(this.value);
      }
      return false;
    },
  },
  methods: {
    click() {
      if (this.hyper) {
        this.$router.push(this.hyper);
      }
    },
    onInput(event) {
      const val = event.target.value;
      this.$emit('input', val);
    },
    onBlur(event) {
      const ret = { id: this.id, event };
      this.$emit('blur', ret);
    },
    onKeyup(event) {
      const ret = { id: this.id, event };
      this.$emit('keyup', ret);
    },
  },
};
</script>
