<template>
  <div >
    <h5> Usuarios:</h5>
    <div class="container" background = "green" v-for="usuario in usuarios" :key="usuario.id">
        <strong class="bi bi-emoji-smile"></strong> {{ usuario.name}} <router-link  bg-dark bg-gradient :to="{ name: 'PostsUsuario',params: { id: usuario.id, name: usuario.name,  email: usuario.email, phone: usuario.phone,  website:usuario.website}}">
        <strong class="bi bi-file-earmark-post"></strong></router-link > <br />
        <strong class="bi bi-envelope"></strong> {{ usuario.email}} <br />
        <strong class="bi bi-building"></strong> {{ usuario.address.city}} <br />
        <strong class="bi bi-telephone"></strong> {{ usuario.phone}} <br />
        <strong class="bi bi-link"></strong> {{ usuario.website}} <br />
        <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  components: { },
  data () {
    return {
      usuarios: []
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    async getPost () {
      try {
        const { data } = await this.$http.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        this.usuarios = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
