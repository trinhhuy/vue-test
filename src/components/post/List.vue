<template>
  <div>
      <div class="row">
        <div class="container">
          <button class="btn btn-primary pull-right" @click.prevent="createPost">Create Post</button>

          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in listPosts">
                <td>{{ index }}</td>
                <td>{{ post.title }}</td>
                <td>
                  <button type="button" class="btn btn-primary" @click="editPost(index)">Edit</button>
                  <button type="button" class="btn btn-danger" @click="deletePost(index)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
  import data from '../../util/data'
  export default {
    name: 'List',
    mounted() {
      this.listPosts = JSON.parse(localStorage.posts || null) || []
    },
    data () {
      return {
        listPosts: []
      }
    },
    methods : {
      createPost() {
       this.$router.replace({name: 'post_create'})
      },
      editPost(index) {
        this.$router.replace({name: 'post_edit' , params: { index: index}})
      },
      deletePost(index) {
        this.listPosts.splice(index, 1)
        data.setPosts(this.listPosts)
      }
    }
  }
</script>

<style scoped>
</style>
