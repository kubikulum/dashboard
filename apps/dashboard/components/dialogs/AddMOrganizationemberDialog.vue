<script setup lang="ts">
import { useOrganizationStore } from '@/views/pages/organization-settings/useOrganizationStore';
import type { VForm } from 'vuetify/components';

interface Props {
  isDialogVisible: boolean
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'submit', value: any): void
}
const store = useOrganizationStore()

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const roles = ['admin', 'member']
const emailField = ref('')

type Permission = 'admin' | 'member'
interface Member {
  email: string
  role: Permission
}

const formRef = ref<InstanceType<typeof VForm> | null>(null)
const membersList = ref<Member[]>([
])

// on visible reset the form
watch(() => props.isDialogVisible, (val) => {
  if (val) {
    membersList.value = [];
    formRef.value?.reset()
    formRef.value?.resetValidation()
  }
})

const memberValidator = (email: string) => {

  const members =  store.members;
  const validMember = members.some((member) => member.user?.email === email || member.invitation?.email === email)

  return !validMember || 'User is already a member'
}

const onClickEnterMember = async () => {
  if (!formRef.value ) {
    return
  }
  const { valid } = await formRef.value.validate()

  if (valid) {
    membersList.value.push({
      email: emailField.value,
      role: 'member',
    })
    emailField.value = ''
    formRef.value.reset()
    formRef.value.resetValidation()
  }
}

const onClickSendInvitations = async () => {
  const emails = membersList.value.map((member) => member.email)
  const invitations = await store.sendInvitations(membersList.value)
  emit('submit', invitations)
}
</script>

<template>
  <VDialog :model-value="props.isDialogVisible" :width="$vuetify.display.smAndDown ? 'auto' : 500"
    @update:model-value="dialogVisibleUpdate">
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard class="share-project-dialog pa-2 pa-sm-4">
      <VCardText>
        <h4 class="text-h4 text-center mb-2">
          Add Members
        </h4>
        <!-- <p class="text-body-1 text-center mb-6">
          Invite users to join your organization
        </p> -->
        <v-form ref="formRef" validate-on="submit lazy" @submit.prevent="onClickEnterMember">
          <AppTextField v-model="emailField" label="Add Member" placeholder="user@company.com"
            append-inner-icon="tabler-arrow-back" @click:append-inner="onClickEnterMember" 
            :rules="[requiredValidator,emailValidator,memberValidator]"
            single-line />
        </v-form>

        <VList v-if="membersList.length > 0" class="my-10">
          <VListItem v-for="member in membersList" border :key="member.email">

            <VListItemSubtitle>
              {{ member.email }}
            </VListItemSubtitle>

            <template #append>
              <AppSelect :items="roles" v-model="member.role" flat  />
            </template>
          </VListItem>
        </VList>
        <div v-else class="py-10">
          <p class="text-center">No invitations added yet</p>
          <p class="text-center">Enter an email and click enter</p>
        </div>

        <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-3 mt-6">


          <VBtn @click.prevent="onClickSendInvitations" class="text-capitalize" prepend-icon="tabler-send">
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
