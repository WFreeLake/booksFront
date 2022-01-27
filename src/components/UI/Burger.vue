<template>
  <button :class="['burger', active ? 'active' : '']" @click="toggle">
    <span class="line line_top"></span>
    <span class="line line_bottom"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Burger',
  setup(props, { emit }) {
    const active = ref(false);

    return {
      active,
      toggle() {
        active.value = !active.value;
        emit('click', active.value);
      },
    };
  },
});
</script>

<style lang="scss">
.burger {
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  margin-right: 1.6rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  span.line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: $accent;
    position: absolute;
    left: 0;
    transition: 0.2s;
    transform-origin: center;
    &_top {
      top: 0.7rem;
    }
    &_bottom {
      bottom: 0.7rem;
    }
  }
  &.active {
    span.line {
      &_top {
        transform: translateY(4px) rotate(45deg);
      }
      &_bottom {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
}
</style>
