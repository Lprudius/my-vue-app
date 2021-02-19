<template>
  <div>
    <div class="col">
      <h1 class="text-center mt-4">Task list</h1>
    </div>
    <ul class="row list-unstyled pt-4 text-center">
      <li class="col-12 col-sm-6 col-lg-4"
          v-for="card in cards"
          :key="card.id"
      >
        <div class="card mb-3 p-2">
          <h2 class="mb-2">{{ card.title }}</h2>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <router-link type="button" :to="'/view-task/' + card.id" class="btn btn-success mb-1 w-100">View</router-link>
              </div>
              <div class="col-6">
                <button type="button" @click="removeCard(card.id)" class="btn btn-danger w-100">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {

      cards() {
        return this.$store.getters.cards;
      }
    },


    methods: {
      removeCard(id) {
        window.confirm("Do you really want to remove?") ? this.$store.dispatch('deleteCard',id) : '';
      }
    }
  }
</script>
