<script lang="ts" setup>
import KubeflowClustersTable from '@/views/pages/kubeflow-clusters/KubeflowClustersTable.vue'


const route = useRoute('kubeflow-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'clusters', tab: 'clusters' },
]
console.log('tabs', tabs)

definePageMeta({
    navActiveLink: 'kubeflow-tab',
})
</script>

<template>
  	<h2 class="mb-3">Kubeflow clusters</h2>
  <div>
    <VTabs
      v-model="activeTab"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'kubeflow-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="clusters">
        <KubeflowClustersTable />
      </VWindowItem>

 

    </VWindow>
  </div>
</template>
