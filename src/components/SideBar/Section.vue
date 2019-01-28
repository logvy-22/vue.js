<template>
  <div :class="['side-bar-block', { 'top-border': topLine }]">
    <h3 
      v-if="title" 
      class="side-bar-title"
    >
      {{ title }}
    </h3>  
    <slot />
  </div>   
</template>
<script>

export default {
  props: { 
    title: {
      type: String,
      required: true,
    },
    topLine: {
      type: Boolean,
      required: true,
    }
  },   
}
</script>
<style lang="scss" scoped>
.side-bar-block {
  padding: 5px 10px;

  &.top-border {
    border-top: 1px solid #ccc;
  }

  .side-bar-title {
    font-size: 12px;
    text-transform: uppercase;
    color: #ccc;
  }
}
    
</style>