<script setup>
import { ref, onMounted } from "vue";

const mainComponent = ref("home");
const containerComponent = ref("");
const components = ref({});

const handleMainComponent = ({ experience, projects }) => {
  if (experience >= -360 && experience <= 220) {
    mainComponent.value = "experience";
  } else if (projects <= 340) {
    mainComponent.value = "projects";
  } else {
    mainComponent.value = "home";
  }
};

const scrollToSelectedSection = (component, additionalScroll = -100) => {
  const componentToScroll = components.value[component];
  const newPosition = componentToScroll.getBoundingClientRect().top + additionalScroll;
  containerComponent.value.scrollBy({
    top: newPosition,
    behavior: "smooth"
  });
};

onMounted(() => {
  containerComponent.value = document.getElementById("main-content");
  components.value = {
    home: document.getElementById("home-information"),
    experience: document.getElementById("experience-information"),
    projects: document.getElementById("projects-information"),
  };
  const handleScroll = () => {
    const positions = Object.keys(components.value).reduce((acc, key) => {
      const component = components.value[key];
      acc[key] = component.getBoundingClientRect().top;
      return acc;
    }, {});
    handleMainComponent(positions);
  };
  containerComponent.value.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="home-container absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    id="main-content"
  >
    <div class="header-container">
      <Header
        :mainComponent="mainComponent"
        @scrollToSelectedSection="scrollToSelectedSection"
      />
      <div class="language-selector">
        <LanguageSelector />
      </div>
    </div>
    <main class="home-container__content" id="content">
      <ArticleContainer id="home-information">
        <template #article-container-content>
          <HomeInformation id="home" />
        </template>
      </ArticleContainer>
      <ArticleContainer id="experience-information">
        <template #article-container-content>
          <Experience id="experience"/>
        </template>
      </ArticleContainer>
      <ArticleContainer id="projects-information">
        <template #article-container-content>
          <ProjectsInformation id="projects"/>
        </template>
      </ArticleContainer>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_main.scss";

.home-container {
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.header-container {
  position: sticky;
  top: 0;
  z-index: 99;
}

.language-selector {
  position: absolute;
  right: 2%;
  top: 9px;
  z-index: 105;
}
</style>
