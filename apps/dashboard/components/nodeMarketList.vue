<script setup lang="ts">
import cudosSvg from '@images/svg/node-providers/cudos.svg';
import { VIcon } from 'vuetify/components';

type Node = {
  id: number
  provider:string
  providerId: string
  gpu_brand: string
  gpu_type: string
  number_of_gpu: number
  cpu_cores: number
  memory: string
  vram: string
  price: number
  billing_type: 'on-demand' |'reserved'
  billing_period: 'hour' | 'month' 

}
const headers = [
  { title: 'Provider', key: 'provider' },
  { title: 'GPU', key: 'gpu_type' },
  { title: 'GPU RAM', key: 'vram' },
  { title: 'VCPU', key: 'cpu_cores' },
  { title: 'Memory', key: 'memory' },
  { title: 'Price', key: 'price' },
]

const selectedStatus = ref()
const selectedCategory = ref()
const selectedStock = ref<boolean | undefined>()
const searchQuery = ref('')

const status = ref([
  { title: '1', value: 1 },
  { title: '2', value: 2 },
  { title: '4', value: 4 },
  { title: '8', value: 8 },
])

const gpuType = ref([
  { title: 'Nvidia L4', value: 'nvidia_l4' },
  { title: 'Nvidia A100', value: 'nvidia_a100' },
  { title: 'Nvidia H100', value: 'nvidia_h100' },
  { title: 'Nvidia A40', value: 'nvidia_a40' },
])

const stockStatus = ref([
  { title: 'Monthly', value: true },
  { title: 'Hourly', value: false },
])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}


const resolveStatus = (statusMsg: string) => {
  if (statusMsg === 'Scheduled')
    return { text: 'Scheduled', color: 'warning' }
  if (statusMsg === 'Published')
    return { text: 'Publish', color: 'success' }
  if (statusMsg === 'Inactive')
    return { text: 'Inactive', color: 'error' }
}


const products: Node[] = [
  {
    "id": 50,
    provider: 'Cudo',
    providerId: 'cudo',
    gpu_brand: 'Nvidia',
    gpu_type: 'A10',
    number_of_gpu: 4,
    cpu_cores: 16,

    memory: '64 GB',
    vram: '32 GB',
    price: 0.5,
    billing_type: 'on-demand',
    billing_period: 'hour'

    
  },
  {
    "id": 51,
    provider: 'Cudo',
    providerId: 'cudo',
    gpu_brand: 'Nvidia',
    gpu_type: 'L4',
    number_of_gpu: 2,
    cpu_cores: 8,
    memory: '32 GB',
    vram: '16 GB',
    price: 0.5,
    billing_type: 'on-demand',
    billing_period: 'hour'
  },
  {
    "id": 52,
    provider: 'Vast.ai',
    providerId: 'vastai',
    gpu_brand: 'Nvidia',
    gpu_type: 'A10',
    number_of_gpu: 4,
    cpu_cores: 16,

    memory: '64 GB',
    vram: '32 GB',
    price: 0.5,
    billing_type: 'on-demand',
    billing_period: 'hour'
  },
  {
    "id": 53,
    provider: 'latitude.sh',
    providerId: 'latitude',
    gpu_brand: 'Nvidia',
    gpu_type: 'A100',
    number_of_gpu: 8,
    cpu_cores: 112,
    memory: '64 GB',
    vram: '32 GB',
    price: 8669,
    billing_type: 'on-demand',
    billing_period: 'month'
  },
  
]
const totalProduct = products.length


</script>

<template>
  <div>


    <VRow class="my-6">
      <!-- 👉 Select Status -->
      <VCol cols="12" sm="4">
        <AppAutocomplete v-model="selectedStatus" placeholder="GPU Model" :items="gpuType" clearable clear-icon="tabler-x" />
      </VCol>

      <!-- 👉 Select Category -->
      <VCol cols="12" sm="4">
        <AppSelect v-model="selectedCategory" placeholder="GPU Number" :items="status" clearable
          clear-icon="tabler-x" />
      </VCol>

      <!-- 👉 Select Stock Status -->
      <VCol cols="12" sm="4">
        <AppSelect v-model="selectedStock" placeholder="Billing period" :items="stockStatus" clearable clear-icon="tabler-x" />
      </VCol>
    </VRow>


    <VDivider />

    <div class="d-flex flex-wrap gap-4 my-6">
      <div class="d-flex align-center">
        <!-- 👉 Search  -->
        <AppTextField v-model="searchQuery" placeholder="Search Product" style="inline-size: 200px;" class="me-3" />
      </div>

    </div>

    <VDivider class="mt-4" />

    <!-- 👉 Datatable  -->
    <VDataTableServer v-model:items-per-page="itemsPerPage" select-strategy="single" v-model:page="page"
      :headers="headers" show-select :items="products" :items-length="totalProduct" class="text-no-wrap"
      @update:options="updateOptions">



      <!-- gpu -->
      <template #item.gpu_type="{ item }">
        {{ item.number_of_gpu }}x {{ item.gpu_brand }} {{ item.gpu_type }}
        
      </template>

      <template #item.price="{ item }">
        {{ $n(item.price , 'currency')}}/{{ item.billing_period }}
        
      </template>




        <!-- stock -->
      <template #item.stock="{ item }">
        <VSwitch :model-value="item.stock" />
      </template>

      <!-- status -->
      <template #item.status="{ item }">
        <VChip v-bind="resolveStatus(item.status)" density="default" label size="small" />
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="tabler-edit" />
        </IconBtn>

        <IconBtn>
          <VIcon icon="tabler-dots-vertical" />
          <VMenu activator="parent">
            <VList>
              <VListItem value="download" prepend-icon="tabler-download">
                Download
              </VListItem>

              <VListItem value="delete" prepend-icon="tabler-trash" @click="deleteProduct(item.id)">
                Delete
              </VListItem>

              <VListItem value="duplicate" prepend-icon="tabler-copy">
                Duplicate
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>
      </template>

      <!-- pagination -->
      <template #bottom>
        <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalProduct" />
      </template>
    </VDataTableServer>
  </div>
</template>
