<template>
  <div>
    <div class="row">
      <div class="container">

        <form @submit.prevent="editPost">
          <div class="form-group">
            <input type="text" class="form-control" v-model="post.title" placeholder="Title">
            <p class="error" v-if="error.title">{{ error.title }}</p>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="post.content" placeholder="Content">
            <p class="error" v-if="error.content">{{ error.title }}</p>
          </div>
          <p class="error" v-if="error.message">{{ error.message }}</p>
          <button type="submit" class="btn btn-default">Edit</button>
          <button class="btn btn-primary" @click.prevent="getList">List</button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
  import data from '../../util/data'
  export default {
    name: 'Edit',
    mounted() {
      this.index = this.$route.params.index
      this.post = data.detailPost(this.index)
    },
    data () {
      return {
        post: {},
        index: '',
        error: {
          'title': '',
          'content': '',
          'message': ''
        }
      }
    },
    methods : {
      getList() {
        this.$router.replace({ name: 'post_list' })
      },
      editPost() {
        if(!this.post.title) {
          this.error.title  = 'Title is required'
          return
        }
        if(!this.post.content) {
          this.error.content  = 'Content is required'
          return
        }
        let edit = data.editPost(this.post, this.index)
        if(edit) {
          this.error.message = 'Successfull'
          this.getList()
        } else {
          this.error.message = 'Wrong'
        }
      }
    }
  }
</script>

<style scoped>
</style>
