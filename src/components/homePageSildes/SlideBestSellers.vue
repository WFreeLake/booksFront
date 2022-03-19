<template>
  <section class="best-sellers">
    <h2 class="slide-title">Best seller books</h2>
    <swiper class="sellers-swiper" :freeMode="true" slides-per-view="3">
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
      <swiper-slide class="book-slide">
        <div class="book-card">Book</div>
      </swiper-slide>
    </swiper>
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
}
.sellers-swiper {
  width: 100%;
  height: 100%;
}
.book-slide {
  width: 100%;
}
.book-card {
  width: 100%;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
