<template>
  <div>
    <h1>Create new task</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Title:</label>
        <input v-model="card.title" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="card.descr" class="form-control"></textarea>
      </div>
      <button :disabled="!card.title || !card.descr" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      card: {
        title: null,
        descr: null,
        id: null
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addCard', {title: this.card.title, descr: this.card.descr, id: ''});
      this.$router.push('/')
    }
  }
}
</script>

