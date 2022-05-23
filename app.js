//create an instance of Vue
const app = Vue.createApp({
  // data, functions
  // template: '<h2> I am the template</h2>'
  data() {
    return {
      url: 'httts:/www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ]
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    changeFav(book){
      book.isFav = !book.isFav
    }
  }
})

app.mount('#app')