<script setup lang="ts">
import { useLogto, type UserInfoResponse } from "@logto/vue";
import avatar1 from '@images/avatars/avatar-1.png'

import { baseUrl } from "./../../utils/constants";
import { userSessionStore } from "@/stores/user.store";

const userSession = userSessionStore()

const organizations = computed(() => {
  return userSession.auth?.user?.organization_data.filter((org) => org.id !== userSession.auth?.currentOrganization?.id)
})



const onSelectOrganization = (organizationId: string) => {
  void userSession.switchOrganization(organizationId)
};

const onClickSignOut = () => {
  void userSession.logout()
};

const userProfileList = [
  { type: 'navItem', icon: 'tabler-settings', title: 'Settings', to: { name: 'organization-settings-tab', params: { tab: 'organization' }  } },
  { type: 'navItem', icon: 'tabler-users-group', title: 'IAM' , to: { name: 'organization-settings-tab', params: { tab: 'users' }  } },
  { type: 'navItem', icon: 'tabler-file-description', title: 'Billing', to: { name: 'organization-settings-tab', params: { tab: 'billing' }  } },
  { type: 'navItem', icon: 'tabler-key', title: 'API Key',  to: { name: 'organization-settings-tab', params: { tab: 'security' }  } },
    { type: 'divider' },
  { type: 'navItem', icon: 'tabler-user', title: 'Profile',to: { name: 'account-settings-tab', params: { tab: 'profile' }  } },
]
</script>

<template>

  <!-- SECTION Menu -->
  <VMenu location="bottom end">
    <template #activator="{ props }">
      <div class="d-flex align-center cursor-pointer" v-bind="props">

        <div>
          <span class="d-block font-weight-medium text-truncate">organization</span>
          <span class="font-weight-normal">{{ userSession.auth?.currentOrganization?.name }}</span>
        </div>
        <VAvatar class="d-flex flex-column ms-3" size="32" color="primary" variant="tonal">
          <span>{{ avatarText(userSession.auth?.currentOrganization?.name) }}</span>
        </VAvatar>
      </div>
    </template>
    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VList  nav :lines="false" style="padding: 0;">

          <!-- List Organizations -->
        <VListItem @click="onSelectOrganization(org.id)" class="padding-0"  v-for="org in organizations" :key="org.id" :value="org.name">
          <template #prepend>
            <VAvatar size="x-small" color="primary" variant="tonal">
              <span>{{ avatarText(org.name) }}</span>
            </VAvatar>
          </template>

          <VListItemTitle>{{ org.name }}</VListItemTitle>

        </VListItem>
        
          <!-- !All Organizations -->
        <VDivider  class="my-2" />

          <!-- Current Organization -->
        <VListItem  class="padding-0" >
          <template #prepend>
            <VAvatar size="x-small" color="primary" variant="tonal">
              <span>{{ avatarText(userSession.auth?.currentOrganization.name) }}</span>
            </VAvatar>
          </template>

          <VListItemTitle>{{ userSession.auth?.currentOrganization.name }}</VListItemTitle>

        </VListItem>


        <template v-for="item in userProfileList" :key="item.title">
          <VListItem  v-if="item.type === 'navItem'" :to="item.to" >
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
          <VBtn block size="small" color="error" append-icon="tabler-logout" @click="onClickSignOut">
            Logout
          </VBtn>
        </div>

      </VList>
    </PerfectScrollbar>
  </VMenu>
  <!-- !SECTION -->
</template>
