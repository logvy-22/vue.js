<template>
  <div id="page-title">
    <!-- <a 
      v-if="true"
      @click="$router.go(-1)"
    >
      back
    </a> -->
    <h2>{{ value }}</h2>
  </div>
</template>
<script>

export default {
  props: {
    value: {
      type: String,
      required: true
    }
    
  }
}
</script>
<style scoped>
  #page-title {
    font-weight: normal;
    color: #ccc;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
</style>