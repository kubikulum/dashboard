<script lang="ts" setup>
import type { components } from '#open-fetch-schemas/kbk';
import avatar1 from '@images/avatars/avatar-1.png'
import type { Component } from 'vue';
import { VAvatar, VBtn } from 'vuetify/components';
import { useAccountStore } from './useAccountStore';

const store = useAccountStore()
store.fetchProfile()
store.fetchOrganizations()
store.fetchInvitationPendings()

const userData = computed(() => store.profileUser)
const organizations = computed(() => store.organizations)

const isConfirmDialogOpen = ref(false)
const isEditDialogOpen = ref(false)
const isAccountDeactivated = ref(false)

const validateAccountDeactivation = [(v: string) => !!v || 'Please confirm account deactivation']
const acceptInvitation = async (id: string) => {
  await store.acceptInvitation(id)
}
const onsubmitUpdate = async (data: any) => {
  await store.updateProfile(data)
}


</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="User Information">


        <VCardText class="pt-2">
          <div class="d-flex">
            <div class="pr-8">
              <!-- <VAvatar size="100" :image="accountDataLocal." /> -->
            </div>
            <div>
              <h4 class="mb-4">{{ }} {{ userData?.firstName }} {{ userData?.lastName }}</h4>
              <div class="d-flex flex-column f gap-2">
                <div><b>Member since</b> {{ $dayjs(userData?.createdAt).format('MMM D, YYYY') }}
                  ({{ $dayjs(userData?.createdAt).fromNow() }})</div>
                <div><b>Email</b> {{ userData?.email }}</div>
                <!-- <div><b>Phone</b> {{ accountuserDataLocal }}</div> -->
              </div>
            </div>
            <div class="ml-auto  align-self-start">
              <VBtn @click="isEditDialogOpen = true" color="primary" variant="outlined">
                <VIcon start icon="tabler-edit" />
                Edit Profile
              </VBtn>
            </div>

          </div>

        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="Joined Organizations">
        <VCardText class="pt-2">
          <p>the list of the Organizations you have joined.</p>
          <VTable class="text-no-wrap">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Ownership
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="organization in organizations" :key="organization.id">
                <td>{{ organization.name }}</td>
                <td>{{ organization.owner?.id ===userData.id ? 'Owner' :'' }}</td>
                <td><VBtn variant="outlined" size="sm" icon="tabler-x" rounded></VBtn></td>
              </tr>
            </tbody>
          </VTable>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Pending Invitations">
        <VCardText class="pt-2">
          <p>the list of the Organizations you have been invitated to join.</p>
          <VTable class="text-no-wrap">
            <thead>
              <tr>
                <th>
                  Organization
                </th>
                <th>
                  Received
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="invitation in store.invitationPendings" :key="invitation.id">
                <td>{{ invitation.organization.name }}</td>
                <td>{{ $dayjs(invitation.updatedAt).fromNow() }}</td>
                <td><VBtn variant="outlined" color="success"  @click="acceptInvitation(invitation.code)" >Accept</VBtn> <VBtn variant="outlined"  color="error" >Reject</VBtn></td>
              </tr>
            </tbody>
          </VTable>
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

  <UserInfoEditDialog v-model:isDialogVisible="isEditDialogOpen" @submit.="onsubmitUpdate($event)"
    :userData="userData" />
</template>
