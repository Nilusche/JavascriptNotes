<template>
<div>
    <form action="" @submit.prevent="handleSubmit">
        <label>E-Mail</label>
        <input type="email" required v-model="email">
        <label>Password</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{passwordError}}</div>
        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>
        <label>Skills</label>
        <input type="text" v-model="tmpSkill" @keyup.ctrl ="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill"><span @click="deleteSkill(skill)">{{skill}}</span></div>
        <div class="terms">
            <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
        <div class="submit">
            <button>Create an Account</button>
        </div>
    </div>
    </form>
    
</div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'', 
            terms:false,
            tmpSkill:'',
            skills:[],
            passwordError:''
        }
    },
    methods:{
        addSkill(e){
            if(e.key ==="," && this.tmpSkill){
                if(!this.skills.includes(this.tmpSkill)){
                    this.skills.push(this.tmpSkill);
                }
                this.tmpSkill = ''
            }
        },
        deleteSkill(skill){
            this.skills  = this.skills.filter((item)=>{
                return skill!==item;
            })
        },
        handleSubmit(){
           //validate password
            this.passwordError = this.password.length>5 ? '':'Password must be at least 6 chars long'
            if(!this.passwordError){
                console.log('Email: ', this.email);
                console.log('Password: ', this.password);
                console.log('Role: ', this.role);
                console.log('Skills: ', this.skills);
                console.log('Terms: ', this.terms);

            }
        }
    }
}
</script>

<style>
form{
    max-width: 420px;
    margin:30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color:#aaa;
    display: inline-block;
    margin:25px 0 15px;
    font-size:0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display:block;
    padding:10px 6px;
    width:100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color:#555;
}
input[type="checkbox"]{
    display: inline-block;
    width:16px;
    margin:0 10px 0 0;
    position: relative;
    top:2px;
}
.pill{
    display: inline-block;
    margin:20px 10px 0 0;
    padding:6px 12px;
    background:#eee;
    border-radius: 20px;
    font-size:12px;
    letter-spacing: 1px;
    font-weight: bold;
    color:#777;
    cursor:pointer;
}
button{
    background:#0b6dff;
    border:0;
    padding:10px 20px;
    margin-top:20px;
    color:white;
    border-radius: 20px;
    cursor: pointer;
}
.submit{
    text-align: center;
}
.error{
    color:#ff0062;
    margin-top:10px;
    font-size: 0.8em;
    font-weight:bold
}
</style>