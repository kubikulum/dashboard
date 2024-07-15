<script setup lang="ts">
const router = useRouter();
const userData = useLogtoUser();
const currentOrganization = useCookie<any>('current-organization');


const organizations = computed(() => {
  return userData?.organization_data.filter((org) => org.id !== currentOrganization.value)
})

const currentOrganizationInfo = computed(() => {
  return userData?.organization_data.find((org) => org.id === currentOrganization.value)
})


const onSelectOrganization = (organizationId: string) => {
  if(!organizationId) return
  currentOrganization.value = organizationId;
  console.log('organizationId', organizationId)
  location.reload(); // reload the page
};

const userProfileList = [
  { type: 'navItem', icon: 'tabler-settings', title: 'Settings', to: { name: 'organization-settings-tab', params: { tab: 'organization' } } },
  { type: 'navItem', icon: 'tabler-users-group', title: 'members', to: { name: 'organization-settings-tab', params: { tab: 'users' } } },
  { type: 'navItem', icon: 'tabler-file-description', title: 'Billing', to: { name: 'organization-settings-tab', params: { tab: 'billing' } } },
  { type: 'navItem', icon: 'tabler-key', title: 'API Key', to: { name: 'organization-settings-tab', params: { tab: 'security' } } },
  { type: 'divider' },
  { type: 'navItem', icon: 'tabler-user', title: 'Profile', to: { name: 'account-settings-tab', params: { tab: 'profile' } } },
]
// console.log(userData)
</script>

<template>

  <!-- SECTION Menu -->
  <VMenu location="bottom end">
    <template #activator="{ props }">
      <div class="d-flex align-center cursor-pointer" v-bind="props">

        <div>
          <span class="d-block font-weight-medium text-truncate">organization</span>
          <span class="font-weight-normal">{{ currentOrganizationInfo?.name }}</span>
        </div>
        <VAvatar class="d-flex flex-column ms-3" size="32" color="primary" variant="tonal">
          <span>{{ avatarText(currentOrganizationInfo?.name) }}</span>
        </VAvatar>
      </div>
    </template>

    <VList nav :lines="false" style="padding: 0;">

      <!-- List Organizations -->
      <VListItem @click.prevent="onSelectOrganization(org.id)" class="padding-0" v-for="org in organizations" :key="org.id"
        :value="org.name">
        <template #prepend>
          <VAvatar size="x-small" color="primary" variant="tonal">
            <span>{{ avatarText(org.name) }}</span>
          </VAvatar>
        </template>

        <VListItemTitle>{{ org.name }}</VListItemTitle>

      </VListItem>

      <!-- !All Organizations -->
      <VDivider class="my-2" />

      <!-- Current Organization -->
      <VListItem class="padding-0">
        <template #prepend>
          <VAvatar size="x-small" color="primary" variant="tonal">
            <!-- <span>{{ avatarText(userSession.auth?.currentOrganization?.name) }}</span> -->
          </VAvatar>
        </template>

        <VListItemTitle>{{ currentOrganizationInfo?.name }}</VListItemTitle>

      </VListItem>


      <template v-for="item in userProfileList" :key="item.title">
        <VListItem v-if="item.type === 'navItem'" :to="item.to">
          <template #prepend>
            <VIcon :icon="item.icon" size="16" />
          </template>

          <VListItemTitle>{{ item.title }}</VListItemTitle>

          <template v-if="item.badgeProps" #append>
            <VBadge rounded="sm" class="me-3" v-bind="item.badgeProps" />
          </template>
        </VListItem>

        <VDivider v-else class="my-2" />
      </template>

      <div class="px-4 py-2">
        <VBtn block size="small" color="error" append-icon="tabler-logout" href="/sign-out">
          Logout
        </VBtn>
      </div>

    </VList>

  </VMenu>
  <!-- !SECTION -->
</template>
