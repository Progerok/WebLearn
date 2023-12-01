<template>
  <div>
    <div class="page-title">
      <h3>Вузы</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Наименование</label>
        <span
              class="helper-text invalid">name</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Город</label>
        <span
              class="helper-text invalid">city</span>
      </div>

      <button class="btn waves-effect grey lighten-1" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>



<script>
export default {
  nmae: "university-view",
}
</script>