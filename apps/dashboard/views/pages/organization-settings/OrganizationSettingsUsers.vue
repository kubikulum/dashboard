<script lang="ts" setup>
import { VBtn } from 'vuetify/components';
import { useOrganizationStore } from './useOrganizationStore';

import { storeToRefs } from 'pinia'

const store = useOrganizationStore()

const isAddDialogOpen = ref(false)

store.fetchOrganization()
store.fetchInvitations()
store.fetchMembers()
const { invitations, members } = storeToRefs(store)

watch(invitations, (val) => {

  console.log('invitations', val)
})

const allMembers = computed(() => {
  return [...members.value.map((val)=>({...val,isInvitation:false })), ...invitations.value.filter((i) => i.status === 'PENDING').map((val)=>({...val,isInvitation:true }))]
})


const resendInvitation = async (id: string) => {
  await store.resendInvitation(id)
}
const revokeInvitation = async (id: string) => {
  console.log('revokeInvitation', id)
  await store.revokeInvitation(id)
}

const headers = [
  { title: 'Email', sortable: true, key: 'email' },
  { name: 'First Name', key: 'firstName' },
  { title: 'Groups', key: 'fullName' },

  { title: 'Joined On', key: 'createdAt' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions' }
]

const resolveStatusVariant = (status: string) => {
  if (status === 'PENDING')
    return { color: 'primary', text: 'Pending Invitation' }

  else if (status === 'BLOCKED')
    return { color: 'error', text: 'blocked' }
  else  
    return { color: 'success', text: 'Activated' }
}
</script>

<template>
  <div class="d-flex align-center">
    <p>Below is a list of users in this Organization.</p>
    <VBtn color="primary" class="ml-auto" @click="isAddDialogOpen = true">Add User</VBtn>
    <AddMOrganizationemberDialog :isDialogVisible="isAddDialogOpen" @submit="isAddDialogOpen = false"
      @update:isDialogVisible="isAddDialogOpen = $event" />

  </div>

  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText class="pt-2">
          <VDataTable :headers="headers" hide-default-footer :items="allMembers">
            <template #item.email="{ item }">
              {{ item.email ?  item.email : item.user.email }}
            </template>
            <template #item.status="{ item }">
              <VChip  :color="resolveStatusVariant(item.status)?.color" class="font-weight-medium"
                size="small">
                {{ resolveStatusVariant(item.status)?.text }}
              </VChip>
            </template>
            <template #item.createdAt="{ item }">
              <div v-if="!item.isInvitation">
              {{ $dayjs(item.createdAt).format('MMM D, YYYY') }} ({{ $dayjs(item.createdAt).fromNow() }})
              </div>
            </template>
            <!-- Actions -->
            <template #item.actions="{ item }">
              <IconBtn v-if="item.isInvitation" @click="resendInvitation(item.id)">
                <VIcon icon="tabler-send" />
                <VTooltip activator="parent" location="top">
                  Resend Invitation
                </VTooltip>
              </IconBtn>
              <IconBtn v-if="!item.isInvitation ">
                <VIcon icon="tabler-user-cancel" />
                <VTooltip activator="parent" location="top">
                  Block User
                </VTooltip>
              </IconBtn>
              <IconBtn v-if="item.isInvitation" @click="revokeInvitation(item.id)">
                <VIcon icon="tabler-send-off" />
                <VTooltip activator="parent" location="top">
                  Revoke invitation
                </VTooltip>
              </IconBtn>

              <IconBtn v-if="item.status === 'ACCEPTED'">
                <VIcon icon="tabler-eye" />
              </IconBtn>

            </template>

          </VDataTable>
        </VCardText>
      </VCard>
    </VCol>


  </VRow>

  

</template>
