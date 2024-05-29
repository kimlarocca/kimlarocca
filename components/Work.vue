<template>
  <section id="work">
    <div class="container black py-4 lg:py-8">
      <h2 class="mb-4 lg:mb-6">
        From thousand dollar websites to billion dollar websites, I've got you
        covered.
      </h2>
    </div>
    <div class="portfolio">
      <portfolio-card
        v-for="(portfolioItem, index) in portfolioItems"
        :key="index"
        :backgroundImage="portfolioItem.image"
        :image="portfolioItem.url"
        :title="portfolioItem.name"
        :description="portfolioItem.description"
        :vimeo="portfolioItem.vimeo"
      />
    </div>
  </section>
</template>

<script>
import portfolioItems from '../assets/json/portfolio.json'

export default {
  data () {
    return {
      portfolioItems: portfolioItems,
    }
  },
}
</script>
