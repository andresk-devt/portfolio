<template>
  <div class="language-selector">
    <div class="selected-language" @click="toggleDropdown">
      <img
        :src="selectedLanguage.image"
        :alt="selectedLanguage.label"
        :title="selectedLanguage.label"
      />
      <div class="dropdown-arrow" :class="{ 'is-open': isOpen }">
        <Icon name="ion:ios-arrow-right" />
      </div>
    </div>
    <div class="language-selector-list" v-if="isOpen">
      <div
        class="language-selector-list__item"
        v-for="option in filteredLanguageOptions"
        :key="option.value"
        @click="changeLanguage(option), $emit('input', option.value)"
      >
        <img :src="option.image" :alt="option.label" :title="option.label" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

import usaFlag from "@/public/assets/flags/usa.png";
import colombiaFlag from "@/public/assets/flags/colombia.png";
import franceFlag from "@/public/assets/flags/france.svg";

const { locale, ...i18n } = useI18n();
const isOpen = ref(false);
const languageOptions = ref([
  {
    value: "en",
    label: i18n.t("languageSelector.en"),
    image: usaFlag,
  },
  {
    value: "es",
    label: i18n.t("languageSelector.es"),
    image: colombiaFlag,
  },
  {
    value: "fr",
    label: i18n.t("languageSelector.fr"),
    image: franceFlag,
  },
]);

const selectedLanguage = ref({
  value: "es",
  label: i18n.t("languageSelector.es"),
  image: colombiaFlag,
});

const filteredLanguageOptions = computed(() => {
  return languageOptions.value.filter(
    (option) => option.value !== selectedLanguage.value.value
  );
});

const toggleDropdown = (data) => {
  isOpen.value = data || !isOpen.value;
};

const changeLanguage = (language) => {
  selectedLanguage.value = language;
  localStorage.setItem(
    "selected-language",
    JSON.stringify(selectedLanguage.value)
  );
  locale.value = language.value;
};

const handleOutLanguangeClick = () => {
  const languageSelectorContent = document.querySelector(".language-selector");
  if (isOpen.value && !languageSelectorContent.contains(event.target)) {
    toggleDropdown(false);
  }
};

onMounted(() => {
  if (process.client) {
    document.addEventListener("click", handleOutLanguangeClick);
    const savedLanguage = localStorage.getItem("selected-language");
    if (savedLanguage) {
      changeLanguage(JSON.parse(savedLanguage));
    }
  }
});

// watch: {
//   '$i18n.locale': function(newVal, oldVal) {
//     console.log('locale change', newVal)
//   }
// }
</script>

<style lang="scss" scoped>
.language-selector {
  width: 40px;
  padding: 3px;
  border-radius: 4px;
  background: $primary-color;
  &-list__item {
    cursor: pointer;
  }
}

.selected-language {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.dropdown-arrow svg {
  color: $text-color;
}

img {
  width: 24px;
  height: 24px;
}

.is-open svg {
  transform: rotate(90deg);
  transition: 0.5s all;
}

.is-closed svg {
  transform: rotate(0deg);
  transition: 0.5s all;
}
</style>
