<template>
  <div id="app">
    <pageHeader />
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import pageHeader from '@/components/page-header.vue'


export default {
  components: {
    pageHeader
  }
}
</script>
