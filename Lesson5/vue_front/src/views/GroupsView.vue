<template>
  <div>
    <div class="page-title">
      <h3>Группы</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Название</label>
        <span class="helper-text invalid">title</span>
      </div>

      <button 
        class="btn waves-effect grey lighten-1" 
        type="submit"
      >
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>

    <div class="fixed-action-btn">
        <a 
          class="btn-floating btn-large grey lighten-1" 
          href="#"
        >
          <i class="large material-icons">add</i>
        </a>
      </div>

  </div>
</template>



<script>
export default {
  name: 'groups-view',
}
</script>