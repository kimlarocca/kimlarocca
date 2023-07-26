<template>
  <div v-if="editing">
    <select
      v-model="category"
      class="w-3 mr-2 mb-2"
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
    <InputText
      class="w-full mb-2"
      v-model="punchlineText"
      @keypress.enter="updatePunchline"
    />
    <Button class="button" label="Save Changes" @click="updatePunchline" />
    <i
      class="pi pi-times text-2xl ml-2 cursor-pointer"
      @click="editing = false"
      v-tooltip="'close editor'"
    />
  </div>
  <p v-else>
    ({{ punchline.category }}) {{ punchline.punchline }}
    <i class="pi pi-pencil ml-2 cursor-pointer" @click="editing = true" />
    <i class="pi pi-trash ml-2 cursor-pointer" @click="deleting = true" />
  </p>
  <Dialog
    v-model:visible="deleting"
    modal
    header="Delete This Meeting"
    :style="{ width: '50vw' }"
  >
    <p class="mb-4">Are you sure you want to delete this punchline?</p>
    <h4 class="mb-4">{{ punchline.punchline }}</h4>
    <Button
      class="p-button-danger"
      @click="deletePunchline"
      label="Yes, Delete This Punchline"
    />
  </Dialog>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

const props = defineProps({
  punchline: {
    type: Object,
    default: {},
    required: true,
  },
})
const category = ref(props.punchline.category)
const config = useRuntimeConfig()
const emit = defineEmits(['punchlinesUpdated', 'punchlinesDeleted'])
const deleting = ref(false)
const editing = ref(false)
const punchlineText = ref(props.punchline.punchline)
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const updatePunchline = async () => {
  const { data, error } = await supabase
    .from('punchlines')
    .update({ category: category.value, punchline: punchlineText.value })
    .eq('id', props.punchline.id)
  if (error) {
    console.log(error)
  } else {
    editing.value = false
    // emit update to parent component
    emit('punchlinesUpdated', true)
  }
}

const deletePunchline = async () => {
  const { data, error } = await supabase
    .from('punchlines')
    .delete()
    .eq('id', props.punchline.id)
  if (error) {
    console.log(error)
  } else {
    deleting.value = false
    // emit update to parent component
    emit('punchlinesDeleted', true)
  }
}
</script>
