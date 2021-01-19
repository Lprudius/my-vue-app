<template>
  <div id="app">
    <pageHeader />
    <main class="main">
      <div class="container">
        <homeBlock />
      </div>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
import pageHeader from '@/components/page-header.vue'
import homeBlock from '@/components/home-block.vue'

export default {
  components: {
    pageHeader,
    homeBlock
  }
}
</script>
