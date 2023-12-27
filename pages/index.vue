<script setup></script>

<template>
  <div class="home-container">
    <div class="header-container">
      <Header />
      <div class="language-selector">
        <LanguageSelector />
      </div>
    </div>
    <div class="home-container__content">
      <HomeInformation />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_main.scss";

.home-container {
  position: relative;
  background-color: $primary-color;
}

.header-container {
  position: sticky;
  top: 0;
}

.language-selector {
  position: absolute;
  right: 2%;
  top: 9px;
}
</style>
