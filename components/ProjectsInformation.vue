<script setup lang="ts"></script>

<template>
  <div class="projects-container">
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
    width: 100%;
    padding: 20px;
    @media (max-width: 800px) {
      height: 100vh;
    }
  }
  &-list {
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 4fr));
    gap: 20px;
    grid-template-rows: 50% 50%;
    @media (max-width: 800px) {
      grid-template-rows: none;
      grid-template-columns: none;
    }
    &__item {
      height: 100%;
      background: #282c3e;
      font-family: $font-portfolio;
    }
  }
}
</style>
