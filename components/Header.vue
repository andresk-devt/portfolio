<script>
import { ref, onMounted, onUnmounted, defineEmits } from "vue";

export default {
  props: {
    mainComponent: String,
  },
  setup(props, { emit }) {
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
    const emitScrollToSelectedSection = (section) => {
      emit('scrollToSelectedSection', section);
      handleMenu(false);
    };
    return { handleMenu, isOpenMenu, props, emitScrollToSelectedSection };
  },
};
</script>

<template>
  <div class="header-container">
    <div class="menu-icon" @click="handleMenu(true)">
      <Icon name="ion:menu-outline" />
    </div>
    <div class="menu-list-container" :class="isOpenMenu ? 'is-open' : ''">
      <SidebarMenu
        :mainComponent="props.mainComponent"
        @close-menu="handleMenu"
        @emitScrollToSelectedSection="emitScrollToSelectedSection"
      />
    </div>
    <div class="title-container">
      <h1 class="title-container__text">
        {{ "<Andres" }}<span>{{ "Gomez />" }}</span>
      </h1>
    </div>
    <nav class="menu-container">
      <ul class="menu-container-list">
        <li
          class="menu-container-list__item"
          :class="props.mainComponent === 'home' ? 'active' : ''"
          @click="emitScrollToSelectedSection('home')"
        >
          {{ $t("header.home") }}
        </li>
        <li
          class="menu-container-list__item"
          :class="props.mainComponent === 'experience' ? 'active' : ''"
          @click="emitScrollToSelectedSection('experience')"
        >
          {{ $t("header.experience") }}
        </li>
        <li
          class="menu-container-list__item"
          :class="props.mainComponent === 'projects' ? 'active' : ''"
          @click="emitScrollToSelectedSection('projects')"
        >
          {{ $t("header.projects") }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-around;
  height: 65px;
  background: $primary-color;
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
  display: none;
  position: absolute;
  background-color: #2d3245;
  width: 60%;
  max-width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  @media (max-width: 750px) {
    display: block;
  }
}
.is-open {
  transform: translateX(0);
}
.active {
  background-color: $tertiary-color;
  padding: 5px;
  width: 90px;
  text-align: center;
  border-radius: 25px;
}
@media (max-width: 750px) {
  .title-container {
    margin-right: 30px;
  }
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
