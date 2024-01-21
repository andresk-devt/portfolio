<script setup>
import { defineProps } from "vue";

const props = defineProps(["image", "title", "description", "tags"]);
</script>

<template>
  <div class="project-card">
    <div class="project-card-title">
      <h1 class="project-card-title__text">{{ title }}</h1>
      <p class="project-card-title__subtitle">{{ description }}</p>
    </div>
    <div class="tags-container">
      <div class="tags-container__item" v-for="item in tags">
        <img :src="item.icon" :alt="item.text" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div class="image-container">
      <img :src="image" :alt="'Image ' + title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  &-title {
    &__text {
      color: $titles-color;
      font-size: 1.3rem;
      font-weight: bold;
    }
    &__subtitle {
      color: #6b7280;
      font-size: 1rem;
    }
  }
}
.tags-container {
  display: flex;
  gap: 10px;
  margin: 10px auto;
  flex-wrap: wrap;
  &__item {
    display: flex;
    width: fit-content;
    padding: 3px 8px 3px 8px;
    background-color: #282c3e;
    text-align: center;
    border-radius: 25px;
    gap: 7px;
    font-size: 15px;
    color: white;
    img {
      width: 15px;
    }
  }
}
.image-container {
  margin: 12px auto;
  img {
    border-radius: 15px;
  }
}
</style>
