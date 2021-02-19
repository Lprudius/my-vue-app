<template>
  <div v-if="card" class="text-center p-4">
    <h1>{{ card.title }}</h1>
    <p>{{ card.descr }}</p>
  </div>
  <div v-else class="p-4 text-center">No such card</div>
</template>

<script>

export default {
  data() {
    return {
      card: null
    }
  },
  created() {
    const id = this.$route.params.id;
    this.card = this.$store.getters.getCard(id);
  }
}
</script>
