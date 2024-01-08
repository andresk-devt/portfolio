<script setup>
import { Vue3Lottie } from "vue3-lottie";
import { useI18n } from "vue-i18n";
import CoderAnimation from "@/public/assets/animations/coder-animation.json";
import { ref, watch } from "vue";

const { locale } = useI18n();
const selectedLanguage = ref("");

watch(locale, (newValue) => {
  selectedLanguage.value = newValue;
});
</script>

<template>
  <div class="home-information">
    <div class="personal-content">
      <div class="personal-content__title">
        <p class="personal-content__text">
          {{ $t("homeInformation.greeting") }}
        </p>
        <div class="title-content">
          <ul
            class="title-list"
            :class="
              selectedLanguage === 'fr' || selectedLanguage === 'es'
                ? 'more-space'
                : ''
            "
          >
            <li class="title-list__item">Andres Camilo Gomez!</li>
            <li class="title-list__item">
              {{ $t("homeInformation.job") }}
            </li>
          </ul>
        </div>
      </div>
      <p class="personal-content__subtitle">
        {{ $t("homeInformation.personalInformation") }}
      </p>
      <div class="button-container">
        <button class="button-container__button">{{ $t('homeInformation.buttonText') }}</button>
      </div>
    </div>
    <div class="animation-container">
      <client-only>
        <Vue3Lottie
          :animation-data="CoderAnimation"
          :height="350"
          :width="350"
        />
      </client-only>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-information {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 940px) {
    flex-direction: column;
  }
}
.personal-content {
  width: 40%;
  min-width: 542px;
  &__title {
    font-weight: 600;
    font-family: $font-portfolio;
    overflow: hidden;
    height: 40px;
    color: $text-color;
    font-size: 2rem;
    @media (max-width: 610px) {
      font-size: 1.7rem;
    }
  }
  &__subtitle {
    color: $text-color;
    font-family: $font-portfolio;
    line-height: 20px;
    font-size: 0.95rem;
    font-weight: 300;
  }
  &__text {
    display: block;
    float: left;
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
  @media (max-width: 940px) {
    width: 90%;
    min-width: 0px;
  }
}
.title-list {
  margin-top: 0;
  padding-left: 110px;
  text-align: left;
  list-style: none;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  &__item {
    line-height: 40px;
    margin: 0;
    min-width: 380px;
  }
  @media (max-width: 610px) {
    padding-left: 90px;
  }
}
.more-space {
  padding-left: 185px;
  @media (max-width: 610px) {
    padding-left: 155px;
  }
}
.button-container {
  &__button {
    height: 40px;
    width: 150px;
    margin: 20px 0px;
    background-color: $secondary-color;
    border: none;
    color: $text-color;
    font-family: $font-portfolio;
    cursor: pointer;
  }
}
@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -50%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, 0%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -50%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, 0%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>
