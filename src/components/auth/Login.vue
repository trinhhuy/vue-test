<template>
  <div>
    <div class="row">
      <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <form @submit.prevent="login" role="login">
              <div class="form-group">
                <input type="text" name="username" placeholder="username" required class="form-control"
                       v-model="form.username"/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" v-model="form.password"
                       placeholder="Password" required=""/>
              </div>
              <p class="error" v-if="error">Username or Password invalid</p>
              <button type="submit" class="btn btn-lg btn-primary">Log in</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: 'admin',
          password: 'admin'
        },
        error: false
      }
    },
    methods: {
      login() {
        if (this.form.username !== 'admin' || this.form.password !== 'admin') {
          this.error = true
          return
        }
        this.$store.commit('setUser', true)
        this.$router.replace({name: 'post_list'})
      }
    }
  }
</script>


<style scoped>
  .error {
    color: red
  }
</style>
