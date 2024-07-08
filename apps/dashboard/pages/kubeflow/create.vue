<script lang="ts" setup>
import type { CustomInputContent } from '@/@core/types';
import europe from '@images/svg/flag-european-union.svg'
import usa from '@images/svg/flag-united-states.svg';

import KubeflowDetailNodesCreateMarket from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesCreateMarket.vue'
import KubeflowDetailNodesAddANode from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesAddANode.vue'

import { VBtn, VCombobox, VDivider, VIcon, VRow } from 'vuetify/components';
definePageMeta({
  navActiveLink: 'kubeflow-tab',
})

const formData = ref({
  nodeType: 'market',
})


const region: CustomInputContent[] = [
  {
    title: 'Paris',
    value: 'FR_PAR',
    icon: { icon: europe, size: '32' },
  },
  {
    title: 'Ohio',
    value: 'US_OH',
    icon: { icon: usa, size: '32' },
  },
]

type feature = {
  name: string;
  description?: string;


}

type Pricing = {
  id: number;
  title: string;
  value: string;
  memory: string;
  high_avaibility: boolean;
  users: number;
  customDomainName: boolean;
  auditLog: boolean;
  price: number;

}

const features: feature[] = [
  {
    name: 'Memory',
    description: 'The quantity of RAM provided to the API server. In many cases, 4 GB is good to begin with',

  },
  {
    name: 'Users',
    description: 'The number of available Kubeflow users',

  },
  {
    name: 'High Availability',
    description: 'Designated for minimal downtime by doubling every instance in multiple zones',

  },
  {
    name: 'Custom Domain Name',
    description: 'Add you domain name to your kubeflow dashboard',

  },
  {
    name: 'Audit logs',
    description: 'Keep track of all the actions performed on your kubeflow cluster',
  },

]
const pricing: Pricing[] = [
  {
    id: 1,
    title: 'Mutualized',
    value: 'mutualized',
    memory: 'Up to 4 GB',
    users: 1,
    high_avaibility: false,
    customDomainName: false,
    auditLog: false,
    price: 0,
  },
  {
    id: 2,
    title: 'Dedicated 1',
    value: 'dedicated1',
    memory: '4 GB dedicated',
    users: 5,
    high_avaibility: true,
    customDomainName: true,

    auditLog: true,
    price: 150,
  }
  , {
    id: 1,
    title: 'Dedicated 2',
    value: 'dedicated2',
    memory: '8 GB dedicated',
    users: 10,
    high_avaibility: true,
    customDomainName: true,

    auditLog: true,
    price: 300,
  },

]

const kubeflowVersion: CustomInputContent[] = [
  {
    title: '1.8',
    value: '1.8',
  },
  {
    title: '1.7',
    value: '1.7',
  },
  {
    title: '1.6',
    value: '1.6',
  }
]


</script>

<style></style>
<template>
  <div>

    <VBtn variant="text" :to="{ name: 'kubeflow-tab', params: { tab: 'clusters' } }" prepend-icon="tabler-chevron-left">
      Back to kubeflow clusters
    </VBtn>

    <VCard>
      <VCardText>

        <VRow>
          <VCol md="10" cols="12" class="mx-auto">
            <div class="d-flex flex-column align-center mb-8 mt-5">
              <h1>Create a kubeflow cluster</h1>
            </div>

                <VForm class="d-flex gap-4 flex-column">
                  <FormStep stepNumber="1" title="Choose a region">
                    <template #description>
                      A region refers to the geographical location in which the cluster will be created.
                    </template>
                    <CustomRadios v-model:selected-radio="formData.nodeType" :radio-content="region"
                      :grid-column="{ sm: '4', cols: '12' }" />
                  </FormStep>
                  <FormStep stepNumber="2" title="Choose an offer">
                    <template #description>
                      Upgrade to a dedicated control plane to benefit from additional features such
                      as single-tenant, guaranteed resources, improved performances and high-availability.
                    </template>
                    <div class="d-flex flex-row">
                      <div class="d-flex flex-column align-left gap-4 pa-4">
                        <div>&nbsp;</div>
                        <div class="text-h5">Features</div>
                        <div>&nbsp;</div>
                        <div v-for="feature in features" class="font-weight-medium">
                          {{ feature.name }}
                          <VTooltip v-if="feature.description" location="top">
                            <template #activator="{ props }">
                              <VIcon size="14" v-bind="props" icon="tabler-info-circle-filled" />
                            </template>
                            <span>{{ feature.description }}</span>
                          </VTooltip>

                        </div>

                      </div>





                      <CustomRadiosWithIcon v-model:selected-radio="formData.nodeType" :radio-content="pricing"
                        :grid-column="{ sm: '4', cols: '12' }">
                        <template #default="items">
                          <div class="d-flex flex-column align-center ">

                            <div>
                              <span class="bg-primary rounded-pill px-4 py-2">{{ items.item.title }}</span>
                            </div>
                            <div class="my-6 align-center d-flex flex-column">
                              <div>{{ items.item.price > 0 ? $n(items.item.price, 'currency') : 'free' }}</div>
                              <div>{{ items.item.price > 0 ? '/Month' : '&nbsp;' }}</div>
                            </div>
                            <VDivider />
                            <div class="d-flex flex-column align-center gap-4">
                              <div>{{ items.item.memory }}</div>
                              <div>{{ items.item.users }}</div>
                              <div>
                                <VIcon :icon="items.item.high_avaibility ? 'tabler-check' : 'tabler-x'" />
                              </div>
                              <div>
                                <VIcon :icon="items.item.customDomainName ? 'tabler-check' : 'tabler-x'" />
                              </div>

                              <div>
                                <VIcon :icon="items.item.auditLog ? 'tabler-check' : 'tabler-x'"></VIcon>
                              </div>
                            </div>



                          </div>

                        </template>
                      </CustomRadiosWithIcon>

                    </div>
                    <div class="caption">
                      The monthly price displayed is indicative only. The service is billed on an hourly basis.


                    </div>

                  </FormStep>
                  <FormStep step-number="3" title="Choose a Kubeflow version">
                    <CustomRadios v-model:selected-radio="formData.nodeType" :radio-content="kubeflowVersion"
                      :grid-column="{ sm: '4', cols: '12' }" />
                  </FormStep>
                  <FormStep step-number="5" title="Enter a name and optional tags">
                    <AppTextField label="Node name" />
                    <AppTextField label="Description" />
                    <AppCombobox label="Tags" placeholder="Select tags" :items="[]" multiple />
                  </FormStep>
                  <VBtn size="large" class="mt-6" block type="submit" color="primary">Create Kubeflow cluster</VBtn>
                </VForm>

          </VCol>
        </VRow>
      </VCardText>
    </VCard>

  </div>
</template>
