<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const mainComponent = ref("ContactEmail");
    const scrollToTop = (container, position) => {
      container.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };
    const scrollContainer = (data) => {
      const mainContainer = document.getElementById("main-container");
      if (data === "ContactMedias") {
        scrollToTop(mainContainer, 200);
      } else {
        scrollToTop(mainContainer, 0);
      }
    };
    const timerFunction = () => {
      setTimeout(() => {
        mainComponent.value === "ContactEmail"
          ? (mainComponent.value = "ContactMedias")
          : (mainComponent.value = "ContactEmail");
        scrollContainer(mainComponent.value);
        timerFunction();
      }, 10000);
    };
    onMounted(() => {
      timerFunction();
    });
  },
};
</script>

<template>
  <div class="contact-container">
    <main class="main-contact-content" id="main-container">
      <div class="main-contact-content__item">
        <ContactEmail />
      </div>
      <div class="main-contact-content__item">
        <ContactMedias />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  padding: 30px;
}
.main-contact-content {
  height: 190px;
  overflow: hidden;
  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2) {
      justify-content: center;
    }
  }
}
</style>
