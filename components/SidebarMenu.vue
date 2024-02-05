<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    mainComponent: String,
  },
  methods: {
    closeSidebar() {
      this.$emit("close-menu", false);
    },
    emitScrollToSelectedSection(section) {
      this.$emit("emitScrollToSelectedSection", section);
    },
  },
});
</script>

<template>
  <div class="sidebar-menu">
    <ul class="sidebar-menu-list">
      <li class="close-button sidebar-menu-list__item">
        <Icon name="ion:ios-close" @click="closeSidebar(false)" />
      </li>
      <li
        class="sidebar-menu-list__item"
        :class="mainComponent === 'home' ? 'active' : ''"
        @click="emitScrollToSelectedSection('home')"
      >
        {{ $t("header.home") }}
      </li>
      <li
        class="sidebar-menu-list__item"
        :class="mainComponent === 'experience' ? 'active' : ''"
        @click="emitScrollToSelectedSection('experience')"
      >
        {{ $t("header.experience") }}
      </li>
      <li
        class="sidebar-menu-list__item"
        :class="mainComponent === 'projects' ? 'active' : ''"
        @click="emitScrollToSelectedSection('projects')"
      >
        {{ $t("header.projects") }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  background-color: #2d3245;
}
.sidebar-menu-list {
  padding: 20px;
  &__item {
    color: rgb(156 163 175);
    font-family: $font-portfolio;
    margin: 20px 0px;
    cursor: pointer;
  }
}
.close-button {
  display: flex;
  justify-content: end;
  svg {
    font-size: 35px;
    cursor: pointer;
  }
}
.active {
  text-decoration: underline;
}
</style>
