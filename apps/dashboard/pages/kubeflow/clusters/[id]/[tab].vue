<script lang="ts" setup>
import KubeflowClustersTable from '@/views/pages/kubeflow-clusters/KubeflowClustersTable.vue'


const route = useRoute('kubeflow-clusters-id-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'Overview', tab: 'overview' },
  { title: 'Nodes', tab: 'nodes' },
  { title: 'Kubeflow Users', tab: 'kubeflow-users' },
  {title:'Volumes',tab:'volumes'},
  {title:'Namespaces',tab:'namespaces'},
  {title:'Settings',tab:'settings'},

]

definePageMeta({
    navActiveLink: 'kubeflow-tab',
})
</script>

<template>
  	<h2 class="mb-3">AI Team</h2>
  <div>
    <VTabs
      v-model="activeTab"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'kubeflow-clusters-id-tab', params: { id:$route.params.id, tab: item.tab } }"
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
      <!-- <VWindowItem value="clusters">
        <KubeflowClustersTable />
      </VWindowItem> -->

 

    </VWindow>
  </div>
</template>
