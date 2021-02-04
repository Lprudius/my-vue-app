<template>
  <div>
    <ul class="row list-unstyled pt-4 text-center">
      <li class="col"
          v-for="(card, index) in cards"
          :key="card.title"
          :index="index"
      >
        <div class="card mb-3">
          <h2>{{ card.title }}</h2>
          <p>{{ card.descr }}</p>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <router-link type="button" :to="/view-task/ + card.id" class="btn btn-dark mb-1 w-100">View</router-link>
              </div>
              <div class="col-6">
                <button type="button" @click="removeCard(card)" class="btn btn-dark w-100">Delete</button>
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

    data() {
      return {
        card: {
          title: null,
          descr: null,
          id: null
        }
      }
    }
  }
</script>
