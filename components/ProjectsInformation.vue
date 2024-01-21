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
    title: "GLT LOGISTICS - PORTAL",
    image: PortalImage,
    description:
      "Portal es una plataforma integral para GLT logistics, simplificando la cotización, envío y pagos de paquetes. Los usuarios pueden generar cotizaciones detalladas, especificar dimensiones y servicios adicionales, y comparar opciones de transportistas. La aplicación optimiza costos, tiempos de entrega y ofrece la posibilidad de cotizar seguros, todo mientras facilita la realización de pagos directamente dentro de la plataforma. Este enfoque holístico mejora la eficiencia en la gestión de envíos para los clientes de GLT.",
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
    title: "ZABAL STORE",
    image: ZabalImage,
    description:
      "Zabal Store es la solución completa para una administración eficiente de bodegas. Este software proporciona un dashboard centralizado que ofrece información vital sobre registros, categorías, productos, clientes y almacenes. Los usuarios disfrutan de un control total sobre sus datos, respaldado por roles y permisos personalizados que se adaptan a sus responsabilidades en la bodega. Desde cotizaciones y facturas hasta el seguimiento de gastos y la gestión de préstamos a trabajadores, Zabal Store abarca todos los aspectos clave de la gestión de bodegas. Este sistema facilita una toma de decisiones ágil y mejora la eficiencia operativa, consolidando todas las funciones esenciales en una plataforma intuitiva y potente. ",
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
    title: "RAIZCO CORE",
    image: RaizcoImage,
    description:
      "RaizcoCORE, solución especializada para raizco inmobiliaria, resuelve el desafío de gestionar propiedades de manera eficiente. Conectando directamente con la plataforma de marketing Wasi, RaizcoCORE simplifica la gestión y control de inmuebles, automatizando la publicación en diversos portales y alimentando la página web de la inmobiliaria. Esta herramienta única elimina la necesidad de un proceso manual dual, proporcionando una solución integral y ágil para la administración inmobiliaria.",
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
