<template>
  <nav class="navbar grey lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a 
          href="#!" 
          class="brand-logo black-text" 
          @click.prevent="$emit('clickMenu')"
        >
          <i class="material-icons">menu</i>
          AdminWeb
          </a>     
      </div>

      <div>
        <span class="black-text">{{date}}</span>
      </div>

      <div>
        <ul class="hide-on-med-and-down right">
          <li>
            <a
                class="dropdown-trigger black-text "
                href="#"
                data-target="dropdown"
                ref="dropdown"
            >
              {{thisUser ? thisUser.login : "USER" }}
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul 
              id='dropdown' 
              class='dropdown-content'
            >
              <li>
                <router-link 
                  :to="'/profile'" 
                  class="black-text"
                >
                  <i class="material-icons">account_circle</i>Профиль
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a 
                  href="#" 
                  class="black-text" 
                  @click.prevent="logout"
                >
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
</template>


<script>
export default {
  name: 'navbar-component',
  data () {
    return {
      date: null,
      interval: null,
      dropdown: null,
      thisUser: null,
    }
  },
  methods: {
    getUser(){
      this.thisUser = JSON.parse(localStorage.getItem('user'));
    },

    logout() {
      console.log("Logout")
      this.$store.dispatch('auth/logout');
      this.$router.push('/login')
    },

    dateFormat() {
      const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
      return Intl.DateTimeFormat('ru-Ru', options).format(new Date())
    }
  },
  mounted() {
    this.getUser(); 

    this.interval = setInterval(() => {
      this.date = this.dateFormat()
    }, 1000);

    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: true
    });

  },
  beforeUnmount() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy){
      this.dropdown.destroy()
    }
  }
}
</script>
