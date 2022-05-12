<template>
    <div class="project" :class="{complete: project.complete}">
        <div class="actions">
            <h3  @click="details = !details">{{project.title}}</h3>
            <div class="icons">
                <router-link :to="{name: 'EditProject', params: {id: project.id}}">
                    <span class="material-symbols-outlined">edit</span>
                </router-link>
                <span class="material-symbols-outlined" @click="deleteProject">delete</span>
                <span class="material-symbols-outlined tick" @click="completeProject">done</span>
            </div>
        </div>
        <div v-if="details" class="details">
            <p>{{project.details}}</p>
        
        </div>
    </div>
</template>

<script>
export default {
    props:["project"],
    data(){
        return{
            details: false,
            uri: "http://localhost:3000/projects/" + this.project.id
        }
    },
    methods:{
        deleteProject(){
            fetch(this.uri, {method:'DELETE'})
            .then(()=> this.$emit('delete', this.project.id))
            .catch((e)=>console.log(e))
        },
        completeProject(){
            fetch(this.uri, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({complete: !this.project.complete})})
            .then(()=>{
                this.$emit("complete", this.project.id)
            })
        }

    }
}
</script>

<style>
.project{
    margin:20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 3px rgba(0,0,0,0,0.05);
    border-left: 4px solid #e90074;
}
h3{
    cursor:pointer;
}
.actions{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size:24px;
    margin-left:10px;
    color:#bbb;
    cursor:pointer;
}
.material-symbols-outlined:hover{
    color:#777;
}
.complete{
    border-left: 4px solid #00ce89;
}
.complete .tick{
    color : #00ce89;
}
</style>