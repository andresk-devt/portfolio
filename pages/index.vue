<script setup>
</script>

<template>
  <div class="home-container">
    <div class="language-selector">
      <LanguageSelector />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/_main.scss';

.home-container {
  position: relative;
}

.language-selector {
  position: absolute;
  right: 1%;
  top: 5px;
}

</style>