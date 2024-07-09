<script lang="ts" setup>
import ObjectStorageTable from '@/views/pages/object-storage/ObjectStorageTable.vue'


const route = useRoute('object-storage-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'Storage', tab: 'storages' },
  { title: 'Secrets', tab: 'secrets' },
]

definePageMeta({
    navActiveLink: 'object-storage-tab',
})
</script>

<template>
  	<h2 class="mb-3">Object Storage</h2>
  <div>
    <VTabs
      v-model="activeTab"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'object-storage-tab', params: { tab: item.tab } }"
      >
        
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="storages">
        <ObjectStorageTable />
      </VWindowItem>

 

    </VWindow>
  </div>
</template>
