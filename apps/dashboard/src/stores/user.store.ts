import { UserInfoResponse, useLogto } from "@logto/vue";
import { baseUrl } from "./../utils/constants";
import { RemovableRef, useLocalStorage } from "@vueuse/core";
interface State {
  auth: RemovableRef<Auth | null>
}

interface Auth {
  isAuthenticated: boolean
  user?: UserInfoResponse | null,
  accessToken?: string | null,
  organizationAccessToken?: string | null,
  currentOrganization: any | null
}



export const userSessionStore = defineStore('userSession', () => {
  const { fetchUserInfo, signOut, getAccessToken, getOrganizationToken } = useLogto();
  const auth = useLocalStorage<Auth | null>('auth', {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    organizationAccessToken: null,
    currentOrganization: null,
  })


  async function login() {

    const userInfo = await fetchUserInfo();
    const currentOrganization = userInfo.organization_data[0];
    auth.value = {
      isAuthenticated: true,
      user: userInfo,
      accessToken: await getAccessToken(),
      currentOrganization: {},
      organizationAccessToken: null
    }
    await switchOrganization(currentOrganization.id);

  }

  async function switchOrganization(organizationId: string) {
    if (auth.value) {
      auth.value.currentOrganization = auth.value.user?.organization_data.find((org: any) => org.id === organizationId);
    }
    const organizationToken = await getOrganizationToken(organizationId);
    if (auth.value) {
      auth.value.organizationAccessToken = organizationToken;
    }

  }

  function logout() {
    auth.value = {
      isAuthenticated: false,
      user: null,
      accessToken: null,
      currentOrganization: null,
      organizationAccessToken: null
    }
    signOut(baseUrl);
  }

  return {
    auth,
    login,
    logout,
    switchOrganization
  }

})


