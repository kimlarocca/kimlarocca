<template>
  <div v-if="punchlines" class="diss-card text-center">
    <h1 class="mb-6">Diss Card Admin</h1>
    <div class="text-left">
      <p class="mb-4">
        <strong>
          Possible Judge Cards:
          {{ subjects.length * adjectives.length }}
        </strong>
      </p>
      <p class="mb-1">
        <u>Subjects ({{ subjects.length }})</u>
      </p>
      <p class="mb-1" v-for="(subject, index) in subjects" :key="index">
        {{ subject.subject }}
      </p>
      <p class="mt-4 mb-1">
        <u>Adjectives ({{ adjectives.length }})</u>
      </p>
      <p
        class="mb-1"
        v-for="(adjective, index) in punchlineCounts"
        :key="index"
      >
        {{ index }} ({{ adjective }})
      </p>
      <p class="mt-4 mb-1">
        <u>Punchlines ({{ punchlines.length }})</u>
        <i class="pi pi-plus ml-2 cursor-pointer" @click="adding = true" />
      </p>
      <p v-for="(punchline, index) in punchlines" :key="index" class="mb-1">
        <diss-card-punchline
          :punchline="punchline"
          @punchlines-updated="getPunchlines"
          @punchlines-deleted="refreshPage"
        />
      </p>
    </div>
    <Dialog
      v-model:visible="adding"
      modal
      header="Add A Punchline"
      :style="{ width: '50vw' }"
    >
      <diss-card-add-punchline @punchlines-updated="getPunchlines" />
    </Dialog>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

definePageMeta({
  layout: 'blank',
})

const config = useRuntimeConfig()
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const adding = ref(false)
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
const getPunchlines = async () => {
  let { data: punchlinesData } = await supabase
    .from('punchlines')
    .select('*')
    .order('id')
  if (punchlinesData) {
    punchlines.value = punchlinesData
    adding.value = false
  }
}

// refresh the page
const refreshPage = () => {
  location.reload()
}

getPunchlines()

// computed property that counts how many punchlines are in each category
const punchlineCounts = computed(() => {
  const counts = {}
  punchlines.value.forEach((punchline) => {
    counts[punchline.category] = counts[punchline.category] + 1 || 1
  })
  // remove the LIKE category from the counts object
  delete counts.LIKE
  return counts
})
</script>

<style lang="scss">
.diss-card {
  h1 {
    color: var(--black);
    @media (max-width: 769px) {
      font-size: 3.5rem;
    }
  }
}
</style>
