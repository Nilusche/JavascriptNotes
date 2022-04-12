<template>
  <div class="block">
      click me
  </div>
</template>

<script>

export default {
    props:['delay'],
    data(){
        return{
            showBlock : false
        }
    },
    mounted(){
        console.log("mounted components")
    },
    updated(){
        console.log("component updated")
    }
}
</script>

<style>
    .block{
        width:400px;
        border-radius:20px;
        background:#0faf87;
        color:white;
        text-align:center;
        padding: 100px 0;
        margin:40px auto;
    }
</style>