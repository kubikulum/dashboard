<script lang="ts" setup>

interface Props {
  stepNumber: string
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
})


</script>

<template>
  <div class="d-flex  flex-column position-relative">
    <div class="border step-number">{{ props.stepNumber }}</div>
    <div class="mb-6">
      <h5 class="text-h5 ">
        {{ props.title }}
      </h5>
      <div v-if="$slots.description" class="">
        <slot name="description" />
      </div>
    </div>

  </div>
  <slot></slot>
</template>

<style lang="scss">
.step-number {
  display: inline-flex;
  border-radius: 100%;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 16px;
  justify-content: center;
  position: absolute;
  left: -48px;
  top: -4px;
}
</style>
