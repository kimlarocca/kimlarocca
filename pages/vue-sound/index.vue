<script setup>
import { VueSound } from 'vue-sound'
</script>

<template>
  <div class="vue-sound">
    <div class="text-center">
      <img src="/images/vue-sound-logo.png" alt="vue sound" width="300" />
    </div>
    <h1 class="text-center mb-4">Vue Sound</h1>
    <p class="text-center mb-4">An accessible audio player built with Vue!</p>
    <p class="text-center mb-8">
      <a href="https://github.com/kimlarocca/vue-sound">View on GitHub</a>
    </p>
    <h2 class="text-center mb-4">Default Player</h2>
    <vue-sound
      show-download
      title="Fur Elise by Beethoven"
      title-link="https://github.com/kimlarocca/vue-sound"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="https://github.com/kimlarocca/vue-sound"
      file="/fur-elise.mp3"
      class="mb-8"
    />
    <h2 class="text-center mb-4">With An Image</h2>
    <vue-sound
      show-download
      image="https://images.unsplash.com/photo-1506423456648-c11ccb27338d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=750&q=80"
      title="Fur Elise by Beethoven"
      title-link="https://github.com/kimlarocca/vue-sound"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="https://github.com/kimlarocca/vue-sound"
      file="/fur-elise.mp3"
      class="mb-8"
    />
    <h2 class="text-center mb-4">Livestream / Slim Version</h2>
    <vue-sound
      livestream
      title="Fur Elise by Beethoven"
      title-link="https://github.com/kimlarocca/vue-sound"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="https://github.com/kimlarocca/vue-sound"
      file="/fur-elise.mp3"
      class="mb-8"
    />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import 'vue-sound/style.css';
.vue-sound {
  width: 1600px;
  max-width: 90%;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  color: #333333;
}
h1,
h2,
p {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #333333;
  font-weight: 300;
}
h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 2.5rem;
}
.text-center {
  text-align: center;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-8 {
  margin-bottom: 3rem;
}
</style>