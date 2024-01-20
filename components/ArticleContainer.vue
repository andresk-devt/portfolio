<script setup>
defineProps(["title"]);
</script>

<template>
  <div class="article-container">
    <slot name="article-container-content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.article-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  margin: 30px auto;
  @media (max-width: 800px) {
    padding: 35px;
  }
}
.title-container {
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
