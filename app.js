//create an instance of Vue
const app = Vue.createApp({
  // data, functions
  // template: '<h2> I am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y:0
    }
  },
  methods: {
    handleEvent(e, num){
      console.log(num, e.type)
    },
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    handleMouseMove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')