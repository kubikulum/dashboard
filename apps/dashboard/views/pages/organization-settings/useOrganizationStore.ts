import type { components } from '#open-fetch-schemas/kbk'

interface State {
  members: components["schemas"]["User"][]
  organization: components["schemas"]["Organization"] | undefined
  currentOrganization: Ref<any>
  invitations: components["schemas"]["Invitation"][]
}

export const useOrganizationStore = defineStore('organizationSettings', {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    members: [],
    organization: undefined,
    currentOrganization: useCookie<string>('current-organization'),
    invitations: []
  }),
  actions: {
    async sendInvitations(invitations: any[]) {
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/organizations/{id}/invitations', {
        method: 'POST', path: { id: this.currentOrganization },
        headers: { 'Authorization': `Bearer ${accessToken.value}` },
        body: invitations
      })
      await this.fetchInvitations();
      return data;
    },
    async fetchOrganization() {
      const accessToken = useState<string | undefined>('access-token');

      let { data } = await useLazyKbk('/api/organizations/{id}', { method: 'get', path: { id: this.currentOrganization }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      if (data.value) {
        this.organization = data.value
      }

    },
    async fetchMembers() {

      const accessToken = useState<string | undefined>('access-token');
      
      let { data } = await useLazyKbk('/api/organizations/{id}/organizationMembers', { method: 'get', path: { id: this.currentOrganization }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      if (data.value) {
        this.members = data.value
      }

    },
    async revokeInvitation(invitationId: string){
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/invitations/{id}', { method: 'delete', path: { id: invitationId }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      await this.fetchInvitations();
    },
    async fetchInvitations() {
      const accessToken = useState<string | undefined>('access-token');
      let { data,error } = await useLazyKbk('/api/organizations/{id}/invitations', { method: 'get', path: { id: this.currentOrganization }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      console.log('current', this.currentOrganization)
      console.log('data invitation',data.value)
      console.log('error',error.value)
      if (data.value) {
        this.invitations = data.value
      }
    },
    async resendInvitation(invitationId: string) {
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/invitations/{id}/resend', { method: 'post', path: { id: invitationId }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      await this.fetchOrganization();
    }

  },
})
