<script setup lang="ts">


interface UserData {
  id: string | null
  firstName: string
  lastName: string
  email?: string
}

interface Props {
  userData?: UserData
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: UserData): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
  }),
})

console.log(props.userData)

const emit = defineEmits<Emit>()

const userData = ref<UserData>(structuredClone(toRaw(props.userData)))

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
  emit('submit', userData.value)
}


const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 500" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-2 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          Edit your account profile
        </h4>

        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>

            <VCol cols="12">
              <AppTextField v-model="userData.firstName" label="First Name" :rules="[requiredValidator]" />
            </VCol>
            <VCol cols="12">
              <AppTextField v-model="userData.lastName" label="Last Name" :rules="[requiredValidator]" />
            </VCol>
            <VCol cols="12">
              <AppTextField aria-required="true" v-model="userData.email" label="Email address"
                :rules="[requiredValidator]" />
            </VCol>


            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit" block>
                Confirm Changes
              </VBtn>


            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
