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
      <ArticleContainer
        :title="{
          title: $t('projects.title'),
          subtitle: $t('projects.subtitle'),
        }"
      >
        <template #article-container-content>
          <ProjectsInformation />
        </template>
      </ArticleContainer>
      <ArticleContainer
        :title="{
          title: $t('experience.title'),
          subtitle: $t('experience.subtitle'),
        }"
        style="height: 100%"
      >
        <template #article-container-content>
          <Experience />
        </template>
      </ArticleContainer>
      <ArticleContainer
        :title="{
          title: $t('contact.title'),
          subtitle: $t('contact.subtitle'),
        }"
      >
        <template #article-container-content>
          <ContactContainer />
        </template>
      </ArticleContainer>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
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
  z-index: 105;
  @media (max-width: 750px) {
    display: none;
  }
}
</style>
