<script setup lang="ts">
import { VCol } from 'vuetify/components';


interface Volume {
  id?: string
  name: string
  storage_id: string
  provisioning: 'dynamic' | 'static'
  description: string
  subdirectory: string
}
interface Props {
  volume?: Volume
  isDialogVisible: boolean
}
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
  (e: 'submit', value: Volume): void
}

const props = withDefaults(defineProps<Props>(), {
  volume: () => ({
    name: '',
    storage_id: '',
    provisioning: 'static',
    subdirectory: '',
    description: '',
  }),
})

const emit = defineEmits<Emit>()

const volume = ref<Volume>(structuredClone(toRaw(props.volume)))

const resetForm = () => {
  emit('update:isDialogVisible', false)
  volume.value = structuredClone(toRaw(props.volume))
}

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
  emit('submit', volume.value)
}

const items = [{ id: 1, name: 'Storage 1', description: '', icon: 'custom-aws' }, { id: 2, name: 'Storage 2', description: '', icon: 'custom-gcp' }]

</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 600" :model-value="props.isDialogVisible"
    @update:model-value="val => $emit('update:isDialogVisible', val)">
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard v-if="props.volume" class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          {{ props.volume.id ? 'Edit' : 'Add New' }} Volume
        </h4>
        <p class="text-body-1 text-center mb-6">
          Add new volume to your cluster
        </p>


        <!-- 👉 Form -->
        <VForm @submit.prevent="onFormSubmit">
          <VRow>
            <VCol cols="12">
              <!-- <AppAutocomplete v-model="volume.storage_id" item-value="id" item-title="name" label="Storage"
                :items="items" placeholder="Select Storage">
                <template #item="{ props, item }">
                  <VListItem v-bind="props" :prepend-icon="item?.raw?.icon" :title="item?.raw?.name"
                    :subtitle="item?.raw?.description" />
                </template>
              </AppAutocomplete> -->
            </VCol>

            <VCol cols="12" >
              <div>Provisioning</div>
              <div>Static provisioning attaches volumes to pods at the storage root or a specific subdirectory. Dynamic
                provisioning
                creates a Persistent Volume Claim (PVC) in Kubernetes, automatically generating a Persistent Volume (PV)
                and a
                subdirectory.</div>
              <VRadioGroup v-model="volume.provisioning">
                <VRadio key="static" value="static" label="Static" />
                <VRadio key="dynamic" value="dynamic" label="Dynamic" />
              </VRadioGroup>
            </VCol>
            <VCol cols="12" >
              <AppTextField v-model="volume.subdirectory" label="Subdirectory" placeholder="Enter Subdirectory" />
            </VCol>
            <VCol cols="12" >
              <AppTextField v-model="volume.name" label="Name" placeholder="Enter Name" />
            </VCol>
            <VCol cols="12" >
              <AppTextField v-model="volume.description" label="Description" placeholder="Enter Description" />
            </VCol>

            <!-- 👉 Submit and Cancel button -->
            <VCol cols="12" class="text-center">
              <VBtn type="submit" class="me-3">
                submit
              </VBtn>

              <VBtn variant="tonal" color="secondary" @click="resetForm">
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
