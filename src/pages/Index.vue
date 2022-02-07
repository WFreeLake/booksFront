<template>
  <q-page class="home">
    <div class="container">
      <swiper
        class="page-swiper"
        :slides-per-view="1"
        :pagination="pagination"
        :direction="'vertical'"
        mousewheel
      >
        <swiper-slide>
          <StoreIntro />
        </swiper-slide>
        <swiper-slide>
          <SlideBestSellers />
        </swiper-slide>
        <swiper-slide>
          <SlideFavorites />
        </swiper-slide>
        <swiper-slide>
          <SlideTestimonials />
        </swiper-slide>
        <swiper-slide>
          <SlideContact />
        </swiper-slide>
      </swiper>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StoreIntro from 'components/homePageSildes/Slide1.vue';
import SlideBestSellers from 'components/homePageSildes/SlideBestSellers.vue';
import SlideFavorites from 'components/homePageSildes/SlideFavorites.vue';
import SlideTestimonials from 'components/homePageSildes/SlideTestimonials.vue';
import SlideContact from 'components/homePageSildes/SlideContact.vue';

// import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper styles
import 'swiper/swiper.min.css'; // core styles
import 'swiper/components/pagination/pagination.min.css'; //dots styles

import SwiperCore, { Mousewheel, Pagination } from 'swiper';

// install swiper core and required modules
SwiperCore.use([Mousewheel, Pagination]);

export default defineComponent({
  name: 'PageIndex',
  components: {
    Swiper,
    SwiperSlide,
    StoreIntro,
    SlideBestSellers,
    SlideFavorites,
    SlideTestimonials,
    SlideContact,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        bulletClass: 'swiper-dot',
        bulletActiveClass: 'swiper-dot_active',
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}">0${index + 1}</span>`;
        },
      },
    };
  },
});
</script>

<style lang="scss">
.home {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  max-height: calc(100vh - 130px);
  overflow: hidden;

  .container {
    height: 100%;
  }

  .page-swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    display: flex;
    flex-direction: column;
  }

  .swiper-dot {
    margin: 4px 0;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 0.9rem;
    transition: 0.2s;
    position: relative;
    &::before,
    &::after {
      position: absolute;
      content: '';
      display: inline-block;
      width: 1px;
      height: 3.5rem;
      background: $accent;
      left: 50%;
      transform: translateX(-50%) scaleY(0);
      transition: 0.2s;
    }
    &::before {
      top: -4rem;
      transform-origin: bottom;
    }
    &::after {
      bottom: -4rem;
      transform-origin: top;
    }
    &_active {
      margin: 70px 0;
      &::before,
      &::after {
        transform: translateX(-50%) scaleY(1);
      }
    }
    &:first-child {
      margin-top: 0;
      &::before {
        display: none;
      }
    }
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
  }
}
</style>
