<script setup lang="ts">


type ObjectStorage = {
	id: string
	name: string
	provider: string
	uri: string
	slug: string
	created_at: string
}
const headers = [
	{ title: 'Name', key: 'name', sortable: false },
	{title: 'uri',key:'uri'},
	{ title: 'Created', key: 'created' },
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






const clusters: ObjectStorage[] = [
	{
		id: '1',
		name: 'Pipeline Artifact',
		slug: 'pipeline-artifact',
		provider: 'AWS S3',
		uri: 's3://bucket-name',
		created_at: '2024-07-06',
	},



]
const totalClusters = clusters.length


</script>

<template>

	<div>
		<!-- 👉 clusters -->
		<VCard class="mb-6">


			<div class="d-flex flex-wrap gap-4 ma-6">
				<span class="">Kubernetes applications can mount block devices and filesystems, or can use the S3/Swift API for object storage</span>
				<VSpacer />
				<div class="d-flex  align-center">

					<VBtn color="primary" prepend-icon="tabler-plus" to="./add-storage">
						Add Storage
					</VBtn>
				</div>
			</div>


			<!-- 👉 Datatable  -->
			<VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :headers="headers" show-select
				:items="clusters" :items-length="totalClusters" class="text-no-wrap" @update:options="updateOptions">
				<!-- product  -->

				<template #item.name="{ item }">
					<div class="d-flex align-center">
						<VAvatar size="32" rounded="0" color="primary" class="rounded" icon="tabler-box">
						</VAvatar>
						<div class="d-flex flex-column ms-3">
							<NuxtLink   class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.name
								}}</NuxtLink >
							<small>{{ item.provider }}</small>
						</div>
					</div>
				</template>

				<!-- createdAt -->
				<template #item.created="{ item }">
					<span class="text-body-1 text-high-emphasis">{{ $dayjs(item.created_at).fromNow() }}</span>
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
