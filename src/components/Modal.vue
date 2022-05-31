<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{  dark: theme === 'dark' }"> <!-- :class="{  sale: theme === 'sale' }" -->
      <slot>Default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal{
    width: 400px;
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
  .modal p {
    font-style: normal;
  }
  .modal .actions{
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal .actions a {
    color: rgb(23, 35, 63);
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  .modal.dark{
    background: rgb(55, 51, 51);
    color: rgb(25, 218, 0);
  }
  .modal.dark h1{
    color: rgb(25, 218, 0);
  }
  .modal.dark .actions{
    color: white;
  }
  .modal.dark .actions a {
    color: white;
  }
</style>