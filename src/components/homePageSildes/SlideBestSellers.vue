<template>
  <section class="best-sellers">
    <h2 class="slide-title">Best seller books</h2>
    <div class="slide-content">
      <q-tabs
        v-model="category"
        vertical
        switch-indicator
        indicator-color="accent"
        class="cat-tabs"
      >
        <q-tab
          v-for="cat in cats"
          :key="cat.name"
          :name="cat.name"
          :label="cat.label"
        />
      </q-tabs>
      <swiper class="sellers-swiper" freeMode="true" slides-per-view="3">
        <swiper-slide> Book 1 </swiper-slide>
        <swiper-slide> Book 2 </swiper-slide>
        <swiper-slide> Book 3 </swiper-slide>
        <swiper-slide> Book 4 </swiper-slide>
        <swiper-slide> Book 5 </swiper-slide>
        <swiper-slide> Book 6 </swiper-slide>
        <swiper-slide> Book 1 </swiper-slide>
        <swiper-slide> Book 2 </swiper-slide>
        <swiper-slide> Book 3 </swiper-slide>
        <swiper-slide> Book 4 </swiper-slide>
        <swiper-slide> Book 5 </swiper-slide>
        <swiper-slide> Book 6 </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

export default defineComponent({
  name: 'SlideBestSellers',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      category: ref('fantasy'),
      cats: [
        {
          name: 'fantasy',
          label: 'Fantasy',
        },
        {
          name: 'Business',
          label: 'business',
        },
        {
          name: 'Romance',
          label: 'romance',
        },
        {
          name: 'horror',
          label: 'Horror',
        },
        {
          name: 'travel',
          label: 'Travel books ',
        },
      ],
      pagination: {
        clickable: true,
        bulletClass: 'swiper-dot',
        bulletActiveClass: 'swiper-dot_active',
      },
    };
  },
});
</script>

<style lang="scss">
.best-sellers {
  height: 100%;
  .slide-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.cat-tabs {
  height: auto;
  flex: 0 0 14%;
  text-align: left;
}
.sellers-swiper {
  flex: 0 0 68%;
  height: 100%;
}
</style>
