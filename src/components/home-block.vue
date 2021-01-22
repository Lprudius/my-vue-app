<template>
  <ul class="row list-unstyled pt-4 text-center">
    <li class="col" v-for="card in cards" :key="card.title">
      <div class="card">
        <h2>{{ card.title }}</h2>
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <router-link type="button" :to="card.url" class="btn btn-dark mb-1 w-100">View</router-link>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-dark w-100">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          title: 'Title task',
          url: '/new-task'
        },
        {
          title: 'Title task two',
          url: '/new-task'
        },
        {
          title: 'Title task three',
          url: '/new-task'
        }
      ]
    }
  }
}
</script>