<script lang="ts" setup>
import { useOrganizationStore } from './useOrganizationStore';

const store = useOrganizationStore()
await store.fetchOrganization()
await store.fetchMembers()
const members = computed(() => store.members)
const organization = computed(() => store.organization)
console.log(store.organization,store.members)

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>


        <VCardText class="pt-2">
          <!-- 👉 Form -->
          
        </VCardText>
      </VCard>
    </VCol>

    
  </VRow>

 </template>
