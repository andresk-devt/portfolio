<template>
  <div class="contact-social-medias">
    <ul class="menu-social-media-list">
      <li class="menu-social-media-list__item">
        <Icon name="ion:logo-linkedin" />
      </li>
      <li class="menu-social-media-list__item">
        <Icon name="ion:logo-github" />
      </li>
      <li class="menu-social-media-list__item">
        <Icon name="ion:email" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu-social-media-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  &__item {
    margin: auto 20px;
    color: #ecf0f1;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: #282c3e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 20px;
    }
  }
}
</style>
