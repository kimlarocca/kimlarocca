<template>
  <div :style="'padding-bottom: '+size"></div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: '1rem'
      }
    }
  }
</script>
