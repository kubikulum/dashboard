<template>
  <div>

    <VBtn variant="text" :to="{ name: 'kubeflow-clusters-id-tab', params: { id: $route.params.id, tab: 'nodes' } }"
      prepend-icon="tabler-chevron-left">
      Back to nodes
    </VBtn>

    <VCard>
      <VCardText>

        <VRow>
          <VCol md="10" cols="12" class="mx-auto">
            <div class="d-flex flex-column align-center mb-8 mt-5">
              <h1 >Add a node</h1>
            </div>
            <VRow>
              <VCol cols="12" md="8">
                <VForm>

                  <h5 class="text-h5 mb-6">
                    1. Choose a Node type
                  </h5>
                  <CustomRadiosWithIcon v-model:selected-radio="formData.nodeType" :radio-content="radioContent"
                    :grid-column="{ sm: '4', cols: '12' }" />

                </VForm>
              </VCol>
            </VRow>
            <KubeflowDetailNodesCreateMarket v-if="formData.nodeType == 'market'" />
            <KubeflowDetailNodesAddANode v-else-if="formData.nodeType == 'self-managed'" />



          </VCol>


        </VRow>



      </VCardText>
    </VCard>

  </div>
</template>

<script lang="ts" setup>
import type { CustomInputContent } from '@/@core/types';

import KubeflowDetailNodesCreateMarket from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesCreateMarket.vue'
import KubeflowDetailNodesAddANode from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesAddANode.vue'

import { VBtn } from 'vuetify/components';
definePageMeta({
  navActiveLink: 'kubeflow-tab',
})

const formData = ref({
  nodeType: 'market',
})


const radioContent: CustomInputContent[] = [
  {
    title: 'Market',
    desc: 'From the market place.',
    value: 'market',
    icon: { icon: 'tabler-building-store', size: '32' },
  },
  {
    title: 'Self-Managed',
    desc: 'Bring your own node.',
    value: 'self-managed',
    icon: { icon: 'tabler-rocket', size: '32' },
  },

]


</script>

<style></style>