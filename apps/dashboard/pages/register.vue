<script setup lang="ts">
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { last } from '@antfu/utils'
import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg?raw'
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg?raw'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

definePageMeta({
	layout: 'blank',
	middleware: [
		async function (to, from) {
			const user = useLogtoUser()
			console.log('user', user)
			// if user is already part of an organization, redirect to main page
			if (user.organization_data && user.organization_data.length > 0) {
				return navigateTo('/')
			}
		}
	]
})

const user = useLogtoUser()
const accessToken = useState<string | undefined>('access-token');

const form = ref({
	firstName: '',
	lastName: '',
	organizationName: '',
	privacyPolicies: false,
})

const onFormSubmit = async () => {

	const { $kbk } = useNuxtApp()
	// Update User
	await $kbk('/api/users/{id}', { method: 'PATCH', path: { id: user.sub }, body: { firstName: form.value.firstName, lastName: form.value.lastName }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
	// Create organization
	const organization = await $kbk('/api/organizations', { method: 'POST', body: { name: form.value.organizationName }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })

	// redirect to main page
	navigateTo('/',{external:true})
}

</script>

<template>
	<div class="auth-wrapper d-flex align-center justify-center pa-4">
		<div class="position-relative my-sm-16">
			<!-- 👉 Top shape -->

			<!-- 👉 Auth card -->
			<VCard class="auth-card" max-width="460" :class="$vuetify.display.smAndUp ? 'pa-6' : 'pa-0'">
				<VCardItem class="justify-center">
					<VCardTitle>
						<div class="app-logo">
							<VNodeRenderer :nodes="themeConfig.app.logo" />
							<h1 class="app-logo-title">
								{{ themeConfig.app.title }}
							</h1>
						</div>
					</VCardTitle>
				</VCardItem>

				<VCardText>
					<h4 class="text-h4 mb-1">
						Adventure starts here 🚀
					</h4>
					<p class="mb-0">
						One little step to start your adventure with us.
					</p>
				</VCardText>

				<VCardText>
					<VForm @submit.prevent="onFormSubmit">
						<VRow>

							<VCol cols="6">
								<AppTextField v-model="form.firstName" autofocus label="First Name"
									:rules="[requiredValidator, alphaValidator]" />
							</VCol>

							<VCol cols="6">
								<AppTextField v-model="form.lastName" label="Last Name"
									:rules="[requiredValidator, alphaValidator]" />
							</VCol>

							<VCol cols="12">
								<AppTextField v-model="form.organizationName" label="Organization Name"
									placeholder="Your organization name" />
							</VCol>


							<VCol cols="12">

								<div class="d-flex align-center my-6">
									<VCheckbox id="privacy-policy" v-model="form.privacyPolicies" inline />
									<VLabel for="privacy-policy" style="opacity: 1;">
										<span class="me-1 text-high-emphasis">I agree to</span>
										<a href="javascript:void(0)" class="text-primary">privacy policy & terms</a>
									</VLabel>
								</div>

								<VBtn block type="submit">
									Sign up
								</VBtn>
							</VCol>

						</VRow>
					</VForm>
				</VCardText>
			</VCard>
		</div>
	</div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
