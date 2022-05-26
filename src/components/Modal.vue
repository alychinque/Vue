<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{  dark: theme === 'dark' }"> <!-- :class="{  sale: theme === 'sale' }" -->
      <h1>{{header}}</h1>
      <p>{{text}}</p>
      <h1 v-if=ar[2]>{{ar[0]}} joga com a {{ar[1]}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ar', 'header', 'text', 'theme'],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .modal{
    width: 200px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px; 
  }
  .backdrop{
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1{
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
  .modal.dark{
    background: rgb(55, 51, 51);
    color: rgb(25, 218, 0);
  }
  .modal.modal.dark h1{
    color: rgb(25, 218, 0);
  }
</style>