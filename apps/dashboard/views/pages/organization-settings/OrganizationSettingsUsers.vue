<script lang="ts" setup>
import { VBtn } from 'vuetify/components';
import { useOrganizationStore } from './useOrganizationStore';

import { storeToRefs } from 'pinia'

const store = useOrganizationStore()

const isAddDialogOpen = ref(false)

store.fetchOrganization()
store.fetchInvitations()
const { invitations } = storeToRefs(store)
watch(invitations, (val) => {
  console.log('invitations', val)
})


const resendInvitation = async (id: string) => {
  await store.resendInvitation(id)
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
    return { color: 'primary', text: 'Pending' }
  else if (status === 'ACCEPTED')
    return { color: 'success', text: 'Accepted' }
  else if (status === 'REJECTED')
    return { color: 'error', text: 'Rejected' }
}
</script>

<template>
  <div class="d-flex align-center">
    <p>Below is a list of users in this Organization.</p>
    <VBtn color="primary" class="ml-auto" @click="isAddDialogOpen = true">Add User</VBtn>
    <AddMOrganizationemberDialog :isDialogVisible="isAddDialogOpen"
      @update:isDialogVisible="isAddDialogOpen = $event" />

  </div>

  <VRow >
    <VCol cols="12">
      <VCard>
        <VCardText class="pt-2">
          <VDataTable :headers="headers" hide-default-footer :items="invitations">
            <template #item.status="{ item }">
              <VChip v-if="item.status" :color="resolveStatusVariant(item.status)?.color" class="font-weight-medium"
                size="small">
                {{ resolveStatusVariant(item.status)?.text }}
              </VChip>
            </template>
            <template #item.createdAt="{ item }">
              {{ $dayjs(item.createdAt).format('MMM D, YYYY') }} ({{ $dayjs(item.createdAt).fromNow() }})
            </template>
            <!-- Actions -->
            <template #item.actions="{ item }">
              <IconBtn v-if="item.status && item.status !== 'ACCEPTED'" @click="resendInvitation(item.id)">
                <VIcon icon="tabler-send" />
                <VTooltip activator="parent" location="top">
                  Resend Invitation
                </VTooltip>
              </IconBtn>
              <IconBtn v-if="item.status && item.status === 'ACCEPTED'">
                <VIcon icon="tabler-user-cancel" />
                <VTooltip activator="parent" location="top">
                  Block User
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
