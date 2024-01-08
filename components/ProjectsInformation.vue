<script setup lang="ts"></script>

<template>
  <div class="projects-container">
    <div class="title-container">
      <span class="title-container__subtitle"> Services </span>
      <h1 class="title-container__title">
        <span class="underline">Skill</span>-Set
      </h1>
    </div>
    <div class="projects-container__content">
      <ul class="projects-container-list">
        <li class="projects-container-list__item">Portal</li>
        <li class="projects-container-list__item">Landing Page Guane</li>
        <li class="projects-container-list__item">Zabal</li>
        <li class="projects-container-list__item">
          Transgirar (buses de familia Ema)
        </li>
        <li class="projects-container-list__item">Raizco</li>
        <li class="projects-container-list__item"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  &__content {
    width: 95%;
    padding: 20px;
  }
  &-list {
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32%, 4fr));
    gap: 20px;
    grid-template-rows: 50% 50%;
    &__item {
      height: 100%;
      background: #282c3e;
    }
  }
}
.title-container {
  width: 95%;
  font-family: $font-portfolio;
  &__subtitle {
    color: $text-color;
    font-size: 0.85rem;
  }
  &__title {
    color: $secondary-color;
    font-size: 1.8rem;
    .underline {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0%;
        width: 100%;
        height: 2px;
        background: $secondary-color;
      }
    }
  }
}
</style>
