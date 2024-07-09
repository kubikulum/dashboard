<script setup lang="ts">


type Node = {
	id: string
	name: string
	provider: string
	gpu: string	
	created: string
	type: string
	region: string
	status: string
}
const headers = [
	{ title: 'Name', key: 'name', sortable: false },
	{ title: 'Type', key: 'type' },
	{ title: 'Region', key: 'region' },
	{ title: 'Provider', key: 'provider' },
	{title:'GPU',key:'gpu'},
	{ title: 'Created', key: 'created' },

	{ title: 'Status', key: 'status' },
	{ title: 'Actions', key: 'actions' },
]



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
	if (statusMsg === 'Running')
		return { text: 'Running', color: 'success' }
	if (statusMsg === 'Inactive')
		return { text: 'Inactive', color: 'error' }
}


const clusters: Node[] = [
	{
		id: '1',
		name: 'abx-cudocompute-f11d5ebb9b',
		gpu: '4 x A10',
		provider: 'Cudo compute',
		type:'market',
		created: '2024-07-06',
		region: 'us-central1',
		status: 'Running',
	},
	{
		id: '2',
		name: 'abx-cudocompute-f11d5ebb9b',
		gpu: '8 x H100',
		type: 'self-managed',
		provider: 'Leader GPU',
		created: '2024-07-01',
		region: 'us-central1',
		status: 'Running',
	},


]
const totalClusters = clusters.length


</script>

<template>

	<div>
		<!-- 👉 clusters -->
		<VCard class="m-6">


			<div class="d-flex flex-wrap gap-4 ma-6">
				<span>A node is a virtual or physical machine where Kubernetes run the pods containing your workloads. </span>
				<VSpacer />
				<div class="d-flex gap-4 flex-wrap align-center">

					<VBtn color="primary" prepend-icon="tabler-plus" to="./add-node"
						>
						Add a node
					</VBtn>
				</div>
			</div>


			<!-- 👉 Datatable  -->
			<VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :headers="headers" show-select
				:items="clusters" :items-length="totalClusters" class="text-no-wrap" @update:options="updateOptions">
				<!-- product  -->

				<template #item.name="{ item }">
					<div class="d-flex align-center">
						<VAvatar size="32" rounded="0" class="rounded"   color="primary"  icon="tabler-cpu">
						</VAvatar>
						<div class="d-flex flex-column ms-3">
							<span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.name
								}}</span>

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
