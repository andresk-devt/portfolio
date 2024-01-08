<script setup>
defineProps(["title"]);
</script>

<template>
  <div class="article-container">
    <div class="title-container" v-if="title">
      <span class="title-container__subtitle"> {{ title.subtitle }} </span>
      <h1 class="title-container__title">
        {{ title.title }}
      </h1>
    </div>
    <slot name="article-container-content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.article-container {
  max-width: 950px;
  margin: auto;
  padding: 20px;
  margin: 30px auto;
}
.title-container {
  width: 100%;
  font-family: $font-portfolio;
  &__subtitle {
    color: $text-color;
    font-size: 0.85rem;
  }
  &__title {
    color: $secondary-color;
    font-size: 1.8rem;
    text-decoration: underline;
  }
}
</style>
