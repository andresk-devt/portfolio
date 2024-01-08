<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isOpenMenu = ref(false);
    const handleMenu = (data) => {
      isOpenMenu.value = data;
    };
    const closeMenuOnOutsideClick = (event) => {
      if (isOpenMenu.value && !event.target.closest(".header-container")) {
        isOpenMenu.value = false;
      }
    };
    onMounted(() => {
      document.body.addEventListener("click", closeMenuOnOutsideClick);
    });
    onUnmounted(() => {
      document.body.removeEventListener("click", closeMenuOnOutsideClick);
    });
    return { handleMenu, isOpenMenu };
  },
};
</script>

<template>
  <div class="header-container">
    <div class="menu-icon" @click="handleMenu(true)">
      <Icon name="ion:menu-outline" />
    </div>
    <div class="menu-list-container" :class="isOpenMenu ? 'is-open' : ''">
      <SidebarMenu @close-menu="handleMenu" />
    </div>
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
.menu-icon {
  cursor: pointer;
  display: none;
}
.menu-list-container {
  position: absolute;
  background-color: #2d3245;
  width: 60%;
  height: 100vh;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out; 
  transform: translateX(-100%);
}
.is-open {
  transform: translateX(0);
}
@media (max-width: 750px) {
  .menu-icon {
    display: block;
    svg {
      font-size: 35px;
      color: $text-color;
    }
  }
  .header-container {
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
  }
  .menu-container {
    display: none;
  }
}
</style>
