<template>
  <div
    @click="portfolioItemShow = true"
    v-on:keypress.enter="portfolioItemShow = true"
    v-on:keypress.space.prevent="portfolioItemShow = true"
    tabindex="0"
    class="portfolio-item"
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
  >
    <Head>
      <Script
        v-if="vimeo !== ''"
        src="https://player.vimeo.com/api/player.js"
      />
    </Head>
    <div>
      <h2 class="banner">{{ title }}</h2>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"></div>
    </div>
    <transition name="slide-fade">
      <div class="portfolio-item-details" v-if="portfolioItemShow">
        <v-spacer size="3rem"></v-spacer>
        <div class="container">
          <div
            tabindex="0"
            @click.stop="portfolioItemShow = !portfolioItemShow"
            v-on:keypress.enter.stop="portfolioItemShow = !portfolioItemShow"
            v-on:keypress.space.stop.prevent="
              portfolioItemShow = !portfolioItemShow
            "
            class="portfolio-item-close"
          >
            X
          </div>
          <h3 class="mb-6">{{ title }}</h3>
          <div
            v-if="vimeo !== ''"
            class="mb-6"
            style="padding: 56.25% 0 0 0; position: relative"
          >
            <iframe
              :src="vimeo"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              title="Kim LaRocca | Portfolio Video"
            ></iframe>
          </div>
          <img
            v-if="image"
            :src="image"
            :alt="title + ' screenshot'"
            class="mb-6"
          />
          <p v-html="description" class="mb-6" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioItemShow: false,
    }
  },
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
    backgroundImage: {
      type: String,
      default: '',
    },
    vimeo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';
$max-width: 100vw;

.portfolio {
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;

  .portfolio-item {
    display: flex;
    cursor: pointer;
    align-items: center;
    width: calc($max-width/3);
    height: calc($max-width/3);
    opacity: 1;
    transition: $transition;
    overflow: hidden;
    background-size: cover;

    @media all and (max-width: $max-width) {
      width: 33.33%;
      height: 33vw;
    }

    @media all and (max-width: $breakpoint-tablet) {
      width: 50%;
      height: 50vw;
    }

    @media all and (max-width: $breakpoint-mobile) {
      width: 100%;
      height: 100vw;
    }

    .banner {
      transition: $transition;
      background-color: $dark-gray;
      color: $white;
    }

    &:hover,
    &:focus {
      outline: none;
      .banner {
        background-color: $white;
        color: $dark-gray;
      }
    }
  }

  .portfolio-item-details {
    z-index: 1000;
    position: fixed;
    width: 100%;
    padding: 0 3rem;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    overflow: auto;
    text-align: center;

    @media all and (max-width: $breakpoint-mobile) {
      width: 100%;
      padding: 2rem 0 0;
    }

    p {
      text-align: left;
    }

    .portfolio-item-close {
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 1rem;
      z-index: 10;
      transition: $transition;
      color: $dark-gray;
      font-size: 1.5rem;

      &:hover {
        color: $link-color;
      }
    }
  }
}
</style>
