<template>
  <nav class="nav">
    <ul class="menu">
      <li
        v-for="page in pages"
        :key="page.id"
        :class="['menu__item', $route.path == page.path ? 'active' : '']"
      >
        <router-link :to="page.path">{{ page.label }}</router-link>
      </li>
    </ul>
    <ul class="icons">
      <li
        v-for="icon in icons"
        :key="icon.id"
        :class="['icons__item', $route.path == icon.path ? 'active' : '']"
      >
        <router-link :to="icon.path">
          <q-btn
            round
            padding="0.35rem"
            :ripple="{ color: 'accent', center: true }"
            :flat="$route.path != icon.path"
            :outline="$route.path == icon.path"
            color="accent"
            :icon="icon.icon"
          />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
  setup() {
    const pages = [
      {
        id: 0,
        label: 'Home',
        path: '/',
      },
      {
        id: 1,
        label: 'Catalog',
        path: '/catalog',
      },
      {
        id: 2,
        label: 'Categories',
        path: '/categories',
      },
    ];

    const icons = [
      {
        id: 0,
        icon: 'mdi-magnify',
        path: '/search',
      },
      {
        id: 1,
        icon: 'mdi-heart-outline',
        path: '/favorits',
      },
      {
        id: 2,
        icon: 'mdi-cart-minus',
        path: '/cart',
      },
    ];

    return {
      pages,
      icons,
    };
  },
});
</script>

<style lang="scss">
nav.nav {
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
  margin-right: 8rem;
  &__item {
    position: relative;
    margin: 0 1.6rem;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 1px;
      left: 50%;
      background: $dark;
      transform-origin: center;
      transform: translateX(-50%) scaleX(0);
      transition: 0.2s;
    }
    &::before {
      top: -1.2rem;
    }
    &::after {
      bottom: -1.2rem;
    }
    &.active {
      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
    &:not(.active) {
      &:hover {
        &::before {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
    a {
      color: $dark;
      text-decoration: none;
      padding: 0.5rem;
    }
  }

  @media (max-width: 991px) {
    margin-right: 4rem;
    &__item {
      margin: 0 1.2rem;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.icons {
  display: flex;
  align-items: center;
  &__item {
    margin: 0 0.2rem;
    a {
      text-decoration: none;
    }
  }
}
</style>
