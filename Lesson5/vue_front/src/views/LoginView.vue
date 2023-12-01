<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Log In</span>
      <br>
      <div class="input-field">
        <input 
          id="login" 
          type="text" 
          v-model.trim="login"
          :class="{invalid: !v$.login.$errors.length == false}"
          >
        <label for="login">
          Login 
          <span class="required">*</span>
        </label>
        <small 
          class="helper-text invalid" v-for="(error, index) of v$.login.$errors" :key="index"
        >
          {{ capitalizeFirstLetter(error.$property) }} {{error.$message}}
        </small>
      </div>
      <div class="input-field">      
        <input 
          id="password" 
          type="password" 
          v-model.trim="password"
          :class="{invalid: !v$.password.$errors.length == false}"
          >
        <label for="password">
          Password 
          <span class="required">*</span>
        </label>
        <small 
          class="helper-text invalid" v-for="(error, index) of v$.password.$errors" :key="index"
        >
          {{ capitalizeFirstLetter(error.$property) }} {{error.$message}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect grey auth-submit"
            type="submit"
        >
          <i class="material-icons right">send</i>
          Войти
        </button>
        <!-- <div class="preloader-wrapper small " :class="{active: loading}">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </form>
</template>


<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'login-view',
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      login: '',
      password: '',
      loading: false,
    }
  },
  validations () {
    return {
      login: {required},
      password: {required, minLength: minLength(8)},
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.v$.$touch();
      if (this.v$.$error) {
        this.loading = false;
        return;
      }
      
      const user = {
        login: this.login,
        password: this.password,
      }

      this.$store.dispatch("auth/login", user)
      .then((response) => 
        {
          if(response.access_token){
            this.$router.push("/profile");
          }
        },
        (error) => {
          this.loading = false;
          window.M.toast({html: error.toString()})
        }
      );
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  }
}
</script>
