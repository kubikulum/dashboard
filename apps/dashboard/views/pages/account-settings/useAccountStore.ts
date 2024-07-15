import type { components } from '#open-fetch-schemas/kbk'
interface State {
  profileUser: components["schemas"]["User"] | undefined
  organizations: components["schemas"]["Organization"][],
  invitationPendings: components["schemas"]["Invitation"][]
}

export const useAccountStore = defineStore('account', {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    profileUser: undefined,
    organizations: [],
    invitationPendings:[]
  }),
  actions: {
    async fetchOrganizations() {
      const user = useLogtoUser()
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()
      let data = await $kbk('/api/users/{id}/organizations', { method: 'get', path: { id: user.sub }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      this.organizations = data || []

    },
    async fetchProfile() {
      const user = useLogtoUser()
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()

      let data = await $kbk('/api/users/{id}', {
        method: 'get', path: { id: user.sub }, headers: {
          'Authorization': `Bearer ${accessToken.value}`
        }
      })

      this.profileUser = data || undefined

    },
    async fetchInvitationPendings() {
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()

      this.invitationPendings = await $kbk('/api/invitations/pending', { method: 'get', headers: { 'Authorization': `Bearer ${accessToken.value}` } });
      
    },
    async acceptInvitation(invitationId: string) {
      const accessToken = useState<string | undefined>('access-token');
      const { $kbk } = useNuxtApp()
      await $kbk('/api/invitations/{id}/accept', { method: 'post', path: { id: invitationId }, headers: { 'Authorization': `Bearer ${accessToken.value}` } })
      this.fetchInvitationPendings()
      this.fetchOrganizations()
    },

    async updateProfile(profile: components["schemas"]["UserUpdateInput"]) {
      const accessToken = useState<string | undefined>('access-token');
      const senderId = this.profileUser?.id || '';
      const { $kbk } = useNuxtApp()

      // pre-rendering
      try {
        const data = await $kbk('/api/users/{id}',
          {
            method: 'patch', path: { id: senderId }, headers: { 'Authorization': `Bearer ${accessToken.value}` }, body: profile,
          })
        console.log(data)
        this.profileUser = data || undefined
      } catch (error) {
        console.log(error)
      }




    },
  },
})
