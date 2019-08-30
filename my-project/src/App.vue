<template>
  <div id="app">
    <Logo></Logo>
    <router-view/>
  </div>
</template>

<script>
  import Logo from '@/views/logo/logo.vue'
  export default {
      components:{
          Logo
      }
  }
</script>

<style lang="less">

</style>
