<template>
  <div>
    <div class="border rounded pa-4 my-4">
      <div class="d-flex align-center gap-x-4">
        <VIcon icon="tabler-cpu" size="32" color="primary" />
        <div class="d-flex flex-column">
          <div class="text-sm">What you will need</div>
          <h6 class="text-base">
            Connect to your server or Instance
          </h6>
        </div>
      </div>
      <div class="d-flex align-center gap-x-4">
        <VIcon icon="tabler-check" color="success" />
        <div>An `amd64` or `arm64` server running with Ubuntu or Debian, and with a public IP</div>
      </div>
      <div class="d-flex align-center gap-x-4">
        <VIcon icon="tabler-check" color="success" />
        <div>A Kubikulum secret key. How to create a secret key </div>
      </div>
      <div class="d-flex align-center gap-x-4">
        <VIcon icon="tabler-check" color="success" />
        <div>A Kubeflow Cluster</div>
      </div>
    </div>
    <div class="mt-8 d-flex flex-column  gap-6">
      <div class="d-flex align-center gap-4">
        <div class="align-self-start">
          <VAvatar size="small" color="secondary" variant="tonal">
            <span>1</span>
          </VAvatar>
        </div>
        <div class="d-flex flex-column flex-grow-1  gap-2">
          <div>Retrieve the node-agent program (suffix can be either amd64 or arm64 depending on the node architecture).
          </div>
          <div class="pa-3 bg-grey-100 rounded">wget https://kbk.com/node-agent_linux_amd64 && chmod +x
            node-agent_linux_amd64

          </div>
        </div>
      </div>
      <div class="d-flex align-center gap-4">
        <div class="align-self-start">
          <VAvatar size="small" color="secondary" variant="tonal">
            <span>2</span>
          </VAvatar>
        </div>
        <div class="d-flex flex-column flex-grow-1 gap-2">
          <div>Export the required environment variables. Replace the values where needed.
          </div>
          <div class="pa-3 bg-grey-100 rounded">export CLUSTER_ID=kbk-cudocompute-f11d5ebb9b
            KBK_SECRET_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
          </div>
        </div>
      </div>
      <div class="d-flex align-center gap-4">
        <div class="align-self-start">
          <VAvatar size="small" color="secondary" variant="tonal">
            <span>3</span>
          </VAvatar>
        </div>
        <div class="d-flex flex-column flex-grow-1  gap-2">
          <div>Execute the program to attach the node.
          </div>
          <div class="pa-3 bg-grey-100 rounded">sudo -E ./node-agent_linux_amd64 -loglevel 0 -no-controller
          </div>
        </div>
      </div>
    </div>

    <VBtn size="large" class="mt-16" block type="submit" color="primary">Go back to nodes</VBtn>
  </div>
</template>

<script lang="ts" setup>
import { VAvatar, VIcon } from 'vuetify/components';


</script>

<style></style>