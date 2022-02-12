<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="site-header">
      <div class="container">
        <div class="row justify-between items-center">
          <div class="flex items-center">
            <burger @click="toggleLeftDrawer" />
            <router-link to="/">
              <img
                src="~/assets/images/logo.webp"
                alt="Book Store"
                class="logo"
              />
            </router-link>
          </div>
          <navigation />
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
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
import Navigation from 'components/Navigation.vue';
import Burger from 'components/UI/Burger.vue';

export default {
  components: {
    Navigation,
    Burger,
  },
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
  background: transparent;
  padding: 1rem 0;
  .logo {
    @media (max-width: 767px) {
      width: 4rem;
    }
  }
}
</style>
