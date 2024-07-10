import type { components } from '#open-fetch-schemas/kbk'
interface State {
  profileUser: components["schemas"]["User"] | undefined
  organizations: components["schemas"]["Organization"][]
}

export const useAccountStore = defineStore('account', {
  // ℹ️ arrow function recommended for full type inference
  state: (): State => ({
    profileUser: undefined,
    organizations: []
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
