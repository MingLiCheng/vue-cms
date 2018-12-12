<template>
  <div class="homecontainer">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻列表</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'HomeContainer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lunbotulist:[],
    }
  },
  created(){
    this.getLunbotu()
  },
  methods:{
    getLunbotu(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
        console.log(result.body)
        if(result.body.status === 0){
          // 成功 success
          this.lunbotulist = result.body.message
          // Toast('轮播图信息获取成功');
        }else{
          // 失败 fail
          Toast('轮播图信息获取失败')
        }
      })
    }


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.homecontainer{
  /* padding: 20px; */
  /* height: 600px; */
  background-color: coral;
}
.mint-swipe{
  height: 200px;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.mint-swipe-item:nth-child(1){
  background-color: red;
}
.mint-swipe-item:nth-child(2){
  background-color: yellow;
}

.mint-swipe-item:nth-child(3){
  background-color: pink;
}
.mui-grid-view.mui-grid-9{
  background-color: #ffffff;
}
.mui-table-view{
  img{
    width: 60px;
    height: 60px;
  }
}


</style>
