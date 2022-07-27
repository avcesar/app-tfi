<template>
  <div>
      <strong class="bi bi-emoji-smile"></strong> {{ nombre}}
      <strong class="bi bi-envelope"></strong> {{ correo}}
      <strong class="bi bi-telephone"></strong> {{ Telefono}}
      <hr/>
     </div>
</template>

<script>
export default {
  name: 'CardUsuario',
  props: {
    id: String,
    nombre: String,
    correo: String,
    Telefono: String
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
