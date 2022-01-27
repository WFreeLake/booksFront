<template>
  <q-layout view="hhh lpR fFf">
    <q-header bordered class="site-header">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="burger"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="site-footer"> </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
.burger {
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
}
.site-header {
  background: #fff;
  border-bottom: 1px solid $accent;
}
</style>
