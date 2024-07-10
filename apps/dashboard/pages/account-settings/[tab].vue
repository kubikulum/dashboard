<script lang="ts" setup>
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsPrivacy from '@/views/pages/account-settings/AccountSettingsPrivacy.vue'
import { VWindow } from 'vuetify/components';


const route = useRoute('account-settings-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: 'My Profile', tab: 'profile' },
  {title: 'My privacy', tab: 'privacy'},

]

definePageMeta({

    navActiveLink: 'account-settings-tab',

})
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'account-settings-tab', params: { tab: item.tab } }"
      >
      
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="profile">
        <AccountSettingsAccount />
      </VWindowItem>
    <VWindowItem value="privacy">
      <AccountSettingsPrivacy />
    </VWindowItem>
 

    </VWindow>
  </div>
</template>
