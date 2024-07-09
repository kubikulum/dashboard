<script setup lang="ts">
</script>
<template>
	<div class="d-flex pb-4">
		<h3>Cluster information</h3>
		<div class="v-spacer"></div>
		<div class="">
			<VBtn color="primary" prepend-icon="tabler-external-link">
				Kubeflow Platform
			</VBtn>
		</div>
	</div>
	<VRow>
		<!-- 👉 Current Plan -->
		<VCol cols="12">
			<VCard>
				<VCardText>
					<VRow>
						<VCol cols="12" md="6">
							<div class="d-flex flex-column flex-sm-row gap-16 ">
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Status</div>
									<h6 class="text-body-1">Ready</h6>
								</div>
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Kubeflow Version</div>
									<h6 class="text-body-1">1.8</h6>
								</div>
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Kubernetes Version</div>
									<h6 class="text-body-1">1.27.10</h6>
								</div>
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Plan</div>
									<h6 class="text-body-1">Dedicated 1</h6>
								</div>
							</div>
						</VCol>
						<VDivider class="my-6" />

						<VCol cols="12" md="6">
							<div class="d-flex flex-column flex-sm-row gap-16">
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Created</div>
									<h6 class="text-body-1">2 Hours ago</h6>
								</div>
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Updated</div>
									<h6 class="text-body-1">2 Hours ago</h6>
								</div>
								<div class="d-flex flex-column  gap-y-2">

									<div class=" text-h6 text-wrap ">Region</div>
									<h6 class="text-body-1">Fr - Paris 1</h6>
								</div>
							</div>
						</VCol>



					</VRow>
					<div class="mt-8">
						<div class="d-flex flex-column gap-y-2">
							<div>
								<span class="font-weight-bold">id : </span>
								<span>f23c167b-e0bb-4a67-8428-03fa5cd22e16</span>
							</div>
							<div>
								<span class="font-weight-bold">URL Kubeflow : </span>
								<span>https://f23c167b-e0bb-4a67-8428-03fa5cd22e16.abx.com </span>
							</div>
							<div>
								<span class="font-weight-bold">URL Kubernetes : </span>
								<span>https://f23c167b-e0bb-4a67-8428-03fa5cd22e16.abx.com </span>
							</div>
						</div>
					</div>
					<VDivider class="my-6" />
					<div class="mt-8">
						<div class="font-weight-bold">Description:</div>
						<div class="py-8">
							Click here to add description
						</div>

					</div>


				</VCardText>
			</VCard>
		</VCol>

	</VRow>
	<VRow>
		<VCol cols="4">
			<VCard title="Download kubeconfig">
				<VCardText class="d-flex align-center flex-wrap">
					<span class="ms-2">A kubeconfig file is used to organize information about clusters, users,
						namespaces and authentication mechanisms. Learn more about kubeconfig files.

					</span>
					<VBtn prepend-icon="tabler-download" class="mt-4  flex-grow-1" color="primary">Download kubeconfig</VBtn>
				</VCardText>
			</VCard>
		</VCol>
	</VRow>
</template>