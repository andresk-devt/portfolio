<script setup lang="ts">
import CodeIcon from "@/public/assets/icons/CodeIcons.svg";
import PortalImage from "@/public/assets/images/portal.webp";
import ZabalImage from "@/public/assets/images/zabal.webp";
import RaizcoImage from "@/public/assets/images/raizco.webp";
import VueJS from "@/public/assets/icons/VueJs.svg";
import JavaScript from "@/public/assets/icons/JavaScript.svg";
import Sass from "@/public/assets/icons/Sass.svg";
import HTML from "@/public/assets/icons/HTML.svg";
import CSS from "@/public/assets/icons/Css.svg";
import Laravel from "@/public/assets/icons/laravel.svg";
import PHP from "@/public/assets/icons/PHP.svg";
import MySQL from "@/public/assets/icons/Mysql.svg";
import NodeJS from "@/public/assets/icons/NodeJS.svg";
import Mongo from "@/public/assets/icons/mongo.svg";

const projectsList = [
  {
    id: "portal",
    title: "project.portal.title",
    image: PortalImage,
    description: "project.portal.description",
    link: "https://shipwithglt.com/tutorial-videos/",
    tags: [
      { text: "HTML 5", icon: HTML },
      { text: "Vue.js", icon: VueJS },
      { text: "JavaScript", icon: JavaScript },
      { text: "Sass", icon: Sass },
    ],
  },
  {
    id: "zabal",
    title: "project.zabal.title",
    image: ZabalImage,
    description: "project.zabal.description",
    tags: [
      { text: "HTML 5", icon: HTML },
      { text: "Vue.js", icon: VueJS },
      { text: "JavaScript", icon: JavaScript },
      { text: "CSS", icon: CSS },
      { text: "Laravel", icon: Laravel },
      { text: "PHP", icon: PHP },
      { text: "MySQL", icon: MySQL },
    ],
  },
  {
    id: "raizco",
    title: "project.raizco.title",
    image: RaizcoImage,
    description: "project.raizco.description",
    tags: [
      { text: "HTML 5", icon: HTML },
      { text: "Vue.js", icon: VueJS },
      { text: "JavaScript", icon: JavaScript },
      { text: "Sass", icon: Sass },
      { text: "NodeJS", icon: NodeJS },
      { text: "MongoDB", icon: Mongo },
    ],
  },
];
</script>

<template>
  <div class="projects-container">
    <div class="projects-container-title">
      <img :src="CodeIcon" alt="Projects icon" />
      <h1 class="projects-container-title__text">
        {{ $t("projects.title") }}
      </h1>
    </div>
    <div class="projects-container__content">
      <ul class="projects-container-list">
        <li
          class="projects-container-list__item"
          v-for="item in projectsList"
          :key="item.id"
        >
          <ProjectCard
            :title="item.title"
            :image="item.image"
            :description="item.description"
            :tags="item.tags"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-container-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $secondary-color;
  width: 100%;
  &__text {
    margin-left: 10px;
    font-size: 1.3rem;
  }
}
.projects-container {
  display: flex;
  flex-direction: column;
  &-list__item {
    margin: 25px auto;
  }
}
</style>
