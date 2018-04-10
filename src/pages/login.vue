<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-offset-5 col-md-3">
          <div class="form-login">
            <h4>Welcome back.</h4>
            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
          </br>
          <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
        </br>
        <div class="wrapper">
          <span class="group-btn">     
            <a href="#" class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>
          </span>
        </div>
      </div>
      
    </div>
  </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
