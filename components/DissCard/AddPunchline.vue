<template>
  <div>
    <label for="category" class="mb-4">
      <p>Category</p>
      <select
        id="category"
        v-model="category"
        class="w-full"
        placeholder="Select a category"
      >
        <option value="FAT">FAT</option>
        <option value="BALD">BALD</option>
        <option value="HAIRY">HAIRY</option>
        <option value="LIKE">LIKE</option>
        <option value="NASTY">NASTY</option>
        <option value="OLD">OLD</option>
        <option value="POOR">POOR</option>
        <option value="SHORT">SHORT</option>
        <option value="SKINNY">SKINNY</option>
        <option value="STUPID">STUPID</option>
        <option value="TALL">TALL</option>
        <option value="UGLY">UGLY</option>
      </select>
    </label>
    <label for="punchline" class="mb-4">
      <p>Punchline</p>
      <InputText
        id="punchline"
        v-model="punchline"
        class="w-full"
        placeholder="Enter a punchline"
      />
    </label>
    <Button class="p-button" @click="addPunchline" label="Add Punchline" />
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

const category = ref('')
const config = useRuntimeConfig()
const emit = defineEmits(['punchlinesUpdated'])
const punchline = ref('')
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

// function that adds a punchline
const addPunchline = async () => {
  const { data, error } = await supabase
    .from('punchlines')
    .insert([{ category: category.value, punchline: punchline.value }])
  if (error) {
    console.log(error)
  } else {
    // reset form
    category.value = ''
    punchline.value = ''
    // emit update to parent component
    emit('punchlinesUpdated', true)
  }
}
</script>
