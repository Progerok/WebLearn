<template>
  <div>
    <div class="page-title">
      <h3 @click.prevent="students">Студенты</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Имя</label>
        <span
              class="helper-text invalid">name</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Фамилия</label>
        <span
              class="helper-text invalid">surname</span>
      </div>

      <button class="btn waves-effect grey lighten-1" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>



<script>
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export default {
  name: 'students-view',
  methods: {
    students() {
    return axios
      .get(API_URL + 'students')
      .then(response => {
        console.log(response.data)
        return 
      });
  }
  }
}
</script>
