<template>
  <div>
    <VForm>
      <VRow>
        <VCol cols="12" md="8">

          <h5 class="text-h5 mb-6">
            2. Choose a Region
          </h5>
          <CustomRadiosWithIcon v-model:selected-radio="formData.region" :radio-content="radioRegion"
            :grid-column="{ sm: '4', cols: '12' }" />
        </VCol>
      </VRow>

      <h5 class="text-h5 mb-6">
        3. Select your node
      </h5>
      <VTabs>
        <VTab v-for="item in tabs" :value="item.tab"
          :to="{ name: 'kubeflow-clusters-id-tab', params: { id: $route.params.id, tab: item.tab } }">
          {{ item.title }}
        </VTab>
      </VTabs>
      <NodeMarketList></NodeMarketList>
      <h5 class="text-h5 mb-6">
        4. Enter a name and optional tags
      </h5>
      <div class=" gap-4">
        <AppTextField label="Node name" />
        <AppAutocomplete label="Tags" placeholder="Select tags" chips multiple closable-chips />
      </div>
      <VBtn size="large" class="mt-6" block type="submit" color="primary">Add Node</VBtn>
    </VForm>
  </div>
</template>

<script lang="ts" setup>
import type { CustomInputContent } from '@/@core/types';
import usSvg from '@images/svg/flag-united-states.svg'
import europeSvg from '@images/svg/flag-european-union.svg';
import worldSvg from '@images/svg/world-map.svg';

const formData = ref({
  region: 'eu-west-1',
  nodeType: 'market',
})


const radioRegion: CustomInputContent[] = [
  {
    title: 'Europe',
    value: 'eu-west-1',
    icon: { icon: europeSvg, size: '32' },
  },
  {
    title: 'USA',

    value: 'us-east-1',
    icon: { icon: usSvg, size: '32' },
  },
  {
    title: 'Everywhere',
    value: 'all',
    icon: { icon: worldSvg, size: '32' },
  }


]

const tabs = [
  { title: 'GPU', tab: 'gpu' },
  { title: 'CPU', tab: 'cpu' }
]

</script>

<style></style>