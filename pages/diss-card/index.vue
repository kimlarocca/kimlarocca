<template>
  <div v-if="punchlines" class="diss-card text-center">
    <h1 class="mb-6">Diss Card</h1>
    <template v-if="cards && cards[cardIndex]">
      <div class="card">
        Your {{ cards[cardIndex].subject }} is so
        {{ cards[cardIndex].adjective }}...
      </div>
      <Button
        class="p-button-outlined p-button-rounded refresh mb-4"
        icon="pi pi-refresh"
        aria-label="Filter"
        @click="refreshCard"
        v-tooltip="'Select a new card'"
      />
      <div class="grid mt-4 mb-6 justify-content-center">
        <div
          v-for="(punchline, index) in punchlines.slice(0, 7)"
          :key="index"
          class="col col-4 md:col-3 lg:col-2 xl:col answer-card mx-2 mb-3"
        >
          {{ punchline.punchline }}
        </div>
      </div>
      <button class="button cursor-pointer" @click="startNewRound">
        Start A New Round
      </button>
    </template>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

definePageMeta({
  layout: 'blank',
})

const config = useRuntimeConfig()
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const adjectives = ref(null)
const cards = ref([])
const cardIndex = ref(0)
const punchlines = ref(null)
const subjects = ref(null)

// get subjects from supabase
let { data: subjectsData } = await supabase
  .from('subjects')
  .select('*')
  .order('subject')
if (subjectsData) {
  subjects.value = subjectsData
}

// get adjectives from supabase
let { data: adjectivesData } = await supabase
  .from('adjectives')
  .select('*')
  .order('adjective')
if (adjectivesData) {
  adjectives.value = adjectivesData
}

// populate the cards array with all possible combinations of the subjects and adjectives arrays
for (let i = 0; i < subjects.value.length; i++) {
  for (let j = 0; j < adjectives.value.length; j++) {
    cards.value.push({
      subject: subjects.value[i].subject,
      adjective: adjectives.value[j].adjective,
    })
  }
}
// then randomize the cards
cards.value.sort(() => Math.random() - 0.5)

const refreshCard = () => {
  cardIndex.value++
}

const startNewRound = () => {
  // randomize the punchlines
  punchlines.value.sort(() => Math.random() - 0.5)
  // go to the next card
  if (cards.value?.length - 1 === cardIndex.value) {
    // if we're at the end of the cards array, start over
    cards.value.sort(() => Math.random() - 0.5)
    cardIndex.value = 0
  } else {
    refreshCard()
  }
}

// get punchlines from supabase
let { data: punchlinesData } = await supabase
  .from('punchlines')
  .select('*')
  .order('id')
if (punchlinesData) {
  punchlines.value = punchlinesData
}
</script>

<style lang="scss">
.diss-card {
  h1 {
    color: var(--black);
    @media (max-width: 769px) {
      font-size: 3.5rem;
    }
  }
  .cards {
    display: flex;
  }
  .judge {
    position: relative;
  }
  .card {
    background-color: var(--black);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(33, 33, 33, 0.1);
    padding: 20px;
    width: 220px;
    max-width: 100%;
    min-height: 320px;
    margin: 20px auto;
    text-align: left;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.4;
    color: var(--white);
  }
  .answer-card {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(33, 33, 33, 0.1);
    padding: 20px;
    min-height: 225px;
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    color: var(--black);
    display: inline;
    cursor: pointer;
    opacity: 1;
    transition: var(--transition);
    &:hover {
      opacity: var(--opacity-on-hover);
    }
  }
}
</style>
