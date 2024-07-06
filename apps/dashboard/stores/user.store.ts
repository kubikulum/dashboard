interface Auth {
  organizationAccessToken?: string | null
}


export const useOrganizationStore = defineStore('user', {
  state: (): Auth => ({
    organizationAccessToken: null
  }),
  actions: {
    async switchOrganization(organizationId: string) {
      const user = useLogtoUser();
      const client = useLogtoClient();
      const currentOrganization = useCookie<any>('currentOrganization')
      const organizationFound =  user.organization_data.find((org: any) => org.id === organizationId);
      if (!organizationFound) {
        throw new Error('Organization not found');
      }
      currentOrganization.value = organizationFound;
      const organizationToken = await client?.getOrganizationToken(organizationId);

      this.organizationAccessToken = organizationToken;
    }
  }

}
)