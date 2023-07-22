<template>
  <div class="card">
    <figure>
      <img
        v-if="hasImage"
        :src="image"
        :alt="title"
        :class="{ 'mb-4': hasImage }"
      />
      <figcaption>{{ title }}</figcaption>
    </figure>
    <p v-html="description" :class="{ 'ml-3 lg:mr-5': !hasImage }" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasImage() {
      return !!this.$props.image
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.card {
  figcaption {
    color: $dark-gray;
    background-color: rgb(255, 255, 255);
    mix-blend-mode: difference;
  }
}
</style>
