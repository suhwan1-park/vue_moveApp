<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"        
        class="nav-item">
        <!-- a tag와 동일한 기능을 제공하는 RouterLink -->
        <!-- nav.href 는 data라서 v-bind:의 디렉티브 붙여주어야 함(v-bind는 생략 가능)-->
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie'
                },
                {
                    name: 'About',
                    href: '/about'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
        margin-right: 40px;
    }
}
</style>