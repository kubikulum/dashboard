<script lang="ts" setup>

import KubeflowClusterDetailOverview from '@/views/pages/kubeflow-clusters/details/KubeflowDetailOverview.vue'
import KubeflowClusterDetailNodes from '@/views/pages/kubeflow-clusters/details/KubeflowDetailNodes.vue'
import KubeflowClusterDetailUsers from '@/views/pages/kubeflow-clusters/details/KubeflowDetailUser.vue'
import KubeflowClusterDetailVolumes from '@/views/pages/kubeflow-clusters/details/KubeflowDetailVolumes .vue'

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
  { title: 'Volumes', tab: 'volumes' },
  { title: 'Settings', tab: 'settings' },

]

definePageMeta({
  navActiveLink: 'kubeflow-tab',
})
</script>

<template>
      <VBtn variant="text" :to="{ name: 'kubeflow-tab', params:{tab:'clusters'} }"
      prepend-icon="tabler-chevron-left">
      Back to Clusters
    </VBtn>

  <div class="d-flex align-center">

    <VIcon size="44"
       icon="custom-kubeflow-color"

    />
    <div class="d-flex flex-column ms-3">
      <h2 class="d-block font-weight-medium text-high-emphasis text-truncate">AI Team</h2>
      <small>Kubeflow v1.8</small>
    </div>
  </div>
  <h2 class="mb-3"></h2>
  <div>
    <VTabs v-model="activeTab">
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab"
        :to="{ name: 'kubeflow-clusters-id-tab', params: { id: $route.params.id, tab: item.tab } }">
        <!-- <VIcon size="20" start :icon="item.icon" /> -->
        {{ item.title }}
      </VTab>
    </VTabs>


    <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false" >

      <VWindowItem value="overview">
        <KubeflowClusterDetailOverview />
      </VWindowItem>
      <VWindowItem value="nodes">
        <KubeflowClusterDetailNodes />
      </VWindowItem>

    <VWindowItem value="kubeflow-users">
        <KubeflowClusterDetailUsers />
      </VWindowItem>

    <VWindowItem value="volumes">
        <KubeflowClusterDetailVolumes />
      </VWindowItem>
    </VWindow>
  </div>
</template>
