<script lang="ts" setup>
import OrganizationSettingsOrganization from '@/views/pages/organization-settings/OrganizationSettingsOrganization.vue'
import OrganizationSettingsBilling from '@/views/pages/organization-settings/OrganizationSettingsBilling.vue'
import OrganizationSettingsSecurity from '@/views/pages/organization-settings/OrganizationSettingsSecurity.vue'
import OrganizationSettingsUsers from '@/views/pages/organization-settings/OrganizationSettingsUsers.vue'

const route = useRoute('organization-settings-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'organization', icon: 'tabler-users', tab: 'organization' },
  { title: 'users', icon: 'tabler-users', tab: 'users' },
  { title: 'Security', icon: 'tabler-lock', tab: 'security' },
  { title: 'Billing', icon: 'tabler-file-text', tab: 'billing' }
]

definePage({
  meta: {
    navActiveLink: 'organization-settings-tab',
  },
})
</script>

<template>
  <div>
    <VTabs v-model="activeTab" class="v-tabs-pill">
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab"
        :to="{ name: 'organization-settings-tab', params: { tab: item.tab } }">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false">
      <!-- Account -->
      <VWindowItem value="organization">
        <OrganizationSettingsOrganization />
      </VWindowItem>

      <!-- Users -->
      <VWindowItem value="users">
        <OrganizationSettingsUsers />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <OrganizationSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="billing">
        <OrganizationSettingsBilling />
      </VWindowItem>



    </VWindow>
  </div>
</template>
