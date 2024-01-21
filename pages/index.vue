<script setup></script>

<template>
  <div
    class="home-container absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  >
    <div class="header-container">
      <Header />
      <div class="language-selector">
        <LanguageSelector />
      </div>
    </div>
    <main class="home-container__content" id="content">
      <ArticleContainer id="home-information">
        <template #article-container-content>
          <HomeInformation />
        </template>
      </ArticleContainer>
      <ArticleContainer id="experience">
        <template #article-container-content>
          <Experience />
        </template>
      </ArticleContainer>
      <ArticleContainer id="projects">
        <template #article-container-content>
          <ProjectsInformation />
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
