<template>
  <div>
      <strong>  ID:</strong> {{ id}}
      <strong>  Nombre:</strong> {{ nombre}}
      <strong>  Correo:</strong> {{ correo}}
      <strong>  Teléfono:</strong> {{ Telefono}} <br />
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
