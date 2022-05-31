<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal :theme=theme @close='toggleModal'>
      <template v-slot:links>
        <a href="#">sign up now </a>
        <a href="#">more info</a>
      </template>
      <h1>Vue Course</h1>
      <p>Learning Vue3</p> 
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal @close='toggleModalTwo'>
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">sign in</a>
      </template>
      <h1>Challenge Modal 2</h1>
      <p>Learning Vue3</p> 
    </Modal>
  </div>
  <br>
  <button @click.alt='toggleModal'>Open Modal (Alt)</button>
  <br>
  <button @click.shift='toggleModalTwo'>Open Modal Two (Shift)</button>
<!-- @click.alt @click.shift @click.right these events just work with these button pressed-->

</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue App',
      ar: ['alysson', 10, true],
      header: 'Sign up for the giveaway',
      text: 'Grab your ninja swag for half price',
      theme: 'dark', //'sale',
      showModal: false,
      showModalTwo: false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = ! this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = ! this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
