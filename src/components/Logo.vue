<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<!-- css에서는 작은따옴표보다 큰따옴표를 권장함 -->
<style lang="scss" scoped>
@import "~/scss/main";

.logo {    
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
        color: $black;
    }
    span {
        color: $primary;
    }
}
</style>