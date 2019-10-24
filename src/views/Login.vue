<template>
<div>
<div class="siimple-navbar siimple-navbar--blue siimple-navbar--fluid">
        <a class="siimple-navbar-title">Ephy Chat</a>
        <a class="siimple-navbar-subtitle text-small">Minimal ephemeral IM</a>

        <div class="siimple--float-right">

             <form @submit.prevent="login">
            <div class="siimple-navbar-item siimple-field-label siimple--display-inline-block">Username</div>
            <input id="login-name" 
                   type="email" 
                   name="username" v-model="username"
                   class="siimple-input siimple-input siimple--display-inline" 
                   placeholder="bob.kreller@email.com" 
                   autocomplete="off">

            <div class="siimple-navbar-item siimple-field-label siimple--display-inline-block">Password</div>
            <input id="login-pass" 
                   type="password"
                    name="password" v-model="password"
                   class="siimple-input siimple-input siimple--display-inline" 
                   placeholder="password">

            <div class="siimple-btn siimple-btn--primary">Sign In</div>
            <a class="siimple-navbar-item ephy-txt-sm">Forgot password ?</a>
             </form>

        </div>
    </div>
    <!-- sign up form for reegistration -->
    <div class="siimple-content siimple-content--extra-small ephy-pd-bottom-zero">
    <div class="siimple--px-5 siimple--py-4">

        <div class="siimple-h3 siimple--text-normal siimple--mb-1" align="center">Sign Up</div>
        <div class="siimple-paragraph siimple-paragraph--lead" align="center">
            Woo-hoo! Just 3-Steps away to blast 🎉
        </div>

        <div class="siimple-field">
            <div class="siimple-field-label">Username</div>
            <input type="text" 
                   class="siimple-input siimple-input--fluid" 
                   placeholder="bob.kayler" 
                   autocomplete="off">
        </div>

        <div class="siimple-field">
            <div class="siimple-field-label">E-mail</div>
            <input type="email" 
                   class="siimple-input siimple-input--fluid" 
                   placeholder="bob.kayler@email.com" 
                   autocomplete="off">
        </div>

        <div class="siimple-field">
            <div class="siimple-field-label">Password</div>
            <input type="password" 
                   class="siimple-input siimple-input--fluid" 
                   placeholder="password">
            <div class="siimple-field-helper">You password must contain at least 8 characters</div>
        </div>
        
        <div class="siimple-field">
            <div class="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold">
                Sign Up
            </div>
        </div>
        <div class="siimple-card siimple--mt-5" align="center">
            <div class="siimple-card-body">
                Need help ? <a class="siimple-link">Click here</a>.
            </div>
        </div>
    </div>

    <!-- footer -->
    <!-- <div class="siimple-rule"></div> -->
    <div class="siimple--my-3" align="center">
        <a class="siimple--display-inline siimple-link ephy-pd-sm-pt-8">About</a>
        <a class="siimple--display-inline siimple-link ephy-pd-sm-pt-8">GitHub</a>
        <a class="siimple--display-inline siimple-link ephy-pd-sm-pt-8">Donate</a>
        <div class="siimple-paragraph siimple-display-inline ephy-mg-10" align="center">Built with ❤️ and 🧠</div>
        <div class="siimple-footer-subtitle">© 2019 Ephy, Inc.</div>
    </div>
    </div>
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
      username: "",
      password:"",
      name:"",
      pass:"",
      email:"",
    }
  },
  methods: {
    login() {
      if ((this.username)&&(this.password)) {
        this.$router.push({name: 'LoginCheck', params: {username: this.username,password:this.password}})
      } else {
       
      }
    },
    signup(){
        if ((this.name)&&(this.pass)&&(this.email)) {
        this.$router.push({name: 'Register', params: {name: this.name,pass:this.pass,email:this.email}})
      } else {
       
      }
    }
  }
}
</script>

<style>
@import './assets/css/index.css';
@import 'https://cdn.jsdelivr.net/npm/siimple@3.3.1/dist/siimple.min.css'

</style>