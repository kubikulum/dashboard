<script lang="ts" setup>
import { themeConfig } from '@themeConfig'
definePageMeta({
	layout: 'blank'
})
const user = useLogtoUser()
const accessToken = useState<string | undefined>('access-token');

const { $kbk } = useNuxtApp()
let pendingInvitations = await $kbk('/api/invitations/pending', { method: 'get', headers: { 'Authorization': `Bearer ${accessToken.value}` } })
const invitation = pendingInvitations[0];

const onCLickJoin = async () => {
	await $kbk('/api/invitations/{id}/accept', { method: 'post', path: { id: pendingInvitations[0].code }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
	navigateTo('/', { external: true })
}
</script>

<template>
	<div class="auth-wrapper d-flex align-center justify-center pa-4">
		<div class="position-relative my-sm-16">
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
						You've Been Invited to Join an Organization! 🚀
					</h4>
					<p class="mb-0">
						Welcome! accept your invitation and become a part of our community.
					</p>
					<div class="d-flex mt-4">
						<VBtn block @click.prevent="onCLickJoin">
							Join {{ invitation.organization.name }}
						</VBtn>
					</div>
				</VCardText>

			</VCard>
		</div>
	</div>

</template>