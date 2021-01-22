<template>
  <header class="header">
    <nav class="navbar  navbar-expand-lg  navbar-light navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">VueApp</a>
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in links" :key="link.title">
            <router-link :title="link.title" :to="link.url" class="nav-link">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Create new task',
          url: '/create-new-task'
        }
      ]
    }
  }
}
</script>