<template>
  <div >
    <CardUsuarioVue
                    :nombre=this.name
                    :correo=this.email
                    :Telefono=this.phone
                    :Sitio=this.website></CardUsuarioVue>

    <ul class="col-sm-12">
      <li v-for="post in posteos" :key="post.id" >
        <strong>Título:</strong> {{ post.title }} <br />
        <strong>Cuerpo:</strong> {{ post.body }} <br />
        <hr />
      </li>
    </ul>
    <hr/>
 </div>
</template>

<script>
import CardUsuarioVue from '@/components/CardUsuario'
export default {
  props: ['id', 'name', 'email', 'phone'],
  name: 'Usuario',
  components: { CardUsuarioVue },
  data () {
    return {
      posteos: null
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/users/${this.id}/posts`)
        .then((response) => {
          this.posteos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
