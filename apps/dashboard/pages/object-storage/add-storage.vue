<script lang="ts" setup>
import type { CustomInputContent } from '@/@core/types';
import alibaba from '@images/svg/storage-providers/alibaba.svg'
import awsLight from '@images/svg/storage-providers/aws.svg'
import azureLight from '@images/svg/storage-providers/azure.svg'
import gcpLight from '@images/svg/storage-providers/gcp.svg'
import ibm from '@images/svg/storage-providers/ibm.svg'
import minio from '@images/svg/storage-providers/minio.svg'
import oracle from '@images/svg/storage-providers/oracle.svg'
import scaleway from '@images/svg/storage-providers/scaleway.svg'

import KubeflowDetailNodesCreateMarket from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesCreateMarket.vue'
import KubeflowDetailNodesAddANode from '@/views/pages/kubeflow-clusters/details/nodes/KubeflowDetailNodesAddANode.vue'

import { VBtn, VCombobox } from 'vuetify/components';
definePageMeta({
  navActiveLink: 'object-storage-tab',
})

const formData = ref({
  nodeType: 'market',
})


const radioContent: CustomInputContent[] = [
  {
    title: 'Amazon s3',
    value: 'aws_s3',
    icon: { icon: awsLight, size: '32' },
  },
  {
    title: 'GCS',
    value: 'gcp_gcs',
    icon: { icon: gcpLight, size: '32' },
  },
  {
    title: 'Azure Blob',
    value: 'azure_blob',
    icon: { icon: azureLight, size: '32' },
  },
  {
    title: 'Minio',
    value: 'minio',
    icon: { icon: minio, size: '32' },
  },
  {
    title: 'Alicloud OSS',
    value: 'alicloud_oss',
    icon: { icon: alibaba, size: '32' },
  },
  // {
  //   title: 'IBM COS',
  //   value: 'ibm_cos',
  //   icon: { icon: ibm, size: '32' },
  // },
  // {
  //   title: 'Oracle COS',
  //   value: 'oracle_cos',
  //   icon: { icon: oracle, size: '32' },
  // },
  {
    title: 'Scaleway OS',
    value: 'scaleway_os',
    icon: { icon: scaleway, size: '32' },
  },

]


</script>

<style></style>
<template>
  <div>

    <VBtn variant="text" :to="{ name: 'object-storage-tab', params: { tab: 'storages' } }"
      prepend-icon="tabler-chevron-left">
      Back to storages
    </VBtn>

    <VCard>
      <VCardText>

        <VRow>
          <VCol md="10" cols="12" class="mx-auto">
            <div class="d-flex flex-column align-center mb-8 mt-5">
              <h1>Add a storage</h1>
            </div>
            <VRow>
              <VCol cols="12" md="12">
                <VForm>

                  <h5 class="text-h5 mb-6">
                    1. Choose a type of storage
                  </h5>
                  <CustomRadiosWithIcon v-model:selected-radio="formData.nodeType" :radio-content="radioContent"
                    :grid-column="{ sm: '4', cols: '12' }" />
                  <h5 class="text-h5 mb-6">
                    4. Storage information
                  </h5>
                  <div class=" gap-4">
                    <AppTextField label="Bucket name">
                    </AppTextField>
                    <AppTextField label="Region">
                    </AppTextField>
                  </div>
                  <h5 class="text-h5 mb-6">
                    4. Credentials
                  </h5>
                  <div class=" gap-4">
                    <AppAutocomplete label="secret" placeholder="Select Secret" chips multiple closable-chips />
                  </div>
                  <h5 class="text-h5 mb-6">
                    4. Enter a name and optional tags
                  </h5>
                  <div class=" gap-4">
                    <AppTextField label="Node name" />
                    <AppCombobox label="Tags" placeholder="Select tags" :items="[]" multiple />
                  </div>
                  <VBtn size="large" class="mt-6" block type="submit" color="primary">Add Storage</VBtn>
                </VForm>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

  </div>
</template>
