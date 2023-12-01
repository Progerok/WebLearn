<template>
        <div class="container">
      <h1>Not found <span>:(</span></h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>It looks like this was the result of either:</p>
      <ul>
        <li>a mistyped address</li>
        <li>an out-of-date link</li>
        <li>
          <a href="#" class="black-text" @click.prevent="logout">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
        </li>
      </ul>
            
    </div>
</template>



<script>
export default {
  methods: {
    name: 'not-found-view',
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>


