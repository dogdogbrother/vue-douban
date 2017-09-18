import Vue from 'vue'
import Router from 'vue-router'
import Douban from '@/components/douban-index/douban-index'
import Movie from '@/components/movie/movie'
import Book from '@/components/book/book'
import Broadcast from '@/components/broadcast/broadcast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Douban',
      component: Douban
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    }
  ]
})
