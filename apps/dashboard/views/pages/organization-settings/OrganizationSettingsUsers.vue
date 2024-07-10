<script lang="ts" setup>
import { VBtn } from 'vuetify/components';
import { useOrganizationStore } from './useOrganizationStore';

const store = useOrganizationStore()
const members = computed(() => store.members)
const organization = computed(() => store.organization)
const isAddDialogOpen = ref(false)

await store.fetchOrganization()
await store.fetchMembers()

const headers = [
  { title: 'Email', sortable: true, key: 'email' },
  { name: 'First Name', key: 'firstName' },
  { title: 'Groups', key: 'fullName' },
  { title: 'MFA', key: 'email' },
  { title: 'Joined On', key: 'startDate' },
]


</script>

<template>
  <div class="d-flex align-center">
  <p>Below is a list of users in this Organization.</p>
  <VBtn color="primary" class="ml-auto" @click="isAddDialogOpen = true">Add User</VBtn>
  <AddMOrganizationemberDialog :isDialogVisible="isAddDialogOpen" @update:isDialogVisible="isAddDialogOpen = $event" />
  
  </div>

  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText class="pt-2">
          <VDataTable :headers="headers" :items="members" :items-per-page="5"></VDataTable>
        </VCardText>
      </VCard>
    </VCol>


  </VRow>

</template>
