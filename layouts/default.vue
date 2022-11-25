<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: $font-sans;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $green-500;
  color: $green-500;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: $white;
  background-color: $green-500;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $gray-500;
  color: $gray-500;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: $white;
  background-color: $gray-500;
}
</style>
