<template>
  <section class="best-sellers">
    <h2 class="slide-title">Best seller books</h2>
    <div class="sellers-content">
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
      <div class="slider"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SlideBestSellers',
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
    };
  },
});
</script>

<style lang="scss">
.best-sellers {
  height: 100%;
}
.sellers-content {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cat-tabs {
  height: auto;
  width: 14%;
  text-align: left;
}
</style>
