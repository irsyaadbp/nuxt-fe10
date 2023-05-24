<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  height: 100vh;
}
.blur {
  overflow: hidden;
  margin: 0;
  text-align: left;
}
.blur::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;

  filter: blur(10px);
  -moz-filter: blur(10px);
  -webkit-filter: blur(10px);
  -o-filter: blur(10px);

  transition: all 2s linear;
  -moz-transition: all 2s linear;
  -webkit-transition: all 2s linear;
  -o-transition: all 2s linear;
}
</style>
