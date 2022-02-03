<template>
  <button class="arrow-btn" @click="$emit('click')">
    <span class="arrow-btn__text">Start shopping</span>
    <q-icon
      class="arrow-btn__icon"
      size="1.7rem"
      name="las la-angle-right"
    ></q-icon>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrowBtn',
});
</script>

<style lang="scss">
.arrow-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: $accent;
  font-weight: 500;
  padding: 0;
  &__text {
    font-size: 1.2rem;
    margin-right: 1.5rem;
  }
  &__icon {
    transition: 0.5s;
  }
  &:hover {
    .arrow-btn__icon {
      transform: rotateX(180deg) translateX(-0.4rem);
    }
  }
}
</style>
