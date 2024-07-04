<script setup lang="ts">
import { useHandleSignInCallback } from "@logto/vue";
import { userSessionStore } from "@/stores/user.store";
definePage({
  meta: {
    unauthenticatedOnly: true,
    layout: 'blank',
  },
})
const router = useRouter();
const userSession = userSessionStore();

const { isLoading } = useHandleSignInCallback(async () => {
    await userSession.login();
    router.push("/second-page");
});

</script>

<template>
  <p v-if="isLoading">Redirecting...</p>
</template>