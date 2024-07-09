<script setup lang="ts">
import AddEditVolume from '@/components/dialogs/AddEditVolume.vue';


let isAddVolumeDialogVisible= ref(false)
type Volume = {
	id: string
	name: string
	storage_id: string
	storage_provider: string
	storage_name: string
	provisioning: 'dynamic' | 'static'
	uri: string
	created_at: string
}
const headers = [
	{ title: 'Volume', key: 'name', sortable: false },
	{ title: 'Storage', key: 'storage_name' },
	{ title: 'Provisioning', key: 'provisioning' },
	{ title: 'URI', key: 'uri' },
	{ title: 'Created', key: 'created_at' },
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

const volumes: Volume[] = [
	{
		id: '1',
		storage_id: '1',
		storage_name: 'Pipeline Artifact',
		storage_provider: 'AWS S3',
		name: 'artifact-store',
		provisioning: 'static',
		created_at: '2024-07-06 12:00:00',
		uri: 's3://bucket-name/artifact-store'
	}


]


</script>

<template>

	<div>
		<!-- 👉 clusters -->
		<VCard class="m-6">


			<div class="d-flex flex-wrap gap-4 ma-6">
				<span>A node is a virtual or physical machine where Kubernetes run the pods containing your workloads.
				</span>
				<VSpacer />
				<div class="d-flex gap-4 flex-wrap align-center">

					<VBtn color="primary" prepend-icon="tabler-plus"  @click="isAddVolumeDialogVisible = !isAddVolumeDialogVisible">
						Create volume
					</VBtn>
				</div>
				<AddEditVolume v-model:isDialogVisible="isAddVolumeDialogVisible" />
			</div>


			<!-- 👉 Datatable  -->
			<VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :headers="headers" show-select
				:items="volumes" class="text-no-wrap" @update:options="updateOptions">
				<!-- product  -->

				<template #item.name="{ item }">
					<div class="d-flex align-center">
						<VAvatar size="32" rounded="0" class="rounded" color="primary" icon="tabler-server">
						</VAvatar>
						<div class="d-flex flex-column ms-3">
							<span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.name
								}}</span>

						</div>
					</div>
				</template>

				<!-- createdAt -->
				<template #item.created_at="{ item }">
					<span class="text-body-1 text-high-emphasis">{{ $dayjs(item.created_at).fromNow() }}</span>
				</template>

				<!-- category -->
				<template #item.storage_name="{ item }">
					<div class="d-flex align-center">
						<VAvatar size="32" rounded="0" class="rounded" color="primary" icon="tabler-box">
						</VAvatar>
						<div class="d-flex flex-column ms-3">
							<span class="d-block font-weight-medium text-high-emphasis text-truncate">{{
								item.storage_name
								}}</span>
							<small>{{ item.storage_provider }}</small>

						</div>
					</div>
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
