<template>
  <section class="intro">
    <div class="left-side">
      <h1 class="intro__title">Book Store<br />Used books</h1>
      <p class="intro__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        risus vitae sapien imperdiet.
      </p>
      <ArrowBtn @click="openCatalog" />
      <SocialLinks />
    </div>
    <div class="right-side">
      <img
        width="410"
        src="~/assets/images/books.webp"
        class="intro__img"
        alt="books"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ArrowBtn from 'components/UI/ArrowBtn.vue';
import SocialLinks from 'components/SocialLinks.vue';

export default defineComponent({
  name: 'StoreIntro',
  components: {
    ArrowBtn,
    SocialLinks,
  },
  setup() {
    const router = useRouter();

    return {
      openCatalog: async function () {
        await router.push({ path: '/catalog' });
      },
    };
  },
});
</script>

<style lang="scss">
.intro {
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__title {
    font-family: $pt;
    font-size: 4.5rem;
    line-height: 5.2rem;
    margin: 0;
  }
  &__text {
    font-size: 1.1rem;
  }
}

.left-side {
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 0;

  .social-link {
    margin-top: 80%;
  }
}

.right-side {
  padding-top: 3.6rem;
  flex: 0 0 50%;
  max-height: 100%;
}
</style>
