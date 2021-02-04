<template>
  <div>
    <h1>{{ card.title }}</h1>
    <p>{{ card.descr }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: {
        title: '',
        descr: ''
      }
    }
  },
  created() {
    // let id = this.$route.params.id
    // this.card = this.$store.getters.getCard(i)
  }
}

</script>
