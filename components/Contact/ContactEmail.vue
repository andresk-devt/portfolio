<template>
  <div class="contact-email">
    <div class="contact-email-content">
      <div class="input-container">
        <input
          type="text"
          :placeholder="$t('contact.contactEmail.subject')"
          class="input-container__input"
        />
      </div>
      <div class="input-container">
        <input
          type="text"
          :placeholder="$t('contact.contactEmail.message')"
          class="input-container__input"
        />
      </div>
      <button class="button-container">Enviar correo
        <Icon name="ion:md-arrow-dropright" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-email-content {
  height: 200px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  font-family: $font-portfolio;
}
.input-container {
  margin-bottom: 20px;
  width: 400px;
  &__input {
    padding: 12px;
    width: 100%;
    background-color: $tertiary-color;
    outline: none !important;
    border: none;
  }
}
.button-container {
  height: 40px;
  width: 150px;
  background-color: $secondary-color;
  border: none;
  color: $text-color;
  font-family: $font-portfolio;
  cursor: pointer;
  svg {
    font-size: 22px;
  }
}
</style>
