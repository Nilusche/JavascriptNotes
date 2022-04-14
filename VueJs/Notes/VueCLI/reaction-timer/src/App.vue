<template>
<div>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="showResults" :score="score"/>
</div> 
</template>

<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';


export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data(){
    return {
      isPlaying: false,
      delay:null,
      score:null,
      showResults:false
    }
  },
  methods:{
    start(){
      this.delay=2000 + Math.random()*5000
      this.isPlaying = true;
      this.showResults = false;
    }, 
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false;
      this.showResults = true;
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
    color:#444; 
    margin-top: 60px;
  }
  button{
    border-radius:20px;
    background:#0faf87;
    color:white;
    text-align:center;
    padding:1%;
    cursor: pointer;
    border:1px solid #0a664f;
  }
  button:hover{
    background:#0a664f;
  }
</style>
