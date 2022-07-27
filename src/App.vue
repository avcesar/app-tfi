<template>
  <div id="nav">
    <Encabezado />
    <router-view />
  </div>
</template>

<script>
import Encabezado from './components/Encabezado.vue'

export default {
  components: {
    Encabezado
  }
}
</script>
