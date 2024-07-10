import type { components } from '#open-fetch-schemas/kbk'

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
      const accessToken = useState<string | undefined>('access-token');
      const currentOrganization = useState<string>('current-organization')
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/organizations/{id}', { method: 'get', path: { id: currentOrganization.value }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      this.organization = data 

    },
    async fetchMembers() {
      const user = useLogtoUser()
      const accessToken = useState<string | undefined>('access-token');
      const currentOrganization = useState<string>('current-organization')
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/organizations/{id}/members', { method: 'get', path: { id:  currentOrganization.value }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      this.members = data 

    },

  },
})
  