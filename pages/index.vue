<script setup></script>

<template>
  <div class="home-container">
    <div class="header-container">
      <Header />
      <div class="language-selector">
        <LanguageSelector />
      </div>
    </div>
    <main class="home-container__content">
      <ArticleContainer>
        <template #article-container-content>
          <HomeInformation />
        </template>
      </ArticleContainer>
      <ArticleContainer>
        <template #article-container-content>
          <ProjectsInformation />
        </template>
      </ArticleContainer>
      <ArticleContainer>
        <template #article-container-content>
          <Experience />
        </template>
      </ArticleContainer>
    </main>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_main.scss";

.home-container {
  position: relative;
  background-color: $primary-color;
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
}
</style>
