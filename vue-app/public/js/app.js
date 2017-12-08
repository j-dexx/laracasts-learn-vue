new Vue({
  el: '#app',

  data: {
    skills: []
  },

  mounted() {
    // Make ajax request /skills
    axios.get('/skills').then(response => this.skills = response.data);
  }
});
