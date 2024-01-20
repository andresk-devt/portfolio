<script setup>
import ExperienceBag from "@/public/assets/icons/ExperienceBag.svg";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const experienceList = ref([
  {
    id: "guane",
    title: "experience.guane.title",
    date: "experience.guane.subtitle",
    text: "experience.guane.text",
  },
  {
    id: "envba",
    title: "experience.envba.title",
    date: "experience.envba.subtitle",
    text: "experience.envba.text",
  },
  {
    id: "zabal",
    title: "experience.zabal.title",
    date: "experience.zabal.subtitle",
    text: "experience.zabal.text",
  },
]);
</script>

<template>
  <div class="experience-container">
    <div class="experience-container-title">
      <img :src="ExperienceBag" alt="" />
      <h1 class="experience-container-title__text">
        {{ i18n.t("experience.title") }}
      </h1>
    </div>
    <ul class="timeliner">
      <div class="" v-for="item in experienceList" :key="item.id">
        <li class="timeliner__item">
          <div class="timeliner__bullet"></div>
          <div class="timeliner__line"></div>
          <div class="timeliner__content">
            <div class="timeliner__date">{{ i18n.t(item.date) }}</div>
            <h3 class="timeliner__title">
              {{ i18n.t(item.title) }}
            </h3>
            <p class="timeliner__description">
              {{ i18n.t(item.text) }}
            </p>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.experience-container-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $secondary-color;
  &__text {
    margin-left: 10px;
    font-size: 1.3rem;
  }
}
.timeliner {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  position: relative;
  &__bullet {
    position: absolute;
    left: 3px;
    top: 10px;
    transform: translateY(-50%);
    width: 11px;
    height: 11px;
    background-color: $titles-color;
    border-radius: 50%;
  }
  &__line {
    &:before {
      content: "";
      position: absolute;
      left: 8px;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: $titles-color;
    }
  }
  &__item {
    position: relative;
    padding-left: 20px;
    display: flex;
  }
  &__content {
    padding-left: 20px;
    padding-bottom: 20px;
    font-family: $font-portfolio;
  }
  &__date {
    margin-bottom: 5px;
    font-size: 0.875rem;
    color: #6b7280;
  }
  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    color: $titles-color;
  }
  &__description {
    margin-top: 5px;
    font-size: 1rem;
    color: $text-color;
  }
}
</style>
