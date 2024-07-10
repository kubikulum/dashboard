<script setup lang="ts">
import type { VForm } from 'vuetify/components';



interface Props {
  isDialogVisible: boolean
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
const emailField = ref('')
type Permission = 'Admin' | 'Editor'
interface Member {
  email: string
  permission: Permission
}

const formRef = ref<InstanceType<typeof VForm> | null>(null)
const membersList = ref<Member[]>([
])

const onClickEnterMember = async () => {
  if (!formRef.value) {
    return
  }
  const { valid } = await formRef.value.validate()
  console.log('valid',valid)
  if (valid) {
    membersList.value.push({
      email: emailField.value,
      permission: 'Editor',
    })
    emailField.value = ''
    formRef.value.reset()
    formRef.value.resetValidation()
  }
}
</script>

<template>
  <VDialog :model-value="props.isDialogVisible" :width="$vuetify.display.smAndDown ? 'auto' : 900"
    @update:model-value="dialogVisibleUpdate">
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard class="share-project-dialog pa-2 pa-sm-10">
      <VCardText>
        <h4 class="text-h4 text-center mb-2">
          Add Members
        </h4>
        <p class="text-body-1 text-center mb-6">
          Invite users to join your organization
        </p>
        <v-form ref="formRef" validate-on="submit lazy" @submit.prevent="onClickEnterMember">
          <AppTextField v-model="emailField" label="Add Member"
            placeholder="user@company.com" append-inner-icon="tabler-arrow-back" @click:append-inner="onClickEnterMember" :rules="[emailValidator]"
            single-line />
        </v-form>

        <h5 class="text-h5 mb-4 mt-6">
          8 Members
        </h5>

        <VList class="card-list">
          <VListItem v-for="member in membersList" :key="member.email">

            <VListItemSubtitle>
              {{ member.email }}
            </VListItemSubtitle>

            <template #append>
              <VBtn variant="text" color="secondary" :icon="$vuetify.display.xs">
                <span class="d-none d-sm-block me-1">{{ member.permission }}</span>
                <VIcon icon="tabler-chevron-down" />

                <VMenu activator="parent">
                  <VList :selected="[member.permission]">
                    <VListItem v-for="(item, index) in ['Admin', 'Editor']" :key="index" :value="item">
                      <VListItemTitle>{{ item }}</VListItemTitle>
                    </VListItem>
                  </VList>
                </VMenu>
              </VBtn>
            </template>
          </VListItem>
        </VList>

        <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-3 mt-6">
 

          <VBtn class="text-capitalize" prepend-icon="tabler-send">
            Send Invitations
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.share-project-dialog {
  .card-list {
    --v-card-list-gap: 1rem;
  }
}
</style>
