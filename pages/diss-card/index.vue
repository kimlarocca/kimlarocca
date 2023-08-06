<template>
  <div v-if="punchlines" class="diss-card text-center">
    <diss-card-logo class="lg:mt-4 mb-2" />
    <template v-if="cards && cards[cardIndex]">
      <div class="relative w-fit m-auto mb-4">
        <div class="card">
          <span v-if="dissOff">DISS OFF!</span>
          Your {{ cards[cardIndex].subject }} is so
          {{ cards[cardIndex].adjective }}...
        </div>
        <Button
          class="p-button-outlined p-button-rounded refresh"
          icon="pi pi-refresh"
          aria-label="Filter"
          @click="refreshCard"
          v-tooltip="'Swap this card out'"
        />
      </div>
      <div class="grid mx-2 mt-4 mb-6 justify-content-center">
        <div
          v-for="(punchline, index) in punchlines.slice(0, 6)"
          :key="index"
          class="col col-12 sm:col-6 md:col-4 lg:col-2 xl:col answer-card mx-2 mb-3 relative"
          :class="punchline.category"
        >
          <div>
            {{ punchline.punchline }}
          </div>
          <Button
            class="p-button-outlined p-button-rounded remove"
            icon="pi pi-refresh"
            aria-label="remove card"
            @click="removePunchline(index)"
            v-tooltip="'Swap this card out'"
          />
        </div>
        <div
          class="col col-12 sm:col-6 md:col-4 lg:col-2 xl:col answer-card mx-2 mb-3"
        >
          <textarea
            type="text"
            class="w-full"
            placeholder="Enter your own diss here!"
          />
        </div>
      </div>
      <button class="button cursor-pointer mb-6" @click="startNewGame">
        Start A New Game
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
const dissOff = ref(false)
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
let dismiss = {
  category: 'SPECIAL',
  punchline:
    "I'm rubber, you're glue! DISMISS any card played by another player.",
}
let disallow = {
  category: 'SPECIAL',
  punchline: "DISALLOW! Target player can't play a card.",
}
let disowned = {
  category: 'SPECIAL',
  punchline:
    'DISOWNED! Take any card another player has played and use it yourself.',
}
let disscard = {
  category: 'SPECIAL',
  punchline: 'Nothing beats DISS CARD! Automatically win the round.',
}
let disemboweled = {
  category: 'SPECIAL',
  punchline: 'DISEMBOWELED! Target player must draw a new hand of cards.',
}
let disheveled = {
  category: 'SPECIAL',
  punchline: `DISHEVELED! Swap any player's hand with another player's hand.`,
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
  dissOff.value = Math.random() < 0.2
}

const startNewGame = () => {
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
    punchlines.value.push(dismiss)
    punchlines.value.push(disowned)
    punchlines.value.push(disemboweled)
    punchlines.value.push(disallow)
    punchlines.value.push(disheveled)
  }
  // add in the auto-win card 10 times
  for (let i = 0; i < 10; i++) {
    punchlines.value.push(disscard)
  }
  // randomize the punchlines
  punchlines.value.sort(() => Math.random() - 0.5)
}

// remove punchline from punchlines array using the index
const removePunchline = (index) => {
  punchlines.value.splice(index, 1)
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
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.4;
    color: var(--black);
    display: inline;
    &.SPECIAL {
      background-color: var(--blue);
      color: var(--white);
      font-weight: bold;
    }
  }
  textarea {
    height: 180px;
  }
  .refresh,
  .remove {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .refresh {
    color: var(--white);
  }
  .remove {
    height: 1.75rem !important;
    width: 1.75rem;
  }
}
</style>
