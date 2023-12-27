<script setup></script>

<template>
  <div class="header-container">
    <div class="title-container">
      <h1 class="title-container__text">
        {{ "< Andres" }}<span>{{ "Gomez />" }}</span>
      </h1>
    </div>
    <nav class="menu-container">
      <ul class="menu-container-list">
        <li class="menu-container-list__item">{{ $t("header.home") }}</li>
        <li class="menu-container-list__item">{{ $t("header.services") }}</li>
        <li class="menu-container-list__item">{{ $t("header.projects") }}</li>
        <li class="menu-container-list__item">{{ $t("header.contact") }}</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-around;
  height: 65px;
  background-color: $tertiary-color;
}
.title-container {
  display: flex;
  align-items: center;
  &__text {
    font-family: $font-portfolio;
    color: $text-color;
    font-size: 1.3rem;
    span {
      color: $secondary-color;
    }
  }
}
.menu-container {
  display: flex;
  align-items: center;
  &-list {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 20px;
    &__item {
      color: $text-color;
      font-family: $font-portfolio;
      font-weight: 300;
      cursor: pointer;
    }
  }
}

@media (max-width: 750px) {
  .header-container {
    justify-content: center;
    padding: 0px 30px;
  }
  .menu-container-list {
    gap: 25px;
  }
  .title-container {
    display: none;
  }
}
</style>
