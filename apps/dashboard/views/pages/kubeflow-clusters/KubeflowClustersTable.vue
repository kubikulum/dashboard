<script setup lang="ts">


type KubeflowCluster = {
	id: string
	name: string
	created: string
	region: string
	tags: string[]
	kubeflowVersion: string
	status: string
}
const headers = [
	{ title: 'Name', key: 'name', sortable: false },
	{ title: 'Created', key: 'created' },
	{ title: 'Region', key: 'region' },
	{ title: 'Tag', key: 'tags' },

	{ title: 'Status', key: 'status' },
	{ title: 'Actions', key: 'actions' },
]

const selectedStatus = ref()
const selectedCategory = ref()
const selectedStock = ref<boolean | undefined>()
const searchQuery = ref('')

const status = ref([
	{ title: 'Scheduled', value: 'Scheduled' },
	{ title: 'Publish', value: 'Published' },
	{ title: 'Inactive', value: 'Inactive' },
])

const categories = ref([
	{ title: 'Accessories', value: 'Accessories' },
	{ title: 'Home Decor', value: 'Home Decor' },
	{ title: 'Electronics', value: 'Electronics' },
	{ title: 'Shoes', value: 'Shoes' },
	{ title: 'Office', value: 'Office' },
	{ title: 'Games', value: 'Games' },
])

const stockStatus = ref([
	{ title: 'In Stock', value: true },
	{ title: 'Out of Stock', value: false },
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

const resolveCategory = (category: string) => {
	if (category === 'Accessories')
		return { color: 'error', icon: 'tabler-device-watch' }
	if (category === 'Home Decor')
		return { color: 'info', icon: 'tabler-home' }
	if (category === 'Electronics')
		return { color: 'primary', icon: 'tabler-device-imac' }
	if (category === 'Shoes')
		return { color: 'success', icon: 'tabler-shoe' }
	if (category === 'Office')
		return { color: 'warning', icon: 'tabler-briefcase' }
	if (category === 'Games')
		return { color: 'primary', icon: 'tabler-device-gamepad-2' }
}

const resolveStatus = (statusMsg: string) => {
	if (statusMsg === 'Scheduled')
		return { text: 'Scheduled', color: 'warning' }
	if (statusMsg === 'Running')
		return { text: 'Running', color: 'success' }
	if (statusMsg === 'Inactive')
		return { text: 'Inactive', color: 'error' }
}


const clusters: KubeflowCluster[] = [
	{
		id: '1',
		name: 'Cluster 1',
		created: '2024-03-01',
		region: 'us-central1',
		kubeflowVersion: '1.8',
		tags: ['tag1', 'tag2'],
		status: 'Running',
	},
	{
		id: '2',
		name: 'Cluster 2',
		created: '2024-05-01',
		region: 'us-central1',
		kubeflowVersion: '1.8',
		tags: [],
		status: 'Running',
	}


]
const totalClusters = clusters.length


</script>

<template>

	<div>
		<!-- 👉 clusters -->
		<VCard class="mb-6">


			<div class="d-flex flex-wrap gap-4 ma-6">
				<span>Clusters are sets of machines, called nodes, running containerized applications managed by
					Kubernetes</span>
				<VSpacer />
				<div class="d-flex gap-4 flex-wrap align-center">

					<VBtn color="primary" prepend-icon="tabler-plus"
						@click="$router.push('/apps/ecommerce/product/add')">
						Create Cluster
					</VBtn>
				</div>
			</div>


			<!-- 👉 Datatable  -->
			<VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :headers="headers" show-select
				:items="clusters" :items-length="totalClusters" class="text-no-wrap" @update:options="updateOptions">
				<!-- product  -->

				<template #item.name="{ item }">
					<div class="d-flex align-center">
						<VAvatar size="32" rounded="0" icon="custom-kubeflow-color">
						</VAvatar>
						<div class="d-flex flex-column ms-3">
							<NuxtLink  :to="{name:'kubeflow-clusters-id-tab',params:{id:item.id,tab:'overview'}}" class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.name
								}}</NuxtLink >
							<small>Kubeflow v{{ item.kubeflowVersion }}</small>
						</div>
					</div>
				</template>

				<!-- createdAt -->
				<template #item.created="{ item }">
					<span class="text-body-1 text-high-emphasis">{{ $dayjs(item.created).fromNow() }}</span>
				</template>

				<!-- category -->
				<template #item.category="{ item }">
					<VAvatar size="30" variant="tonal" :color="resolveCategory(item.category)?.color" class="me-4">
						<VIcon :icon="resolveCategory(item.category)?.icon" size="18" />
					</VAvatar>
					<span class="text-body-1 text-high-emphasis">{{ item.category }}</span>
				</template>

				<!-- tags -->
				<template #item.tags="{ item }">

					<VChip v-if="item.tags.length" v-for="tag in item.tags" :label="false">
						{{ tag }}
					</VChip>
					<span v-else>no tags</span>

				</template>

				<!-- status -->
				<template #item.status="{ item }">
					<VChip v-bind="resolveStatus(item.status)" density="default" label size="small" />
				</template>

				<!-- Actions -->
				<template #item.actions="{ item }">


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

				</template>
			</VDataTableServer>
		</VCard>
	</div>
</template>
