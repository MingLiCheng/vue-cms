import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'



Vue.use(Router)

export default new Router({

  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的样式 router-link-active
})
