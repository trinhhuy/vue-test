<template>
  <div>
    <div class="row">
      <div class="container">

        <form @submit.prevent="createPost">
          <div class="form-group">
            <input type="text" class="form-control" v-model="input.title" placeholder="Title">
            <p class="error" v-if="error.title">{{ error.title }}</p>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="input.content" placeholder="Content">
            <p class="error" v-if="error.content">{{ error.title }}</p>
          </div>
          <button type="submit" class="btn btn-default">Create</button>
          <button class="btn btn-primary" @click.prevent="getList">List</button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
  import data from '../../util/data'
  export default {
    name: 'Create',
    data () {
      return {
        input: {
          'title': '',
          'content': ''
        },
        error: {
          'title': '',
          'content': ''
        }
      }
    },
    methods : {
      getList() {
        this.$router.replace({ name: 'post_list' })
      },
      createPost() {
        if(!this.input.title) {
          this.error.title  = 'Title is required'
          return
        }
        if(!this.input.content) {
          this.error.content  = 'Content is required'
          return
        }
        data.createPost(this.input)
        this.getList()
       }
    }
  }
</script>

<style scoped>
</style>
