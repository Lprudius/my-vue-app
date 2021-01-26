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
        <textarea v-model="card.text" class="form-control"></textarea>
      </div>
      <button :disabled="!card.title || !card.text" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.card)
    }
  }
}
</script>