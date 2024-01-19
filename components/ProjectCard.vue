
<script setup>
import { defineProps } from 'vue';

const props = defineProps(['image', 'title']);
</script>

<template>
  <div class="project-card">
    <div class="image-container">
      <img :src="image" alt="">
    </div>
    <div class="text-container">
      <h2>{{ title }} Title</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  display: flex;
  height: 200px;
  width: 380px;
  background: $tertiary-color;
  font-family: $font-portfolio;
}
</style>
