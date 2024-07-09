<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { VAvatar, VBtn } from 'vuetify/components';
const user = useLogtoUser()
const accountData = {
  avatarImg: avatar1,
  firstName: 'john',
  lastName: 'Doe',
  created_at: '2021-06-01',
  email: 'johnDoe@example.com',
  org: 'Pixinvent',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}
console.log(user)
computed(() => {
  console.log(user.value)
})

const refInputEl = ref<HTMLElement>()

const isConfirmDialogOpen = ref(false)
const isEditDialogOpen = ref(false)
const accountDataLocal = ref(structuredClone(user))
const isAccountDeactivated = ref(false)

const validateAccountDeactivation = [(v: string) => !!v || 'Please confirm account deactivation']

const onsubmit = (value:any) => {
  console.log('submit', value)
}


</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="User Information">


        <VCardText class="pt-2">
          <div class="d-flex">
            <div class="pr-8">
              <VAvatar size="100" :image="accountDataLocal.avatarImg" />
            </div>
            <div>
              <h4 class="mb-4">{{  }} {{ user.name }}</h4>
              <div class="d-flex flex-column f gap-2">
                <div><b>Member since</b> {{ $dayjs(accountDataLocal.created_at).format('MMM D, YYYY') }}
                  ({{ $dayjs(accountDataLocal.created_at).fromNow() }})</div>
                <div><b>Email</b> {{ accountDataLocal.email }}</div>
                <div><b>Phone</b> {{ accountDataLocal.phone }}</div>
              </div>
            </div>
            <div class="ml-auto  align-self-start">
              <VBtn  @click="isEditDialogOpen = true" color="primary" variant="outlined">
                <VIcon start icon="tabler-edit" />
                Edit Profile
              </VBtn>
            </div>

          </div>

        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Delete Account -->
      <VCard title="Delete Account">
        <VCardText>
          <!-- 👉 Checkbox and Button  -->
          <div>
            <VCheckbox v-model="isAccountDeactivated" :rules="validateAccountDeactivation"
              label="I confirm my account deactivation" />
          </div>

          <VBtn :disabled="!isAccountDeactivated" color="error" class="mt-6" @click="isConfirmDialogOpen = true">
            Deactivate Account
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- Confirm Dialog -->
  <ConfirmDialog v-model:isDialogVisible="isConfirmDialogOpen"
    confirmation-question="Are you sure you want to deactivate your account?" confirm-title="Deactivated!"
    confirm-msg="Your account has been deactivated successfully." cancel-title="Cancelled"
    cancel-msg="Account Deactivation Cancelled!" />

    <UserInfoEditDialog v-model:isDialogVisible="isEditDialogOpen" @submit.="onsubmit($event)" :userData="accountDataLocal" />
</template>
