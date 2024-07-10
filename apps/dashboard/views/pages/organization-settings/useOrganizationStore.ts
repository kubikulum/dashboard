import type { components } from '#open-fetch-schemas/kbk'
import type { OrganizationCookie } from '@/server/routes/switch-organization.get'
interface State {
  members: components["schemas"]["User"][] 
  organization: components["schemas"]["Organization"] | undefined
}

export const useOrganizationStore = defineStore('organizationSettings', {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    members: [],
    organization: undefined
  }),
  actions: {
    async fetchOrganization() {
      const user = useLogtoUser()
      const organizationCookie = useCookie<OrganizationCookie>('organization')
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/organizations/{id}', { method: 'get', path: { id: organizationCookie.value.organization.id }, headers: { 'Authorization': `Bearer ${organizationCookie.value.organizationAccessToken}` } })
      this.organization = data 

    },
    async fetchMembers() {
      const user = useLogtoUser()
      const organizationCookie = useCookie<OrganizationCookie>('organization')
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/organizations/{id}/members', { method: 'get', path: { id: organizationCookie.value.organization.id }, headers: { 'Authorization': `Bearer ${organizationCookie.value.organizationAccessToken}` } })
      this.members = data 

    },

  },
})
