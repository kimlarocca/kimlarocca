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
          v-for="(punchline, index) in punchlines.slice(0, 6)"
          :key="index"
          class="col col-4 md:col-3 lg:col-2 xl:col answer-card mx-2 mb-3"
          :class="punchline.category"
        >
          {{ punchline.punchline }}
        </div>
        <div class="col col-4 md:col-3 lg:col-2 xl:col answer-card mx-2 mb-3">
          <textarea
            type="text"
            class="w-full"
            placeholder="Enter your own punchline here!"
          />
        </div>
      </div>
      <button class="button cursor-pointer mb-6" @click="startNewRound">
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

// create special cards
let rubber = {
  category: 'SPECIAL',
  punchline:
    "I'm rubber, you're glue! (Block any card played by another player.)",
}
let discard = {
  category: 'SPECIAL',
  punchline: 'Discard a Diss Card! (Swap any card with another player.)',
}
let win = {
  category: 'SPECIAL',
  punchline: 'I know you are, but what am I? (Automatically win the round.)',
}
let whatever = {
  category: 'SPECIAL',
  punchline: 'What-eveeer. (Draw a new hand of cards.)',
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
  // add in the special cards 20 times each
  for (let i = 0; i < 20; i++) {
    punchlines.value.push(rubber)
    punchlines.value.push(discard)
    punchlines.value.push(win)
    punchlines.value.push(whatever)
  }
  // randomize the punchlines
  punchlines.value.sort(() => Math.random() - 0.5)
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
    &.SPECIAL {
      background-color: var(--blue);
      color: var(--white);
    }
  }
  textarea {
    height: 180px;
  }
}
</style>
