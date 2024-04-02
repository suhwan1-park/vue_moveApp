<template>
  <Headers />
  <RouterView />
</template>

<script>
import Headers from '~/components/Header';
export default {
  components: {
    Headers
  }
}
</script>
<style lang="scss">
@import "../src/scss/main.scss";


</style>