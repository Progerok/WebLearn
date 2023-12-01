<template>
    <div class="app-main-layout">
      
      <TheNavbar @clickMenu="isOpen = !isOpen" />
  
      <TheSidebar v-model="isOpen" />
      
      <main 
        class="app-content" 
        :class="{full: !isOpen}"
      >
        <div class="app-page">
          <router-view />
        </div>
      </main>
  
    </div>
</template>

<script>
import TheNavbar from '@/components/app/TheNavbar.vue';
import TheSidebar from '@/components/app/TheSidebar.vue';

export default {
  name: 'main-layout',
  data() {
    return {
      isOpen: true
    }
  },
  components: {
    TheNavbar, TheSidebar
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
}
</script>
