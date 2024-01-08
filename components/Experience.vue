<template>
  <div class="experience-container">
    <div class="experience-container__content">
      <ol class="items-center sm:flex">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <div
              class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            ></div>
          </div>
          <div class="experience-item mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t("experience.zabal.title") }}
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
              {{ $t("experience.zabal.subtitle") }}
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {{ $t("experience.zabal.text") }}
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <div
              class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            ></div>
          </div>
          <div class="experience-item mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t("experience.guane.title") }}
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
              {{ $t("experience.guane.subtitle") }}
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {{ $t("experience.guane.text") }}
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <div
              class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
            ></div>
          </div>
          <div class="experience-item mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t("experience.envba.title") }}
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
              {{ $t("experience.envba.subtitle") }}
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              {{ $t("experience.envba.text") }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  &__content {
    width: 100%;
    padding: 20px;
    font-family: $font-portfolio;
  }
}
.experience-item {
  padding: 20px;
  font-size: 16px;
  height: 188px;
  h3 {
    color: $secondary-color;
    margin-bottom: 5px;
    font-size: 17px;
  }
}
ol {
  li {
    width: 100%;
  }
}
</style>
