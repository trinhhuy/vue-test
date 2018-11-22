export default {
  setPosts(data) {
    localStorage.posts = JSON.stringify(data);
  },
  detailPost(index) {
    let data = JSON.parse(localStorage.posts || null) || [];
    if(data[index]) {
      return data[index]
    }
    return null
  },
  createPost(post) {
    let data = JSON.parse(localStorage.posts || null) || [];
    data.push(post)
    localStorage.posts = JSON.stringify(data)
  },
  editPost(post, index) {
    let data = JSON.parse(localStorage.posts || null) || [];
    if (data[index]) {
      data[index] = post
      localStorage.posts = JSON.stringify(data)
      return true
    }
    return false
  }
}
