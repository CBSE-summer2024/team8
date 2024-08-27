<template>
<div class='btn'>
  <button :class="['standard-button', buttonType]" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
  </div>
</template>

<script>
export default {
  name: 'StandardButton',
  props: {
    buttonType: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>

<style scoped>
.standard-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
}

.standard-button.default {
  background-color: #b3b3b3;
  color: #333;
}
.standard-button.is-disabled {
  cursor: not-allowed;
  background-color: #aaa;
}
.btn{
  display: flex;
  justify-content: center; 
  align-items: center; 

}
</style>
