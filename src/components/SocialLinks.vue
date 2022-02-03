<template>
  <ul class="social-links">
    <li class="social-link" v-for="link in links" :key="link.name">
      <a :href="link.url">
        <q-icon :name="link.name" :size="link.size + 'rem'" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialLinks',
  setup() {
    return {
      links: [
        {
          name: 'lab la-telegram-plane',
          url: 'https://telegram.org',
          size: '1.7',
        },
        {
          name: 'lab la-instagram',
          url: 'https://www.instagram.com',
          size: '1.9',
        },
        {
          name: 'lab la-facebook-f',
          url: 'https://www.facebook.com',
          size: '1.6',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.social-links {
  display: flex;
  align-items: center;
}
.social-link {
  margin: 0 14px;
  &:first-child {
    margin-left: 0;
  }
  a {
    color: $accent;
  }
}
</style>
