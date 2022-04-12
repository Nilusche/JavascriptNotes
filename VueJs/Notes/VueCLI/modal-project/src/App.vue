<template>
<div>
   <h1>{{title}}</h1> 
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Giveaway</h1>
        <p>Grab it while you can</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
</div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{Modal},
  data(){
    return{
      title:'First APP',
      header:"Sign up for Giveaway",
      text: "Limited offer",
      showModal:false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal;
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
</style>
