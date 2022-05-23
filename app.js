//create an instance of Vue
const app = Vue.createApp({
  // data, functions
  // template: '<h2> I am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle(titleParam){
      // this.title = 'Words of Radiance'
      this.title = titleParam
    },
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')