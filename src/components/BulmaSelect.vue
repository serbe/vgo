<template>
  <div class="field">
    <label v-if="getLabel" class="label" key="SelectLabel">{{
      getLabel
    }}</label>
    <div :class="classList" @click="openOptions">
      <input
        ref="vueSelect"
        autocomplete="off"
        tabindex="0"
        :class="inputClassList"
        :placeholder="getPlaceholder"
        :value="isLoaded ? searchText : this.item.name"
        @input="onInput"
        @blur="onBlur"
        @keydown.up="onKeyUp"
        @keydown.down="onKeyDown"
        @keyup.enter="onKeyEnter"
        @keydown.delete="onKeyDelete"
      />
      <bulma-icon
        v-if="iconLeft"
        :icon="iconLeft"
        position="left"
        :color="color"
        :size="size"
        key="SelectIconLeft"
      />
      <bulma-icon
        v-if="iconRight"
        :icon="iconRight"
        position="right"
        :color="color"
        :size="size"
        key="SelectIconRight"
      />
      <div class="select-box" v-if="opened" key="SelectOpened">
        <div
          class="select-item"
          @click.stop="selectItem({ id: 0, name: '' })"
          @mousedown="mousedownItem"
        ></div>
        <div
          class="select-item"
          v-for="item in listWithFilter"
          :key="item.id"
          @click.stop="selectItem(item)"
          @mousedown="mousedownItem"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BulmaIcon from "@/components/BulmaIcon";
export default {
  name: "BulmaSelect",
  components: {
    "bulma-icon": BulmaIcon,
  },
  props: {
    selectedItem: {
      default() {
        return {
          id: 0,
          name: "",
        };
      },
    },
    iconLeft: String,
    iconRight: String,
    color: {
      type: String,
      validator: (value) =>
        !value ||
        ["primary", "info", "success", "warning", "danger"].includes(value),
    },
    size: {
      type: String,
      validator: (value) =>
        !value || ["small", "medium", "large"].includes(value),
    },
    state: String,
    label: String,
    list: {
      required: true,
      default: [
        {
          id: 0,
          name: "",
        },
      ],
    },
    itemName: String,
  },
  data() {
    return {
      opened: false,
      searchText: this.selectedItem.name,
      mousedownState: false,
      placeholder: "",
      isLoaded: false,
    };
  },
  computed: {
    classList() {
      return {
        control: true,
        "is-expanded": true,
        select: true,
        "is-fullwidth": true,
        "has-icons-left": this.iconLeft,
        "has-icons-right": this.iconRight,
      };
    },
    inputClassList() {
      return {
        input: true,
        [`is-${this.color}`]: this.color,
        [`is-${this.size}`]: this.size,
        [`is-${this.state}`]: this.state,
      };
    },
    getLabel() {
      if (
        this.label !== false &&
        this.placeholder !== false &&
        this.label === ""
      ) {
        return this.placeholder;
      }
      return this.label;
    },
    getPlaceholder() {
      return this.placeholder === "" && this.label && this.label !== ""
        ? this.label
        : this.placeholder;
    },
    listWithFilter() {
      if (this.searchText !== "") {
        return this.list.filter((item) =>
          item.name.match(new RegExp(this.searchText, "i"))
        );
      }
      return this.list;
    },
    item() {
      if (this.selectedItem) {
        return { id: this.selectedItem.id, name: this.selectedItem.name };
      }
      return { id: 0, name: "" };
    },
  },
  methods: {
    openOptions() {
      this.isLoaded = true;
      this.$refs.vueSelect.focus();
      this.searchText = "";
      this.placeholder = this.selectedItem.name;
      this.opened = true;
      this.mousedownState = false;
    },
    closeOptions() {
      this.opened = false;
    },
    mousedownItem() {
      this.mousedownState = true;
    },
    selectItem(item) {
      this.searchText = item.name;
      this.closeOptions();
      if (this.itemName) {
        this.$emit("select", item, this.itemName);
      } else {
        this.$emit("select", item);
      }
    },
    onBlur() {
      if (!this.mousedownState) {
        this.searchText = this.selectedItem.name;
        this.closeOptions();
      }
    },
    onKeyUp() {
      // const selectedItemIndex = this.filteredOptions.findIndex(item => {
      //   return item.selected === true
      // })
      // if (selectedItemIndex === -1) {
      //   this.filteredOptions[0].selected = true
      // } else if (selectedItemIndex !== 0) {
      //   this.filteredOptions[selectedItemIndex].selected = false
      //   this.filteredOptions[selectedItemIndex - 1].selected = true
      // }
    },
    onKeyDown() {
      // const selectedItemIndex = this.filteredOptions.findIndex(item => {
      //   return item.selected === true
      // })
      // if (selectedItemIndex === -1) {
      //   this.filteredOptions[0].selected = true
      // } else if (selectedItemIndex !== this.filteredOptions.length - 1) {
      //   this.filteredOptions[selectedItemIndex].selected = false
      //   this.filteredOptions[selectedItemIndex + 1].selected = true
      // }
    },
    onKeyEnter() {
      // const selectedItem = this.filteredOptions.find(item => {
      //   return item.selected === true
      // })
      // if (selectedItem) {
      //   this.selectItem(selectedItem)
      // }
    },
    onKeyDelete() {
      // if (!this.searchText && this.selectedOption) {
      //   this.selectItem({})
      //   this.openOptions()
      // }
    },
    onInput(event) {
      this.searchText = event.target.value;
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 0.75rem;
}

.select-box {
  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);
  /*display: inline-block;*/
  position: absolute;
  border: 1px solid #1fc8db;
  /*visibility: hidden;*/
  background-color: #fff;
  left: 0;
  /*top: 20%;*/
  width: 100%;
  overflow: auto;
  z-index: 5;
  /*margin-top: -10px;*/
  max-height: 300px;
}

.select-item {
  background-color: white;
  /*border: 1px solid #d3d6db;*/
  /*border-radius: 3px;*/
  color: #222324;
  height: 22px;
  padding: 3px 8px;
  font-size: 12px;
  white-space: nowrap;
  /*box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);*/
}

.select-item:hover {
  background-color: #3273dc;
  color: #fff;
}
</style>
